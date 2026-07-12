import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "AI GTM System",
  description:
    "One AI system that runs your entire go-to-market: prospect discovery, list building, enrichment, personalised outreach, qualification, CRM sync, and reporting. Guaranteed to book meetings, or we work for free.",
  alternates: {
    canonical: "/ai-gtm-system/",
  },
};

const breadcrumbs = [
  { name: "Home", url: "https://unicornstudio.io/" },
  { name: "AI GTM System", url: "https://unicornstudio.io/ai-gtm-system/" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Breadcrumbs items={breadcrumbs} />
      {children}
    </>
  );
}
