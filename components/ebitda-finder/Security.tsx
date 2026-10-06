import { Icon } from "@/components/landing/Icons";
import { SECTION_INNER } from "@/components/landing/theme";
import { security } from "./content";

/** Dark section. The design inverts this one against the rest of the page. */
export default function Security() {
  return (
    <section id="security" className="bg-[#151616] text-white">
      <div className={`${SECTION_INNER} flex flex-col gap-10`}>
        <div className="flex flex-col gap-3.5 max-w-[800px]">
          <div className="text-sm font-bold tracking-[0.08em] uppercase text-[#3b82f6]">{security.eyebrow}</div>
          <h2 className="m-0 text-[32px] sm:text-[38px] lg:text-[44px] leading-[1.1] tracking-[-0.02em] font-extrabold text-white">
            {security.headline}
          </h2>
          <p className="m-0 text-[17px] sm:text-[19px] text-white/[0.78]">{security.lead}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {security.cards.map((c) => (
            <div
              key={c.title}
              className="border border-white/[0.14] rounded-2xl p-7 flex flex-col gap-3 bg-white/[0.04]"
            >
              <Icon name={c.icon} className="w-7 h-7 text-[#3b82f6]" />
              <h3 className="m-0 text-[20px] font-bold text-white">{c.title}</h3>
              <p className="m-0 text-base text-white/75">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
