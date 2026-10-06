import { Icon } from "@/components/landing/Icons";
import { CARD, EYEBROW, H2, SECTION_INNER } from "@/components/landing/theme";
import { problem } from "./content";

export default function Problem() {
  return (
    <section>
      <div className={`${SECTION_INNER} flex flex-col gap-10`}>
        <div className="flex flex-col gap-3.5 max-w-[780px]">
          <div className={EYEBROW}>{problem.eyebrow}</div>
          <h2 className={H2}>{problem.headline}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {problem.cards.map((c) => (
            <div key={c.title} className={CARD}>
              <Icon name={c.icon} className="w-7 h-7 text-[#2563eb]" />
              <h3 className="m-0 text-[21px] font-bold">{c.title}</h3>
              <p className="m-0 text-base text-[rgba(21,22,22,0.75)]">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
