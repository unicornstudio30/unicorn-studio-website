import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "AI Integrations",
  alternates: {
    canonical: "/ai-integrations/",
  },
};

const breadcrumbs = [
    { name: "Home", url: "https://unicornstudio.io/" },
    { name: "Services", url: "https://unicornstudio.io/#systems" },
    { name: "AI Integrations", url: "https://unicornstudio.io/ai-integrations/" },
  ];

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Breadcrumbs items={breadcrumbs} />
      {children}
    </>
  );
}
