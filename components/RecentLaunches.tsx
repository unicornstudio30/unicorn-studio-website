"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

interface CaseStudy {
  timeline: { day: string; title: string; description: string }[];
  techStack: string[];
  overview: string;
  challenge: string;
  result: string;
  quote: string;
  modalImages?: string[];
}

interface Project {
  name: string;
  description: string;
  stats: string;
  tags: string[];
  image: string | null;
  gradientStyle: string;
  caseStudy: CaseStudy | null;
}

export const projects: Project[] = [
  {
    name: "AI Marketing System · B2B SaaS",
    description:
      "How a B2B SaaS founder reclaimed 12 hours a week by rebuilding the content engine.",
    stats: "Built in 4 weeks · LinkedIn + X + Reddit + Blog · Voice-trained AI",
    tags: ["AI Systems", "Marketing Automation", "Content Engine"],
    image: "/b2b-saas-case-study.svg",
    gradientStyle: "linear-gradient(135deg, #0f172a, #1e3a8a, #312e81)",
    caseStudy: {
      overview:
        "A founder-led B2B SaaS company. Founder writing all original content. A three-person marketing team manually adapting and republishing across LinkedIn, X, and the company blog. Reddit experiments abandoned for lack of bandwidth. Facebook and Instagram presence inconsistent.",
      challenge:
        "The founder was the content engine. Every piece started as a long-form post they wrote, then disappeared into 14+ hours of weekly manual adaptation across channels. Quality was uneven. LinkedIn got the best version. Everything else got an afterthought.",
      result:
        "A voice-trained AI system that cut founder content time from 14 hours to 2 hours a week, tripled output across channels, relaunched the abandoned Reddit channel in a Reddit-native voice, and doubled long-form output to two posts per week.",
      techStack: ["Voice-trained AI", "Existing CMS", "Social schedulers", "Analytics"],
      timeline: [
        {
          day: "Week 1",
          title: "Voice training corpus",
          description:
            "Audited 200+ existing founder posts across 18 months. Built a fine-tuning corpus that captured tone, cadence, structure, and signature phrasing rather than just generic copy.",
        },
        {
          day: "Week 2",
          title: "One-input, multi-output engine",
          description:
            "Founder writes once (or speaks once into a voice memo). The system produces platform-native versions for LinkedIn, X threads, Facebook, Instagram, and a Reddit-appropriate variant.",
        },
        {
          day: "Week 3",
          title: "Reddit-native module + approval queue",
          description:
            "Built a Reddit-specific rewrite that avoids promotional voice, plus an approval queue so the founder reviews and signs off on every piece before it ships.",
        },
        {
          day: "Week 4",
          title: "Performance dashboard & launch",
          description:
            "Engagement, conversion, and time-saved tracked in one view. Side-by-side QA against historical posts, then full handoff to the marketing team.",
        },
      ],
      quote:
        "We trained the AI on too narrow a sample of the founder's writing initially (his last 6 months only), which made the voice slightly stale. Re-trained on a wider 18-month sample in week 5 and quality jumped notably.",
    },
  },
  {
    name: "Sip AI",
    description: "AI-powered cocktail recipe app. Your personal bartender.",
    stats: "Built & shipped in just 5 days with FlutterFlow + GPT-4o",
    tags: ["Mobile App", "AI Integration", "FlutterFlow"],
    image: "/sip-ai-case-study.jpg",
    gradientStyle: "linear-gradient(135deg, #9333ea, #6366f1, #ec4899)",
    caseStudy: {
      overview:
        "Sip AI is an AI-based cocktail crafting app that turns any set of ingredients into a personalized recipe. Users describe what they have or what mood they're in, and GPT-4o generates a curated cocktail, complete with steps, garnish tips, and flavor profiles.",
      challenge:
        "The goal was to go from zero to a fully functional, subscription-ready mobile app in under a week, proving that rapid development doesn't mean cutting corners on quality or user experience.",
      result:
        "A production-ready app with secure authentication, an intuitive chat interface, intelligent recipe generation, a personal cocktail collection, and a working subscription model. All delivered in 5 days.",
      techStack: ["FlutterFlow", "Firebase", "OpenAI GPT-4o"],
      timeline: [
        {
          day: "Day 1",
          title: "Setup & Authentication",
          description:
            "Project scaffolding with FlutterFlow, Firebase authentication setup including email/social sign-in, and designed the user onboarding flow.",
        },
        {
          day: "Day 2",
          title: "Chat Interface & Input Handling",
          description:
            "Built a conversational chatbot-style UI with real-time input handling, message bubbles, and smooth scroll animations.",
        },
        {
          day: "Day 3",
          title: "API Integration & Recipe Generation",
          description:
            "Connected OpenAI GPT-4o API for intelligent cocktail recipe generation based on user preferences, available ingredients, and mood.",
        },
        {
          day: "Day 4",
          title: "Output Display & My Cocktails",
          description:
            "Designed beautiful recipe output cards and built the 'My Cocktails' section: a personal collection to save and revisit favorites.",
        },
        {
          day: "Day 5",
          title: "Subscriptions & Final Testing",
          description:
            "Implemented the in-app subscription model, polished every interaction, ran comprehensive QA testing, and shipped to production.",
        },
      ],
      quote:
        "This project deepened my confidence in rapid mobile app development. Shipping a fully functional AI app in 5 days proved that with the right stack and clear planning, you can move incredibly fast without sacrificing quality.",
    },
  },
  {
    name: "Habitic",
    description: "A habit tracker app designed to help users build and maintain positive habits",
    stats: "Built with FlutterFlow · intuitive UI for daily habit tracking & personal growth",
    tags: ["Mobile App", "FlutterFlow", "Productivity"],
    image: "/habitic-case-study.jpg",
    gradientStyle: "linear-gradient(135deg, #f97316, #ea580c, #dc2626)",
    caseStudy: {
      overview:
        "Habitic is a FlutterFlow-powered habit tracker app that helps users build and maintain positive daily routines. It offers an intuitive, clean interface for creating habits, tracking streaks, and visualizing progress, encouraging consistency and personal growth over time.",
      challenge:
        "The challenge was to create an app that feels effortless to use every day. Habit trackers fail when they become a chore themselves, so the UX had to be frictionless: one-tap check-ins, clear visual progress, and motivating streak indicators.",
      result:
        "A polished, production-ready habit tracking app with daily check-ins, streak tracking, progress charts, and a motivational onboarding flow. All built entirely with FlutterFlow for rapid iteration and deployment.",
      techStack: ["FlutterFlow", "Firebase", "Dart"],
      timeline: [
        {
          day: "Day 1",
          title: "Project Setup & Onboarding",
          description:
            "Scaffolded the FlutterFlow project, set up Firebase backend, and designed the onboarding flow with motivational prompts to get users started on their habit journey.",
        },
        {
          day: "Day 2",
          title: "Habit Creation & Management",
          description:
            "Built the core habit creation flow. Users can define custom habits, set frequency (daily or weekly), choose icons, and organize them by category.",
        },
        {
          day: "Day 3",
          title: "Daily Tracking & Streaks",
          description:
            "Implemented the one-tap daily check-in system with streak counting, missed-day handling, and satisfying completion animations.",
        },
        {
          day: "Day 4",
          title: "Progress Visualization",
          description:
            "Added progress charts showing weekly/monthly habit completion rates, streak history, and visual bar graphs to keep users motivated.",
        },
        {
          day: "Day 5",
          title: "Polish & Launch",
          description:
            "Refined the entire UI with smooth transitions, tested edge cases, optimized performance, and prepared the app for production release.",
        },
      ],
      quote:
        "Building Habitic reinforced how powerful FlutterFlow is for shipping real, user-facing products quickly. The focus was always on making the daily experience as frictionless as possible, and the result speaks for itself.",
    },
  },
  {
    name: "Flairr",
    description: "A prompt marketplace where AI creators share, sell, and discover prompts",
    stats: "Fully custom-built platform with real-time messaging, feeds & payments",
    tags: ["Web App", "Marketplace", "Custom Build"],
    image: "/flairr-case-study-1.jpg",
    gradientStyle: "linear-gradient(135deg, #7c3aed, #6d28d9, #4c1d95)",
    caseStudy: {
      overview:
        "Flairr is a full-featured prompt marketplace built from scratch. Prompt engineers can share beautiful prompts, sell them to other creators, and build a following. Every user gets a personalized feed, and the platform handles payments and profit sharing seamlessly.",
      challenge:
        "Building a two-sided marketplace from the ground up meant tackling user-generated content, real-time messaging, personalized feeds, secure payment flows, and a premium content model, all while keeping the experience fast and visually stunning.",
      result:
        "A fully custom web platform with prompt sharing, real-time messaging, personalized feeds, a prompt buy/sell marketplace with profit sharing, and a premium subscription tier. All wrapped in a sleek, dark-themed UI.",
      techStack: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "WebSockets"],
      modalImages: ["/flairr-case-study-1.jpg", "/flairr-case-study-2.jpg"],
      timeline: [
        {
          day: "Phase 1",
          title: "Auth & User Profiles",
          description:
            "Built secure authentication with Google/Discord sign-in, user profiles with avatars, bios, and follower counts, and the foundation for the social layer.",
        },
        {
          day: "Phase 2",
          title: "Prompt Sharing & Feed",
          description:
            "Developed the core prompt creation flow with rich formatting, image previews, and tags. Built a personalized feed algorithm so every user sees relevant content.",
        },
        {
          day: "Phase 3",
          title: "Messaging System",
          description:
            "Implemented real-time messaging with WebSockets so creators can communicate directly: discuss prompts, negotiate custom work, and collaborate.",
        },
        {
          day: "Phase 4",
          title: "Marketplace & Payments",
          description:
            "Integrated Stripe for buying and selling prompts. Built the pricing UI, checkout flow, purchase history, and automatic profit-share distribution to sellers.",
        },
        {
          day: "Phase 5",
          title: "Premium Tier & Launch",
          description:
            "Added a premium subscription model to unlock exclusive prompts, polished the entire dark-themed UI, ran thorough testing, and launched the platform.",
        },
      ],
      quote:
        "Flairr was a full-stack challenge: marketplace logic, real-time chat, personalized feeds, and payment flows all in one platform. Building it custom gave us total control over the experience, and the result is something truly unique in the AI creator space.",
    },
  },
];

export default function RecentLaunches() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [activeTimelineStep, setActiveTimelineStep] = useState(0);

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  }, []);

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  }, []);

  useEffect(() => {
    if (modalOpen) return;
    const timer = setInterval(goNext, 5000);
    return () => clearInterval(timer);
  }, [modalOpen, goNext]);

  const openCaseStudy = useCallback((project: Project) => {
    setActiveProject(project);
    setActiveTimelineStep(0);
    setModalOpen(true);
    document.body.style.overflow = "hidden";
  }, []);

  const closeModal = useCallback(() => {
    setModalOpen(false);
    setActiveProject(null);
    document.body.style.overflow = "";
  }, []);

  const project = projects[currentIndex];

  return (
    <section id="portfolio" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-12 lg:mb-14">
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs sm:text-sm font-semibold mb-6 sm:mb-7">
            Portfolio
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5 sm:mb-6 tracking-[-0.02em] px-4 leading-[1.1]">
            Recent <span className="gradient-text-modern">launches.</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-[1.6] px-4">
            Real products, real results, real impact.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative rounded-2xl sm:rounded-3xl bg-white shadow-2xl overflow-hidden">
          {/* Active slide */}
          <div className="flex flex-col lg:flex-row">
            {/* Image Side */}
            <div
              className="lg:w-3/5 relative min-h-[250px] sm:min-h-[350px] lg:min-h-[500px]"
              style={{ background: project.gradientStyle }}
            >
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  priority
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-3xl sm:text-4xl lg:text-6xl font-bold opacity-20">
                    {project.name}
                  </div>
                </div>
              )}

              {/* Prev / Next arrows on image */}
              <button
                onClick={goPrev}
                className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/40 transition-colors cursor-pointer z-10"
                aria-label="Previous project"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={goNext}
                className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/40 transition-colors cursor-pointer z-10"
                aria-label="Next project"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Slide counter */}
              <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      currentIndex === index
                        ? "bg-white w-8"
                        : "bg-white/40 hover:bg-white/60 w-2"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Content Side */}
            <div className="lg:w-2/5 p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                {project.name}
              </h3>

              <p className="text-sm sm:text-base text-gray-700 mb-2 sm:mb-3 leading-relaxed">
                {project.description}
              </p>

              <p className="text-xs sm:text-sm text-gray-600 mb-4 sm:mb-6">
                {project.stats}
              </p>

              {project.caseStudy ? (
                <button
                  onClick={() => openCaseStudy(project)}
                  className="inline-flex items-center gap-2 text-sm sm:text-base text-blue-600 font-semibold hover:gap-3 transition-all duration-300 cursor-pointer"
                >
                  <span>View Case Study</span>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              ) : (
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm sm:text-base text-blue-600 font-semibold hover:gap-3 transition-all duration-300"
                >
                  <span>View Case Study</span>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* CTA: View all case studies */}
        <div className="text-center mt-14 sm:mt-16 lg:mt-20">
          <Link
            href="/case-studies"
            className="btn-primary inline-flex items-center gap-2 px-7 sm:px-9 py-3.5 sm:py-4 text-white rounded-xl font-semibold text-sm sm:text-base"
          >
            <span>View Case Studies</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Case Study Popup Modal */}
      {modalOpen && activeProject?.caseStudy && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          onClick={closeModal}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          {/* Modal */}
          <div
            className="relative bg-white rounded-2xl sm:rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal header with image */}
            <div className="relative w-full aspect-[2/1] sm:aspect-[3/1] overflow-hidden rounded-t-2xl sm:rounded-t-3xl">
              {activeProject.image ? (
                <Image
                  src={activeProject.image}
                  alt={activeProject.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 896px) 100vw, 896px"
                />
              ) : (
                <div className="w-full h-full" style={{ background: activeProject.gradientStyle }} />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-4 sm:bottom-6 left-6 sm:left-8">
                <div className="flex flex-wrap gap-2 mb-2">
                  {activeProject.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-xs font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                  {activeProject.name}
                </h3>
              </div>
            </div>

            {/* Modal body */}
            <div className="p-6 sm:p-8 lg:p-10">
              {/* Tech stack pills */}
              <div className="flex flex-wrap gap-2 mb-8">
                {activeProject.caseStudy.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-800"
                  >
                    <span className="w-2 h-2 rounded-full bg-blue-500" />
                    {tech}
                  </span>
                ))}
              </div>

              {/* Overview, Challenge, Result */}
              <div className="grid sm:grid-cols-3 gap-6 mb-10">
                <div className="p-5 rounded-xl bg-blue-50 border border-blue-100">
                  <h3 className="text-sm font-semibold text-blue-800 uppercase tracking-wider mb-2">
                    Overview
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {activeProject.caseStudy.overview}
                  </p>
                </div>
                <div className="p-5 rounded-xl bg-amber-50 border border-amber-100">
                  <h3 className="text-sm font-semibold text-amber-800 uppercase tracking-wider mb-2">
                    Challenge
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {activeProject.caseStudy.challenge}
                  </p>
                </div>
                <div className="p-5 rounded-xl bg-emerald-50 border border-emerald-100">
                  <h3 className="text-sm font-semibold text-emerald-800 uppercase tracking-wider mb-2">
                    Result
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {activeProject.caseStudy.result}
                  </p>
                </div>
              </div>

              {/* Project Images (if multiple) */}
              {activeProject.caseStudy.modalImages && activeProject.caseStudy.modalImages.length > 0 && (
                <div className="mb-10">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">
                    Project Screenshots
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {activeProject.caseStudy.modalImages.map((img, i) => (
                      <div key={i} className="relative rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                        <Image
                          src={img}
                          alt={`${activeProject.name} screenshot ${i + 1}`}
                          width={900}
                          height={600}
                          className="w-full h-auto"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Timeline */}
              <div className="mb-10">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-6">
                  Development Timeline
                </h3>
                <div className="space-y-0">
                  {activeProject.caseStudy.timeline.map((step, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveTimelineStep(i)}
                      className="w-full text-left group"
                    >
                      <div className="flex items-start gap-4 py-3">
                        {/* Step indicator */}
                        <div className="relative flex flex-col items-center">
                          <div
                            className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                              activeTimelineStep === i
                                ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25 scale-110"
                                : i < activeTimelineStep
                                ? "bg-blue-100 text-blue-600"
                                : "bg-gray-100 text-gray-400 group-hover:bg-gray-200 group-hover:text-gray-600"
                            }`}
                          >
                            {i + 1}
                          </div>
                          {i < activeProject.caseStudy!.timeline.length - 1 && (
                            <div
                              className={`w-px h-full min-h-[16px] mt-1 transition-colors duration-300 ${
                                i < activeTimelineStep ? "bg-blue-300" : "bg-gray-200"
                              }`}
                            />
                          )}
                        </div>

                        {/* Step content */}
                        <div className="flex-1 pb-1">
                          <div className="flex items-center gap-2 mb-0.5">
                            <span
                              className={`text-xs font-semibold uppercase tracking-wider transition-colors duration-300 ${
                                activeTimelineStep === i ? "text-blue-600" : "text-gray-400"
                              }`}
                            >
                              {step.day}
                            </span>
                          </div>
                          <h5
                            className={`text-base font-semibold transition-colors duration-300 ${
                              activeTimelineStep === i
                                ? "text-gray-900"
                                : "text-gray-500 group-hover:text-gray-700"
                            }`}
                          >
                            {step.title}
                          </h5>
                          <div
                            className={`overflow-hidden transition-all duration-500 ease-in-out ${
                              activeTimelineStep === i
                                ? "max-h-24 opacity-100 mt-1.5"
                                : "max-h-0 opacity-0"
                            }`}
                          >
                            <p className="text-sm text-gray-500 leading-relaxed">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Quote */}
              <div className="px-6 py-5 rounded-xl bg-gray-50 border border-gray-100">
                <svg
                  className="w-6 h-6 text-blue-300 mb-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H0z" />
                </svg>
                <p className="text-gray-600 italic leading-relaxed">
                  &ldquo;{activeProject.caseStudy.quote}&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
