import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Custom Apps",
  description:
    "Internal tools and client portals built around how your business actually works. Not off-the-shelf software bent into shape; software designed for your exact workflow, integrations, and data.",
  alternates: { canonical: "/custom-apps/" },
};

const breadcrumbs = [
  { name: "Home", url: "https://unicornstudio.io/" },
  { name: "Services", url: "https://unicornstudio.io/#systems" },
  { name: "Custom Apps", url: "https://unicornstudio.io/custom-apps/" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Breadcrumbs items={breadcrumbs} />
      {children}
    </>
  );
}
