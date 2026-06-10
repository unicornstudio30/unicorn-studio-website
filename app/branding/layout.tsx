import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Branding",
  alternates: {
    canonical: "/branding/",
  },
};

const breadcrumbs = [
    { name: "Home", url: "https://unicornstudio.io/" },
    { name: "Services", url: "https://unicornstudio.io/#systems" },
    { name: "Branding", url: "https://unicornstudio.io/branding/" },
  ];

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Breadcrumbs items={breadcrumbs} />
      {children}
    </>
  );
}
