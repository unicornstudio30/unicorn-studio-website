import { howItWorks } from "./content";
import { EYEBROW, GRADIENT_TEXT, H2, LEAD, SECTION_INNER, TINT_SECTION } from "./theme";

export default function HowItWorks() {
  return (
    <section id="how" className={TINT_SECTION}>
      <div className={`${SECTION_INNER} flex flex-col gap-10`}>
        <div className="flex flex-col gap-3.5 max-w-[820px]">
          <div className={EYEBROW}>{howItWorks.eyebrow}</div>
          <h2 className={H2}>
            {howItWorks.headline} <span className={GRADIENT_TEXT}>{howItWorks.headlineAccent}</span>
          </h2>
          <p className={LEAD}>{howItWorks.lead}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {howItWorks.phases.map((p) => (
            <div
              key={p.title}
              className="bg-white rounded-2xl p-7 flex flex-col gap-2.5 border border-[rgba(21,22,22,0.08)]"
            >
              <div className="text-sm font-bold text-[#1d4ed8]">{p.days}</div>
              <h3 className="m-0 text-[22px] font-bold">{p.title}</h3>
              <p className="m-0 text-base text-[rgba(21,22,22,0.75)]">{p.body}</p>
              {p.pill && (
                <div className="mt-1.5 inline-flex self-start px-3 py-1.5 rounded-full bg-[rgba(37,99,235,0.10)] text-[13px] font-bold text-[#1d4ed8]">
                  {p.pill}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
