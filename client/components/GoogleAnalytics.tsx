import Script from "next/script";
import { GA_ID } from "@/lib/gtag";

export default function GoogleAnalytics() {
  if (!GA_ID) return null;

  return (
    <>
      {/* lazyOnload: 브라우저 idle 때 로드 → gtag 메인스레드 작업을 초기 로드 창 밖으로 */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="lazyOnload"
      />
      <Script id="ga4-init" strategy="lazyOnload">
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
