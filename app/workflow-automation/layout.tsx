import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Workflow Automation",
  description:
    "Kill the manual, repetitive work in your operations. Approvals, onboarding, reporting, cross-system handoffs — automated end-to-end with the guardrails your business needs. Guaranteed hours reclaimed, or we work for free.",
  alternates: { canonical: "/workflow-automation/" },
};

const breadcrumbs = [
  { name: "Home", url: "https://unicornstudio.io/" },
  { name: "Services", url: "https://unicornstudio.io/#systems" },
  { name: "Workflow Automation", url: "https://unicornstudio.io/workflow-automation/" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Breadcrumbs items={breadcrumbs} />
      {children}
    </>
  );
}
