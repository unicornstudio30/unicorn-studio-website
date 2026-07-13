"use client";

import ServicePageTemplate, { ServicePageContent } from "@/components/ServicePageTemplate";
import { testimonials } from "@/components/testimonialData";

const content: ServicePageContent = {
  eyebrow: "AI Agents",
  headline: "Intelligent assistants,",
  headlineAccent: "trained on your business.",
  subhead:
    "Not chatbots. Agents that understand your product, your customers, your operations. They handle the back-and-forth work your team does today — support, research, qualification, internal Q&A — running 24/7 and escalating only when a human should step in.",
  outcomes: [
    { number: "70%", label: "of inbound queries resolved without a human" },
    { number: "24/7", label: "coverage, no shift patterns" },
    { number: "<3 min", label: "median first response time" },
    { number: "6 weeks", label: "from kickoff to first agent live" },
  ],
  modulesEyebrow: "Where agents earn their keep",
  modulesHeadline: "Every conversation your team keeps having.",
  modulesLead:
    "If your team is answering the same class of question over and over — from customers, from internal staff, from prospects — an agent can handle it faster and never forgets the answer.",
  modules: [
    {
      number: "01",
      tag: "Support",
      title: "Customer support agent",
      description:
        "Handles inbound tickets across email, chat, and WhatsApp. Reads your help centre, product docs, and past resolutions. Answers 70% of tickets on the first touch; the rest go to a human with the full context pre-loaded.",
      outputs: [
        "Ingests Zendesk / Intercom / Front / Help Scout history",
        "Learns from every human resolution automatically",
        "Confidence scoring so uncertain answers never ship without review",
      ],
    },
    {
      number: "02",
      tag: "Sales",
      title: "Qualification & discovery agent",
      description:
        "Fields inbound leads on your site or over email. Asks the right qualifying questions, pulls context from your CRM, books meetings on your calendar for prospects that clear the bar.",
      outputs: [
        "Fills the qualification fields your AEs actually care about",
        "Only meetings with real intent hit your calendar",
        "Requalifies stragglers with a follow-up sequence",
      ],
    },
    {
      number: "03",
      tag: "Ops",
      title: "Internal Q&A agent",
      description:
        "Employees ask the agent instead of the ops manager. Policy questions, tooling how-tos, HR requests, IT tickets. Grounded in your Notion / Confluence / SharePoint / Google Drive, updated as your docs update.",
      outputs: [
        "Slack + Teams + Google Chat native",
        "Cites source doc + section on every answer",
        "Escalates to the right owner when it doesn't know",
      ],
    },
    {
      number: "04",
      tag: "Research",
      title: "Research & briefing agent",
      description:
        "Deep-research on demand: account plans before a call, competitor teardowns, market briefings. What used to take an analyst half a day now lands in Slack in five minutes.",
      outputs: [
        "Multi-source (web, LinkedIn, SEC filings, product docs)",
        "Structured output (account plan, battle card, brief)",
        "Refreshes on a schedule so briefings stay current",
      ],
    },
    {
      number: "05",
      tag: "Governance",
      title: "Guardrails, evals, hand-off",
      description:
        "Every agent ships with an eval harness, a hallucination filter, and clean escalation paths. You see how it's answering, what it's getting wrong, and where humans need to step in.",
      outputs: [
        "Live eval dashboard with pass/fail on every conversation",
        "Kill switch + rollback if quality slips",
        "Weekly review call to steer prompts and coverage",
      ],
    },
  ],
  processEyebrow: "Our process",
  processHeadline: "From audit to live agent,",
  processHeadlineAccent: "in six weeks.",
  processLead:
    "We do not ship an agent until it beats a competent human on a curated eval set. That takes discipline; that is why the timeline is what it is.",
  process: [
    {
      step: "Week 1",
      title: "Query audit + eval design",
      description:
        "We sample 200-500 real historical conversations from your team. Categorise them. Build a golden test set the agent has to pass before shipping. This is the step nobody else does; it is why our agents don't hallucinate in the wild.",
    },
    {
      step: "Weeks 2-3",
      title: "Build & ground",
      description:
        "Wire the agent to your knowledge sources (docs, CRM, product data), tune retrieval, iterate on prompts until eval scores clear the bar. Deploy behind a feature flag.",
    },
    {
      step: "Week 4",
      title: "Shadow test",
      description:
        "Agent answers alongside your humans for a week. Your team sees both drafts, picks the better one. We log every miss and re-tune.",
    },
    {
      step: "Weeks 5-6",
      title: "Limited rollout",
      description:
        "Handle 20% of real traffic, monitored live. Confidence scoring routes anything ambiguous to a human. Ramp to 100% once quality holds for five straight days.",
    },
    {
      step: "Month 2+",
      title: "Ongoing tuning",
      description:
        "Bi-weekly review. New categories added, new sources ingested, new escalation paths built. Agent gets better every fortnight, forever.",
    },
  ],
  guarantee: {
    headline: "Ship an agent that beats a human on your eval set.",
    headlineAccent: "Or we work for free.",
    body: "We agree on a specific resolution-rate target on your golden eval set before we start. If the agent misses that target by month 2, every hour of build after that is on us until it hits.",
    footnote: "Written into the contract. No small print, no clawback games.",
  },
  faqs: [
    {
      question: "How is this different from ChatGPT / Claude / Copilot?",
      answer:
        "Those are foundation models. Powerful, but generic. Our agents are grounded in your specific product, customers, operations, and history. They cite your docs, follow your policies, and know your escalation paths. Same underlying models; radically different behaviour.",
    },
    {
      question: "How do you stop the agent from hallucinating?",
      answer:
        "Three layers: retrieval grounding (the agent can only answer from sources we ingest), confidence scoring (uncertain answers get routed to a human), and an eval harness (regressions get caught before they ship). Nothing is bulletproof, but you'll know the moment a category starts to slip.",
    },
    {
      question: "What if the agent gives a wrong answer to a customer?",
      answer:
        "Every conversation is logged with the source citations. Wrong answers get flagged automatically or by your team; we re-tune within 24h. First 30 days of live operation include our incident response; after that it's part of the retainer.",
    },
    {
      question: "Which channels do you deploy on?",
      answer:
        "Email, live chat (Intercom / Drift / Chatlio), Slack, Teams, WhatsApp, SMS, Discord, and native web widgets. Voice is possible on newer stacks; ask on the call.",
    },
    {
      question: "Which models do you use?",
      answer:
        "Whichever is right for the task: GPT-4 / GPT-5, Claude 4/5, Gemini, plus open-source models for cost-sensitive tasks (Llama, Mistral, Qwen). We are model-agnostic and rotate as the frontier moves.",
    },
    {
      question: "What's the guarantee?",
      answer:
        "If the agent misses the agreed resolution-rate target on your golden eval set by month 2, we work for free until it hits.",
    },
  ],
  faqEyebrow: "AI Agents",
  faqHeadingHighlight: "about AI Agents.",
  ctaHeadline: "Stop your team from answering the same question 40 times a day.",
  ctaSubhead:
    "Book a free consultation. We'll look at a sample of your recent conversations on the call and tell you which agent would reclaim the most time first.",
  testimonials: [testimonials.lokesh],
};

export default function AIAgentsPage() {
  return <ServicePageTemplate content={content} />;
}
