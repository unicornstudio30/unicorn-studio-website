"use client";

import { useCalendly } from "@/components/CalendlyProvider";
import { CheckIcon, Icon } from "@/components/landing/Icons";
import { pricing, BOOKING_LABEL } from "./content";
import { BTN, EYEBROW, GRADIENT_TEXT, H2, SECTION_INNER } from "@/components/landing/theme";
import type { IconName } from "./content";

function NoteBox({ icon, title, body }: { icon: IconName; title: string; body: string }) {
  return (
    <div className="rounded-[14px] px-5 py-[18px] bg-[rgba(37,99,235,0.07)] border border-[rgba(37,99,235,0.22)] flex gap-3 items-start">
      <Icon name={icon} strokeWidth={2.2} className="w-[22px] h-[22px] flex-none mt-[3px] text-[#2563eb]" />
      <div>
        <div className="font-bold text-base text-[#1d4ed8]">{title}</div>
        <div className="text-[15px] text-[rgba(21,22,22,0.78)]">{body}</div>
      </div>
    </div>
  );
}

export default function Pricing() {
  const { openModal } = useCalendly();
  const c = pricing.card;

  return (
    <section id="pricing">
      <div className={`${SECTION_INNER} flex flex-wrap gap-10 lg:gap-12 items-start`}>
        <div className="flex-1 basis-full lg:basis-[380px] flex flex-col gap-5">
          <div className={EYEBROW}>{pricing.eyebrow}</div>
          <h2 className={H2}>
            {pricing.headline} <span className={GRADIENT_TEXT}>{pricing.headlineAccent}</span>
          </h2>
          <p className="m-0 text-[18px] text-[rgba(21,22,22,0.75)]">{pricing.lead}</p>
          <div className="flex flex-col gap-3.5">
            {pricing.notes.map((n) => (
              <NoteBox key={n.title} icon={n.icon} title={n.title} body={n.body} />
            ))}
          </div>
        </div>

        <div className="flex-1 basis-full lg:basis-[440px] bg-white rounded-[20px] border border-[rgba(21,22,22,0.10)] p-7 sm:p-10 flex flex-col gap-[22px] shadow-[0_20px_60px_rgba(37,99,235,0.10)]">
          <div className="text-base font-semibold text-[#1d4ed8]">{c.kicker}</div>
          <div className="text-[17px] text-[rgba(21,22,22,0.72)]">
            {c.totalValueLabel} <span className="line-through">{c.totalValueStruck}</span>
          </div>
          <div className="flex items-baseline gap-2.5 flex-wrap -mt-3.5">
            <span className="text-[44px] sm:text-[56px] font-extrabold tracking-[-0.03em]">{c.price}</span>
            <span className="text-[17px] text-[rgba(21,22,22,0.72)]">{c.priceNote}</span>
          </div>
          <div className="text-[18px] font-bold -mt-2.5">
            {c.monthly}{" "}
            <span className="font-medium text-[15px] text-[rgba(21,22,22,0.72)]">{c.monthlyNote}</span>
          </div>
          <div className="text-sm text-[rgba(21,22,22,0.72)]">{c.passthrough}</div>

          <div className="flex flex-col gap-2.5 text-base">
            <div className="font-bold">{c.coreHeading}</div>
            {c.coreItems.map((item) => (
              <div key={item} className="flex gap-2.5">
                <CheckIcon />
                <span>{item}</span>
              </div>
            ))}

            <div className="font-bold mt-2">{c.bonusHeading}</div>
            {c.bonusItems.map((item) => (
              <div key={item} className="flex gap-2.5">
                <Icon name="gift" strokeWidth={2.2} className="w-[22px] h-[22px] flex-none mt-[3px] text-[#2563eb]" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {c.guarantees.map((g) => (
            <NoteBox key={g.title} icon={g.icon} title={g.title} body={g.body} />
          ))}

          <button type="button" onClick={openModal} className={`${BTN} px-6 py-4 text-[17px] w-full`}>
            {BOOKING_LABEL}
          </button>
        </div>
      </div>
    </section>
  );
}
