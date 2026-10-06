import { dealMath } from "./content";
import { GRADIENT_TEXT, SECTION_INNER } from "./theme";

/** Named DealMath rather than Math so it cannot shadow the global. */
export default function DealMath() {
  return (
    <section className="bg-[#151616] text-white">
      <div className={`${SECTION_INNER} flex flex-col gap-10`}>
        <div className="flex flex-col gap-3.5 max-w-[820px]">
          <div className="text-sm font-bold tracking-[0.08em] uppercase text-[#3b82f6]">
            {dealMath.eyebrow}
          </div>
          <h2 className="m-0 text-[32px] sm:text-[38px] lg:text-[44px] leading-[1.1] tracking-[-0.02em] font-extrabold text-white">
            {dealMath.headline} <span className={GRADIENT_TEXT}>{dealMath.headlineAccent}</span>
          </h2>
          <p className="m-0 text-[17px] sm:text-[19px] text-white/[0.78]">{dealMath.lead}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {dealMath.cards.map((c) => (
            <div
              key={c.label}
              className="border border-white/[0.14] rounded-[18px] p-7 flex flex-col gap-1.5 bg-white/[0.04]"
            >
              <div className="text-[15px] text-white/[0.72]">{c.label}</div>
              <div
                className={`text-[40px] font-extrabold tracking-[-0.02em] ${
                  c.highlight ? "text-[#3b82f6]" : "text-white"
                }`}
              >
                {c.value}
              </div>
              <div className="text-sm text-white/[0.72]">{c.note}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
