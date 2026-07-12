import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "AI Agents",
  description:
    "Deploy intelligent assistants trained on your business that handle customer support, research, qualification, and internal Q&A. Running 24/7, escalating to humans only when it should.",
  alternates: { canonical: "/ai-agents/" },
};

const breadcrumbs = [
  { name: "Home", url: "https://unicornstudio.io/" },
  { name: "Services", url: "https://unicornstudio.io/#systems" },
  { name: "AI Agents", url: "https://unicornstudio.io/ai-agents/" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Breadcrumbs items={breadcrumbs} />
      {children}
    </>
  );
}
