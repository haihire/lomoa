"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

function classifyDevice(userAgent: string): "mobile" | "desktop" | "tablet" | "bot" | "unknown" {
  const ua = userAgent.toLowerCase();
  if (/bot|crawler|spider|googlebot|bingbot/.test(ua)) return "bot";
  if (/ipad|tablet/.test(ua)) return "tablet";
  if (/mobi|android|iphone/.test(ua)) return "mobile";
  if (ua) return "desktop";
  return "unknown";
}

function countryFromLocale(locale: string): string | null {
  const m = locale.match(/[-_](\w{2})$/i);
  if (!m) return null;
  return m[1].toUpperCase();
}

async function send(payload: unknown) {
  try {
    await fetch("/api/telemetry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      keepalive: true,
    });
  } catch {
    // best-effort telemetry
  }
}

export default function MonitoringBeacon() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname.startsWith("/admin")) return;

    const userAgent = navigator.userAgent ?? "";
    const localeCountry =
      countryFromLocale(navigator.language || "") ||
      (Array.isArray(navigator.languages) ? countryFromLocale(navigator.languages[0] || "") : null);
    send({
      type: "page-visit",
      path: pathname,
      deviceType: classifyDevice(userAgent),
      userAgent,
      referrer: document.referrer || null,
      localeCountry,
    });
  }, [pathname]);

  // RUM: 최초 문서 로딩 1회만 측정(메인페이지 한정). SPA 라우팅엔 navigation 엔트리가 없음.
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.location.pathname !== "/") return;
    if (!("performance" in window) || !performance.getEntriesByType) return;

    // LCP는 마지막 값이 가장 정확 — observer로 추적하다 보고 시점에 사용
    let lcp = 0;
    let lcpObserver: PerformanceObserver | null = null;
    try {
      lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const last = entries[entries.length - 1] as
          | (PerformanceEntry & { renderTime?: number; loadTime?: number })
          | undefined;
        if (last) lcp = last.startTime || last.renderTime || last.loadTime || lcp;
      });
      lcpObserver.observe({ type: "largest-contentful-paint", buffered: true });
    } catch {
      // LCP 미지원 브라우저
    }

    let sent = false;
    const report = () => {
      if (sent) return;
      const nav = performance.getEntriesByType("navigation")[0] as
        | PerformanceNavigationTiming
        | undefined;
      if (!nav || !nav.loadEventEnd) return; // load 완료 전이면 보류
      sent = true;
      lcpObserver?.disconnect();
      send({
        type: "page-load",
        path: "/",
        deviceType: classifyDevice(navigator.userAgent ?? ""),
        ttfb: Math.round(nav.responseStart),
        dcl: Math.round(nav.domContentLoadedEventEnd),
        load: Math.round(nav.loadEventEnd),
        lcp: lcp ? Math.round(lcp) : null,
      });
    };

    const onLoad = () => window.setTimeout(report, 0);
    if (document.readyState === "complete") {
      window.setTimeout(report, 0);
    } else {
      window.addEventListener("load", onLoad, { once: true });
    }
    // 탭을 빨리 닫는 경우 대비: 숨김 전 마지막 보고 시도
    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "hidden") report();
    });

    return () => {
      window.removeEventListener("load", onLoad);
      lcpObserver?.disconnect();
    };
  }, []);

  return null;
}
