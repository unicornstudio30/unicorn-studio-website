import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank you",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
