/**
 * Long-form case studies, told as pain point → how we solved it → outcome.
 * Each renders through CaseStudyDetail at /case-studies/<slug>/.
 *
 * Sources: the internal case-study documents (figures verified
 * 9 November 2026) and each client's own video testimonial. Re-check a
 * number before changing it. House style: no em dashes.
 */

export type Shot = { src: string; alt: string; caption: string; width: number; height: number };
export type Point = { title: string; body: string; image?: Shot };
export type OutcomePoint = { value?: string; title: string; body: string };

export type CaseStudy = {
  slug: string;
  client: string;
  market: string;
  flag?: string;
  eyebrow: string;
  seoTitle: string;
  seoDescription: string;
  ogImage: string;
  headline: string;
  headlineAccent: string;
  intro: string;
  stats: { value: string; label: string }[];
  statsNote: string;
  pain: { title: string; intro: string; points: Point[] };
  solution: { title: string; intro: string; steps: Point[] };
  outcome: { title: string; intro: string; points: OutcomePoint[]; image?: Shot };
  testimonial: {
    video: string;
    poster: string;
    duration: string;
    quote: string;
    full: string[];
    fullNote: string;
    name: string;
    role: string;
  };
  companion: { slug: string; title: string; body: string };
};

export const whiteKnight: CaseStudy = {
  slug: "white-knight-acquisitions",
  client: "White Knight Acquisitions",
  market: "United States",
  flag: "US",
  eyebrow: "Case study · M&A deal sourcing · United States",
  seoTitle: "White Knight Acquisitions: From Manual Deal Sourcing to a Scalable AI System",
  seoDescription:
    "White Knight Acquisitions was reviewing every listing and company by hand. Unicorn Studio built an AI deal sourcing and qualification system around their real M&A workflow. Now 250 companies are screened against a buy box in about a minute.",
  ogImage: "/case-studies/og-white-knight-acquisitions.png",
  headline: "From manual deal sourcing",
  headlineAccent: "to a system that screens 250 companies in a minute.",
  intro:
    "White Knight Acquisitions helps private equity firms, family offices and investors find and buy US businesses. Every opportunity was being found, read and judged by hand. We built an AI deal sourcing and qualification system around how they actually work, and sourcing became systematic and scalable.",
  stats: [
    { value: "~1 min", label: "to screen 250 companies against a buy box" },
    { value: "1,850", label: "companies screened, every one with a reason" },
    { value: "1,663", label: "broker listings from 27 brokers, refreshed nightly" },
    { value: "$3.97", label: "total AI spend to screen all 1,850 companies" },
  ],
  statsNote: "Figures from the live platform, November 2026.",
  pain: {
    title: "The problem wasn't finding information. It was time.",
    intro:
      "There are hundreds of platforms listing acquisition opportunities. Ernesto and his team were reviewing each listing, CIM and company profile by hand, and Ernesto personally decided whether every one fit his buy box or his clients'. Tracking, financials and follow-ups were manual too. The amount he could process capped how many deals he could pursue, for himself and for his clients.",
    points: [
      {
        title: "Hours lost to reading",
        body:
          "Every listing, document and company was read one at a time. The work did not scale, and nobody else could repeat it.",
      },
      {
        title: "Judgement locked in one head",
        body:
          "Whether a company fit the buy box depended on Ernesto reading it himself. More clients meant more mandates, but there were no more hours.",
      },
      {
        title: "Filters that throw away good deals",
        body:
          "The usual shortcut is to filter harder. A keyword filter deletes the owner who wrote \"roughly $2M\", the family firm with fourteen staff and no website, and the owner whose job title is just the company name. Often those are the best deals.",
      },
      {
        title: "Generic software had already failed",
        body:
          "An earlier attempt with a freelance developer produced software that did not understand the M&A process. Ernesto needed a system built around his workflow, not another tool to work around.",
      },
    ],
  },
  solution: {
    title: "We started with the workflow, not the technology.",
    intro:
      "Before building anything we mapped how Ernesto sources, screens and evaluates deals. Then we built the system around that process, with a person making every decision that touches another human being.",
    steps: [
      {
        title: "Wrote the buy box down",
        body:
          "Sectors, geography and the size measure Ernesto actually uses (SDE, EBITDA, cash flow or revenue), saved as mandates. Several run at once, so his clients' buy boxes are covered as well as his own.",
        image: { src: "/case-studies/screens/wka-buybox.jpg", alt: "Buy Box screen in the White Knight Acquisitions platform showing four live mandates", caption: "Four buy boxes running side by side, each with its own size measure, region and sectors.", width: 1600, height: 1094 },
      },
      {
        title: "Let the AI read, not filter",
        body:
          "Every company is judged against the buy box and gets a verdict (Qualifies, Potential or Reject) with a score and the exact line of evidence it rests on. Nothing is silently deleted, so a near miss can always be found again.",
        image: { src: "/case-studies/screens/wka-scoring.jpg", alt: "Scoring screen showing 223 verdicts and ten validation checks passing", caption: "223 verdicts, checked by ten standing rules: every verdict has a reason, and nothing is rejected on a test its source could not answer.", width: 1600, height: 846 },
      },
      {
        title: "Brought every source into one place",
        body:
          "A browser assistant works beside the databases and LinkedIn accounts he already pays for, and 27 brokers are collected every night. Anonymous listings are matched to the real business behind them.",
        image: { src: "/case-studies/screens/wka-onmarket.jpg", alt: "On Market screen searching 1,663 broker listings with a plain-English sentence", caption: "Search 1,663 broker listings with a sentence. Thresholds in the sentence are compared against the listed numbers, not guessed.", width: 1600, height: 746 },
      },
      {
        title: "Drafted the approach, kept the human in charge",
        body:
          "The system researches each target and drafts the first message from facts in the owner's own record. Ernesto reads it and presses Send himself. Nothing is ever sent automatically.",
      },
    ],
  },
  outcome: {
    title: "Sourcing became systematic and scalable.",
    intro:
      "Instead of spending hours finding opportunities, Ernesto now spends his time deciding which opportunities are worth pursuing.",
    image: { src: "/case-studies/screens/wka-overview.jpg", alt: "White Knight Acquisitions overview: 1,850 companies, 24 scoring runs, $3.97 AI spend", caption: "The live overview: 1,850 companies, 24 reproducible scoring runs, $3.97 of AI spend in total.", width: 1600, height: 1030 },
    points: [
      {
        value: "~1 min",
        title: "To screen 250 companies",
        body: "250 companies are scored against the buy box in about a minute, for around three cents, instead of being read one at a time.",
      },
      {
        value: "1,850",
        title: "Companies screened",
        body: "Plus 805 owners sourced from LinkedIn and 223 detailed buy-box verdicts, each one quoting its evidence.",
      },
      {
        value: "$3.97",
        title: "Total AI spend, all time",
        body: "That is about $0.0002 per company screened, across 24 scoring runs that can each be reproduced exactly.",
      },
      {
        value: "27",
        title: "Brokers watched every night",
        body: "1,663 live listings in one place with comparable numbers, so new deals surface without anyone searching.",
      },
    ],
  },
  testimonial: {
    video: "/testimonial/videos/ernesto.mp4",
    poster: "/testimonial/videos/ernesto-poster.jpg",
    duration: "2:40",
    quote: "It turned sourcing from a manual activity into a much more systematic and scalable process.",
    full: [
      "One of our biggest challenges was the amount of manual work involved in sourcing deals. There are hundreds of different sourcing platforms out there with acquisition opportunities. My team and I were manually reviewing each of these listings, CIMs and company information. Then I had to personally determine whether each opportunity actually fit our buy box or our clients' buy box. The problem wasn't finding information. It was time.",
      "We chose to work with Unicorn Studio because I wasn't looking for somebody to simply build another piece of software. I wanted someone who could understand my actual M&A workflow first. What impressed me was their willingness to understand the business problems before jumping into the technology.",
      "We built an AI-powered M&A deal sourcing platform and qualification system. It helps me identify acquisition targets quickly, screen opportunities against specific buy boxes, enrich and score targets, monitor buy signals and prioritise which opportunity deserves my attention. It turned sourcing from a manual activity into a much more systematic and scalable process. Instead of spending hours finding opportunities, I can focus more of my time on determining which opportunities are actually worth pursuing.",
      "Would I recommend Unicorn Studio? I would, particularly if you are in the M&A game, on the buy side or sell side, and especially if you're still managing sourcing through spreadsheets, browser tabs, emails and manual research. Saidur and his team took the time to understand my workflow and build a system around how my business operates.",
    ],
    fullNote: "From Ernesto's video testimonial, lightly edited for reading.",
    name: "Ernesto Bent",
    role: "Founder & CEO, White Knight Acquisitions",
  },
  companion: {
    slug: "digital-growth-equity",
    title: "The same problem in the UK",
    body:
      "The UK has one official company register but no published revenue. The US has revenue estimates and no register at all. See how we solved deal sourcing for Digital Growth Equity.",
  },
};

export const digitalGrowthEquity: CaseStudy = {
  slug: "digital-growth-equity",
  client: "Digital Growth Equity",
  market: "United Kingdom",
  flag: "UK",
  eyebrow: "Case study · Private equity deal sourcing · United Kingdom",
  seoTitle: "Digital Growth Equity: Finding UK Owners Ready to Sell, from the Live Register",
  seoDescription:
    "Digital Growth Equity needed to know which UK business owners were ready to sell. Unicorn Studio built a platform that scores acquisition readiness from live Companies House data, watches targets daily and carries deals through to an offer.",
  ogImage: "/case-studies/og-digital-growth-equity.png",
  headline: "Turning the UK company register",
  headlineAccent: "into a ranked list of owners ready to sell.",
  intro:
    "Digital Growth Equity acquires owner-managed UK businesses. The public register lists every company, but not which owners are ready to hand over. We built a platform that answers that question from live official data, watches every target daily, and carries a deal through to an offer. It now sits at the centre of how DGE finds and assesses acquisitions.",
  stats: [
    { value: "Daily", label: "every watchlist re-scanned automatically" },
    { value: "10 yrs", label: "of real filed accounts read per company" },
    { value: "11", label: "readiness signals, every one explained" },
    { value: "2+ yrs", label: "as DGE's AI and technology partner" },
  ],
  statsNote: "Figures from the live platform, November 2026.",
  pain: {
    title: "A register is not a deal list.",
    intro:
      "Companies House lists every UK company, its directors, owners, debt and filings, free and official. But it only tells you a company exists. It won't tell you that the sole director is 63, has run the business for 24 years, has no successor on the board, owns it outright and has just filed a resignation. That combination is the deal, and nobody hands it to you.",
    points: [
      {
        title: "Everything on record, no answers",
        body:
          "The facts that signal a willing seller are scattered across directors, ownership and filing history. Reading them company by company does not scale.",
      },
      {
        title: "No revenue to go on",
        body:
          "Small UK companies are legally allowed to hide turnover. Most tools fill the gap with an estimate and present it as fact, and a buyer cannot make an offer on a guess.",
      },
      {
        title: "Lists go stale overnight",
        body:
          "An exported list is out of date the day after. A director resigns or a new charge is filed, and by the time anyone notices, another buyer has called.",
      },
      {
        title: "Personal data, real risk",
        body:
          "A director's date of birth is personal data. Outreach that mentions an owner's age or retirement is a GDPR problem waiting to happen.",
      },
    ],
  },
  solution: {
    title: "A readiness score a buyer can argue with.",
    intro:
      "We did not hand DGE another black box. Every number the platform shows comes from official data, and every score comes with the reasons behind it.",
    steps: [
      {
        title: "The live register as the only source of truth",
        body:
          "Every search runs against Companies House itself, never a cached copy. The AI interprets and explains, but it is never trusted to supply a fact.",
      },
      {
        title: "A transparent readiness score",
        body:
          "Two scores, kept separate: is the owner likely ready to hand over, and is it a clean, financeable business? Each one shows the signals behind it. A missing fact lowers the confidence figure, not the score, so a thinly documented company is not mistaken for a bad one.",
        image: { src: "/case-studies/screens/dge-score.jpg", alt: "Readiness score of 63 with succession readiness and business quality bars and the reasons behind the score", caption: "One headline score, the two axes behind it, and the reasons in plain English. Company and director details blurred.", width: 1600, height: 854 },
      },
      {
        title: "Real numbers, verified companies",
        body:
          "Up to ten years of figures read straight from filed accounts instead of an invented revenue estimate. The platform also checks that each company is actually trading and that its website really belongs to it.",
        image: { src: "/case-studies/screens/dge-valuation.jpg", alt: "Valuation research panel with staff, net assets, cash and debtors trended from filed accounts", caption: "Valuation research read from filed accounts: staff, net assets, cash and debtors, trended year by year.", width: 1600, height: 880 },
      },
      {
        title: "A saved search that keeps watching",
        body:
          "Every watchlist is re-scanned daily, even when nobody is logged in. DGE is alerted when a company newly meets the criteria or a watched company files a resignation, a new charge or an ownership change.",
        image: { src: "/case-studies/screens/dge-watchlist.jpg", alt: "Watchlist dashboard tracking 27 companies with hiring and director change events", caption: "A live watchlist: 27 companies tracked daily, with hiring and director changes surfaced as they happen. Company names blurred.", width: 1600, height: 1162 },
      },
      {
        title: "Outreach that respects privacy",
        body:
          "Approach letters are written in the buyer's own voice and never mention an owner's age or retirement. Deals then move through a pipeline to a generated offer ladder, from seller-financed to all-cash.",
      },
    ],
  },
  outcome: {
    title: "From a public register to a working deal engine.",
    intro:
      "In Dudley's words, the platform covers deal sourcing, valuation, due diligence and outreach, and now sits at the centre of how DGE finds and assesses acquisitions.",
    image: { src: "/case-studies/screens/dge-pipeline.jpg", alt: "Deal pipeline from New to Closed with offers out", caption: "The deal pipeline, from first contact to offer. Company names blurred.", width: 1600, height: 1108 },
    points: [
      {
        value: "Daily",
        title: "Targets watched automatically",
        body: "Instead of re-running searches, DGE is told when something changes: a resignation, a new charge, an ownership change, a company newly in range.",
      },
      {
        value: "10 yrs",
        title: "Of real figures per company",
        body: "Valuation starts from what was actually filed, trended year by year, not from a plausible-looking estimate.",
      },
      {
        value: "11",
        title: "Signals behind every score",
        body: "Every ranking comes with reasons a person can question before acting, which is what makes the shortlist trustworthy.",
      },
      {
        title: "Outreach without the GDPR risk",
        body: "The score may read personal data. The letter never does, so DGE can approach owners at the right moment without crossing a line.",
      },
    ],
  },
  testimonial: {
    video: "/testimonial/videos/dudley.mp4",
    poster: "/testimonial/videos/dudley-poster.jpg",
    duration: "0:59",
    quote: "A productive, proactive and engaged technology partner that delivers on time and within budget.",
    full: [
      "For more than two years, Unicorn Studio has been our AI and technology partner across the whole deal cycle. On the buy side, they built our platform for deal sourcing, valuation, due diligence and outreach, which now sits at the centre of how we find and assess acquisitions.",
      "What sets Unicorn Studio apart is that they understand how private equity actually works. They start with the business problem, not the technology, listen carefully, welcome feedback and adapt as new information emerges. Saidur and his team bring real energy and ownership to the work.",
      "As a PE owner, I'd recommend Unicorn Studio to any private equity firm or buy-side acquirer that wants to use AI to source better deals and create more value in its portfolio.",
    ],
    fullNote: "Written testimonial from Dudley Peacock.",
    name: "Dudley Peacock",
    role: "Owner, Digital Growth Equity",
  },
  companion: {
    slug: "white-knight-acquisitions",
    title: "The same problem in the US",
    body:
      "The US has no central company register at all, only revenue estimates, LinkedIn and broker sites. See how we solved deal sourcing for White Knight Acquisitions.",
  },
};

export const moreConvos: CaseStudy = {
  slug: "more-convos",
  client: "MoreConvos",
  market: "Lead generation agency",
  eyebrow: "Case study · Outbound lead generation · WhatsApp automation",
  seoTitle: "MoreConvos: From Hand-Posting in WhatsApp Groups to Lead Generation That Runs Itself",
  seoDescription:
    "MoreConvos runs pay-per-lead cold outreach. Unicorn Studio has worked with founder Zach Gitlin since day one: first the brand and website, then an AI system that joins WhatsApp groups and posts in them automatically, plus AI outreach workflows.",
  ogImage: "/case-studies/og-more-convos.png",
  headline: "From hand-posting in WhatsApp groups",
  headlineAccent: "to lead generation that runs on its own.",
  intro:
    "MoreConvos runs cold outreach for other businesses and only gets paid for positive replies. We have worked with founder Zach Gitlin since the agency's earliest days: first its website and LinkedIn presence, then a system that joins WhatsApp groups and posts in them automatically, plus the AI workflows around his outreach.",
  stats: [
    { value: "Day one", label: "partner since MoreConvos's starting days" },
    { value: "Auto", label: "WhatsApp group joining and posting, no manual work" },
    { value: "5M+", label: "messages MoreConvos has sent for 100+ companies" },
  ],
  statsNote: "MoreConvos's message and client figures are their own, from moreconvos.com.",
  pain: {
    title: "A pay-per-lead business lives or dies on new conversations.",
    intro:
      "MoreConvos only gets paid when a prospect replies with real interest, so every week needs a steady supply of new conversations. WhatsApp groups full of the right people were a strong source of leads, but joining them and posting in each one by hand takes hours, and it stops the moment nobody is doing it.",
    points: [
      {
        title: "Starting from zero",
        body:
          "In the early days, a new agency had to look as credible as the ones it competed with: a proper website and a professional presence on LinkedIn.",
      },
      {
        title: "Manual group work",
        body:
          "Joining WhatsApp groups and posting in them one at a time ate hours that should have gone into selling and serving clients.",
      },
      {
        title: "Leads capped by hours",
        body:
          "More leads meant more manual posting. Growth was limited by how much time there was to do it, not by how many good groups existed.",
      },
    ],
  },
  solution: {
    title: "A partner that grew with the business.",
    intro:
      "We started with what Zach needed to win his first clients, then automated the work that was eating his time.",
    steps: [
      {
        title: "A brand that looks established",
        body:
          "Website design and a LinkedIn banner in MoreConvos's starting days, so the agency looked the part from its first sales conversation.",
      },
      {
        title: "WhatsApp lead generation that runs itself",
        body:
          "A system that joins relevant WhatsApp groups and posts in them automatically, so new conversations keep arriving without anyone posting by hand.",
      },
      {
        title: "AI workflows for outreach",
        body:
          "Simple AI workflows that take repetitive outreach tasks off Zach's plate, built one at a time as the agency needed them.",
      },
      {
        title: "The same team, year after year",
        body:
          "Each new build was made by the team that built the last one, so it fits what is already running instead of starting from scratch.",
      },
    ],
  },
  outcome: {
    title: "Lead generation that keeps going when Zach isn't.",
    intro:
      "The repetitive work moved into software, and a one-off design job became years of building together.",
    points: [
      {
        title: "Group posting on autopilot",
        body: "Joining WhatsApp groups and posting in them happens automatically instead of by hand.",
      },
      {
        title: "Time back for selling",
        body: "Hours that went into manual posting can go into the conversations that come back.",
      },
      {
        title: "First website to full system",
        body: "One partner from MoreConvos's first website and LinkedIn banner to its lead generation system.",
      },
      {
        title: "Recommended by the founder",
        body: "Zach recommends Unicorn Studio for its professionalism, its pricing and how easy it is to work with.",
      },
    ],
  },
  testimonial: {
    video: "/testimonial/videos/zach.mp4",
    poster: "/testimonial/videos/zach-poster.jpg",
    duration: "1:03",
    quote: "A very professional team, very good prices, and definitely a pleasure to work with.",
    full: [
      "Just wanted to leave a short testimonial for my man Saidur from Unicorn Studio. I'm Zach Gitlin from MoreConvos.com, and you're welcome to reach out to me and ask any questions you might have.",
      "I've worked with Saidur since really my starting days, a few years ago, when his company helped me build out my website design, my LinkedIn banner and things like that. Then over the years I've been using Saidur and the services at Unicorn Studio to build an entire system over WhatsApp that generates leads by joining WhatsApp groups and posting in them automatically, plus other simple AI workflows he's helped me build out for outreach.",
      "I highly recommend them: a very professional team, very good prices, and definitely a pleasure to work with. If you have any questions, ask Saidur to put us in touch. I'll definitely give him a good review.",
    ],
    fullNote: "From Zach's video testimonial, lightly edited for reading.",
    name: "Zach Gitlin",
    role: "Founder & CEO, MoreConvos",
  },
  companion: {
    slug: "white-knight-acquisitions",
    title: "Another system built around a real workflow",
    body:
      "White Knight Acquisitions was reading every deal by hand. See how we turned their sourcing into a system that screens 250 companies in about a minute.",
  },
};

export const dealCaseStudies = [whiteKnight, digitalGrowthEquity];
export const allCaseStudies = [whiteKnight, digitalGrowthEquity, moreConvos];
