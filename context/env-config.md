# 환경변수 설정

**위치**: `server/.env` (`.gitignore`에 포함 — 커밋 금지)

---

## 서버 (NestJS)

| 변수명                     | 기본값                  | 필수     | 설명                                        |
| -------------------------- | ----------------------- | -------- | ------------------------------------------- |
| `PORT`                     | `3001`                  | -        | NestJS 리스닝 포트                          |
| `CLIENT_ORIGIN`            | `http://localhost:3000` | -        | CORS 허용 출처 (쉼표 구분 복수 허용)        |
| `DATABASE_URL`             | -                       | **필수** | PostgreSQL 연결 문자열 (`postgresql://user:pass@host:5432/db`) |
| `PRISMA_DB_SCHEMA`         | `public`                | -        | Prisma 스키마 이름                          |
| `BODY_LIMIT`               | (없음)                  | -        | HTTP 요청 바디 최대 크기                    |
| `REDIS_HOST`               | `127.0.0.1`             | -        | Redis 호스트                                |
| `REDIS_PORT`               | `6379`                  | -        | Redis 포트                                  |
| `REDIS_PASSWORD`           | (없음)                  | -        | Redis 비밀번호                              |
| `REDIS_DB`                 | `0`                     | -        | Redis DB 번호                               |
| `YOUTUBE_REDIS_HOST`       | (없음)                  | -        | YouTube 캐시 전용 Redis 호스트              |
| `YOUTUBE_REDIS_PORT`       | `6379`                  | -        | YouTube 캐시 전용 Redis 포트                |
| `YOUTUBE_REDIS_PASSWORD`   | (없음)                  | -        | YouTube 캐시 전용 Redis 비밀번호            |
| `YOUTUBE_REDIS_DB`         | `0`                     | -        | YouTube 캐시 전용 Redis DB 번호             |
| `YOUTUBE_REDIS_READONLY`   | `false`                 | -        | YouTube 전용 Redis를 읽기 전용으로 사용     |
| `LOCAL_DISABLE_QUOTA_APIS` | `false`                 | -        | 로컬 개발에서 YouTube/Gemini 외부 호출 차단 |
| `LOSTARK_API_KEY`          | -                       | **필수** | LostArk Open API 키                         |
| `YOUTUBE_API_KEY`          | -                       | **필수** | YouTube Data API v3 키 (첫 번째 키)         |
| `YOUTUBE_API_KEY_2`        | -                       | -        | YouTube API 추가 키 (`_3`, `_4` ... 형식으로 계속 추가 가능) |
| `GEMINI_API_KEY`           | -                       | **필수** | Google Gemini API 키 (직업 한줄평 생성)     |
| `KAKAO_REST_API_KEY`       | -                       | **필수** | 카카오 REST API 키                          |
| `KAKAO_CLIENT_SECRET`      | -                       | -        | 카카오 클라이언트 시크릿                    |
| `KAKAO_REFRESH_TOKEN`      | -                       | **필수** | 카카오 OAuth 리프레시 토큰                  |
| `KAKAO_REFRESH_TOKEN_ISSUED_AT` | (없음)             | -        | 카카오 토큰 발급 시각 (자동 갱신 추적용)    |
| `ADMIN_OWNER_PASSWORD`     | -                       | **필수** | 관리자 오너 계정 비밀번호                   |
| `ADMIN_DEMO_PASSWORD`      | -                       | -        | 게스트 데모 계정 비밀번호                   |
| `SYNC_TARGET_API_URL`      | -                       | -        | DB 동기화 대상 서버 URL (예: `https://api.daloa.kr`) |
| `TELEMETRY_INGEST_TOKEN`   | (없음)                  | -        | 텔레메트리 수집 인증 토큰 (미설정 시 Origin/Referer 검증) |
| `MONITORING_PROBE_BASE_URL`| (없음)                  | -        | 모니터링 헬스체크 프로브 대상 URL           |
| `NEXT_REVALIDATE_URL`      | (없음)                  | -        | Vercel ISR 무효화 엔드포인트 URL            |
| `NEXT_REVALIDATE_SECRET`   | (없음)                  | -        | Vercel ISR 무효화 시크릿 (클라이언트 `REVALIDATE_SECRET`과 동일값) |
| `NODE_ENV`                 | `development`           | -        | 환경 구분 (`production` 시 일부 동작 변경)  |

### CORS 설정 주의

`CLIENT_ORIGIN`에 도메인을 입력하면 `www.` 서브도메인이 자동 추가됨.  
예: `https://daloa.kr` → `https://daloa.kr`, `https://www.daloa.kr` 동시 허용.

---

## 클라이언트 (Next.js)

| 변수명                        | 기본값                  | 필수     | 설명                                        |
| ----------------------------- | ----------------------- | -------- | ------------------------------------------- |
| `NEST_API_URL`                | `http://localhost:3001` | -        | SSR fetch 대상 NestJS URL                   |
| `REVALIDATE_SECRET`           | (없음)                  | **필수** | ISR 캐시 무효화 인증 시크릿 (서버 `NEXT_REVALIDATE_SECRET`과 동일값) |
| `TELEMETRY_INGEST_TOKEN`      | (없음)                  | -        | SSR 텔레메트리 인증 토큰 (서버 `TELEMETRY_INGEST_TOKEN`과 동일값) |
| `SYNC_TARGET_API_URL`         | `https://api.daloa.kr`  | -        | DB 동기화 check 엔드포인트 대상 URL         |
| `NEXT_PUBLIC_GA_ID`           | (없음)                  | -        | Google Analytics 측정 ID                    |

> Next.js에서 서버 전용 변수는 `NEXT_PUBLIC_` 접두사 없이 사용.  
> 브라우저에서 NestJS를 직접 호출하는 코드 없음.

---

## 로컬 개발 `.env` 예시

```dotenv
# PostgreSQL
DATABASE_URL=postgresql://daloa:1234@localhost:5432/daloa

# Redis (로컬은 패스워드 없음)
REDIS_HOST=127.0.0.1

# 로컬에서 유튜브만 운영 Redis 읽기
YOUTUBE_REDIS_HOST=127.0.0.1
YOUTUBE_REDIS_PORT=6380
YOUTUBE_REDIS_PASSWORD=your-redis-password
YOUTUBE_REDIS_DB=0
YOUTUBE_REDIS_READONLY=true

# 로컬 개발 중 YouTube/Gemini 할당량 보호
LOCAL_DISABLE_QUOTA_APIS=true

# API Keys
LOSTARK_API_KEY=eyJ0eXAiOiJKV1Q...
YOUTUBE_API_KEY=AIzaSy...
GEMINI_API_KEY=AIzaSy...

# Kakao
KAKAO_REST_API_KEY=abc123...
KAKAO_REFRESH_TOKEN=xyz456...

# CORS
CLIENT_ORIGIN=http://localhost:3000

# 관리자
ADMIN_OWNER_PASSWORD=mypassword
```

---

## 카카오 토큰 최초 발급 절차

1. [developers.kakao.com](https://developers.kakao.com) → 앱 생성 → 카카오 로그인 활성화
2. 플랫폼 > Web > `http://localhost` 등록
3. 아래 URL로 인가 코드 발급  
   `https://kauth.kakao.com/oauth/authorize?client_id={REST_API_KEY}&redirect_uri=http://localhost&response_type=code`
4. 리다이렉트 URL의 `code=` 값 복사
5. curl로 토큰 발급
   ```bash
   curl -X POST https://kauth.kakao.com/oauth/token \
     -d grant_type=authorization_code \
     -d client_id={REST_API_KEY} \
     -d redirect_uri=http://localhost \
     -d code={code값}
   ```
6. 응답의 `refresh_token` → `.env KAKAO_REFRESH_TOKEN`에 저장  
   (유효기간 2개월, 만료 전 자동 갱신됨)
