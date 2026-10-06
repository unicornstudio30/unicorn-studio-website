/**
 * Single source of truth for the Deal Flow Engine offer.
 *
 * Every price, bonus, guarantee, FAQ answer and testimonial on /services/m-and-a-ai-integration/
 * is read from this file, so the offer can be edited without touching a
 * single component. Copy here is approved, do not reword it in passing.
 *
 * House style for this page: no em dashes anywhere in the copy.
 */

import type { IconName } from "@/components/landing/Icons";
export type { IconName };

export const BOOKING_LABEL = "Book a deal-flow call";

/** Anchor the nav, hero and pricing CTAs scroll to. */
export const BOOK_ANCHOR = "#book";

export const meta = {
  title: "The 30-Day Deal Flow Engine for Buy-Side Acquirers",
  description:
    "A custom AI deal sourcing system built around your buy box. Live in 30 days.",
  path: "/services/m-and-a-ai-integration/",
};

export const nav = {
  brand: "Unicorn Studio",
  links: [
    { label: "How it works", href: "#how" },
    { label: "What you get", href: "#stack" },
    { label: "Results", href: "#proof" },
    { label: "Pricing", href: "#pricing" },
  ],
};

export const hero = {
  eyebrow:
    "For independent sponsors, search funds, buy-side advisors and lower-middle-market PE",
  headline: "Find the off-market deals",
  headlineAccent: "your competitors never see.",
  leadStrong: "The 30-Day Deal Flow Engine",
  lead:
    " is a custom AI system built around your buy box. It sources companies, scores every one against your mandate with evidence, spots owners who are ready to sell, and drafts the first message. Built and run by our team. Live in 30 days.",
  secondaryCta: { label: "See what you get", href: "#stack" },
  proofLinkPre: "The deal platform behind ",
  proofLinkFirm: "Digital Growth Equity",
  proofLinkMid: " (UK private equity) and ",
  proofLinkSecond: "White Knight Acquisitions",
  proofLinkCta: "See the results",
  trust: [
    {
      icon: "shield" as IconName,
      text:
        "100 qualified targets in your first 30 days live, or we work free until you have them",
    },
    {
      icon: "clock" as IconName,
      text: "Next build slot: 2 November 2026. Only 3 firms per month.",
    },
  ],
  stats: [
    { value: "Day 14", label: "Your first 50 scored targets, delivered" },
    { value: "30 days", label: "From kickoff to a live engine" },
    { value: "Zero hires", label: "No analysts, engineers or new tools to manage" },
    { value: "Your buy box", label: "Scored on your criteria, not a vendor's" },
  ],
};

export const problem = {
  eyebrow: "The problem",
  headline: "You didn't get into acquisitions to",
  headlineAccent: "build spreadsheets.",
  lead:
    "Every buy-side team we talk to says the same thing: the best deals are off-market, and finding them by hand eats the week.",
  cards: [
    {
      icon: "lines" as IconName,
      title: "Lists that don't fit the mandate",
      body:
        "Bought lists and generic platforms return companies that miss your criteria, and the size data often disagrees from one database to the next.",
    },
    {
      icon: "grid" as IconName,
      title: "Screening by spreadsheet",
      body:
        "Every target gets scored by hand, one tab at a time. The spreadsheet breaks before the market runs out of companies.",
    },
    {
      icon: "mail" as IconName,
      title: "Outreach owners ignore",
      body:
        "Manual LinkedIn work takes hours and books too few calls. Owners have learned to tune out generic approaches.",
    },
    {
      icon: "eye" as IconName,
      title: "Sellers spotted too late",
      body:
        "The signals that a founder is ready, like an expired listing or no successor in place, go unwatched until a broker calls you.",
    },
  ],
};

export const howItWorks = {
  eyebrow: "How it works",
  headline: "Thirty days. Four phases.",
  headlineAccent: "A pipeline that fills itself.",
  lead:
    "Your involvement is about 4 hours in total: one workshop, one calibration review and one handover.",
  phases: [
    {
      days: "Days 1 to 5",
      title: "Map your buy box",
      body:
        "A workshop to capture every mandate, the size basis you buy on, sectors, geographies and red flags. We turn it into a scoring rubric you sign off.",
      pill: null,
    },
    {
      days: "Days 6 to 14",
      title: "Build and source",
      body:
        "We connect US and UK company data and broker listings, then run your first sourcing pass.",
      pill: "Day 14: first 50 scored targets in your hands",
    },
    {
      days: "Days 15 to 25",
      title: "Calibrate",
      body:
        "You mark our verdicts right or wrong. We tune the scoring and add the off-market signals and outreach drafts.",
      pill: null,
    },
    {
      days: "Days 26 to 30",
      title: "Go live",
      body:
        "Pipeline, watchlist, Deal Copilot and outreach switched on, with team onboarding. After that, we run and improve it every month.",
      pill: null,
    },
  ],
};

export const valueStack = {
  eyebrow: "What you get",
  headline: "Your own AI deal team.",
  headlineAccent: "Every piece solves a problem you already have.",
  coreHeading: "The Deal Flow Engine",
  bonusHeading: "Plus five bonuses",
  core: [
    {
      kicker: "Core",
      title: "Buy Box and Mandate Scoring Engine",
      body:
        "Your mandates turned into code: sector, geography, and size in whichever terms you buy on (revenue, EBITDA, cash flow or price). Run several mandates side by side. Every company gets a Qualifies, Potential or Reject verdict with the evidence behind it.",
      solves: "Solves: generic tools that don't understand your mandate",
      price: "$15,000",
    },
    {
      kicker: "Core",
      title: "Deal Sourcing Engine",
      body:
        "US and UK company data pulled, cleaned and de-duplicated in one place, plus on-market broker listings, so you see both the listed deals and the thousands of owners who have never been approached.",
      solves:
        "Solves: thin, stale, bought lists and conflicting data across databases",
      price: "$12,000",
    },
    {
      kicker: "Core",
      title: "Off-Market Signal Watchlist",
      body:
        "Tracks the signals that point to a seller before a broker gets the mandate: expired broker listings, succession and owner-age signals, and company changes. You get alerted when a watched company moves.",
      solves: "Solves: finding sellers only after everyone else has",
      price: "$8,000",
    },
    {
      kicker: "Core",
      title: "Owner Contact Enrichment and AI Outreach",
      body:
        "Finds the decision-maker, enriches the profile from the web and LinkedIn, and drafts a personal first message for you to review and send. Nothing goes out without your approval.",
      solves:
        "Solves: hours of manual LinkedIn work and owners tired of amateur approaches",
      price: "$7,500",
    },
    {
      kicker: "Core",
      title: "Deal Pipeline and Deal Copilot",
      body:
        "One pipeline from first touch to LOI, plus a Chrome extension that scores and saves any company or listing you are looking at, straight into your pipeline.",
      solves:
        "Solves: deals scattered across spreadsheets, inboxes and browser tabs",
      price: "$7,500",
    },
    {
      kicker: "Core",
      title: "Valuation and Diligence Assistant",
      body:
        "First-pass financials parsed into turnover and purchase-price ranges, and a first read of diligence documents that flags what needs a human look.",
      solves:
        "Solves: days of first-pass number crunching on deals you will reject",
      price: "$10,000",
    },
  ],
  bonuses: [
    {
      kicker: "Bonus 1",
      title: "Buy Box Workshop and Mandate Playbook",
      body:
        "A working session to sharpen your criteria before we build, written up as a one-page mandate you can share with brokers and co-investors.",
      solves: "Solves: vague criteria that waste everyone's time",
      price: "$2,500",
    },
    {
      kicker: "Bonus 2",
      title: "90-Day Scoring Calibration",
      body:
        "For three months we tune the scoring to your accept and reject decisions, so the engine learns to think like your deal team.",
      solves: "Solves: scores that look smart but miss your judgement",
      price: "$5,000",
    },
    {
      kicker: "Bonus 3",
      title: "Owner Outreach Script Library",
      body:
        "First-touch and follow-up sequences written for founder-owned businesses, ready to load into the outreach module.",
      solves: "Solves: blank-page outreach and low reply rates",
      price: "$2,500",
    },
    {
      kicker: "Bonus 4",
      title: "Monday Deal Digest",
      body:
        "Every Monday, the newest qualified targets and watchlist alerts land in your inbox or Slack, ranked and ready to act on.",
      solves: "Solves: forgetting to check the system",
      price: "$3,000",
    },
    {
      kicker: "Bonus 5",
      title: "Team Onboarding and Video Library",
      body:
        "Live onboarding for your team plus short recorded walkthroughs, so a new analyst or VA is productive on day one.",
      solves: "Solves: tools nobody on the team actually uses",
      price: "$1,500",
    },
  ],
  summary: {
    totalValueLabel: "Total value",
    totalValue: "$74,500",
    setupLabel: "Your setup investment",
    setup: "$4,000",
    thenLabel: "Then",
    then: "$1,500 a month to host, run and keep improving it",
  },
};

export const sampleOutput = {
  eyebrow: "What lands in your pipeline",
  headline: "Not a list of names.",
  headlineAccent: "A verdict you can act on.",
  lead:
    "Every target arrives scored against your mandate, with the evidence and the signal that makes it worth a call. Illustrative examples, not real companies.",
  columns: [
    "Company",
    "Mandate",
    "Size basis",
    "Verdict",
    "Evidence and signals",
    "Next step",
  ],
  rows: [
    {
      company: "Hartwell Precision Ltd (example)",
      mandate: "UK manufacturing, £1m to £3m EBITDA",
      sizeBasis: "EBITDA band, est. from filed accounts",
      verdict: "Qualifies",
      verdictTone: "pass" as const,
      evidence:
        "Owner aged 64, no named successor; listing expired 4 months ago",
      nextStep: "Draft intro ready for review",
    },
    {
      company: "Lakeview HVAC Services (example)",
      mandate: "US home services, $1m to $2m cash flow",
      sizeBasis: "Cash flow band, est. from revenue and headcount",
      verdict: "Potential",
      verdictTone: "maybe" as const,
      evidence:
        "Revenue fits; two sources disagree on size, flagged for a check",
      nextStep: "Verify size, then approach",
    },
  ],
};

export const proof = {
  eyebrow: "Proof",
  headline: "Already running inside",
  headlineAccent: "buy-side firms.",
  testimonial: {
    paragraphs: [
      "For more than two years, Unicorn Studio has been our AI and technology partner across the whole deal cycle. On the buy side, they built our platform for deal sourcing, valuation, due diligence and outreach, which now sits at the centre of how we find and assess acquisitions.",
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
      kicker: "Buy-side acquirer, US",
      name: "White Knight Acquisitions",
      stats: [
        { value: "2,247", label: "companies matched one manufacturing buy box" },
        { value: "42 of 50", label: "first scored targets qualified" },
        { value: "12.5x", label: "more records per pull (20 to 250)" },
      ],
      body:
        "WKA, a deal sourcing platform with custom buy box scoring, broker-listing discovery, watchlist, pipeline and the Deal Copilot Chrome extension.",
    },
    {
      kicker: "Private equity, UK · 2+ years",
      name: "Digital Growth Equity",
      stats: [],
      body:
        "A buy-side platform covering sourcing, valuation, due diligence and outreach, built on UK company data with director and company filters, web and LinkedIn enrichment, and AI-drafted outreach reviewed by the deal team.",
    },
  ],
};

export const dealMath = {
  eyebrow: "The math",
  headline: "One deal pays for",
  headlineAccent: "years of this.",
  lead:
    "Compare a year of the engine with a year of doing it by hand. Illustrative numbers. Plug in your own.",
  cards: [
    {
      label: "A junior sourcing analyst (illustrative)",
      value: "$70,000+",
      highlight: false,
      note: "per year, works business hours, one mandate at a time",
    },
    {
      label: "The Deal Flow Engine, year one",
      value: "$22,000",
      highlight: true,
      note: "$4,000 setup plus 12 months at $1,500",
    },
    {
      label: "Advisory or success fee on one closed deal (illustrative)",
      value: "$100,000+",
      highlight: false,
      note: "on a typical lower-middle-market acquisition",
    },
  ],
};

export const fit = {
  eyebrow: "Who this is for",
  headline: "Built for buyers.",
  headlineAccent: "Only buyers.",
  goodHeading: "A great fit if you",
  good: [
    "Acquire or advise on acquisitions of founder-owned businesses",
    "Have a clear buy box, or want help writing one",
    "Want off-market deal flow, not just what brokers send",
    "Would rather run deals than run spreadsheets",
  ],
  badHeading: "Not a fit if you",
  bad: [
    "Are a sell-side broker or banker looking for buyers",
    "Want a self-serve database login rather than a system built for you",
    "Need US government or classified work",
  ],
};

export const security = {
  eyebrow: "Private by design",
  headline: "Your mandates are",
  headlineAccent: "nobody else's business.",
  lead:
    "Your buy box, pipeline and notes are the edge you are paying for. We treat them that way.",
  cards: [
    {
      icon: "server" as IconName,
      title: "A dedicated system",
      body:
        "Your engine runs as its own instance, not a shared database where your targets sit next to another buyer's.",
    },
    {
      icon: "shield" as IconName,
      title: "Closed-network option",
      body:
        "For regulated firms, we run it on your own server with open-weight models, so nothing leaves your environment.",
    },
    {
      icon: "unlink" as IconName,
      title: "You own the data",
      body:
        "Your targets, scores, notes and pipeline are yours. Export everything, any time.",
    },
  ],
};

export const pricing = {
  eyebrow: "Investment",
  headline: "One setup fee. One monthly fee.",
  headlineAccent: "All the risk is ours.",
  lead:
    "We build the engine, host it, run it and improve it every month. You show up to the calls the engine books for you.",
  notes: [
    {
      icon: "clock" as IconName,
      title: "Next build slot: 2 November 2026. Only 3 firms per month.",
      body:
        "Every engine is built by our senior team and calibrated by hand. To protect quality we start 3 new firms a month. When the month fills, the next opens.",
    },
    {
      icon: "gift" as IconName,
      title: "Bonuses for the November start only",
      body:
        "All five bonuses, worth $14,500, are included for firms that start building on 2 November.",
    },
  ],
  card: {
    kicker: "The 30-Day Deal Flow Engine",
    totalValueLabel: "Total value",
    totalValueStruck: "$74,500",
    price: "$4,000",
    priceNote: "one-time setup",
    monthly: "+ $1,500 / month",
    monthlyNote: "hosting, running and improvement",
    passthrough:
      "Third-party data and AI usage billed transparently at cost plus a small management fee.",
    coreHeading: "The Deal Flow Engine",
    coreItems: [
      "Buy Box and Mandate Scoring Engine",
      "Deal Sourcing Engine",
      "Off-Market Signal Watchlist",
      "Owner Contact Enrichment and AI Outreach",
      "Deal Pipeline and Deal Copilot",
      "Valuation and Diligence Assistant",
    ],
    bonusHeading: "Five bonuses",
    bonusItems: [
      "Buy Box Workshop and Mandate Playbook",
      "90-Day Scoring Calibration",
      "Owner Outreach Script Library",
      "Monday Deal Digest",
      "Team Onboarding and Video Library",
    ],
    guarantees: [
      {
        icon: "shield" as IconName,
        title: "The 100-Target Guarantee",
        body:
          "If your engine doesn't deliver at least 100 qualified, on-mandate targets within 30 days of going live, we keep working at no cost and your monthly fee is paused until it does.",
      },
      {
        icon: "check" as IconName,
        title: "Day-14 proof or stop",
        body:
          "See your first 50 scored targets on day 14. If they don't look like your kind of deal, tell us and we stop. You keep the list.",
      },
    ],
  },
};

export const faq = {
  heading: "Common questions",
  items: [
    {
      question: "How is this different from Grata, PitchBook or a bought list?",
      answer:
        "Those are databases you search. This is a system built around your buy box that searches, scores, watches and drafts outreach for you, using your criteria and your judgement. It can sit on top of data sources you already pay for.",
    },
    {
      question: "Which markets do you cover?",
      answer:
        "US and UK companies today, including on-market broker listings. Tell us your geography on the call and we will confirm the data depth for it.",
    },
    {
      question: "Does the AI message owners on its own?",
      answer:
        "No. It drafts personal first messages and follow-ups. A person on your team reviews and sends every one, so your reputation with owners stays in your hands.",
    },
    {
      question: "How much of our time does it take?",
      answer:
        "About 4 hours in the first 30 days: a buy box workshop, a calibration review and a handover. After that, a short monthly check-in.",
    },
    {
      question: "We run several mandates. Can it handle that?",
      answer:
        "Yes. Mandates are separate in the system, and each can be sized on a different basis, such as revenue, EBITDA, cash flow or purchase price.",
    },
    {
      question: "What if the first targets are wrong?",
      answer:
        "That is what the calibration phase is for. And if day 14 doesn't look like your kind of deal, you can stop and keep the list.",
    },
  ],
};

export const finalCta = {
  headline: "Stop hunting. Start choosing",
  headlineAccent: "which deals to chase.",
  lead:
    "Book a 30-minute deal-flow call. Bring your buy box. We will show you what the engine finds for it and confirm whether you are a fit.",
  badges: [
    "Next build slot 2 November 2026",
    "3 firms per month",
    "Bonuses for November only",
    "100-Target Guarantee",
  ],
};

export const footer = {
  blurb:
    "Unicorn Studio. AI deal systems for buy-side acquirers and private equity.",
  copyright: "© 2026 Unicorn Studio",
};
