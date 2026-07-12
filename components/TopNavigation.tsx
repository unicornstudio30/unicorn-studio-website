"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { useCalendly } from "./CalendlyProvider";

export default function TopNavigation() {
  const { openModal } = useCalendly();
  const [scrolled, setScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const desktopServicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (sidebarOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [sidebarOpen]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (desktopServicesRef.current && !desktopServicesRef.current.contains(e.target as Node)) {
        setDesktopServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const closeSidebar = () => {
    setSidebarOpen(false);
    setServicesOpen(false);
  };

  const serviceLinks = [
    { name: "AI GTM System", href: "/ai-gtm-system/", description: "One AI system that runs your entire go-to-market, prospects to pipeline." },
    { name: "Workflow Automation", href: "/workflow-automation/", description: "Kill the manual, repetitive work that shouldn't need a person." },
    { name: "AI Agents", href: "/ai-agents/", description: "Intelligent assistants trained on your business, running 24/7." },
    { name: "Custom Apps", href: "/custom-apps/", description: "Software built around your business, not the other way around." },
    { name: "Dashboards & Reporting", href: "/dashboards-reporting/", description: "Real-time BI pulled from every system you run." },
    { name: "AI Solutions", href: "/ai-solutions/", description: "Multi-agent orchestration, fine-tuning, and applied ML." },
    { name: "AI Integrations", href: "/ai-integrations/", description: "Add AI to your existing product without rebuilding it." },
  ];

  const menuLinks = [
    { name: "Case Studies", href: "/case-studies/" },
    { name: "About", href: "/about/" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50">
        <div className={`bg-white/80 backdrop-blur-xl border-b border-gray-200/50 transition-shadow duration-300 ${scrolled ? "shadow-md" : "shadow-sm"}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-14 sm:h-16">
              <Link href="/" className="flex items-center group">
                <Image
                  src="/testimonial/main logo.svg"
                  alt="Unicorn Studio"
                  width={160}
                  height={40}
                  className="h-24 sm:h-28 w-auto object-contain"
                  priority
                />
              </Link>

              <div className="hidden md:flex items-center gap-1 lg:gap-2">
                <div ref={desktopServicesRef} className="relative">
                  <button
                    onClick={() => setDesktopServicesOpen(!desktopServicesOpen)}
                    onMouseEnter={() => setDesktopServicesOpen(true)}
                    className={`flex items-center gap-1 px-3 lg:px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                      desktopServicesOpen ? "text-blue-600 bg-blue-50" : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                    }`}
                  >
                    <span>Services</span>
                    <svg className={`w-4 h-4 transition-transform duration-200 ${desktopServicesOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  <div
                    onMouseLeave={() => setDesktopServicesOpen(false)}
                    className={`absolute left-0 top-full pt-2 transition-all duration-200 ${
                      desktopServicesOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-1"
                    }`}
                  >
                    <div className="w-[460px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-3">
                      <div className="grid grid-cols-1 gap-1">
                        {serviceLinks.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setDesktopServicesOpen(false)}
                            className="flex flex-col gap-0.5 px-4 py-3 rounded-xl hover:bg-blue-50 transition-colors group"
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-semibold text-gray-900 group-hover:text-blue-600">
                                {link.name}
                              </span>
                              <svg className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </div>
                            <span className="text-xs text-gray-500 leading-snug">
                              {link.description}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {menuLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="px-3 lg:px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors">
                    {link.name}
                  </Link>
                ))}
              </div>

              <button type="button" onClick={openModal} className="hidden md:inline-flex items-center btn-primary px-4 lg:px-6 py-2 lg:py-2.5 text-white rounded-lg lg:rounded-xl font-semibold text-xs lg:text-sm">
                Book a Call
              </button>

              <button onClick={() => setSidebarOpen(true)} className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 transition-colors" aria-label="Open menu">
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className={`fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`} onClick={closeSidebar} />

      <div ref={sidebarRef} className={`fixed top-0 right-0 bottom-0 z-[70] w-[280px] bg-white shadow-2xl transition-transform duration-300 ease-out md:hidden ${sidebarOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <span className="text-lg font-bold text-gray-900">Menu</span>
          <button onClick={closeSidebar} className="flex items-center justify-center w-9 h-9 rounded-lg hover:bg-gray-100 transition-colors" aria-label="Close menu">
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="overflow-y-auto h-[calc(100%-65px)] py-3">
          <Link href="/" onClick={closeSidebar} className="flex items-center px-5 py-3 text-gray-800 font-medium hover:bg-blue-50 hover:text-blue-600 transition-colors">
            Home
          </Link>

          <div>
            <button onClick={() => setServicesOpen(!servicesOpen)} className="flex items-center justify-between w-full px-5 py-3 text-gray-800 font-medium hover:bg-blue-50 hover:text-blue-600 transition-colors">
              <span>Services</span>
              <svg className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${servicesOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}`}>
              <div className="bg-gray-50/70 py-1">
                {serviceLinks.map((link) => (
                  <Link key={link.href} href={link.href} onClick={closeSidebar} className="flex items-center px-8 py-2.5 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-3 flex-shrink-0" />
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {menuLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={closeSidebar} className="flex items-center px-5 py-3 text-gray-800 font-medium hover:bg-blue-50 hover:text-blue-600 transition-colors">
              {link.name}
            </Link>
          ))}

          <div className="px-5 pt-4 mt-2 border-t border-gray-100">
            <button type="button" onClick={() => { closeSidebar(); openModal(); }} className="btn-primary flex items-center justify-center w-full px-6 py-3 text-white rounded-xl font-semibold text-sm">
              Book a Call
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
