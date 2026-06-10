import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Thank you",
  alternates: {
    canonical: "/thank-you/",
  },
};

const breadcrumbs = [
    { name: "Home", url: "https://unicornstudio.io/" },
    { name: "Thank you", url: "https://unicornstudio.io/thank-you/" },
  ];

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Breadcrumbs items={breadcrumbs} />
      {children}
    </>
  );
}
