import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "AI SaaS",
  description:
    "Full-stack AI SaaS products for founders and businesses. Modern web stacks (Next.js, Postgres, TypeScript), AI baked in from day one, subscription billing and admin dashboards shipped by default. First paying customers within the first month.",
  alternates: { canonical: "/ai-saas/" },
};

const breadcrumbs = [
  { name: "Home", url: "https://unicornstudio.io/" },
  { name: "Solutions", url: "https://unicornstudio.io/#systems" },
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
