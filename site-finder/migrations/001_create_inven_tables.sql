-- site-finder 기능용 테이블 생성 (멱등 — IF NOT EXISTS)
-- 실행: gh workflow run db-migrate.yml -f sql_file=site-finder/migrations/001_create_inven_tables.sql
-- 스키마 접두어 없음 → 연결의 search_path를 따름 (운영 public / 로컬 lost_ark)

-- 1) 크롤된 인벤 게시글 (댓글은 comments JSONB에 함께 저장)
CREATE TABLE IF NOT EXISTS inven_posts (
  id         BIGSERIAL PRIMARY KEY,
  board      TEXT        NOT NULL,
  post_id    TEXT        NOT NULL UNIQUE,
  url        TEXT        NOT NULL DEFAULT '',
  title      TEXT        NOT NULL,
  author     TEXT        NOT NULL DEFAULT '',
  date_str   TEXT        NOT NULL DEFAULT '',
  views      INT         NOT NULL DEFAULT 0,
  likes      INT         NOT NULL DEFAULT 0,
  content    TEXT,
  comments   JSONB       NOT NULL DEFAULT '[]'::jsonb,
  crawled_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS idx_inven_posts_board_crawled ON inven_posts (board, crawled_at);
CREATE INDEX IF NOT EXISTS idx_inven_posts_crawled       ON inven_posts (crawled_at);

-- 2) 추출된 사이트 후보 (이름/설명은 관리자가 입력)
CREATE TABLE IF NOT EXISTS inven_site_candidates (
  id             BIGSERIAL PRIMARY KEY,
  url            TEXT        NOT NULL,
  domain         TEXT        NOT NULL UNIQUE,
  name           TEXT        NOT NULL DEFAULT '',
  description    TEXT        NOT NULL DEFAULT '',
  category       TEXT        NOT NULL DEFAULT '',
  mention_count  INT         NOT NULL DEFAULT 1,
  sample_post_id TEXT,
  status         TEXT        NOT NULL DEFAULT 'pending', -- pending | added | rejected
  created_at     TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS idx_inven_site_cand_status
  ON inven_site_candidates (status, mention_count DESC);

-- 3) 블랙리스트 (거부한 도메인, 다음 수집부터 제외)
CREATE TABLE IF NOT EXISTS inven_site_blacklist (
  id         BIGSERIAL PRIMARY KEY,
  domain     TEXT        NOT NULL UNIQUE,
  reason     TEXT        NOT NULL DEFAULT '',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
