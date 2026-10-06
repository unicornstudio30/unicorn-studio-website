import { Icon } from "./Icons";
import { hero, BOOKING_LABEL, BOOK_ANCHOR } from "./content";
import { BTN, BTN_OUTLINE, GRADIENT_TEXT } from "./theme";

export default function Hero() {
  return (
    <section id="top" className="bg-[rgba(37,99,235,0.05)] border-b border-[rgba(37,99,235,0.10)]">
      <div className="max-w-[1200px] mx-auto px-6 pt-16 pb-14 sm:pt-20 sm:pb-16 lg:pt-24 lg:pb-[88px] flex flex-col gap-7">
        <div className="inline-flex self-start px-3.5 py-2 rounded-full bg-white border border-[rgba(37,99,235,0.25)] text-sm font-semibold text-[#1d4ed8]">
          {hero.eyebrow}
        </div>

        <h1 className="m-0 text-[40px] sm:text-[52px] lg:text-[64px] leading-[1.05] tracking-[-0.03em] font-extrabold max-w-[980px]">
          {hero.headline} <span className={GRADIENT_TEXT}>{hero.headlineAccent}</span>
        </h1>

        <p className="m-0 text-[18px] sm:text-[21px] max-w-[800px] text-[rgba(21,22,22,0.75)]">
          <strong className="text-[#151616]">{hero.leadStrong}</strong>
          {hero.lead}
        </p>

        <div className="flex flex-wrap gap-3.5">
          <a href={BOOK_ANCHOR} className={`${BTN} px-7 py-4 text-[17px]`}>
            {BOOKING_LABEL}
          </a>
          <a href={hero.secondaryCta.href} className={`${BTN_OUTLINE} px-7 py-4 text-[17px]`}>
            {hero.secondaryCta.label}
          </a>
        </div>

        <a href="#proof" className="self-start text-[16px] text-[rgba(21,22,22,0.78)] no-underline">
          {hero.proofLinkPre}
          <strong className="text-[#151616]">{hero.proofLinkFirm}</strong>
          {hero.proofLinkMid}
          <strong className="text-[#151616]">{hero.proofLinkSecond}</strong>.{" "}
          <span className="text-[#2563eb] font-semibold">{hero.proofLinkCta}</span>
        </a>

        <div className="flex flex-wrap gap-y-2.5 gap-x-7 text-[15px] font-semibold text-[#151616]">
          {hero.trust.map((t) => (
            <span key={t.text} className="inline-flex gap-2 items-start">
              <Icon name={t.icon} strokeWidth={2.2} className="w-[22px] h-[22px] flex-none mt-[3px] text-[#2563eb]" />
              {t.text}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          {hero.stats.map((s) => (
            <div key={s.value} className="bg-white border border-[rgba(21,22,22,0.08)] rounded-[14px] p-5">
              <div className="text-[30px] font-extrabold text-[#2563eb]">{s.value}</div>
              <div className="text-[15px] text-[rgba(21,22,22,0.72)]">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
