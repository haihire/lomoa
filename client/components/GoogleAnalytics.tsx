import Script from "next/script";
import { GA_ID } from "@/lib/gtag";

export default function GoogleAnalytics() {
  if (!GA_ID) return null;

  return (
    <>
      {/* 무거운 gtag 라이브러리는 lazyOnload로 idle까지 미뤄 메인스레드 부담 감소 */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="lazyOnload"
      />
      {/* 초기화는 afterInteractive 유지: window.gtag/dataLayer를 일찍 정의해
          로드 직후(=idle 이전) 클릭 이벤트도 큐잉되어 유실 방지. 실행 비용은 매우 작음. */}
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', { page_path: window.location.pathname });
        `}
      </Script>
    </>
  );
}
