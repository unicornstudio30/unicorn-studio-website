import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const SITE = "https://unicornstudio.io";

/**
 * Non-blocking robots.txt — allows every well-behaved crawler (including
 * Googlebot, Bingbot, GPTBot, ClaudeBot, PerplexityBot, CCBot) to index
 * everything, and points them at /sitemap.xml for discovery.
 *
 * Next.js writes this to /robots.txt at build time.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${SITE}/sitemap.xml`,
    host: SITE,
  };
}
