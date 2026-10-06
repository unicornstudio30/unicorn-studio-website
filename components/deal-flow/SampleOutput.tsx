import { sampleOutput } from "./content";
import { EYEBROW, GRADIENT_TEXT, H2, LEAD, SECTION_INNER, TINT_SECTION } from "@/components/landing/theme";

const verdictTone = {
  pass: "bg-[rgba(21,128,61,0.10)] text-[#15803d]",
  maybe: "bg-[rgba(180,83,9,0.10)] text-[#b45309]",
} as const;

const cell = "p-4 border-t border-[rgba(21,22,22,0.08)] align-top";

export default function SampleOutput() {
  return (
    <section className={TINT_SECTION}>
      <div className={`${SECTION_INNER} flex flex-col gap-10`}>
        <div className="flex flex-col gap-3.5 max-w-[820px]">
          <div className={EYEBROW}>{sampleOutput.eyebrow}</div>
          <h2 className={H2}>
            {sampleOutput.headline} <span className={GRADIENT_TEXT}>{sampleOutput.headlineAccent}</span>
          </h2>
          <p className={LEAD}>{sampleOutput.lead}</p>
        </div>

        {/* The table keeps its full width and scrolls inside its own box
            rather than forcing the page sideways on a phone. min-w-0 is
            load-bearing: without it this flex item takes its 980px
            min-content width and the whole page scrolls sideways. */}
        <div className="w-full min-w-0 overflow-x-auto border border-[rgba(21,22,22,0.10)] rounded-2xl bg-white">
          <table className="w-full min-w-[980px] border-collapse text-[15px] text-left">
            <thead>
              <tr>
                {sampleOutput.columns.map((c) => (
                  <th
                    key={c}
                    scope="col"
                    className="py-3.5 px-4 text-[13px] font-bold text-[rgba(21,22,22,0.72)] bg-[rgba(37,99,235,0.05)]"
                  >
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {sampleOutput.rows.map((r) => (
                <tr key={r.company}>
                  <td className={cell}>{r.company}</td>
                  <td className={cell}>{r.mandate}</td>
                  <td className={cell}>{r.sizeBasis}</td>
                  <td className={cell}>
                    <span
                      className={`inline-flex py-1 px-2.5 rounded-full font-bold text-[13px] ${verdictTone[r.verdictTone]}`}
                    >
                      {r.verdict}
                    </span>
                  </td>
                  <td className={cell}>{r.evidence}</td>
                  <td className={cell}>{r.nextStep}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
