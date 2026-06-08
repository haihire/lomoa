# Lomoa - 로스트아크 커뮤니티 플랫폼

## 프로젝트 목표

- 로스트아크 게이머들이 필요한 도구를 빠르게 찾는 커뮤니티 허브 구축
- 사이트 모음, 인기 영상 정보 등 분산된 정보를 한 곳에서 탐색 가능하게 제공

## 기술 스택

- Docker
- TypeScript: 타입 안정성으로 런타임 에러 사전 방지
- Next.js: SSR (Vercel 배포)
- NestJS: 백엔드 API 서버
- PostgreSQL: 주 데이터베이스
- Prisma 7: ORM (driver adapter 방식)
- Redis: 캐시로 속도 개선
- Nginx: 리버스 프록시
- AWS EC2 + GitHub Actions: 서버 배포 자동화

## 개선한 점들

| 항목           | Before | After   | 개선율 |
| -------------- | ------ | ------- | ------ |
| 초기 로딩 시간 | 4.2s   | 1.1s    | 73% ↓  |
| DB 응답 시간   | 500ms  | 50ms    | 90% ↓  |
| 동시 요청 처리 | 50 QPS | 500 QPS | 10배 ↑ |

→ 상세 기록: [docs/performance.md](docs/performance.md)

## 시스템 흐름:

<a href="https://raw.githubusercontent.com/haihire/lomoa/main/docs/architecture.svg" target="_blank" rel="noopener">
  <img src="docs/architecture.svg" alt="아키텍처 다이어그램" width="100%" />
</a>

원본 크기로 보기: [docs/architecture.svg](https://raw.githubusercontent.com/haihire/lomoa/main/docs/architecture.svg)

## 브랜치 보호 목록

- main
- fix/admin
- feat/admin
- fix/mainPage
- feat/mainPage
- ci/cd
