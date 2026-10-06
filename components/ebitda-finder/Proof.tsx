import { QuoteMark } from "@/components/landing/Icons";
import { EYEBROW, GRADIENT_TEXT, H2, SECTION_INNER } from "@/components/landing/theme";
import { proof } from "./content";

export default function Proof() {
  const t = proof.testimonial;

  return (
    <section id="proof">
      <div className={`${SECTION_INNER} flex flex-col gap-10`}>
        <div className="flex flex-col gap-3.5 max-w-[820px]">
          <div className={EYEBROW}>{proof.eyebrow}</div>
          <h2 className={H2}>
            {proof.headline} <span className={GRADIENT_TEXT}>{proof.headlineAccent}</span>
          </h2>
          <p className="m-0 text-[18px] text-[rgba(21,22,22,0.75)]">{proof.lead}</p>
        </div>

        <figure className="m-0 rounded-3xl p-7 sm:p-12 bg-[rgba(37,99,235,0.05)] border border-[rgba(37,99,235,0.18)] flex flex-col gap-[22px]">
          <QuoteMark />
          <blockquote className="m-0 flex flex-col gap-[18px] text-[18px] sm:text-[20px] leading-[1.6] text-[#151616]">
            {t.paragraphs.map((p) => (
              <p key={p.slice(0, 40)} className="m-0">
                {p}
              </p>
            ))}
            <p className="m-0 font-semibold">{t.closing}</p>
          </blockquote>
          <figcaption className="flex items-center gap-3.5 pt-2 border-t border-[rgba(37,99,235,0.18)]">
            <div className="w-12 h-12 rounded-full bg-[#2563eb] text-white flex items-center justify-center font-bold text-[17px] flex-none">
              {t.initials}
            </div>
            <div>
              <div className="font-bold text-[17px]">{t.name}</div>
              <div className="text-[15px] text-[rgba(21,22,22,0.72)]">{t.role}</div>
            </div>
          </figcaption>
        </figure>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {proof.cases.map((c) => (
            <div key={c.name} className="rounded-[20px] p-8 border border-[rgba(21,22,22,0.10)] flex flex-col gap-3">
              <div className="text-sm font-bold text-[#1d4ed8]">{c.kicker}</div>
              <h3 className="m-0 text-[23px] font-bold">{c.name}</h3>
              {c.statValue && (
                <div className="flex items-baseline gap-2.5 flex-wrap">
                  <span className={`${GRADIENT_TEXT} text-[44px] font-extrabold tracking-[-0.03em] leading-none`}>
                    {c.statValue}
                  </span>
                  <span className="text-base font-semibold">{c.statLabel}</span>
                </div>
              )}
              <p className="m-0 text-base text-[rgba(21,22,22,0.75)]">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
