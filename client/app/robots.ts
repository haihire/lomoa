import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    host: "https://www.lomoa.kr",
    rules: [
      {
        userAgent: "Mediapartners-Google",
        disallow: "",
      },
      {
        userAgent: "Wget",
        disallow: "/",
      },
      {
        userAgent: "*",
        disallow: [
          "/api/",
          "/common/admin/",
          "/env/",
          "/staff/",
          "/test/",
          "/search/",
        ],
      },
    ],
    sitemap: "https://www.lomoa.kr/sitemap.xml",
  };
}
