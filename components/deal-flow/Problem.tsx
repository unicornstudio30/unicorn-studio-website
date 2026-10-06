import { Icon } from "./Icons";
import { problem } from "./content";
import { CARD, EYEBROW, GRADIENT_TEXT, H2, LEAD, SECTION_INNER } from "./theme";

export default function Problem() {
  return (
    <section>
      <div className={`${SECTION_INNER} flex flex-col gap-10`}>
        <div className="flex flex-col gap-3.5 max-w-[820px]">
          <div className={EYEBROW}>{problem.eyebrow}</div>
          <h2 className={H2}>
            {problem.headline} <span className={GRADIENT_TEXT}>{problem.headlineAccent}</span>
          </h2>
          <p className={LEAD}>{problem.lead}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
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
