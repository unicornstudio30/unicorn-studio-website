import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "AI SaaS",
  alternates: {
    canonical: "/ai-saas/",
  },
};

const breadcrumbs = [
    { name: "Home", url: "https://unicornstudio.io/" },
    { name: "Services", url: "https://unicornstudio.io/#systems" },
    { name: "AI SaaS", url: "https://unicornstudio.io/ai-saas/" },
  ];

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Breadcrumbs items={breadcrumbs} />
      {children}
    </>
  );
}
