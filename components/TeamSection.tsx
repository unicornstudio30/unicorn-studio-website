import Image from "next/image";

/**
 * Leadership team, shown on /about. Content from the team's LinkedIn
 * profiles (Nov 2026). House style: no em dashes.
 */
type Member = {
  name: string;
  role: string;
  bio: string;
  photo: string;
  linkedin: string;
};

const team: Member[] = [
  {
    name: "Saidur Rahaman",
    role: "CEO & Founder",
    bio: "Saidur founded Unicorn Studio to build AI systems that replace manual, messy, repetitive work. He leads client strategy and the 14-day AI audit, with a focus on private equity portfolio companies and M&A deal sourcing.",
    photo: "/team/saidur-rahaman.jpg",
    linkedin: "https://www.linkedin.com/in/saidur-builder",
  },
  {
    name: "Fahim Shahryer",
    role: "Chief AI Engineer",
    bio: "Fahim leads AI engineering at Unicorn Studio, designing and building the custom AI systems the team ships for clients. He works across agentic AI, LLM workflows, RAG and cloud deployment.",
    photo: "/team/fahim-shahryer.jpg",
    linkedin: "https://www.linkedin.com/in/fahim-shahryer",
  },
  {
    name: "K. M. Habibullah",
    role: "Chief Operating Officer",
    bio: "Habibullah runs operations at Unicorn Studio, keeping delivery on track so AI systems ship on time and scale revenue without scaling busywork. He brings a software engineering background and leadership experience across several Dhaka organizations.",
    photo: "/team/km-habibullah.jpg",
    linkedin: "https://www.linkedin.com/in/km-habibullah",
  },
  {
    name: "Afsana Akter",
    role: "Growth Systems Lead",
    bio: "Afsana leads growth systems at Unicorn Studio, turning manual, repetitive operations into AI systems that drive pipeline and revenue. She combines a finance degree with hands-on experience in marketing, outreach and operations.",
    photo: "/team/afsana-akter.jpg",
    linkedin: "https://www.linkedin.com/in/afsana-akter-39386819b",
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-3">The team</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-[-0.02em] leading-[1.1] text-balance">
            The team behind <span className="gradient-text-modern">12+ AI systems shipped</span> and 40+ integrations live.
          </h2>
          <p className="mt-5 text-base sm:text-lg text-gray-600 leading-relaxed text-pretty">
            Unicorn Studio builds custom AI systems that replace manual, messy and repetitive work. These are the people who scope, build and run them.
          </p>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {team.map((m) => (
            <li
              key={m.name}
              className="group flex flex-col bg-white rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-xl hover:border-gray-300 transition-all duration-300 overflow-hidden"
            >
              <div className="relative aspect-[5/4] sm:aspect-square bg-gradient-to-br from-blue-900 to-slate-900 overflow-hidden">
                <Image
                  src={m.photo}
                  alt={`${m.name}, ${m.role} at Unicorn Studio`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-[center_30%] transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>

              <div className="flex flex-col flex-1 p-5 sm:p-6">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <h3 className="text-lg font-bold text-gray-900 leading-tight tracking-[-0.01em]">{m.name}</h3>
                    <div className="mt-1 text-sm font-semibold text-blue-600">{m.role}</div>
                  </div>
                  <a
                    href={m.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${m.name} on LinkedIn`}
                    className="shrink-0 flex items-center justify-center w-9 h-9 rounded-lg bg-gray-50 border border-gray-200 text-gray-500 hover:bg-[#0a66c2] hover:border-[#0a66c2] hover:text-white transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>

                <details className="group/bio mt-auto pt-4">
                  <summary className="mt-1 list-none cursor-pointer inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700 hover:text-blue-800 [&::-webkit-details-marker]:hidden">
                    <span className="group-open/bio:hidden">Read bio</span>
                    <span className="hidden group-open/bio:inline">Hide bio</span>
                    <svg className="w-4 h-4 transition-transform group-open/bio:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className="mt-3 text-sm text-gray-700 leading-relaxed text-pretty">{m.bio}</p>
                </details>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
