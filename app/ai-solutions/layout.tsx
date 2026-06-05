import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Solutions",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
