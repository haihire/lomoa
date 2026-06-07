// Sentry 초기화 — main.ts 최상단에서 다른 어떤 import보다 먼저 import 되어야 함.
import * as Sentry from '@sentry/nestjs';

Sentry.init({
  dsn: 'https://1e514b7d8bc88556258ed9a65af3c4f7@o4511483377680384.ingest.us.sentry.io/4511522679816192',
  // 운영(production)에서만 전송 — 로컬 개발 중 에러로 쿼터 낭비 방지.
  enabled: process.env.NODE_ENV === 'production',
  // 성능 트레이싱 10% 샘플링 (무료 쿼터 절약). 에러는 100% 그대로 수집됨.
  tracesSampleRate: 0.1,
  // 서버 요청 헤더엔 admin JWT·telemetry 토큰 등이 있어 PII 전송은 끔(토큰 유출 방지).
  sendDefaultPii: false,
});
