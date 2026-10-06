import { CheckIcon, Icon } from "@/components/landing/Icons";
import { EYEBROW, GRADIENT_TEXT, H2, SECTION_INNER } from "@/components/landing/theme";
import { deliverables } from "./content";

type Item = { kicker: string; title: string; body: string; solves: string; price: string };

function StackRow({ item, bonus }: { item: Item; bonus: boolean }) {
  return (
    <div className="flex flex-wrap gap-4 items-start py-[22px] border-t border-[rgba(21,22,22,0.10)]">
      <div className="flex-1 basis-full lg:basis-[520px] flex gap-3.5 items-start">
        {bonus ? (
          <Icon name="gift" strokeWidth={2.2} className="w-[22px] h-[22px] flex-none mt-[3px] text-[#2563eb]" />
        ) : (
          <CheckIcon />
        )}
        <div>
          <div className="text-[13px] font-bold tracking-[0.06em] uppercase text-[#1d4ed8] mb-1">{item.kicker}</div>
          <h3 className="m-0 mb-1.5 text-[20px] font-bold">{item.title}</h3>
          <p className="m-0 mb-1.5 text-base text-[rgba(21,22,22,0.75)]">{item.body}</p>
          <div className="text-sm font-semibold text-[rgba(21,22,22,0.72)]">{item.solves}</div>
        </div>
      </div>
      <div className="flex-none text-[20px] font-extrabold text-[#151616] pl-9">{item.price}</div>
    </div>
  );
}

export default function Deliverables() {
  const s = deliverables.summary;

  return (
    <section id="deliverables">
      <div className={`${SECTION_INNER} flex flex-col gap-8`}>
        <div className="flex flex-col gap-3.5 max-w-[820px]">
          <div className={EYEBROW}>{deliverables.eyebrow}</div>
          <h2 className={H2}>
            {deliverables.headline} <span className={GRADIENT_TEXT}>{deliverables.headlineAccent}</span>
          </h2>
        </div>

        <div className="flex flex-col">
          <div className="text-[22px] font-extrabold pb-1.5">{deliverables.coreHeading}</div>
          {deliverables.core.map((item) => (
            <StackRow key={item.title} item={item} bonus={false} />
          ))}

          <div className="text-[22px] font-extrabold pt-9 pb-1.5">{deliverables.bonusHeading}</div>
          {deliverables.bonuses.map((item) => (
            <StackRow key={item.title} item={item} bonus />
          ))}

          <div className="mt-6 rounded-[20px] bg-[#151616] text-white p-8 flex flex-wrap gap-6 justify-between items-center">
            <div className="flex flex-col gap-1">
              <div className="text-base text-white/75">{s.totalValueLabel}</div>
              <div className="text-[40px] font-extrabold tracking-[-0.02em] text-white">{s.totalValue}</div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="text-base text-white/75">{s.investmentLabel}</div>
              <div className="text-[40px] font-extrabold tracking-[-0.02em] text-[#3b82f6]">{s.investment}</div>
            </div>
            <div className="flex flex-col gap-1 max-w-[360px]">
              <div className="text-base text-white/75">{s.creditLabel}</div>
              <div className="text-[20px] font-bold text-white">{s.credit}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
