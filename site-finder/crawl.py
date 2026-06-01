#!/usr/bin/env python3
"""
인벤 로스트아크 커뮤니티 크롤러 (DB 미접근 — 순수 크롤링)

새벽 실행 시 전날(어제) 게시물만 수집해 결과를 **stdout에 JSON으로 출력**한다.
Nest가 이 JSON을 받아 Prisma로 inven_posts에 저장한다.

출력 형식 (stdout):
  {"target_date": "2026-06-01", "posts": [ {board, post_id, url, title,
   author, date_str, posted_date, views, likes, content, comments}, ... ]}
  (로그는 stderr로 분리되어 stdout JSON과 섞이지 않음)

게시판:
  자유게시판        https://www.inven.co.kr/board/lostark/6271
  팁과노하우게시판  https://www.inven.co.kr/board/lostark/4821

date_str 형식:
  "HH:MM"  → 오늘 게시글
  "MM-DD"  → 해당 월일의 게시글
  "YYYY.MM.DD" → 오래된 게시글 (거의 없음)

페이지네이션 전략:
  target_date보다 오래된 글이 처음 나오는 순간 중단.
  페이지 수 제한 없음 (비상 안전장치 500페이지).

사용법:
  python crawl.py                    # 어제 게시물 → stdout JSON
  python crawl.py --date 2026-05-20  # 특정 날짜
  python crawl.py --save-file        # output/ 에도 저장 (디버그)
  python crawl.py --debug            # 파싱 실패 시 raw HTML 저장
"""

import asyncio
import json
import logging
import re
import sys
from datetime import date, timedelta
from pathlib import Path

from bs4 import BeautifulSoup
from curl_cffi.requests import AsyncSession

# ── 인수 파싱 ─────────────────────────────────────────────────────────────────

def _arg(flag: str) -> str | None:
    """sys.argv에서 '--flag value' 형태로 값을 꺼낸다. 없으면 None."""
    for i, a in enumerate(sys.argv[1:], 1):
        if a == flag and i < len(sys.argv):
            return sys.argv[i + 1]
    return None

TARGET_DATE: date = (
    date.fromisoformat(_arg("--date"))
    if _arg("--date")
    else date.today() - timedelta(days=1)
)
MAX_PAGES: int = 500  # 비상 안전장치 (실제로는 날짜 조건으로 먼저 중단)
DEBUG: bool = "--debug" in sys.argv
RUN_DATE: date = date.today()  # 스크립트 실행일 (date_str 파싱 기준)

# ── 설정 ─────────────────────────────────────────────────────────────────────

BOARDS = {
    "free": {"id": 6271, "name": "자유게시판"},
    "tip":  {"id": 4821, "name": "팁과노하우"},
}
BASE = "https://www.inven.co.kr/board/lostark"

OUTPUT_DIR = Path(__file__).parent / "output"
if "--save-file" in sys.argv or DEBUG:
    OUTPUT_DIR.mkdir(exist_ok=True)

UA = (
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
    "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36"
)
HEADERS = {
    "User-Agent": UA,
    "Accept-Language": "ko-KR,ko;q=0.9,en;q=0.8",
    "Referer": "https://www.inven.co.kr/",
}

# ── 로거 ─────────────────────────────────────────────────────────────────────

# 로그는 stderr로(진행 상황), 크롤 결과 JSON은 stdout으로 분리 출력 → Nest가 stdout만 파싱
logging.basicConfig(
    level=logging.DEBUG if DEBUG else logging.INFO,
    format="%(asctime)s [%(levelname)-5s] %(message)s",
    handlers=[logging.StreamHandler(sys.stderr)],
)
log = logging.getLogger("inven")

# ── 날짜 파싱 ─────────────────────────────────────────────────────────────────


def parse_post_date(date_str: str) -> date | None:
    """
    인벤 date_str → 실제 날짜 변환.
    - "HH:MM"       → RUN_DATE (오늘)
    - "MM-DD"       → 해당 월일 (연도는 RUN_DATE 기준 추론)
    - "YYYY.MM.DD"  → 그대로 파싱
    """
    s = date_str.strip()
    if not s:
        return None

    # "HH:MM" 형식 → 오늘
    if re.match(r"^\d{1,2}:\d{2}$", s):
        return RUN_DATE

    # "MM-DD" 형식
    m = re.match(r"^(\d{1,2})-(\d{2})$", s)
    if m:
        month, day = int(m.group(1)), int(m.group(2))
        year = RUN_DATE.year
        try:
            d = date(year, month, day)
            # 파싱된 날짜가 미래면 작년으로 처리 (연말-연초 경계)
            if d > RUN_DATE:
                d = date(year - 1, month, day)
            return d
        except ValueError:
            return None

    # "YYYY.MM.DD" 형식
    m = re.match(r"^(\d{4})\.(\d{2})\.(\d{2})$", s)
    if m:
        try:
            return date(int(m.group(1)), int(m.group(2)), int(m.group(3)))
        except ValueError:
            return None

    return None


# ── 파싱 ─────────────────────────────────────────────────────────────────────


def _int(text: str) -> int:
    """문자열에서 숫자만 추출해 int로 변환. 숫자 없으면 0."""
    cleaned = re.sub(r"[^\d]", "", text or "")
    return int(cleaned) if cleaned else 0


def _td(tr, *classes: str) -> str:
    """<tr> 안에서 지정한 class의 <td> 텍스트를 순서대로 찾아 반환. 없으면 빈 문자열."""
    for cls in classes:
        td = tr.select_one(f"td.{cls}")
        if td:
            return td.get_text(" ", strip=True)
    return ""


def parse_list_page(html: str, board_key: str) -> tuple[list[dict], bool]:
    """
    Returns:
        (posts, should_stop)
        should_stop=True  → 이 페이지에 target_date보다 오래된 글만 남음, 페이지네이션 중단.
    """
    soup = BeautifulSoup(html, "lxml")
    board_id = BOARDS[board_key]["id"]
    anchors = soup.select("a.subject-link")
    if not anchors:
        log.warning("subject-link 0개 — 구조 변경 가능. --debug 로 HTML 확인")

    seen: set[str] = set()
    posts: list[dict] = []
    found_older = False

    for a in anchors:
        href = a.get("href", "")
        m = re.search(rf"/board/lostark/{board_id}/(\d+)", href)
        if not m:
            continue
        post_id = m.group(1)
        if post_id in seen:
            continue

        title = a.get_text(" ", strip=True)
        title = re.sub(r"\s*\[\d+\]\s*$", "", title).strip()
        if not title:
            continue

        tr = a
        while tr is not None and tr.name != "tr":
            tr = tr.parent
        if tr is None:
            continue
        if "notice" in " ".join(tr.get("class", [])):
            continue

        date_str = _td(tr, "date")
        post_date = parse_post_date(date_str)

        # 대상 날짜보다 오래된 글 → 페이지네이션 중단 신호
        if post_date is not None and post_date < TARGET_DATE:
            found_older = True
            continue

        # 오늘 글 (대상 날짜보다 최신) → 수집 안 함
        if post_date is not None and post_date > TARGET_DATE:
            continue

        url = href if href.startswith("http") else f"https:{href}"
        seen.add(post_id)
        posts.append({
            "board": board_key,
            "post_id": post_id,
            "url": url,
            "title": title,
            "author": _td(tr, "user"),
            "date_str": date_str,
            "posted_date": post_date.isoformat() if post_date else None,
            "views": _int(_td(tr, "view")),
            "likes": _int(_td(tr, "reco", "recommend")),
            "content": None,
            "comments": [],
        })

    # target_date보다 오래된 글이 하나라도 나오면 중단 (같은 페이지의 target 글은 이미 수집됨)
    return posts, found_older


def parse_post_content(html: str) -> str:
    """게시글 상세 페이지 HTML에서 본문 텍스트를 추출한다. 여러 선택자를 순서대로 시도."""
    soup = BeautifulSoup(html, "lxml")
    content_el = (
        soup.select_one("#powerbbsContent")
        or soup.select_one(".powerbbsContent")
        or soup.select_one("#content-body")
        or soup.select_one(".articleSubject + .articleContent")
        or soup.select_one(".articleContent")
        or soup.select_one("[itemprop='articleBody']")
    )
    if not content_el:
        return ""
    return content_el.get_text(separator="\n", strip=True)


COMMENT_HEADERS = {
    **HEADERS,
    "Origin": "https://www.inven.co.kr",
    "X-Requested-With": "XMLHttpRequest",
}
COMMENT_API = "https://www.inven.co.kr/common/board/comment.json.php"


async def fetch_comments(session: AsyncSession, board_id: int, post_id: str) -> list[dict]:
    """댓글 JSON API (POST) → [{name, text, date, recommend}] 반환."""
    try:
        resp = await session.post(
            COMMENT_API,
            data={"comeidx": str(board_id), "articlecode": post_id,
                  "act": "list", "out": "json", "sortorder": "date", "page": "1"},
            headers=COMMENT_HEADERS,
            timeout=10,
        )
        d = resp.json()
        if d.get("message") != 1:
            return []
        raw = d.get("commentlist", [{}])[0].get("list", [])
        comments = []
        for c in raw:
            raw_html = c.get("o_comment", "").replace("&nbsp;", " ")
            text = BeautifulSoup(raw_html, "lxml").get_text(" ", strip=True)
            if text:
                comments.append({
                    "name": c.get("o_name", ""),
                    "text": text,
                    "date": c.get("o_date", ""),
                    "recommend": int(c.get("o_recommend", 0) or 0),
                })
        return comments
    except Exception as e:
        log.debug(f"댓글 fetch 실패 ({post_id}): {e}")
        return []


# ── 크롤러 ───────────────────────────────────────────────────────────────────


async def fetch(session: AsyncSession, url: str) -> str:
    """GET 요청을 보내고 응답 HTML을 반환한다. HTTP 오류 시 예외를 발생시킨다."""
    resp = await session.get(url, headers=HEADERS, timeout=15)
    resp.raise_for_status()
    return resp.text


async def crawl_board(session: AsyncSession, board_key: str) -> list[dict]:
    """
    target_date보다 오래된 글이 처음 나오는 순간 중단.
    오늘 글(너무 최신) → 스킵하고 계속, 어제 글 → 수집, 더 오래된 글 → 중단.
    """
    board = BOARDS[board_key]
    collected: dict[str, dict] = {}

    for page in range(1, MAX_PAGES + 1):
        url = f"{BASE}/{board['id']}" + (f"?p={page}" if page > 1 else "")
        log.info(f"[{board['name']}] p{page} -> {url}")

        try:
            html = await fetch(session, url)
        except Exception as e:
            log.error(f"페이지 fetch 실패: {e}")
            break

        if DEBUG:
            (OUTPUT_DIR / f"debug_{board_key}_p{page}.html").write_text(
                html, encoding="utf-8"
            )

        posts, should_stop = parse_list_page(html, board_key)
        for p in posts:
            collected[p["post_id"]] = p

        log.info(f"  -> {TARGET_DATE} 게시글 {len(posts)}개 (누적 {len(collected)}, 중단={should_stop})")

        if should_stop:
            log.info("  target_date 이전 글 도달 -> 페이지네이션 중단")
            break

        await asyncio.sleep(0.5)

    return list(collected.values())


async def crawl_contents(session: AsyncSession, posts: list[dict]) -> None:
    """수집된 게시글 전체의 상세 페이지를 순회해 본문과 댓글을 채운다."""
    targets = [p for p in posts if p["content"] is None]
    log.info(f"본문+댓글 크롤링: {len(targets)}개 (전체)")

    for i, post in enumerate(targets):
        board_id = BOARDS[post["board"]]["id"]
        try:
            log.info(f"  [{i+1}/{len(targets)}] {post['title'][:40]}")
            html = await fetch(session, post["url"])
            if DEBUG and i == 0:
                (OUTPUT_DIR / f"debug_post_{post['board']}.html").write_text(
                    html, encoding="utf-8"
                )
            post["content"] = parse_post_content(html)
            post["comments"] = await fetch_comments(session, board_id, post["post_id"])
            await asyncio.sleep(0.4)
        except Exception as e:
            log.warning(f"  본문 실패: {e}")
            post["content"] = ""
            post["comments"] = []


# ── 메인 ─────────────────────────────────────────────────────────────────────


async def main():
    """
    두 게시판을 크롤링하고 결과를 stdout에 JSON으로 출력한다 (DB 미접근).
    Nest가 stdout JSON을 받아 Prisma로 저장한다.
    --save-file 플래그가 있으면 디버그용으로 output/ 에도 저장한다.
    """
    log.info(f"=== 인벤 크롤러 | target={TARGET_DATE} pages<={MAX_PAGES} debug={DEBUG} ===")

    all_posts: list[dict] = []
    async with AsyncSession() as session:
        for board_key in BOARDS:
            all_posts.extend(await crawl_board(session, board_key))
        await crawl_contents(session, all_posts)

    by_board: dict[str, int] = {}
    for p in all_posts:
        by_board[p["board"]] = by_board.get(p["board"], 0) + 1
    ok = sum(1 for p in all_posts if p["content"])
    log.info(f"=== DONE target={TARGET_DATE} total={len(all_posts)} content={ok} {by_board} ===")

    payload = {"target_date": TARGET_DATE.isoformat(), "posts": all_posts}

    if "--save-file" in sys.argv:
        out_path = OUTPUT_DIR / f"inven_{TARGET_DATE.isoformat()}.json"
        out_path.write_text(
            json.dumps(all_posts, ensure_ascii=False, indent=2), encoding="utf-8"
        )
        log.info(f"saved: {out_path}")

    # 결과 JSON을 stdout으로 출력 (Nest가 파싱). 로그는 stderr로 나가므로 섞이지 않음.
    sys.stdout.write(json.dumps(payload, ensure_ascii=False))
    sys.stdout.flush()


if __name__ == "__main__":
    asyncio.run(main())
