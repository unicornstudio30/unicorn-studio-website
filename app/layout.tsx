import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { CalendlyProvider } from "@/components/CalendlyProvider";
import AutoRevealSections from "@/components/AutoRevealSections";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const sora = Sora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
  weight: ["400", "600", "700", "800"],
});

const siteUrl = "https://unicornstudio.io";
const siteName = "Unicorn Studio";
const title = "Unicorn Studio · AI System Specialists";
const description =
  "Tell us about your business. We'll find what can be automated, build the AI systems that do it, and stay on it until it's running. Guaranteed, or we work for free until it does.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | Unicorn Studio",
  },
  description,
  keywords: [
    "AI systems",
    "AI automation",
    "AI business process automation",
    "AI development",
    "SaaS development",
    "product development",
    "AI integrations",
    "MVP",
  ],
  applicationName: siteName,
  authors: [{ name: "Unicorn Studio", url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png", sizes: "1080x1080" },
    ],
    apple: "/favicon.png",
    shortcut: "/favicon.png",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName,
    title,
    description,
    images: [
      {
        url: "/og-image.jpg?v=3",
        width: 1200,
        height: 630,
        alt: "Unicorn Studio · Trusted AI integration partner for businesses",
        type: "image/jpeg",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.jpg?v=3"],
    creator: "@unicornstudioai",
    site: "@unicornstudioai",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body className="antialiased">
        <CalendlyProvider>{children}</CalendlyProvider>
        <AutoRevealSections />
      </body>
    </html>
  );
}
