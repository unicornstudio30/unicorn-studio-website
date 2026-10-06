"use client";

import { useState } from "react";
import { BrandMark } from "@/components/landing/Icons";
import { BTN } from "@/components/landing/theme";
import { nav, BOOKING_LABEL, BOOK_ANCHOR } from "./content";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(21,22,22,0.08)] bg-white/95 backdrop-blur-sm">
      <div className="max-w-[1200px] mx-auto px-6 py-[18px] flex items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-2.5 no-underline text-[#151616]">
          <BrandMark />
          <span className="font-bold text-[19px] tracking-[-0.01em]">{nav.brand}</span>
        </a>

        <nav aria-label="Main" className="hidden md:flex flex-wrap items-center gap-6 text-[15px] font-medium">
          {nav.links.map((l) => (
            <a key={l.href} href={l.href} className="text-[#151616] no-underline hover:text-[#2563eb] transition-colors">
              {l.label}
            </a>
          ))}
          <a href={BOOK_ANCHOR} className={`${BTN} px-5 py-3`}>
            {BOOKING_LABEL}
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="ebf-mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="md:hidden flex items-center justify-center w-11 h-11 -mr-2 rounded-lg text-[#151616] hover:bg-[rgba(21,22,22,0.05)] transition-colors"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" aria-hidden className="w-6 h-6">
            {open ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      <div
        id="ebf-mobile-menu"
        className={`md:hidden overflow-hidden border-t border-[rgba(21,22,22,0.08)] transition-[max-height,opacity] duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-4 flex flex-col gap-1">
          {nav.links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-3 text-[16px] font-medium text-[#151616] no-underline">
              {l.label}
            </a>
          ))}
          <a href={BOOK_ANCHOR} onClick={() => setOpen(false)} className={`${BTN} mt-2 px-5 py-3.5 text-[16px]`}>
            {BOOKING_LABEL}
          </a>
        </div>
      </div>
    </header>
  );
}
