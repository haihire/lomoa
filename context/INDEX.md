# 다로아 프로젝트 컨텍스트 목차

> Copilot이 이 프로젝트를 이해하는 데 필요한 핵심 정보 모음.
> 코드 수정·기능 추가·테스트 작성 전에 관련 파일을 먼저 읽는다.

---

## 파일 목록

| 파일                                         | 내용                                             | 언제 읽는가                              |
| -------------------------------------------- | ------------------------------------------------ | ---------------------------------------- |
| [architecture.md](./architecture.md)         | 전체 시스템 구조, 컴포넌트 역할, 포트, 배포 흐름 | 새 기능 추가 / 모듈 간 연결 작업 시      |
| [db-schema.md](./db-schema.md)               | PostgreSQL 테이블 스키마 전체                    | 쿼리 작성 / 스키마 변경 시               |
| [api-contracts.md](./api-contracts.md)       | 서버 REST API 엔드포인트 목록, 요청·응답 형태    | 클라이언트 fetch / 서버 컨트롤러 수정 시 |
| [env-config.md](./env-config.md)             | 환경변수 목록과 기본값, 필수 여부                | .env 설정 / 새 환경변수 추가 시          |
| [redis-keys.md](./redis-keys.md)             | Redis 키 네임스페이스, TTL, 캐시 무효화 시점     | Redis 관련 서비스 수정 / 캐시 디버깅 시  |
| [folder-structure.md](./folder-structure.md) | 폴더 트리, 인프라 구성도, 포트 정리              | 전체 구조 파악 / 새 파일 위치 결정 시    |
| [deployment.md](./deployment.md)             | EC2·Vercel·DNS·SSL 배포 절차                     | 배포 시 / 인프라 변경 시                 |

---

## 관련 문서

| 파일                                | 내용                    |
| ----------------------------------- | ----------------------- |
| [server/logs/](../server/logs/)     | NestJS 런타임 로그      |
| [client/logs/](../client/logs/)     | Next.js SSR 런타임 로그 |
| [crawlers/logs/](../crawlers/logs/) | 크롤러 실행 로그        |

---

## 빠른 참조

### 로컬 실행 순서

```
1. redis-server
2. cd server && npm run start:dev
3. cd client && npm run dev
```

### 테스트 실행

```
cd server && npm test          # 단위 테스트 (Jest)
cd client && npm test          # 컴포넌트 테스트 (Vitest)
cd server && npm run test:e2e  # E2E (docker-compose up -d 선행)
```

### 브랜치 전략 & CI

```
sub-branch (feat/xxx, fix/xxx, chore/xxx)
    │  PR 생성 → CI 자동 실행 (pr-ci.yml)
    ▼
feat/admin (통합 브랜치)
    │  PR 생성 → CI 미실행 (중복 방지)
    ▼
main → EC2 자동 배포 (main-post-merge.yml)
```

- CI(`pr-ci.yml`)는 **main 제외** 모든 브랜치 타겟 PR에서 실행
- E2E 실행 전 `npx prisma db push`로 테스트 DB 스키마 생성
- `docker-compose.override.yml`은 로컬 전용 (gitignore), AWS Redis 연결 설정 포함

### 포트 및 인프라 구성도

→ [folder-structure.md](./folder-structure.md)

### EC2 배포·SSH 접속

→ [deployment.md](./deployment.md)
