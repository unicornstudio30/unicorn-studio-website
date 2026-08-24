import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "AI SEO",
  description:
    "Rank in AI search engines, not just Google. We optimise your site for Google AI Overview, ChatGPT search, Perplexity, and Claude web search so LLMs cite you when your customers ask. AI-readiness signals, structured content, guaranteed citations.",
  alternates: { canonical: "/ai-seo/" },
};

const breadcrumbs = [
  { name: "Home", url: "https://unicornstudio.io/" },
  { name: "Solutions", url: "https://unicornstudio.io/#systems" },
  { name: "AI SEO", url: "https://unicornstudio.io/ai-seo/" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Breadcrumbs items={breadcrumbs} />
      {children}
    </>
  );
}
