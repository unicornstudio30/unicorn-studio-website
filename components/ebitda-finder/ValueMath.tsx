import { EYEBROW, GRADIENT_TEXT, H2, SECTION_INNER } from "@/components/landing/theme";
import { valueMath } from "./content";

const cell = "px-[18px] py-4 border-t border-[rgba(21,22,22,0.10)]";

export default function ValueMath() {
  return (
    <section id="value-math">
      <div className={`${SECTION_INNER} flex flex-col gap-10`}>
        <div className="flex flex-col gap-3.5 max-w-[820px]">
          <div className={EYEBROW}>{valueMath.eyebrow}</div>
          <h2 className={H2}>
            {valueMath.headlineLead}
            <span className={GRADIENT_TEXT}>{valueMath.headlineAccent}</span>
            {valueMath.headlineTail}
          </h2>
          <p className="m-0 text-[18px] text-[rgba(21,22,22,0.75)]">{valueMath.lead}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
          {valueMath.cards.map((c) => (
            <div
              key={c.label}
              className={`rounded-[18px] p-7 flex flex-col gap-1.5 ${
                c.dark ? "bg-[#151616] text-white" : "border border-[rgba(21,22,22,0.10)]"
              }`}
            >
              <div className={`text-[15px] ${c.dark ? "text-white/75" : "text-[rgba(21,22,22,0.72)]"}`}>
                {c.label}
              </div>
              <div
                className={`text-[40px] font-extrabold tracking-[-0.02em] ${c.dark ? "text-[#3b82f6]" : ""}`}
              >
                {c.value}
              </div>
              {c.note && <div className="text-sm text-[rgba(21,22,22,0.72)]">{c.note}</div>}
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4 mt-6">
          <h3 className="m-0 text-[22px] sm:text-[26px] font-extrabold">{valueMath.tableHeading}</h3>
          <p className="m-0 text-base text-[rgba(21,22,22,0.75)]">{valueMath.tableLead}</p>

          {/* Scrolls inside its own box. min-w-0 is load-bearing: without it
              this flex item takes the table's 860px min-content width and the
              whole page scrolls sideways on a phone. */}
          <div className="w-full min-w-0 overflow-x-auto border border-[rgba(21,22,22,0.10)] rounded-2xl">
            <table className="w-full min-w-[860px] border-collapse text-[15px] text-left">
              <thead>
                <tr className="bg-[rgba(37,99,235,0.06)]">
                  {valueMath.columns.map((c) => (
                    <th key={c} scope="col" className="px-[18px] py-3.5 font-bold">
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {valueMath.rows.map((r) => (
                  <tr key={r.portco}>
                    <td className={cell}>{r.portco}</td>
                    <td className={cell}>{r.opportunity}</td>
                    <td className={cell}>{r.baseline}</td>
                    <td className={`${cell} font-bold text-[#1d4ed8]`}>{r.impact}</td>
                    <td className={cell}>{r.cost}</td>
                    <td className={cell}>{r.payback}</td>
                    <td className={`${cell} font-bold`}>{r.priority}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
