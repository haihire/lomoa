// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://71cab7ea2d601ff14257f84aeb5c1a37@o4511483377680384.ingest.us.sentry.io/4511522626994176",

  // 운영(production)에서만 전송 — 로컬 개발 중 에러로 쿼터 낭비 방지.
  enabled: process.env.NODE_ENV === "production",

  // 성능 트레이싱 10% 샘플링 (무료 쿼터 절약). 에러는 100% 그대로 수집됨.
  tracesSampleRate: 0.1,

  // 개인정보 최소 수집 원칙 — IP·헤더 등 PII 전송 끔.
  sendDefaultPii: false,
});
