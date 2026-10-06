"use client";

import { useCalendly } from "./CalendlyProvider";

const reasons = [
  {
    eyebrow: "Capacity",
    title: "We cap onboarding at a few new clients each month.",
    body: "Every system is custom-built and we maintain it ourselves after launch. To keep that promise, we don't take on more clients than the team can build well at the same time. When the slot is full, you wait.",
    metric: { value: "3–4", label: "new clients / month" },
  },
  {
    eyebrow: "Pricing",
    title: "Today's rate is locked for the lifetime of the engagement.",
    body: "As we scale and demand compounds, our rates rise. Clients who sign now keep their rate for as long as we work together. New clients later don't.",
    metric: { value: "Locked", label: "for the lifetime" },
  },
  {
    eyebrow: "Compounding",
    title: "The AI gap doesn't close. It widens, every week.",
    body: "Businesses installing AI infrastructure now compound their advantage with every piece of training data, every workflow refined, every hour of human time freed. Waiting six months isn't six months behind. It's a gap that grows on its own.",
    metric: { value: "Weekly", label: "and accelerating" },
  },
];

export default function Scarcity() {
  const { openModal } = useCalendly();

  return (
    <section
      id="why-now"
      className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-blue-50/30 to-white overflow-hidden"
    >
      {/* Ambient backdrop */}
      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-blue-100/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 right-0 w-[500px] h-[500px] rounded-full bg-indigo-100/30 blur-3xl" />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-[-0.02em] leading-[1.08] text-balance mb-5">
            Three reasons{" "}
            <span className="gradient-text-modern">waiting costs more</span>{" "}
            than starting.
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 leading-[1.65] text-pretty">
            We&apos;d rather you understand the cost of waiting than the cost of working with us. Here&apos;s the part most agencies won&apos;t put in writing.
          </p>
        </div>

        {/* Three reason cards in a clean row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7 mb-10 sm:mb-12">
          {reasons.map((reason, index) => (
            <article
              key={index}
              className="group relative bg-white rounded-3xl border border-gray-200/80 p-7 sm:p-8 lg:p-9 shadow-[0_10px_30px_-15px_rgba(15,23,42,0.08)] hover:shadow-[0_30px_60px_-20px_rgba(15,23,42,0.18)] hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* Index badge in top-right */}
              <div className="absolute top-6 right-6 sm:top-7 sm:right-7">
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-gray-50 border border-gray-200 text-[13px] font-bold text-gray-400 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-colors">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Eyebrow */}
              <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-blue-600 mb-4">
                {reason.eyebrow}
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-[22px] font-bold text-gray-900 leading-[1.25] tracking-[-0.01em] mb-4 sm:mb-5 text-balance pr-12">
                {reason.title}
              </h3>

              {/* Body */}
              <p className="text-[15px] sm:text-base text-gray-600 leading-[1.7] mb-6 flex-1 text-pretty">
                {reason.body}
              </p>

              {/* Metric pinned to bottom */}
              <div className="pt-5 border-t border-gray-100 flex items-baseline gap-2.5">
                <span className="text-2xl sm:text-3xl font-bold gradient-text-modern leading-none tracking-[-0.01em]">
                  {reason.metric.value}
                </span>
                <span className="text-[12px] sm:text-[13px] text-gray-500 font-medium">
                  {reason.metric.label}
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Conversion footer, quiet, factual, single CTA */}
        <div className="relative rounded-3xl bg-gray-900 text-white p-7 sm:p-9 lg:p-12 overflow-hidden">
          {/* subtle decoration */}
          <div className="pointer-events-none absolute -top-32 -right-32 w-[400px] h-[400px] rounded-full bg-blue-500/15 blur-3xl" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:linear-gradient(to_bottom,black,transparent)]" />

          <div className="relative grid lg:grid-cols-[1fr_auto] gap-6 lg:gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-cyan-300 mb-3">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75 animate-ping" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-cyan-400" />
                </span>
                Currently taking new clients
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-bold leading-[1.15] tracking-[-0.01em] max-w-2xl text-balance">
                The discovery call is free, the process map is yours either way.{" "}
                <span className="text-cyan-300">No reason to wait.</span>
              </h3>
            </div>
            <button
              onClick={openModal}
              className="group inline-flex items-center justify-center gap-2 px-7 py-4 bg-white text-gray-900 rounded-xl font-semibold text-[15px] sm:text-base shadow-[0_15px_40px_-10px_rgba(56,189,248,0.4)] hover:shadow-[0_20px_50px_-10px_rgba(56,189,248,0.55)] hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap"
            >
              <span>Book a discovery call</span>
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
