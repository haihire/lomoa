## 파일별 상세 설명

- `cleanup-logs.ps1`
  - 역할: `server/logs`, `client/logs`, `crawlers/logs`에서 오래된 `.log` 삭제
  - 기본 보관일: 30일 (`-Days`로 변경 가능)

- `dev.ps1`
  - 역할: 개발 시작 스크립트
  - 동작: 로그 정리 → 포트 점유 프로세스 종료 → 서버/클라이언트 실행
