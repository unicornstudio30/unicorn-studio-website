import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { meta } from "@/components/ebitda-finder/content";

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: meta.path },
  openGraph: {
    type: "website",
    url: `https://unicornstudio.io${meta.path}`,
    title: `${meta.title} | Unicorn Studio`,
    description: meta.description,
    images: [
      {
        url: "/og-image.jpg?v=3",
        width: 1200,
        height: 630,
        alt: "The 14-Day EBITDA Finder by Unicorn Studio",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${meta.title} | Unicorn Studio`,
    description: meta.description,
    images: ["/og-image.jpg?v=3"],
  },
};

const breadcrumbs = [
  { name: "Home", url: "https://unicornstudio.io/" },
  { name: "Services", url: "https://unicornstudio.io/#systems" },
  { name: "PE Portco AI Integration", url: `https://unicornstudio.io${meta.path}` },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Breadcrumbs items={breadcrumbs} />
      {children}
    </>
  );
}
