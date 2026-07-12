"use client";

import ServicePageTemplate, { ServicePageContent } from "@/components/ServicePageTemplate";

const content: ServicePageContent = {
  eyebrow: "Workflow Automation",
  headline: "Kill the manual work",
  headlineAccent: "that shouldn't need a person.",
  subhead:
    "Approvals, onboarding, reporting, data hand-offs, cross-tool syncs. We map every repeatable process in your operations, then rebuild it end-to-end so the work happens without anyone touching it.",
  outcomes: [
    { number: "25h+", label: "reclaimed per operator per week" },
    { number: "4-6 weeks", label: "to first workflow live" },
    { number: "100%", label: "audit trail on every action" },
    { number: "0", label: "vendors bolted together after" },
  ],
  modulesEyebrow: "What we automate",
  modulesHeadline: "Every process that follows a rulebook.",
  modulesLead:
    "If a person is running the same steps every week, an AI-driven workflow can run them faster, at any hour, without missing a case. We look at your operations and pick the ones with the highest hours-back yield.",
  modules: [
    {
      number: "01",
      tag: "Onboarding",
      title: "Client & employee onboarding",
      description:
        "New client kickoffs, contract routing, welcome sequences, provisioning access across every SaaS tool. The paperwork and clicks that eat your ops manager's Monday.",
      outputs: [
        "Contract → CRM → billing → tooling access, single trigger",
        "Slack + email notifications at every checkpoint",
        "Handoff to human only when something exceptional happens",
      ],
    },
    {
      number: "02",
      tag: "Approvals",
      title: "Approvals & routing",
      description:
        "Expense reports, PTO requests, purchase orders, discount asks. The stuff that sits in an inbox for three days because nobody knows whose turn it is.",
      outputs: [
        "Rules-based routing with escalation on delay",
        "Full audit trail for finance and compliance",
        "Auto-approve inside pre-agreed guardrails; only edge cases surface",
      ],
    },
    {
      number: "03",
      tag: "Reporting",
      title: "Reporting & data hand-offs",
      description:
        "Weekly ops reports, month-end close packs, board decks. Pulled from every tool, formatted the way your team reads them, in your inbox before the meeting.",
      outputs: [
        "Multi-source aggregation (CRM, billing, product analytics, spreadsheets)",
        "Delivered as PDF / Slides / Notion / Slack thread",
        "Anomaly flagging so you notice before your board does",
      ],
    },
    {
      number: "04",
      tag: "Integrations",
      title: "Cross-tool syncs",
      description:
        "The 'copy from Tool A into Tool B' work that plagues every ops team. Notion → CRM. Gmail → Airtable. Stripe → QuickBooks. Whatever pair of tools your people are bridging by hand.",
      outputs: [
        "Real-time or scheduled sync, whichever fits the workflow",
        "Two-way where safe; write-only where risky",
        "Retries + dead-letter queue so nothing silently drops",
      ],
    },
    {
      number: "05",
      tag: "Guardrails",
      title: "Guardrails, logging, monitoring",
      description:
        "Every workflow ships with monitoring, rate limits, error alerting, and a kill switch. If something goes wrong at 3am, we know and you don't wake up to a mess.",
      outputs: [
        "PagerDuty / Slack alerts on failure or drift",
        "Rollback and pause controls in a shared dashboard",
        "Weekly health report on volume, error rate, and hours saved",
      ],
    },
  ],
  processEyebrow: "Our process",
  processHeadline: "From audit to first workflow live,",
  processHeadlineAccent: "in six weeks.",
  processLead:
    "No twelve-month digital-transformation program. A tight discovery, a lean build, workflow live, then a compounding roadmap of what to automate next.",
  process: [
    {
      step: "Week 1",
      title: "Process audit",
      description:
        "We spend a working day with your operations, finance, and support leads. Map every process, tag it by effort, error rate, and volume. Come out with a ranked list of what to automate first.",
    },
    {
      step: "Weeks 2-4",
      title: "Build the highest-yield workflow",
      description:
        "We build the top-ranked workflow end-to-end against your existing stack. No throwaway tooling; if you already run Zapier, n8n, Make, HubSpot, we integrate rather than replace.",
    },
    {
      step: "Week 5",
      title: "Shadow rollout",
      description:
        "The workflow runs in parallel with your existing process for a week. We monitor every case, catch every edge, tune every rule. Nothing goes live until the shadow matches your team's judgment.",
    },
    {
      step: "Week 6",
      title: "Cutover + document",
      description:
        "Human process retired. Full runbook handed to your team so anyone can extend or override. First hours-back report in your inbox.",
    },
    {
      step: "Month 2+",
      title: "Next workflow, then the next",
      description:
        "One workflow every 3-4 weeks after the first. Compounds fast: by month 6 most clients have reclaimed 40-80 hours per operator per week.",
    },
  ],
  guarantee: {
    headline: "Hours reclaimed by month 2.",
    headlineAccent: "Or we work for free.",
    body: "We agree on a specific hours-back target before we start (how many hours per week the automated workflow saves your team). If the workflow misses that target by month 2, every hour of build after that is on us until it hits.",
    footnote: "Written into the contract. No small print, no clawback games.",
  },
  faqs: [
    {
      question: "How is this different from Zapier / n8n / Make?",
      answer:
        "Those are runtimes. Great tools; we use them ourselves. But a runtime is not a system. Buying Zapier doesn't tell you which workflow to automate first, doesn't rebuild your approval logic, doesn't ship guardrails, and doesn't stay on it when things drift. We do the design, build, and monitoring; the runtime is an implementation detail.",
    },
    {
      question: "Do you replace RPA vendors like UiPath or Automation Anywhere?",
      answer:
        "For most mid-market ops teams, RPA is overkill and expensive. Modern workflow tools plus a thin AI layer for the judgment calls does 95% of what RPA does at 10% of the cost. We'll tell you honestly if you need real RPA (rare) or if a lighter stack fits (usually).",
    },
    {
      question: "What if the workflow breaks?",
      answer:
        "Every workflow has monitoring, alerting, retries, and a kill switch. We're paged before you are. First 30 days of live operation include our incident response; after that it's part of the retainer.",
    },
    {
      question: "Which tools do you integrate with?",
      answer:
        "HubSpot, Salesforce, Pipedrive, Attio, Notion, Airtable, Google Workspace, Microsoft 365, Slack, Stripe, QuickBooks, Xero, Segment, Zendesk, Intercom, Front, and about 200 others. If your tool has an API or CSV export, we integrate.",
    },
    {
      question: "What's the guarantee?",
      answer:
        "If we don't hit the agreed hours-back target by month 2, we work for free until we do. Written into the contract.",
    },
    {
      question: "What does this cost?",
      answer:
        "First workflow build is a one-time fee sized to complexity and integration surface. Then a monthly retainer covers operation of everything we've built plus new workflows on the roadmap. Every engagement pays for itself inside 90 days on hours-back alone.",
    },
  ],
  faqEyebrow: "Workflow Automation",
  faqHeadingHighlight: "about Workflow Automation.",
  ctaHeadline: "Stop your ops team from doing the same 20 things every Monday.",
  ctaSubhead:
    "Book a free consultation. We'll audit your operations for 30 minutes on the call and tell you exactly which workflow would reclaim the most hours first.",
};

export default function WorkflowAutomationPage() {
  return <ServicePageTemplate content={content} />;
}
