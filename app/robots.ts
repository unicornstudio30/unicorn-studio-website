import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const SITE = "https://unicornstudio.io";

/**
 * Non-blocking robots.txt — allows every well-behaved crawler (including
 * Googlebot, Bingbot, GPTBot, ClaudeBot, PerplexityBot, CCBot) to index
 * everything, and points them at /sitemap.xml for discovery.
 *
 * Explicit per-bot rules (in addition to the wildcard) make the policy
 * unambiguous for AI-readiness scanners and signal to operators that AI
 * training and AI search crawlers are welcome here. Aggressive SEO
 * scrapers that produce bandwidth without value (Ahrefs, Semrush, MJ12,
 * DotBot) are explicitly blocked.
 *
 * Next.js writes this to /robots.txt at build time.
 */

const AI_CRAWLERS_ALLOW = [
  // OpenAI
  "GPTBot",          // Training data crawler
  "ChatGPT-User",    // User-initiated browse from ChatGPT
  "OAI-SearchBot",   // ChatGPT search index crawler
  // Anthropic
  "ClaudeBot",       // Anthropic web crawler
  "claude-web",      // Legacy UA still used by some integrations
  "Claude-User",     // User-initiated fetches from Claude
  "Claude-SearchBot",
  // Perplexity
  "PerplexityBot",
  "Perplexity-User",
  // Google AI (separate opt-in from Googlebot)
  "Google-Extended",
  // Apple Intelligence
  "Applebot-Extended",
  // Common Crawl (used by many LLM trainers)
  "CCBot",
  // Meta / Llama
  "Meta-ExternalAgent",
  "FacebookBot",
  // DuckDuckGo AI Assist
  "DuckAssistBot",
  // Mistral
  "MistralAI-User",
  // ByteDance / TikTok
  "Bytespider",
  // You.com
  "YouBot",
  // Cohere
  "cohere-ai",
  "cohere-training-data-crawler",
];

const SEO_SCRAPERS_DENY = [
  "AhrefsBot",
  "SemrushBot",
  "MJ12bot",
  "DotBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...AI_CRAWLERS_ALLOW.map((userAgent) => ({ userAgent, allow: "/" })),
      ...SEO_SCRAPERS_DENY.map((userAgent) => ({ userAgent, disallow: "/" })),
    ],
    sitemap: `${SITE}/sitemap.xml`,
    host: SITE,
  };
}
