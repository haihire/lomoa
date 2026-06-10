// This file configures the initialization of Sentry on the client.
// The added config here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://71cab7ea2d601ff14257f84aeb5c1a37@o4511483377680384.ingest.us.sentry.io/4511522626994176",

  // 운영(production)에서만 전송 — 로컬 개발 중 에러로 쿼터 낭비 방지.
  enabled: process.env.NODE_ENV === "production",

  // Sentry는 에러 전용 — 성능 트레이싱 미사용. browserTracing 통합을 런타임에서 제거해
  // 모든 방문자 메인스레드에 ~383ms tracing-init 롱태스크를 부과하던 비용을 없앤다.
  // (빌드 타임 excludeTracing은 Next 16 Turbopack 빌드에서 미적용 → __SENTRY_TRACING__이
  //  치환되지 않아 기본 통합에 browserTracing이 다시 들어옴. 이 런타임 필터가 실질 차단 장치.)
  integrations: (defaultIntegrations) =>
    defaultIntegrations.filter(
      (integration) => integration.name !== "BrowserTracing",
    ),

  // 개인정보 최소 수집 원칙 — IP·헤더 등 PII 전송 끔.
  sendDefaultPii: false,
});

export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;
