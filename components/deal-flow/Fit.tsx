import { CheckIcon, Icon } from "@/components/landing/Icons";
import { fit } from "./content";
import { EYEBROW, GRADIENT_TEXT, H2, SECTION_INNER } from "@/components/landing/theme";

export default function Fit() {
  return (
    <section>
      <div className={`${SECTION_INNER} flex flex-col gap-10`}>
        <div className="flex flex-col gap-3.5 max-w-[820px]">
          <div className={EYEBROW}>{fit.eyebrow}</div>
          <h2 className={H2}>
            {fit.headline} <span className={GRADIENT_TEXT}>{fit.headlineAccent}</span>
          </h2>
        </div>

        <div className="flex flex-wrap gap-5">
          <div className="flex-1 basis-full lg:basis-[420px] rounded-[20px] p-8 border border-[rgba(37,99,235,0.22)] bg-[rgba(37,99,235,0.05)] flex flex-col gap-3.5">
            <h3 className="m-0 text-[22px] font-extrabold">{fit.goodHeading}</h3>
            <div className="flex flex-col gap-2.5 text-base">
              {fit.good.map((g) => (
                <div key={g} className="flex gap-2.5">
                  <CheckIcon />
                  <span>{g}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 basis-full lg:basis-[420px] rounded-[20px] p-8 border border-[rgba(21,22,22,0.10)] bg-white flex flex-col gap-3.5">
            <h3 className="m-0 text-[22px] font-extrabold">{fit.badHeading}</h3>
            <div className="flex flex-col gap-2.5 text-base">
              {fit.bad.map((b) => (
                <div key={b} className="flex gap-2.5">
                  <Icon name="cross" strokeWidth={2.4} className="w-[22px] h-[22px] flex-none mt-[3px] text-[#b91c1c]" />
                  <span>{b}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
