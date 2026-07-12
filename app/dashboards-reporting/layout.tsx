import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Dashboards & Reporting",
  description:
    "Live business intelligence pulled from every system you run. Real-time metrics, automated reports, and dashboards your team actually opens. Guaranteed accurate numbers, or we work for free.",
  alternates: { canonical: "/dashboards-reporting/" },
};

const breadcrumbs = [
  { name: "Home", url: "https://unicornstudio.io/" },
  { name: "Services", url: "https://unicornstudio.io/#systems" },
  { name: "Dashboards & Reporting", url: "https://unicornstudio.io/dashboards-reporting/" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Breadcrumbs items={breadcrumbs} />
      {children}
    </>
  );
}
