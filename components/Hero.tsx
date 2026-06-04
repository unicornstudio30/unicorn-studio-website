"use client";

import LogoCarousel from "./LogoCarousel";
import { useCalendly } from "./CalendlyProvider";

const inputs = [
  { label: "Email", icon: "✉" },
  { label: "WhatsApp", icon: "✆" },
  { label: "LinkedIn", icon: "in" },
  { label: "CRM", icon: "◆" },
];

const outputs = [
  { value: "47", suffix: "leads", label: "qualified today" },
  { value: "12", suffix: "follow-ups", label: "scheduled" },
  { value: "14h", suffix: "", label: "reclaimed this week" },
];

const trustStats = [
  { value: "04", label: "systems we specialize in" },
  { value: "100%", label: "custom-built per business" },
  { value: "<2h", label: "average response time" },
];

export default function Hero() {
  const { openModal } = useCalendly();
  return (
    <section
      id="hero"
      className="relative flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-white pt-28 sm:pt-32 pb-16 sm:pb-20"
    >
      {/* Mesh backdrop */}
      <div className="pointer-events-none absolute inset-0 mesh-gradient opacity-40" />

      {/* Single ambient glow, calmer than before */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[700px] bg-gradient-to-b from-blue-200/30 via-cyan-100/20 to-transparent rounded-[50%] blur-3xl" />

      {/* Subtle grid */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#80808010_1px,transparent_1px),linear-gradient(to_bottom,#80808010_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)]" />

      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <div className="text-center">
          {/* Main heading */}
          <h1 className="text-[2.6rem] sm:text-6xl md:text-7xl lg:text-[5rem] font-bold text-gray-900 leading-[1.05] tracking-[-0.02em] mb-6 sm:mb-7 max-w-4xl mx-auto text-balance">
            Integrate AI into your business{" "}
            <span className="gradient-text-modern">before your competitor does</span>
          </h1>

          {/* Subheading — three short sentences */}
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-[1.6] mb-8 sm:mb-10 px-2 text-pretty">
            Tell us how your business works. We&apos;ll map what AI can take over, build it, and stay on it until it runs. Guaranteed, or we work for free.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-12 sm:mb-16 px-4">
            <button
              type="button"
              onClick={openModal}
              className="btn-primary group w-full sm:w-auto px-8 py-4 text-white rounded-xl font-semibold text-base text-center inline-flex items-center justify-center gap-2"
            >
              <span className="relative z-10">Book a discovery call</span>
              <svg
                className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <a
              href="#systems"
              className="btn-secondary w-full sm:w-auto px-8 py-4 bg-white text-gray-900 rounded-xl font-semibold text-base border border-gray-300 text-center"
            >
              See the four systems
            </a>
          </div>

          {/* Trust signals — small, factual, below CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 sm:gap-x-10 gap-y-3 mb-14 sm:mb-16 px-4">
            {trustStats.map((s, i) => (
              <div key={i} className="flex items-baseline gap-2">
                <span className="text-lg sm:text-xl font-bold gradient-text-modern leading-none tracking-[-0.01em]">
                  {s.value}
                </span>
                <span className="text-[12px] sm:text-[13px] text-gray-500 font-medium">
                  {s.label}
                </span>
              </div>
            ))}
          </div>

          {/* === System in action — the centerpiece visual === */}
          <div className="relative max-w-5xl mx-auto mb-14 sm:mb-16 px-2">
            {/* Subtle glow halo behind the card */}
            <div className="pointer-events-none absolute inset-x-8 -top-6 -bottom-6 rounded-[2rem] bg-gradient-to-br from-blue-200/40 via-indigo-200/30 to-cyan-200/40 blur-3xl opacity-70" />

            <div className="relative rounded-3xl border border-gray-200/80 bg-white/80 backdrop-blur-xl shadow-[0_30px_80px_-20px_rgba(15,23,42,0.18)] overflow-hidden">
              {/* Window header */}
              <div className="flex items-center justify-between gap-4 px-5 sm:px-7 py-3.5 border-b border-gray-100 bg-gradient-to-b from-gray-50/70 to-white">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-300/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-300/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                  <span className="ml-3 text-[11px] sm:text-xs font-semibold text-gray-500 tracking-wide">
                    Your AI system · running
                  </span>
                </div>
                <div className="hidden sm:inline-flex items-center gap-2 text-[11px] font-semibold text-emerald-700">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  Live
                </div>
              </div>

              {/* Body — 3 columns: inputs / core / outputs */}
              <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1.1fr)] gap-6 sm:gap-8 lg:gap-10 items-center px-5 sm:px-8 lg:px-10 py-7 sm:py-9 lg:py-10">
                {/* INPUTS */}
                <div className="text-left">
                  <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-gray-400 mb-3 sm:mb-4">
                    Inputs
                  </div>
                  <ul className="space-y-2 sm:space-y-2.5">
                    {inputs.map((input, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 px-3 sm:px-3.5 py-2 sm:py-2.5 rounded-xl bg-white border border-gray-200 text-[13px] sm:text-sm text-gray-700 font-medium shadow-[0_1px_0_0_rgba(15,23,42,0.04)]"
                      >
                        <span className="inline-flex w-7 h-7 items-center justify-center rounded-lg bg-blue-50 text-blue-600 text-[13px] font-bold">
                          {input.icon}
                        </span>
                        <span>{input.label}</span>
                        <span className="ml-auto inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CORE — connecting node */}
                <div className="relative flex flex-col items-center justify-center min-h-[140px] md:min-h-[200px]">
                  {/* Left dashed connectors with flowing data dots (desktop) */}
                  <svg
                    className="hidden md:block absolute -left-8 lg:-left-10 top-1/2 -translate-y-1/2 w-8 lg:w-10 h-[180px]"
                    viewBox="0 0 40 200"
                    fill="none"
                    aria-hidden="true"
                  >
                    {[30, 80, 130, 170].map((y, i) => {
                      const pathD = `M0 ${y} C 20 ${y}, 20 100, 40 100`;
                      return (
                        <g key={i}>
                          <path
                            d={pathD}
                            stroke="url(#flowGrad)"
                            strokeWidth="1.5"
                            strokeDasharray="4 4"
                            opacity="0.55"
                          />
                          {/* Animated data dot flowing toward the core */}
                          <circle r="1.6" fill="#60a5fa">
                            <animateMotion
                              dur={`${2.4 + i * 0.4}s`}
                              repeatCount="indefinite"
                              path={pathD}
                              begin={`${i * 0.5}s`}
                            />
                            <animate
                              attributeName="opacity"
                              values="0;1;1;0"
                              keyTimes="0;0.15;0.85;1"
                              dur={`${2.4 + i * 0.4}s`}
                              repeatCount="indefinite"
                              begin={`${i * 0.5}s`}
                            />
                          </circle>
                        </g>
                      );
                    })}
                    <defs>
                      <linearGradient id="flowGrad" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#60a5fa" stopOpacity="0" />
                        <stop offset="50%" stopColor="#60a5fa" stopOpacity="0.7" />
                        <stop offset="100%" stopColor="#818cf8" stopOpacity="0.9" />
                      </linearGradient>
                    </defs>
                  </svg>

                  {/* Right dashed connectors with flowing data dots (desktop) */}
                  <svg
                    className="hidden md:block absolute -right-8 lg:-right-10 top-1/2 -translate-y-1/2 w-8 lg:w-10 h-[180px]"
                    viewBox="0 0 40 200"
                    fill="none"
                    aria-hidden="true"
                  >
                    {[40, 100, 160].map((y, i) => {
                      const pathD = `M0 100 C 20 100, 20 ${y}, 40 ${y}`;
                      return (
                        <g key={i}>
                          <path
                            d={pathD}
                            stroke="url(#flowGrad2)"
                            strokeWidth="1.5"
                            strokeDasharray="4 4"
                            opacity="0.55"
                          />
                          {/* Animated data dot flowing away from the core */}
                          <circle r="1.6" fill="#818cf8">
                            <animateMotion
                              dur={`${2.6 + i * 0.5}s`}
                              repeatCount="indefinite"
                              path={pathD}
                              begin={`${0.3 + i * 0.6}s`}
                            />
                            <animate
                              attributeName="opacity"
                              values="0;1;1;0"
                              keyTimes="0;0.15;0.85;1"
                              dur={`${2.6 + i * 0.5}s`}
                              repeatCount="indefinite"
                              begin={`${0.3 + i * 0.6}s`}
                            />
                          </circle>
                        </g>
                      );
                    })}
                    <defs>
                      <linearGradient id="flowGrad2" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#818cf8" stopOpacity="0.9" />
                        <stop offset="50%" stopColor="#60a5fa" stopOpacity="0.7" />
                        <stop offset="100%" stopColor="#60a5fa" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>

                  {/* The core pill */}
                  <div className="relative animate-core-float motion-reduce:animate-none">
                    {/* outer glow */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 blur-2xl opacity-50 scale-110 animate-core-glow motion-reduce:animate-none" />
                    {/* core surface */}
                    <div className="relative px-5 sm:px-6 py-4 sm:py-5 rounded-2xl bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 text-white shadow-[0_20px_50px_-12px_rgba(59,130,246,0.55)] text-center min-w-[160px] overflow-hidden">
                      {/* inner highlight ring */}
                      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/15" />
                      {/* subtle sweeping shine */}
                      <div className="pointer-events-none absolute inset-y-0 -inset-x-1 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] animate-core-shine motion-reduce:hidden" />
                      <div className="relative text-[10px] font-bold uppercase tracking-[0.22em] text-cyan-200/90 mb-1.5">
                        AI core
                      </div>
                      <div className="relative text-base sm:text-lg font-bold leading-tight">
                        Your system
                      </div>
                      <div className="relative text-[11px] text-blue-100/80 mt-1">
                        Trained on your business
                      </div>
                    </div>
                    {/* orbiting dots */}
                    <span className="absolute -top-1.5 -left-1.5 w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                    <span className="absolute -bottom-1.5 -right-1.5 w-2 h-2 rounded-full bg-indigo-400 animate-pulse" style={{ animationDelay: "1s" }} />
                  </div>
                </div>

                {/* OUTPUTS */}
                <div className="text-left">
                  <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-gray-400 mb-3 sm:mb-4">
                    Outputs
                  </div>
                  <ul className="space-y-2 sm:space-y-2.5">
                    {outputs.map((output, i) => (
                      <li
                        key={i}
                        className="flex items-baseline gap-2 px-3 sm:px-3.5 py-2 sm:py-2.5 rounded-xl bg-gradient-to-r from-blue-50/70 to-indigo-50/40 border border-blue-100"
                      >
                        <span className="text-base sm:text-lg font-bold text-gray-900 leading-none tracking-[-0.01em]">
                          {output.value}
                        </span>
                        {output.suffix && (
                          <span className="text-[13px] sm:text-sm font-semibold text-gray-700">
                            {output.suffix}
                          </span>
                        )}
                        <span className="text-[12px] sm:text-[13px] text-gray-500 ml-1">
                          {output.label}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Caption */}
            <p className="mt-3 text-[11px] sm:text-xs text-gray-400 italic">
              Illustrative. Every system we build is custom to your business.
            </p>
          </div>

          {/* Logo carousel — social proof */}
          <div>
            <LogoCarousel />
          </div>
        </div>
      </div>
    </section>
  );
}
