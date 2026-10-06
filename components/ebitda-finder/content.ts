/**
 * Single source of truth for the 14-Day EBITDA Finder offer.
 *
 * Every price, deliverable, bonus, guarantee, FAQ answer and the
 * testimonial on /services/private-equity-portco-ai-integration/ is read from this
 * file, so the offer can be edited without touching a component. Copy here
 * is approved, do not reword it in passing.
 *
 * House style for this page: no em dashes anywhere in the copy.
 */

import type { IconName } from "@/components/landing/Icons";
export type { IconName };

export const BOOKING_LABEL = "Book a discovery call";

/** Anchor the nav, hero and pricing CTAs scroll to. */
export const BOOK_ANCHOR = "#book";

export const meta = {
  title: "The 14-Day EBITDA Finder for PE Operating Partners",
  description:
    "The 14-Day EBITDA Finder: an AI audit and advisory sprint for PE operating partners, by Unicorn Studio.",
  path: "/services/private-equity-portco-ai-integration/",
};

export const nav = {
  brand: "Unicorn Studio",
  links: [
    { label: "How it works", href: "#how" },
    { label: "Deliverables", href: "#deliverables" },
    { label: "Data security", href: "#security" },
    { label: "Pricing", href: "#pricing" },
  ],
};

export const hero = {
  eyebrow: "For PE operating partners and portfolio operations teams",
  headlineLead: "Find the ",
  headlineAccent: "EBITDA",
  headlineTail: " your portfolio is losing to manual work.",
  leadStrong: "The 14-Day EBITDA Finder",
  lead:
    " is an independent AI audit and advisory engagement for PE operating partners. We map, size and prioritize the AI opportunities across your portfolio companies, then hand you a roadmap your board can act on.",
  secondaryCta: { label: "See what you get", href: "#deliverables" },
  proofLinkPre: "Trusted for 2+ years as the AI partner of ",
  proofLinkFirm: "Digital Growth Equity",
  proofLinkPost: ", a UK private equity firm.",
  proofLinkCta: "Read their story",
  trust: [
    {
      icon: "shield" as IconName,
      text:
        "Full refund if we don't find $100K+ in AI opportunities, and you keep every deliverable",
    },
    {
      icon: "calendar" as IconName,
      text: "Next cohort starts 2 November 2026. Only 3 spots.",
    },
  ],
  stats: [
    { value: "14 days", label: "Top 3 quick wins delivered by day 7" },
    { value: "$10,000", label: "Fixed fee, fully credited if you build" },
    { value: "Under 3 hours", label: "Of each portco leader's time" },
    { value: "Zero data leaks", label: "Your data never leaves your systems" },
  ],
};

export const problem = {
  eyebrow: "The problem",
  headline:
    'Every portco says it is "doing AI." Few can tell you what it is worth.',
  cards: [
    {
      icon: "trend" as IconName,
      title: "Pilots without P&L impact",
      body:
        "Teams experiment with tools, but nobody ties the work to cost, margin or revenue. The value creation plan stays untouched.",
    },
    {
      icon: "cycle" as IconName,
      title: "Every portco starts from zero",
      body:
        "Each management team reinvents the same evaluation on its own. There is no repeatable playbook across the portfolio.",
    },
    {
      icon: "lock" as IconName,
      title: "Data that cannot leave the building",
      body:
        "Financials, customer records and deal data are too sensitive to leave the business. So the work stalls.",
    },
  ],
};

export const howItWorks = {
  eyebrow: "How it works",
  headline: "Fourteen days. Four phases.",
  headlineAccent: "One clear answer.",
  phases: [
    {
      days: "Days 1 to 3",
      title: "Discover",
      body:
        "Short interviews with the operating team and portco leadership, under 3 hours per leader in total. We inventory core workflows, systems and data sources.",
      callout: null,
    },
    {
      days: "Days 4 to 8",
      title: "Baseline and size",
      body:
        "We baseline your current numbers, find where time and margin leak, and estimate the savings or revenue each AI opportunity can unlock.",
      callout: "Day 7: your top 3 quick wins, delivered",
    },
    {
      days: "Days 9 to 12",
      title: "Prioritize and architect",
      body:
        "Opportunities ranked by dollar impact, cost and time to value, with a secure architecture for each that keeps data inside your systems.",
      callout: null,
    },
    {
      days: "Days 13 to 14",
      title: "Present",
      body:
        "A board-ready readout and a 90-day roadmap your team can execute with us, with another partner, or in-house.",
      callout: null,
    },
  ],
};

export const deliverables = {
  eyebrow: "What you get",
  headline: "Every deliverable solves a problem",
  headlineAccent: "your portfolio already has.",
  coreHeading: "The Core Sprint",
  bonusHeading: "Plus five bonuses",
  core: [
    {
      kicker: "Core",
      title: "Day-7 Quick Win Report",
      body:
        "Your top 3 fastest, lowest-risk AI wins, delivered halfway through the sprint so you have something to act on in week one.",
      solves: "Solves: waiting months to see any result",
      price: "$2,500",
    },
    {
      kicker: "Core",
      title: "EBITDA Opportunity Map",
      body:
        "Every viable AI use case across the portfolio companies in scope, each with a baseline, dollar impact, cost and payback.",
      solves: "Solves: no provable ROI from AI",
      price: "$15,000",
    },
    {
      kicker: "Core",
      title: "Data Readiness Assessment",
      body:
        "For each portco: what data exists, where the gaps are and what to fix first before AI can deliver.",
      solves: "Solves: messy, fragmented portco data",
      price: "$7,500",
    },
    {
      kicker: "Core",
      title: "Secure Architecture Blueprint",
      body:
        "How each AI system runs securely inside your environment, integrated with the systems your portcos already use, with no data leaving it.",
      solves: "Solves: data security and confidentiality risk",
      price: "$5,000",
    },
    {
      kicker: "Core",
      title: "Board-Ready Readout and 90-Day Roadmap",
      body:
        "Findings formatted to drop straight into the value creation plan and the exit story, with a sequenced 90-day plan.",
      solves: "Solves: exit pressure and long hold periods",
      price: "$5,000",
    },
  ],
  bonuses: [
    {
      kicker: "Bonus 1",
      title: "AI ROI Tracking Framework",
      body:
        "The before-and-after KPIs and scorecard that let you prove every future AI result to your IC and LPs.",
      solves: "Solves: results nobody can attribute to AI",
      price: "$7,500",
    },
    {
      kicker: "Bonus 2",
      title: "Workflow Redesign Blueprints",
      body:
        "For the top 3 opportunities: how the process actually changes, and who owns what.",
      solves: "Solves: buying AI tools without changing how the business runs",
      price: "$10,000",
    },
    {
      kicker: "Bonus 3",
      title: "Portfolio AI Playbook and Readiness Scorecard",
      body:
        "A reusable framework for every future acquisition, from diligence to the 100-day plan.",
      solves: "Solves: every portco starting from zero",
      price: "$10,000",
    },
    {
      kicker: "Bonus 4",
      title: "LP-Ready Governance and Risk Summary",
      body:
        "Data handling, access control and model risk, written for LP and compliance conversations.",
      solves: "Solves: LP scrutiny on AI",
      price: "$2,500",
    },
    {
      kicker: "Bonus 5",
      title: "Leadership AI Briefing",
      body:
        "A working session for each portco management team. Total time asked of each leader stays under 3 hours, so the business keeps running.",
      solves: "Solves: stretched management bandwidth",
      price: "$3,000",
    },
  ],
  summary: {
    totalValueLabel: "Total value",
    totalValue: "$68,000",
    investmentLabel: "Your investment",
    investment: "$10,000",
    creditLabel: "And if you build",
    credit: "The full $10,000 is credited toward your build budget",
  },
};

export const security = {
  eyebrow: "Data security by design",
  headline: "Your data never leaves your systems.",
  lead:
    "Every system we recommend is designed so your financials, customer records and deal data stay inside your walls. Nothing is shared outside.",
  cards: [
    {
      icon: "server" as IconName,
      title: "Data stays in your environment",
      body:
        "AI runs inside your own environment, so sensitive information is never exposed outside the business.",
    },
    {
      icon: "shield" as IconName,
      title: "Nothing shared outside",
      body:
        "No sensitive data is sent to outside services. Closed-network setups are supported.",
    },
    {
      icon: "unlink" as IconName,
      title: "You own the stack",
      body: "No vendor lock-in. Your systems and your data remain yours.",
    },
  ],
};

export const proof = {
  eyebrow: "Who we are",
  headline: "We already work inside private equity.",
  headlineAccent: "Across the whole deal cycle.",
  lead:
    "Unicorn Studio is an AI product team of engineers, not slide-makers. Our recommendations come from building and running AI systems for PE firms and buy-side acquirers, not from theory.",
  testimonial: {
    paragraphs: [
      "For more than two years, Unicorn Studio has been our AI and technology partner across the whole deal cycle. On the buy side, they built our platform for deal sourcing, valuation, due diligence and outreach, which now sits at the centre of how we find and assess acquisitions. After acquisition, they help us integrate AI into our portfolio companies, and the results have been remarkable: our portfolio companies achieved 2x growth within six months.",
      "What sets Unicorn Studio apart is that they understand how private equity actually works. They start with the business problem, not the technology, listen carefully, welcome feedback and adapt as new information emerges. Saidur and his team bring real energy and ownership to the work.",
    ],
    closing:
      "As a PE owner, I'd recommend Unicorn Studio to any private equity firm or buy-side acquirer that wants to use AI to source better deals and create more value in its portfolio.",
    initials: "DP",
    name: "Dudley Peacock",
    role: "Owner, Digital Growth Equity (UK private equity)",
  },
  cases: [
    {
      kicker: "Private equity · 2+ years",
      name: "Digital Growth Equity",
      statValue: "2x",
      statLabel: "portfolio company growth within 6 months",
      body:
        "A deal platform covering sourcing, valuation, due diligence and outreach, plus ongoing AI integration across their portfolio companies after acquisition.",
    },
    {
      kicker: "Buy-side acquirer",
      name: "White Knight Acquisitions",
      statValue: null,
      statLabel: null,
      body:
        "WKA, a buy-side deal sourcing platform with a Deal Copilot Chrome extension that turns sourcing and screening into a guided, AI-assisted workflow.",
    },
  ],
};

export const valueMath = {
  eyebrow: "The math at exit",
  headlineLead: "$10,000 is the ",
  headlineAccent: "smallest number",
  headlineTail: " on this page.",
  lead:
    "Every dollar of EBITDA you add is multiplied at exit. Our guarantee threshold alone, applied at an illustrative 8x multiple, is worth far more than the fee.",
  cards: [
    {
      label: "New annual EBITDA (guarantee minimum)",
      value: "$100,000",
      dark: false,
      note: null,
    },
    { label: "Exit multiple (illustrative)", value: "8x", dark: false, note: null },
    { label: "Added enterprise value", value: "$800,000", dark: true, note: null },
    {
      label: "Your investment",
      value: "$10,000",
      dark: false,
      note: "Credited back if you build",
    },
  ],
  tableHeading: "What one line of your Opportunity Map looks like",
  tableLead:
    "Every opportunity is sized the same way: a baseline, an impact, a cost and a payback. Illustrative example, not a client result.",
  columns: [
    "Portco",
    "Opportunity",
    "Baseline today",
    "Est. annual impact",
    "Build cost",
    "Payback",
    "Priority",
  ],
  rows: [
    {
      portco: "B2B distributor",
      opportunity: "AI order and invoice processing",
      baseline: "3 staff keying orders manually; 2-day turnaround",
      impact: "$140,000",
      cost: "$35,000",
      payback: "3 months",
      priority: "Quick win",
    },
  ],
};

export const pricing = {
  eyebrow: "Investment",
  headline: "One sprint. One fixed fee.",
  headlineAccent: "Zero risk.",
  lead:
    "This is an audit and advisory engagement only. There is no obligation to build anything with us. If you choose to move forward after the sprint, we will prepare a custom implementation proposal based on your roadmap.",
  notes: [
    {
      icon: "calendar" as IconName,
      title: "Next cohort starts 2 November 2026: only 3 spots",
      body:
        "Every sprint is run by our senior team, not handed off. To protect quality, we run monthly cohorts of 3 funds. When a cohort fills, the next one opens the following month.",
    },
    {
      icon: "clock" as IconName,
      title: "Bonuses for the November cohort only",
      body:
        "All five bonuses, worth $33,000, are included for funds that join the 2 November cohort.",
    },
  ],
  card: {
    kicker: "The 14-Day EBITDA Finder",
    totalValueLabel: "Total value",
    totalValueStruck: "$68,000",
    price: "$10,000",
    priceNote: "fixed fee, 14 days",
    /**
     * The approved design carries a literal "[NUMBER]" placeholder here:
     * "Scope: up to [NUMBER] portfolio companies". Set this to the real
     * figure and the scope line renders. While it is null the line is
     * omitted, so an unfilled placeholder never reaches a live page.
     */
    scopePortcos: null as number | null,
    coreHeading: "The Core Sprint",
    coreItems: [
      "Day-7 Quick Win Report",
      "EBITDA Opportunity Map",
      "Data Readiness Assessment",
      "Secure Architecture Blueprint",
      "Board-Ready Readout and 90-Day Roadmap",
    ],
    bonusHeading: "Five bonuses",
    bonusItems: [
      "AI ROI Tracking Framework",
      "Workflow Redesign Blueprints",
      "Portfolio AI Playbook and Readiness Scorecard",
      "LP-Ready Governance and Risk Summary",
      "Leadership AI Briefing",
    ],
    guarantees: [
      {
        icon: "shield" as IconName,
        title: "The Opportunity Guarantee",
        body:
          "If we don't identify at least $100,000 in annualized AI opportunities across your portfolio (10x your fee), you get a full refund. And you keep every deliverable.",
      },
      {
        icon: "arrowOut" as IconName,
        title: "100% build credit",
        body:
          "Start your build within 60 days of the readout and the full $10,000 is added to your buildout budget.",
      },
    ],
  },
};

export const faq = {
  heading: "Common questions",
  items: [
    {
      question: "Is this a sales pitch for a build project?",
      answer:
        "No. The sprint is a standalone audit and advisory engagement. You keep the roadmap and can implement it with us, another partner or your own team.",
    },
    {
      question: "What if you don't find enough opportunities?",
      answer:
        "Then you don't pay. If we don't identify at least $100,000 in annualized AI opportunities across your portfolio, ten times the fee, we refund the full $10,000, and you still keep every deliverable.",
    },
    {
      question: "What happens after day 14?",
      answer:
        "If you want to implement, we prepare a custom proposal based on the priorities in your roadmap. Start the build within 60 days of the readout and the full $10,000 sprint fee is credited toward your build budget. If not, the engagement ends with the readout.",
    },
    {
      question: "How do you handle our sensitive data?",
      answer:
        "Every system we recommend is designed so that no data leaves your systems. Your financials, customer records and deal data stay inside the business.",
    },
    {
      question: "Who should be involved on our side?",
      answer:
        "Typically an operating partner as sponsor, plus leadership and key process owners at each portfolio company in scope. We keep it light: under 3 hours of each portco leader's time across the full 14 days.",
    },
  ],
};

export const finalCta = {
  headline: "Know exactly where AI pays off in your portfolio. In 14 days.",
  lead:
    "Book a 30-minute discovery call. We will confirm scope, timing and whether the sprint is the right fit for your fund.",
  badges: [
    "Next cohort starts 2 November 2026",
    "Only 3 spots per cohort",
    "Bonuses for the November cohort only",
    "Full refund guarantee",
  ],
};

export const footer = {
  blurb: "Unicorn Studio. AI systems for private equity portfolio operations.",
  copyright: "© 2026 Unicorn Studio",
};
