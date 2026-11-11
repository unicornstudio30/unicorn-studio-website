import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { digitalGrowthEquity as cs } from "@/components/case-study-content";

export const metadata: Metadata = {
  title: { absolute: cs.seoTitle },
  description: cs.seoDescription,
  alternates: {
    canonical: `/case-studies/${cs.slug}/`,
  },
  openGraph: {
    title: cs.seoTitle,
    description: cs.seoDescription,
    url: `https://unicornstudio.io/case-studies/${cs.slug}/`,
    type: "article",
    siteName: "Unicorn Studio",
    locale: "en_US",
    images: [
      {
        url: cs.ogImage,
        width: 1200,
        height: 630,
        alt: `${cs.client} case study by Unicorn Studio`,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: cs.seoTitle,
    description: cs.seoDescription,
    images: [cs.ogImage],
    creator: "@unicornstudioai",
    site: "@unicornstudioai",
  },
};

const breadcrumbs = [
  { name: "Home", url: "https://unicornstudio.io/" },
  { name: "Case Studies", url: "https://unicornstudio.io/case-studies/" },
  { name: "Digital Growth Equity", url: `https://unicornstudio.io/case-studies/${cs.slug}/` },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Breadcrumbs items={breadcrumbs} />
      {children}
    </>
  );
}
