import Melissa from "@/public/testimonial/Melissa.jpeg";
import Daniel from "@/public/testimonial/Daniel.jpeg";
import Lokesh from "@/public/testimonial/Lokesh.jpeg";
import Tivan from "@/public/testimonial/Tivan.jpeg";
import type { ServiceTestimonial } from "@/components/ServicePageTemplate";

/**
 * Single source of truth for client testimonials so the same quote can be
 * referenced across the homepage, service pages, and any future landing
 * pages without duplication drift. Keyed by first name for easy lookup.
 */
export const testimonials: Record<string, ServiceTestimonial> = {
  melissa: {
    name: "Melissa Pancoast",
    role: "Operations Director",
    quote:
      "They built our SaaS MVP in just 4 weeks and we had paying customers within the first month. The subscription billing and admin dashboard worked flawlessly from day one.",
    stats: [
      { label: "4-week MVP", bg: "bg-emerald-50", text: "text-emerald-700", border: "border-emerald-100" },
      { label: "Paying customers in month 1", bg: "bg-blue-50", text: "text-blue-700", border: "border-blue-100" },
    ],
    image: Melissa,
    tag: "SaaS MVP",
  },
  daniel: {
    name: "Daniel Luu",
    role: "CEO",
    quote:
      "Our mobile app hit 50K downloads in the first quarter. The native experience and push notifications drove incredible retention rates we never expected.",
    stats: [
      { label: "50K downloads", bg: "bg-emerald-50", text: "text-emerald-700", border: "border-emerald-100" },
      { label: "4.8 star rating", bg: "bg-blue-50", text: "text-blue-700", border: "border-blue-100" },
    ],
    image: Daniel,
    tag: "Mobile App",
  },
  lokesh: {
    name: "Lokesh Johri",
    role: "CTO & Co-Founder",
    quote:
      "The AI integration into our existing platform automated 80% of our manual workflows. Our team now focuses on strategy instead of repetitive tasks.",
    stats: [
      { label: "80% automation", bg: "bg-emerald-50", text: "text-emerald-700", border: "border-emerald-100" },
      { label: "3x team productivity", bg: "bg-blue-50", text: "text-blue-700", border: "border-blue-100" },
    ],
    image: Lokesh,
    tag: "AI Integration",
  },
  tivan: {
    name: "Tivan Amour",
    role: "CTO",
    quote:
      "Our new product website tripled our conversion rate overnight. The copy, design, and SEO optimization were all dialed in perfectly.",
    stats: [
      { label: "3x conversions", bg: "bg-emerald-50", text: "text-emerald-700", border: "border-emerald-100" },
      { label: "Sub-second load time", bg: "bg-teal-50", text: "text-teal-700", border: "border-teal-100" },
    ],
    image: Tivan,
    tag: "Website",
  },
};
