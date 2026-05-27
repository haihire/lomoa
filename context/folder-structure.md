# 프로젝트 폴더 구조

## 전체 트리

```
daloa/
├── .env                          # 환경변수 (Git 미포함)
├── .gitignore
├── AGENTS.md                     # 에이전트 공통 규칙
├── docker-compose.yml            # 프로덕션 서비스 정의 (nest, postgres, redis, nginx)
├── docker-compose.override.yml   # 로컬 개발 전용 오버라이드 (Git 미포함)
│
├── .github/
│   ├── pull_request_template.md  # PR 템플릿
│   ├── BRANCH_PROTECTION_CHECKLIST.md
│   ├── SETUP_GUIDE.md
│   └── workflows/
│       ├── pr-check.yml          # PR 빌드·테스트 CI
│       ├── pr-ci.yml             # PR 추가 CI
│       ├── main-post-merge.yml   # main 머지 후 EC2 자동 배포
│       └── server-e2e.yml        # E2E 테스트
│
├── client/                       # ── Next.js 15 App Router (Vercel 배포) ──
│   ├── AGENTS.md                 # 클라이언트 에이전트 규칙
│   ├── package.json
│   ├── next.config.ts
│   ├── tsconfig.json
│   ├── vercel.json               # ignoreCommand (변경 없을 때 빌드 스킵)
│   ├── instrumentation.ts        # 서버 부팅 시 console 가로채기 → logs/ 기록
│   ├── vitest.config.ts
│   ├── vitest.setup.ts
│   ├── proxy.ts                  # Next.js 미들웨어 (관리자 세션 검증)
│   ├── app/
│   │   ├── layout.tsx            # 루트 레이아웃
│   │   ├── page.tsx              # 메인 페이지 (SSR)
│   │   ├── sitemap.ts            # SEO 사이트맵
│   │   ├── robots.ts             # robots.txt 생성
│   │   ├── globals.css
│   │   ├── favicon.ico
│   │   ├── icon.png
│   │   ├── admin/                # 관리자 페이지
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx          # 관리자 대시보드
│   │   │   ├── login/page.tsx    # 관리자 로그인
│   │   │   ├── sync/page.tsx     # DB 동기화 (SSE)
│   │   │   ├── monitoring/page.tsx # 모니터링 대시보드
│   │   │   ├── characters/page.tsx # 캐릭터 목록
│   │   │   ├── sites/page.tsx    # 사이트 CRUD
│   │   │   ├── youtube/page.tsx  # 유튜브 캐시 관리
│   │   │   └── cache/page.tsx    # Redis 캐시 삭제
│   │   └── api/                  # Next.js API Route (NestJS 프록시)
│   │       ├── admin/
│   │       │   ├── auth/login, auth/logout
│   │       │   ├── sync/[table], sync/check
│   │       │   ├── monitoring/dashboard, recent, series, slow-requests, summary, system/current
│   │       │   ├── characters/, characters/stat-builds
│   │       │   ├── sites/, sites/[id]
│   │       │   └── cache/, cache/snapshot-youtube
│   │       ├── revalidate/       # ISR 캐시 무효화
│   │       ├── streamers/popular, streamers/view-history
│   │       └── telemetry/        # 텔레메트리 수집
│   ├── components/
│   │   ├── GoogleAnalytics.tsx   # GA4 스크립트 삽입
│   │   ├── MonitoringBeacon.tsx  # 페이지 뷰·요청 시간 텔레메트리 전송
│   │   ├── characters/
│   │   │   ├── StatBuildList.tsx
│   │   │   └── StatBuildList.test.tsx
│   │   ├── class-summary/
│   │   │   ├── ClassSummaryList.tsx
│   │   │   └── ClassSummaryList.test.tsx
│   │   ├── sites/
│   │   │   ├── SiteList.tsx
│   │   │   └── SiteList.test.tsx
│   │   └── youtube/
│   │       ├── YoutubeList.tsx       # 인기 영상 목록
│   │       ├── YoutubeSection.tsx    # 유튜브 섹션 래퍼
│   │       └── YoutubeList.test.tsx
│   ├── lib/
│   │   ├── gtag.ts               # GA4 헬퍼 함수
│   │   └── admin-role.ts         # 관리자 역할 훅
│   ├── types/
│   │   └── index.ts              # 공용 타입 정의
│   ├── public/                   # 정적 에셋
│   └── logs/                     # 런타임 로그 (Git 미포함)
│
├── server/                       # ── NestJS (Docker → EC2 배포) ──
│   ├── AGENTS.md                 # 서버 에이전트 규칙
│   ├── Dockerfile                # 프로덕션 이미지 (node:20-alpine)
│   ├── package.json
│   ├── tsconfig.json
│   ├── nest-cli.json
│   ├── prisma/
│   │   └── schema.prisma         # Prisma 스키마 정의
│   ├── prisma.config.ts          # Prisma CLI 설정 (DATABASE_URL 주입)
│   ├── generated/
│   │   └── prisma/               # Prisma 생성 클라이언트 (Git 포함)
│   ├── src/
│   │   ├── main.ts               # 엔트리포인트 (포트 3001)
│   │   ├── app.module.ts         # 루트 모듈
│   │   ├── prisma/               # PrismaService (PrismaPg adapter)
│   │   │   ├── prisma.module.ts
│   │   │   └── prisma.service.ts
│   │   ├── redis/
│   │   │   └── redis.module.ts   # Redis 커넥션 (ioredis)
│   │   ├── admin/                # 관리자 API (/api/admin/*)
│   │   │   ├── admin.module.ts
│   │   │   ├── admin.guard.ts    # AdminGuard, AdminWriteGuard
│   │   │   ├── admin-auth.controller.ts
│   │   │   ├── admin-auth.service.ts
│   │   │   ├── admin-cache.controller.ts
│   │   │   ├── admin-characters.controller.ts
│   │   │   ├── admin-monitoring.controller.ts
│   │   │   ├── admin-monitoring.middleware.ts
│   │   │   ├── admin-monitoring.service.ts
│   │   │   ├── admin-sites.controller.ts
│   │   │   ├── admin-sync.controller.ts
│   │   │   └── repositories/
│   │   │       ├── admin-auth.repository.ts
│   │   │       ├── admin-characters.repository.ts
│   │   │       ├── admin-sync.repository.ts
│   │   │       └── monitoring.repository.ts
│   │   ├── characters/           # 특성 빌드 API
│   │   │   ├── characters.module.ts
│   │   │   ├── characters.controller.ts
│   │   │   ├── characters.repository.ts
│   │   │   ├── characters.service.ts
│   │   │   └── characters.service.spec.ts
│   │   ├── class-summary/        # 직업 요약 API (Gemini AI)
│   │   │   ├── class-summary.module.ts
│   │   │   ├── class-summary.controller.ts
│   │   │   ├── class-summary.repository.ts
│   │   │   ├── class-summary.service.ts
│   │   │   └── class-summary.service.spec.ts
│   │   ├── lostark/              # LostArk Open API 프록시 + Rate Limiter
│   │   │   ├── lostark.module.ts
│   │   │   ├── lostark.controller.ts
│   │   │   └── lostark.service.ts
│   │   ├── sites/                # 사이트 목록 API (Redis 캐시 + 매일 점검)
│   │   │   ├── sites.module.ts
│   │   │   ├── sites.controller.ts
│   │   │   ├── sites.repository.ts
│   │   │   ├── sites.service.ts
│   │   │   └── sites.service.spec.ts
│   │   ├── streamers/            # 스트리머 API (YouTube, 3시간 갱신)
│   │   │   ├── streamers.module.ts
│   │   │   ├── streamers.controller.ts
│   │   │   ├── streamers.repository.ts
│   │   │   ├── streamers.service.ts
│   │   │   └── streamers.service.spec.ts
│   │   ├── users/                # 유저(원정대) API
│   │   │   ├── users.module.ts
│   │   │   ├── users.controller.ts
│   │   │   ├── users.repository.ts
│   │   │   └── users.service.ts
│   │   ├── kakao/                # 카카오 알림 서비스
│   │   │   ├── kakao.module.ts
│   │   │   └── kakao.service.ts
│   │   ├── revalidate/
│   │   │   └── revalidate.service.ts # Vercel ISR 캐시 무효화
│   │   └── common/
│   │       ├── http-exception.filter.ts
│   │       ├── file-logger.service.ts  # 파일 로거 (일별 로테이션)
│   │       └── local-dev-flags.ts      # 로컬 개발 전용 플래그
│   ├── test/
│   │   ├── jest-e2e.json
│   │   ├── jest-integration.json
│   │   ├── app.e2e-spec.ts
│   │   └── korean-encoding.integration-spec.ts
│   └── logs/                     # 런타임 로그 (Git 미포함)
│
├── crawlers/                     # ── Python 크롤러 (EC2에서 수동 실행) ──
│   ├── crawl_rank.py             # loawa.com → LostArk API → DB 파이프라인
│   ├── requirements.txt
│   └── logs/                     # 크롤러 로그 (Git 미포함)
│
├── nginx/
│   └── default.conf              # api.daloa.kr → NestJS 리버스 프록시
│
├── scripts/
│   ├── dev.ps1                   # 로컬 개발 환경 시작
│   ├── test.ps1                  # 전체 테스트 실행
│   ├── cleanup-logs.ps1          # 30일 이상 로그 자동 삭제
│   ├── deploy.ps1                # 레거시 EC2 배포 스크립트 (현재 GitHub Actions 사용)
│   ├── dump-db.js                # DB 덤프 스크립트
│   └── migrate-mysql-to-postgres.sh # MySQL → PostgreSQL 마이그레이션 (완료)
│
├── context/                      # ── AI 컨텍스트 문서 ──
│   ├── INDEX.md                  # 목차
│   ├── architecture.md           # 시스템 아키텍처
│   ├── db-schema.md              # DB 스키마
│   ├── api-contracts.md          # API 계약
│   ├── env-config.md             # 환경변수 설명
│   ├── redis-keys.md             # Redis 키 설계
│   ├── folder-structure.md       # 폴더 트리 (이 파일)
│   └── deployment.md             # EC2·Vercel·DNS·SSL 배포 절차
│
└── docs/                         # ── 개발 문서 ──
    ├── project-structure.md
    └── INDEX.md
```

---

## 인프라 구성도

```
┌─────────────────────────────────────────────────────────┐
│  사용자 브라우저                                          │
└────────┬──────────────────────────────┬─────────────────┘
         │ daloa.kr (HTTPS)             │ api.daloa.kr (HTTPS)
         ▼                              ▼
┌─────────────────┐          ┌────────────────────────────────────┐
│  Vercel          │          │  AWS EC2 (Ubuntu)                  │
│  ┌─────────────┐ │          │  ┌──────────────────────────────┐  │
│  │ Next.js SSR │ │          │  │ Docker Compose               │  │
│  │ (client/)   │─┼──────────┼─▶│  ┌────────┐  ┌───────────┐  │  │
│  └─────────────┘ │  SSR     │  │  │ Nginx  │→ │NestJS:3001│  │  │
└─────────────────┘  fetch   │  │  │:80/443 │  └─────┬─────┘  │  │
                              │  │  └────────┘        │        │  │
                              │  │  ┌────────┐  ┌─────┴──────┐ │  │
                              │  │  │ Redis  │  │ PostgreSQL │ │  │
                              │  │  │ :6379  │  │ :5432      │ │  │
                              │  │  └────────┘  └────────────┘ │  │
                              │  └──────────────────────────────┘  │
                              └────────────────────────────────────┘
                                        │
                              ┌─────────┴─────────┐
                              │ 가비아 DNS          │
                              │ daloa.kr → Vercel  │
                              │ api.daloa.kr → EC2 │
                              └───────────────────┘
```

---

## 포트 정리

| 서비스     | 로컬 포트 | EC2 포트    | 비고                              |
| ---------- | --------- | ----------- | --------------------------------- |
| Next.js    | 3000      | —           | Vercel에서 호스팅                 |
| NestJS     | 3001      | 3001 (내부) | Nginx가 443 → 3001 프록시         |
| Nginx      | —         | 80, 443     | SSL 종단점, HTTP→HTTPS 리다이렉트 |
| PostgreSQL | 5432      | 5432 (내부) | Docker 내부 네트워크 전용         |
| Redis      | 6379      | 6379 (내부) | Docker 내부 네트워크 전용         |
