import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const SITE = "https://unicornstudio.io";

/**
 * Static sitemap for unicornstudio.io. Listed in priority order: home + AI
 * service pages get top weight, supporting pages mid, /thank-you is
 * crawlable but not strategic. Next.js writes this to /sitemap.xml at build
 * time (works with output: "export").
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const pages: Array<{
    path: string;
    priority: number;
    changeFreq: MetadataRoute.Sitemap[number]["changeFrequency"];
  }> = [
    { path: "/",                       priority: 1.0, changeFreq: "weekly"  },
    { path: "/ai-gtm-system/",         priority: 0.9, changeFreq: "monthly" },
    { path: "/workflow-automation/",   priority: 0.9, changeFreq: "monthly" },
    { path: "/ai-agents/",             priority: 0.9, changeFreq: "monthly" },
    { path: "/custom-apps/",           priority: 0.9, changeFreq: "monthly" },
    { path: "/dashboards-reporting/",  priority: 0.9, changeFreq: "monthly" },
    { path: "/ai-solutions/",          priority: 0.8, changeFreq: "monthly" },
    { path: "/ai-integrations/",       priority: 0.8, changeFreq: "monthly" },
    { path: "/case-studies/",          priority: 0.8, changeFreq: "monthly" },
    { path: "/about/",                 priority: 0.7, changeFreq: "monthly" },
    { path: "/thank-you/",             priority: 0.3, changeFreq: "yearly"  },
  ];

  return pages.map((p) => ({
    url: `${SITE}${p.path}`,
    lastModified: now,
    changeFrequency: p.changeFreq,
    priority: p.priority,
  }));
}
