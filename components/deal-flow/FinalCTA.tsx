"use client";

import { useCalendly } from "@/components/CalendlyProvider";
import { finalCta, BOOKING_LABEL } from "./content";
import { BTN, GRADIENT_TEXT } from "./theme";

/**
 * Closing CTA. The button opens the site-wide Cal.com booking modal
 * rather than carrying its own URL, so the booking link stays in one
 * place (components/CalendlyProvider.tsx) for the whole site.
 */
export default function FinalCTA() {
  const { openModal } = useCalendly();

  return (
    <section id="book" className="px-6 pb-16 sm:pb-20 lg:pb-24">
      <div className="max-w-[1200px] mx-auto rounded-3xl px-6 py-14 sm:px-10 sm:py-[72px] bg-[#151616] text-white flex flex-col items-center text-center gap-5">
        <h2 className="m-0 text-[32px] sm:text-[40px] lg:text-[46px] leading-[1.1] tracking-[-0.02em] font-extrabold text-white max-w-[820px]">
          {finalCta.headline} <span className={GRADIENT_TEXT}>{finalCta.headlineAccent}</span>
        </h2>
        <p className="m-0 text-[17px] sm:text-[19px] text-white/[0.78] max-w-[660px]">{finalCta.lead}</p>
        <div className="flex flex-wrap justify-center gap-y-2.5 gap-x-6 text-[15px] font-semibold text-white/85">
          {finalCta.badges.map((b) => (
            <span key={b}>{b}</span>
          ))}
        </div>
        <button type="button" onClick={openModal} className={`${BTN} px-8 py-[18px] text-[18px] mt-2`}>
          {BOOKING_LABEL}
        </button>
      </div>
    </section>
  );
}
