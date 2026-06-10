import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "About",
  alternates: {
    canonical: "/about/",
  },
};

const breadcrumbs = [
    { name: "Home", url: "https://unicornstudio.io/" },
    { name: "About", url: "https://unicornstudio.io/about/" },
  ];

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Breadcrumbs items={breadcrumbs} />
      {children}
    </>
  );
}
