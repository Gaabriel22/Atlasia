import type { MetadataRoute } from "next"
import { getAbsoluteUrl, getBaseUrl } from "@/lib/seo/site"

export default function robots(): MetadataRoute.Robots {
  const host = getBaseUrl()

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: "GPTBot",
        allow: "/",
      },
      {
        userAgent: "ChatGPT-User",
        allow: "/",
      },
      {
        userAgent: "PerplexityBot",
        allow: "/",
      },
      {
        userAgent: "ClaudeBot",
        allow: "/",
      },
      {
        userAgent: "Google-Extended",
        allow: "/",
      },
    ],
    sitemap: getAbsoluteUrl("/sitemap.xml"),
    host: host.toString(),
  }
}
