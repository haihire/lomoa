# 시스템 아키텍처

## 전체 구조

```
[사용자 브라우저]
      │
      ▼
[Vercel (daloa.kr)]     [Nginx (api.daloa.kr, EC2 80/443)]
      │                          │
      │ SSR fetch                ▼
      └──────────────→  [NestJS :3001]
                                 │
                    ┌────────────┼────────────┐
                    ▼            ▼            ▼
              [PostgreSQL]   [Redis]    [외부 API]
               (Docker)      (Docker)  (LostArk / YouTube / Gemini / Kakao)
```

**로컬 개발**은 Nginx 없이 Next.js(3000) → NestJS(3001) 직접 통신.

---

## 컴포넌트별 역할

### `client/` — Next.js 15 App Router (Vercel 배포)

- **SSR 전용** — 브라우저에서 NestJS를 직접 호출하지 않음
- `app/page.tsx`: 메인 페이지, SSR fetch → 사이트 목록·특성빌드·유튜브 렌더링
- `app/admin/`: 관리자 페이지 (sync, monitoring, characters, sites)
- `proxy.ts`: Next.js 미들웨어, 관리자 세션 쿠키 검증
- `vercel.json`: `ignoreCommand`로 변경 없는 브랜치 빌드 스킵

### `server/` — NestJS (포트 3001, Docker → EC2 배포)

- **글로벌 Provider**: `PrismaModule`(PostgreSQL), `RedisModule`(REDIS_CLIENT), `ConfigModule`
- **비즈니스 모듈**: `SitesModule`, `CharactersModule`, `StreamersModule`, `ClassSummaryModule`, `UsersModule`, `LostarkModule`, `KakaoModule`
- **관리자 모듈**: `AdminModule` — auth/sync/monitoring/cache/sites/characters
- **크론**: `SitesService`(매일 09:00 사이트 점검), `StreamersService`(3시간마다 YouTube 갱신)
- **에러 필터**: `AllExceptionsFilter` — 5xx 발생 시 카카오 알림, 1분 쿨다운
- **로거**: `FileLoggerService` — `logs/app-YYYY-MM-DD.log`, `logs/error-YYYY-MM-DD.log` (일별 로테이션)

### `crawlers/` — Python (curl_cffi + asyncio)

- `crawl_rank.py`: loawa.com 전투력 순위 → LostArk API → PostgreSQL 저장
- **파이프라인**: Producer → name_queue → Checker(×30) → search_queue → Searcher
- **Rate Limiter**: NestJS `LostarkService` 내부 직렬 큐, 분당 80회 제한

### `nginx/` — 리버스 프록시 (프로덕션)

- HTTP(80) → HTTPS(301) 리다이렉트
- `api.daloa.kr` → NestJS
- SSL: Let's Encrypt (`/etc/letsencrypt/`)

---

## 데이터 흐름

### 사이트 목록 조회

```
브라우저 → Next.js SSR
           → GET /api/sites (NestJS)
               → Redis 체크 (sites:all, TTL 10분)
               → 캐시 미스 시 PostgreSQL 조회
               → Redis 저장 후 반환
```

### 유튜버 영상 조회

```
GET /api/streamers?pageToken=xxx
  → Redis 체크 (youtube:videos:page:N)
  → 캐시 미스 → YouTube Data API v3
  → quota_exceeded 키 존재 시 API 차단 (자동 재개: KST 16:00)
  → Redis TTL 1시간
```

### DB 동기화 (admin-sync)

```
관리자 → local → production 선택
  → 원격 관리자 인증 (sessionId 발급)
  → SSE 스트림 시작
  → FK 의존 테이블 선처리 (loa_class, loa_ark_grid)
  → 대상 테이블 TRUNCATE → chunk 단위 INSERT
  → 진행률 실시간 스트림
```

---

## 모듈 의존 관계

```
AppModule
├── ConfigModule (global)
├── ScheduleModule
├── PrismaModule (global) ────── PrismaService 제공
├── RedisModule (global) ─────── REDIS_CLIENT 제공
├── KakaoModule (global) ─────── KakaoService 제공
├── SitesModule       ← PrismaService, REDIS_CLIENT, KakaoService
├── CharactersModule  ← PrismaService
├── StreamersModule   ← REDIS_CLIENT, ConfigService
├── ClassSummaryModule← PrismaService, REDIS_CLIENT, ConfigService (Gemini AI)
├── UsersModule       ← PrismaService, LostarkService
├── LostarkModule     ← ConfigService
├── AdminModule       ← PrismaService, REDIS_CLIENT, ConfigService
└── RevalidateService (standalone)
```

---

## 배포 환경 (EC2)

- `docker-compose.yml`: `nest`(NestJS), `postgres`(PostgreSQL), `redis`, `nginx` 컨테이너
- Next.js는 Vercel에서 호스팅 (EC2 미사용)
- **자동 배포**: `main` 브랜치 push → GitHub Actions (`main-post-merge.yml`) → AWS SSM으로 EC2 명령 실행
  1. `git reset --hard HEAD && git pull origin main`
  2. `cd server && npm run build`
  3. `docker compose up -d --build nest`
  4. `docker restart daloa-nginx`
