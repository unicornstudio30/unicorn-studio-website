export default function Problem() {
  const shifts = [
    {
      number: "01",
      pillar: "Compounding gap",
      title: "A quiet competitor is compounding",
      body:
        "A business your size is installing AI into their operations right now. You won't notice them this quarter. In twelve months, they've reclaimed 40 hours a week per operator, and you're still doing the work by hand.",
      stat: { value: "12 mo", unit: "until the gap shows" },
    },
    {
      number: "02",
      pillar: "Tooling doesn't ship",
      title: "Bookmarks don't build systems",
      body:
        "You've read the articles. You've bookmarked the tools. But the gap between knowing AI matters and having an AI system running in production is where every mid-market company gets stuck.",
      stat: { value: "0", unit: "tabs that ship a system" },
    },
    {
      number: "03",
      pillar: "Market consolidation",
      title: "Systems beat products now",
      body:
        "Businesses don't lose to better products anymore. They lose to better operating systems. Within five years, most mid-market segments consolidate around whichever competitor automated first. The rest get acquired by them.",
      stat: { value: "5 yr", unit: "until markets consolidate" },
    },
  ];

  return (
    <section
      id="problem"
      className="relative py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden"
    >
      {/* Ambient backdrop */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[700px] bg-gradient-to-b from-blue-200/20 via-indigo-100/10 to-transparent rounded-[50%] blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#80808010_1px,transparent_1px),linear-gradient(to_bottom,#80808010_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_70%)]" />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gray-200 text-gray-700 text-xs sm:text-sm font-semibold mb-6 sm:mb-7 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-gray-900" />
            The honest part
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-gray-900 tracking-[-0.02em] leading-[1.05] mb-6 sm:mb-7 max-w-4xl mx-auto text-balance">
            Your competitor is already installing AI.{" "}
            <span className="gradient-text-modern">You just haven&apos;t seen them yet.</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-[1.6] text-pretty">
            Three quiet shifts already changing who wins the next five years.
          </p>
        </div>

        {/* Split-layout card sequence — one column, alternating direction, higher visual density than a flat card grid */}
        <div className="space-y-6 sm:space-y-8">
          {shifts.map((s, i) => (
            <article
              key={s.number}
              className="group relative bg-white rounded-3xl border border-gray-200 overflow-hidden hover:border-blue-300 hover:shadow-[0_30px_80px_-30px_rgba(59,130,246,0.28)] transition-all duration-300"
            >
              {/* Left accent bar animates in on hover */}
              <span className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-blue-600 to-indigo-600 transform scale-y-0 origin-top group-hover:scale-y-100 transition-transform duration-500 ease-out" />

              <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] items-stretch">
                {/* Left: copy */}
                <div className="p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-5 sm:mb-6">
                    <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-gray-900 to-gray-700 text-white font-mono text-sm font-bold shadow-md">
                      {s.number}
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-gray-400">
                      Shift {parseInt(s.number)} · {s.pillar}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl lg:text-[2rem] font-bold text-gray-900 tracking-[-0.02em] leading-[1.15] mb-4 sm:mb-5">
                    {s.title}
                  </h3>
                  <p className="text-[15px] sm:text-base text-gray-600 leading-[1.7] max-w-xl">
                    {s.body}
                  </p>
                </div>

                {/* Right: dark stat panel */}
                <div
                  className={`relative overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-blue-950 text-white p-8 sm:p-10 lg:p-12 flex flex-col justify-center ${
                    i % 2 === 1 ? "lg:order-first" : ""
                  }`}
                >
                  {/* Subtle grid + glow */}
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px]" />
                  <div className="pointer-events-none absolute -top-24 -right-24 w-[280px] h-[280px] rounded-full bg-blue-500/20 blur-3xl" />
                  <div className="pointer-events-none absolute -bottom-24 -left-24 w-[280px] h-[280px] rounded-full bg-indigo-500/20 blur-3xl" />

                  <div className="relative">
                    <div className="text-[10px] font-bold uppercase tracking-[0.24em] text-cyan-300/80 mb-4">
                      The number to watch
                    </div>
                    <div className="text-6xl sm:text-7xl lg:text-8xl font-black leading-none bg-gradient-to-br from-white via-cyan-100 to-blue-200 bg-clip-text text-transparent tracking-[-0.02em] mb-3">
                      {s.stat.value}
                    </div>
                    <div className="text-sm sm:text-base text-blue-100/70 max-w-[80%] leading-snug">
                      {s.stat.unit}
                    </div>

                    {/* Corner mark */}
                    <div className="absolute top-0 right-0 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                      <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/40">
                        live
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Closing line — larger, quieter */}
        <div className="mt-14 sm:mt-16 lg:mt-20 text-center">
          <p className="text-xl sm:text-2xl text-gray-700 font-medium leading-snug tracking-[-0.01em] max-w-2xl mx-auto">
            You don&apos;t need to panic.{" "}
            <span className="text-gray-500 font-normal">You do need a plan.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
