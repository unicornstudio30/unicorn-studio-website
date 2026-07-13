"use client";

import Image from "next/image";
import TopNavigation from "@/components/TopNavigation";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import { useCalendly } from "@/components/CalendlyProvider";
import { testimonials } from "@/components/testimonialData";

const gtmTestimonials = [testimonials.lokesh, testimonials.daniel];

const modules = [
  {
    number: "01",
    tag: "Foundation",
    title: "Ideal-customer definition",
    description:
      "We turn your ICP into a machine-readable spec: firmographic filters, tech stack signals, hiring signals, funding events, buying triggers. The system stops guessing and starts targeting.",
    outputs: [
      "Written ICP document you can hand to a new hire",
      "Signal library the system watches for daily",
      "Exclusion rules (industries, sizes, geos to skip)",
    ],
  },
  {
    number: "02",
    tag: "Discovery",
    title: "Prospect building",
    description:
      "Continuous pipeline of net-new accounts and contacts that match your ICP. Not a static list scraped once. A live sourcing engine that keeps loading fresh names into your funnel.",
    outputs: [
      "50-500 qualified new prospects per week",
      "Multi-source (Apollo, LinkedIn Sales Nav, Clearbit, custom scrapers)",
      "Deduped against your existing CRM automatically",
    ],
  },
  {
    number: "03",
    tag: "Enrichment",
    title: "Data enrichment & scoring",
    description:
      "Every prospect gets enriched with role, seniority, tenure, tech stack, recent activity, and trigger events. Then scored against your ICP. Only high-fit contacts move to the next stage.",
    outputs: [
      "Waterfall enrichment across 4-6 data providers",
      "Fit score 0-100 with breakdown by dimension",
      "Reject bucket for prospects that don't clear the bar",
    ],
  },
  {
    number: "04",
    tag: "Outreach",
    title: "Personalised multi-channel outreach",
    description:
      "AI writes the messages, not a template. Every email, LinkedIn note, and follow-up is grounded in the prospect's actual role, company, and recent activity. Sent on the channel and cadence that fits them.",
    outputs: [
      "Email, LinkedIn, WhatsApp, and phone-ready copy",
      "Per-prospect research inserted into every message",
      "Deliverability warm-up and reply monitoring built in",
    ],
  },
  {
    number: "05",
    tag: "Qualification",
    title: "Conversation & qualification",
    description:
      "When a prospect replies, the AI handles the initial back-and-forth: answers questions, books meetings, requalifies stragglers. Only real intent hits your calendar.",
    outputs: [
      "24/7 reply handling across every channel",
      "Meeting booking via Cal.com / Calendly",
      "Human handoff the moment a reply gets nuanced",
    ],
  },
  {
    number: "06",
    tag: "Handoff",
    title: "CRM sync & handoff",
    description:
      "Every touchpoint, every reply, every meeting is logged in your CRM in real time. Your sales team sees the full context the moment they open the record.",
    outputs: [
      "Native HubSpot, Salesforce, Pipedrive, or Attio sync",
      "Full conversation history on the contact record",
      "Slack notifications for booked meetings and hot replies",
    ],
  },
  {
    number: "07",
    tag: "Reporting",
    title: "Analytics & optimisation",
    description:
      "One dashboard, one number: pipeline generated per week. Then the layer beneath: which segments book, which channels convert, which messaging lifts reply rates. We rewrite what isn't working every two weeks.",
    outputs: [
      "Live pipeline dashboard (share with your board)",
      "A/B tests running continuously in the background",
      "Bi-weekly review call to steer next iteration",
    ],
  },
];

const process = [
  {
    step: "Week 1",
    title: "System audit",
    description:
      "We take a working session with your founder, head of sales, and RevOps. We map your current GTM: who you sell to, what's working, where prospects leak, which tools you already run. No proposals until we've seen the ground truth.",
  },
  {
    step: "Weeks 2-4",
    title: "Build the pipes",
    description:
      "ICP spec, sourcing plumbing, enrichment waterfalls, CRM sync, first outreach sequences. We build against your infrastructure (HubSpot, Attio, Salesforce, whatever you run). No throwaway tooling.",
  },
  {
    step: "Weeks 5-6",
    title: "Warm start",
    description:
      "Slow rollout: 50 prospects per day, tight replies, first meetings booked. We watch every reply, tune every message. By the end of week 6 you've had your first three sales calls from the system.",
  },
  {
    step: "Weeks 7-12",
    title: "Ramp",
    description:
      "Volume goes up. Segments split. Winning messages get promoted; losers get killed. Bi-weekly reviews with your sales lead. By month 3 the system is generating 25-40 sales conversations per month, on autopilot.",
  },
  {
    step: "Month 4+",
    title: "Ongoing operation",
    description:
      "Fully autopilot with a monthly optimisation call. We stay on it: new ICPs added quarterly, messaging refreshed monthly, deliverability watched daily. Guaranteed pipeline output or we work for free until it hits.",
  },
];

const outcomes = [
  { number: "25-40", label: "sales conversations booked per month" },
  { number: "80%", label: "reduction in SDR headcount cost" },
  { number: "6 weeks", label: "from kickoff to first booked meeting" },
  { number: "90 days", label: "to fully autopilot pipeline" },
];

const gtmFaqs = [
  {
    question: "How is this different from hiring an SDR agency?",
    answer:
      "An SDR agency rents you 2-3 humans for $8-12k/month who send templated messages until you fire them. Our AI GTM System runs 24/7, personalises every message with real research, and gets better every week as we tune it. Same monthly cost, 5-10x the throughput, and the system stays yours.",
  },
  {
    question: "How is this different from tools like Clay, Instantly, or Apollo?",
    answer:
      "Those are ingredients, not a system. Buying Clay doesn't build your ICP. Buying Instantly doesn't warm your domains, tune your copy, or handle replies. We orchestrate best-in-class tools into one system that runs for you, then we operate it. You get the outcome, not more software to manage.",
  },
  {
    question: "What if we already have SDRs? Does this replace them?",
    answer:
      "Usually augments, not replaces. The system handles top-of-funnel volume that SDRs can't sustain, then your humans take over the moment a conversation gets nuanced. Most clients redeploy their SDR team into AE support or expansion, not layoffs.",
  },
  {
    question: "Which CRMs and tools do you work with?",
    answer:
      "HubSpot, Salesforce, Pipedrive, Attio natively. For outreach we lean on Instantly, Smartlead, and Apollo. For enrichment: Clearbit, Apollo, ZoomInfo, LinkedIn Sales Nav. If you run something else, tell us at kickoff and we integrate.",
  },
  {
    question: "What's the guarantee?",
    answer:
      "If we don't hit the agreed pipeline output by month 3 (booked sales conversations from qualified ICP accounts), we work for free until we do. Written into the contract.",
  },
  {
    question: "What does this cost?",
    answer:
      "Setup is a one-time build fee sized to your ICP complexity and integration surface. Then a monthly retainer covers the operation. We share a specific quote after the audit call once we've seen your stack. Every engagement pays for itself inside 90 days on SDR replacement alone.",
  },
];

export default function AIGTMSystemPage() {
  const { openModal } = useCalendly();

  return (
    <>
      <TopNavigation />
      <main className="min-h-screen bg-white">
        {/* ---------- HERO ---------- */}
        <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-white">
          <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[700px] bg-gradient-to-b from-blue-200/30 via-cyan-100/20 to-transparent rounded-[50%] blur-3xl" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#80808010_1px,transparent_1px),linear-gradient(to_bottom,#80808010_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)]" />

          <div className="relative max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs sm:text-sm font-semibold mb-6 sm:mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              The AI GTM System
            </div>
            <h1 className="text-[2.6rem] sm:text-6xl md:text-7xl font-bold text-gray-900 leading-[1.05] tracking-[-0.02em] mb-6 sm:mb-7 text-balance">
              Prospects to pipeline,{" "}
              <span className="gradient-text-modern">on autopilot.</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-[1.6] mb-8 sm:mb-10 text-pretty">
              One AI system that runs your entire go-to-market. Finds the right accounts, enriches every contact, writes the outreach, books the meetings, syncs your CRM, and reports the numbers. Built once, runs forever.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-12 sm:mb-14 px-4">
              <button
                type="button"
                onClick={openModal}
                className="btn-primary w-full sm:w-auto px-8 py-4 text-white rounded-xl font-semibold text-base"
              >
                Book a free AI consultation
              </button>
              <a
                href="#how-it-works"
                className="btn-secondary w-full sm:w-auto px-8 py-4 bg-white text-gray-900 rounded-xl font-semibold text-base border border-gray-300"
              >
                See how it works
              </a>
            </div>

            {/* Outcome strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto">
              {outcomes.map((o) => (
                <div key={o.label} className="text-left sm:text-center">
                  <div className="text-2xl sm:text-3xl font-bold gradient-text-modern tracking-[-0.01em] mb-1">
                    {o.number}
                  </div>
                  <div className="text-xs sm:text-[13px] text-gray-500 leading-snug">
                    {o.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- HOW IT WORKS ---------- */}
        <section id="how-it-works" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs sm:text-sm font-semibold mb-5">
                Seven modules, one system
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-[-0.02em] leading-[1.1] mb-5 text-balance">
                How the AI GTM System works
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-[1.6]">
                Each module runs continuously. Together they replace the SDR stack you would otherwise assemble from six vendors and three headcount lines.
              </p>
            </div>

            <div className="space-y-4 sm:space-y-5">
              {modules.map((m) => (
                <article
                  key={m.number}
                  className="grid grid-cols-1 lg:grid-cols-[auto_1fr_auto] gap-6 lg:gap-8 items-start p-6 sm:p-8 lg:p-9 rounded-2xl border border-gray-200 bg-white hover:border-blue-300 hover:shadow-[0_20px_50px_-20px_rgba(59,130,246,0.25)] transition-all"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-4xl lg:text-5xl font-black text-gray-200 leading-none tabular-nums">
                      {m.number}
                    </span>
                    <span className="inline-flex items-center h-6 mt-2 px-2.5 rounded-md bg-blue-50 text-blue-700 text-[10px] font-bold uppercase tracking-[0.14em]">
                      {m.tag}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 tracking-[-0.01em]">
                      {m.title}
                    </h3>
                    <p className="text-[15px] sm:text-base text-gray-600 leading-[1.6]">
                      {m.description}
                    </p>
                  </div>
                  <ul className="lg:min-w-[260px] space-y-1.5 text-sm text-gray-600">
                    {m.outputs.map((o) => (
                      <li key={o} className="flex items-start gap-2">
                        <svg
                          className="w-4 h-4 flex-shrink-0 mt-0.5 text-blue-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{o}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- PROCESS ---------- */}
        <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs sm:text-sm font-semibold mb-5">
                Our process
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-[-0.02em] leading-[1.1] mb-5 text-balance">
                From audit to autopilot,{" "}
                <span className="gradient-text-modern">in 90 days.</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-[1.6]">
                No twelve-week discovery, no seven-figure &ldquo;transformation&rdquo;. A tight build, a warm start, then months of compounding.
              </p>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 sm:left-6 top-4 bottom-4 w-px bg-gradient-to-b from-blue-200 via-blue-300 to-blue-200" />
              <div className="space-y-8">
                {process.map((p, i) => (
                  <div key={p.step} className="relative pl-12 sm:pl-16">
                    <div className="absolute left-0 top-1 w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-white border-2 border-blue-600 flex items-center justify-center shadow-md">
                      <span className="text-xs sm:text-sm font-bold text-blue-600 tabular-nums">
                        {i + 1}
                      </span>
                    </div>
                    <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-blue-600 mb-1.5">
                      {p.step}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 tracking-[-0.01em]">
                      {p.title}
                    </h3>
                    <p className="text-[15px] sm:text-base text-gray-600 leading-[1.6] max-w-2xl">
                      {p.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ---------- GUARANTEE ---------- */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs sm:text-sm font-semibold mb-6">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              The guarantee
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-[-0.02em] leading-[1.1] mb-5 text-balance">
              Pipeline output by month 3.{" "}
              <span className="gradient-text-modern">Or we work for free.</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-[1.65] mb-8 sm:mb-10 text-pretty">
              We agree on a specific pipeline number before we start (booked sales conversations from qualified ICP accounts). If the system misses that number by month 3, every hour after that is on us until it hits.
            </p>
            <p className="text-sm text-gray-500">
              Written into the contract. No small print, no clawback games.
            </p>
          </div>
        </section>

        {/* ---------- TESTIMONIALS ---------- */}
        <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-gray-50 to-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10 sm:mb-14">
              <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs sm:text-sm font-semibold mb-5">
                What clients say
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-[-0.02em] leading-[1.1] mb-4 text-balance">
                Real teams,{" "}
                <span className="gradient-text-modern">real pipeline.</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-[1.6]">
                The proof isn&rsquo;t in the pitch deck. It&rsquo;s in what shipped and what changed.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 sm:gap-7">
              {gtmTestimonials.map((t) => (
                <figure key={t.name} className="relative bg-white rounded-2xl border border-gray-200 shadow-sm p-7 sm:p-8 flex flex-col">
                  <span className="inline-flex items-center h-6 mb-5 px-2.5 rounded-md bg-blue-50 text-blue-700 text-[10px] font-bold uppercase tracking-[0.14em] self-start">
                    {t.tag}
                  </span>
                  <blockquote className="text-[15px] sm:text-base text-gray-800 leading-[1.7] mb-6 flex-1">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {t.stats.map((s) => (
                      <span key={s.label} className={`inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-semibold border ${s.bg} ${s.text} ${s.border}`}>
                        {s.label}
                      </span>
                    ))}
                  </div>
                  <figcaption className="flex items-center gap-3 pt-5 border-t border-gray-100">
                    <div className="w-11 h-11 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
                      <Image src={t.image} alt={t.name} width={44} height={44} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-gray-900 leading-tight">{t.name}</div>
                      <div className="text-xs text-gray-500 leading-tight mt-0.5">{t.role}</div>
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- FAQ ---------- */}
        <FAQ
          faqs={gtmFaqs}
          eyebrow="AI GTM System"
          headingLead="Common questions"
          headingHighlight="about the AI GTM System."
          lead="The ones founders and heads-of-sales ask before we sign. Don&rsquo;t see yours?"
        />

        {/* ---------- CTA ---------- */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 sm:mb-6 tracking-[-0.02em] leading-[1.1] text-balance">
              Stop paying SDR salaries for template emails.
            </h2>
            <p className="text-lg sm:text-xl text-blue-100 mb-8 sm:mb-10 leading-[1.6]">
              Book a free consultation. We&rsquo;ll show you what the system would look like for your ICP, and what pipeline it would realistically produce in 90 days.
            </p>
            <button
              type="button"
              onClick={openModal}
              className="btn-primary-light w-full sm:w-auto px-8 py-4 text-blue-700 rounded-xl font-semibold text-base sm:text-lg"
            >
              Book a free AI consultation
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
