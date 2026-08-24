import Image from "next/image";

export default function Footer() {
  const navigation = {
    services: [
      { name: "AI GTM System", href: "/ai-gtm-system/" },
      { name: "Workflow Automation", href: "/workflow-automation/" },
      { name: "AI Agents", href: "/ai-agents/" },
      { name: "Custom Apps", href: "/custom-apps/" },
      { name: "Dashboards & Reporting", href: "/dashboards-reporting/" },
      { name: "AI Solutions", href: "/ai-solutions/" },
      { name: "AI Integrations", href: "/ai-integrations/" },
      { name: "AI SaaS", href: "/ai-saas/" },
      { name: "AI SEO", href: "/ai-seo/" },
    ],
    company: [
      { name: "About", href: "/about/" },
      { name: "Case Studies", href: "/case-studies/" },
      { name: "Process", href: "/#process" },
      { name: "FAQ", href: "/#faq" },
    ],
    social: [
      { name: "LinkedIn", href: "https://www.linkedin.com/company/the-unicorn-studio/" },
      { name: "X (Twitter)", href: "https://x.com/unicornstudioai" },
      { name: "Instagram", href: "https://www.instagram.com/unicornstudio.io/" },
      { name: "Facebook", href: "https://www.facebook.com/unicornstudio.io" },
    ],
  };

  return (
    <footer className="relative bg-white border-t border-gray-200 overflow-hidden">
      {/* Subtle gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-14 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
            {/* Brand Section — wider, left-aligned with the columns */}
            <div className="lg:col-span-5">
              <a href="/" className="inline-flex items-center mb-3 -ml-2 sm:-ml-3" aria-label="Unicorn Studio home">
                <Image
                  src="/testimonial/main logo.svg"
                  alt="Unicorn Studio"
                  width={200}
                  height={48}
                  className="h-24 sm:h-28 w-auto object-contain"
                />
              </a>
              <p className="text-[15px] text-gray-600 leading-[1.7] mb-6 max-w-md">
                AI systems specialist studio. Nine productised solutions covering the full stack — from GTM automation and AI SEO to bespoke internal software and full AI SaaS products. Guaranteed outcomes on every engagement, or we work for free until they hit.
              </p>

              {/* Contact */}
              <a
                href="mailto:contact@unicornstudio.io"
                className="inline-flex items-center gap-3 text-sm text-gray-700 hover:text-blue-600 transition-colors group"
              >
                <span className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <span className="font-medium">contact@unicornstudio.io</span>
              </a>
            </div>

            {/* Link columns — bold headings, items flush left, consistent spacing */}
            <div className="lg:col-span-3">
              <h3 className="text-base font-bold text-gray-900 mb-5 sm:mb-6">
                Solutions
              </h3>
              <ul className="space-y-3.5">
                {navigation.services.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-[15px] text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-2">
              <h3 className="text-base font-bold text-gray-900 mb-5 sm:mb-6">
                Company
              </h3>
              <ul className="space-y-3.5">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-[15px] text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-2">
              <h3 className="text-base font-bold text-gray-900 mb-5 sm:mb-6">
                Social
              </h3>
              <ul className="space-y-3.5">
                {navigation.social.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[15px] text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} Unicorn Studio. All rights reserved.
            </p>

            <div className="flex items-center gap-6">
              <a href="#" className="text-xs text-gray-500 hover:text-gray-900 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-xs text-gray-500 hover:text-gray-900 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
