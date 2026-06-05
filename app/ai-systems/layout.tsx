import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Systems",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
