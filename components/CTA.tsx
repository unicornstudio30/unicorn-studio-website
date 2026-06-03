"use client";

import { useState } from "react";
import Image from "next/image";
import { useCalendly } from "./CalendlyProvider";

const SERVICES = [
  "AI Systems",
  "AI Integrations",
  "AI Solutions",
  "AI SaaS",
  "Website",
  "Branding",
  "Not sure yet",
];

const BUDGETS = [
  "Under $10K",
  "$10K – $25K",
  "$25K – $50K",
  "$50K – $100K",
  "$100K+",
  "Not sure yet",
];

// Web3Forms — submissions are POSTed as JSON to api.web3forms.com and
// delivered to the email registered with the access key (saidur@unicornstudio.io).
// The access key is public by design; rotate it from the Web3Forms dashboard if abused.
const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const WEB3FORMS_ACCESS_KEY = "59987777-0797-438d-bd7b-de01282313e4";

type Status = "idle" | "loading" | "success" | "error";

export default function CTA() {
  const { openModal } = useCalendly();
  const [service, setService] = useState("");
  const [budget, setBudget] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const resetForm = () => {
    setService("");
    setBudget("");
    setName("");
    setEmail("");
    setMessage("");
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const subject = service
        ? `New inquiry, ${service}${name ? ` from ${name}` : ""}`
        : `New inquiry${name ? ` from ${name}` : ""}`;

      // Use FormData (not JSON) so the browser sends multipart/form-data, a
      // "simple" CORS request that skips the OPTIONS preflight. Web3Forms
      // accepts both JSON and form-data, but JSON triggers a preflight that
      // their free-tier endpoint blocks.
      const fd = new FormData();
      fd.append("access_key", WEB3FORMS_ACCESS_KEY);
      fd.append("subject", subject);
      fd.append("from_name", name || "Unicorn Studio website");
      fd.append("replyto", email);
      fd.append("name", name);
      fd.append("email", email);
      fd.append("service", service);
      fd.append("budget", budget);
      fd.append("message", message);
      // Honeypot anti-spam (kept empty by real users)
      fd.append("botcheck", "");

      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        body: fd,
      });

      const data = (await res.json()) as { success: boolean; message?: string };

      if (data.success) {
        setStatus("success");
        resetForm();
      } else {
        setStatus("error");
        setErrorMessage(data.message ?? "Couldn't send right now. Please try again.");
      }
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "Couldn't reach the server. Please try again or email saidur@unicornstudio.io directly."
      );
    }
  };

  return (
    <section
      id="contact"
      className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-100 overflow-hidden"
    >
      {/* Soft ambient backdrop */}
      <div className="pointer-events-none absolute -top-40 left-1/3 w-[800px] h-[800px] rounded-full bg-blue-100/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 right-1/4 w-[600px] h-[600px] rounded-full bg-indigo-100/30 blur-3xl" />

      <div className="relative max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-[minmax(0,42fr)_minmax(0,58fr)] gap-10 lg:gap-16 items-start">
          {/* LEFT — Identity / pitch */}
          <div className="lg:pt-2">
            {/* Avatar — founder photo */}
            <div className="relative inline-block mb-6">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-600 p-[3px] shadow-[0_20px_50px_-12px_rgba(59,130,246,0.4)]">
                <div className="w-full h-full rounded-full overflow-hidden bg-white">
                  <Image
                    src="/team/founder.jpg?v=3"
                    alt="Saidur Rahaman, Founder of Unicorn Studio"
                    width={224}
                    height={224}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>
              <span className="absolute bottom-1 right-1 flex items-center justify-center">
                <span className="absolute inline-flex w-4 h-4 rounded-full bg-emerald-400 opacity-60 animate-ping" />
                <span className="relative inline-flex w-3.5 h-3.5 rounded-full bg-emerald-500 border-[3px] border-white" />
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-[-0.02em] leading-[1.1] mb-4 text-balance">
              Hey 👋 Got an{" "}
              <span className="gradient-text-modern">AI project</span> in mind?
            </h2>

            <p className="text-base sm:text-lg text-gray-600 leading-[1.65] mb-3 max-w-md text-pretty">
              Hi from Unicorn Studio.
            </p>
            <p className="text-base sm:text-lg text-gray-600 leading-[1.65] mb-6 sm:mb-8 max-w-md text-pretty">
              Got an idea? Let&apos;s chat on WhatsApp or jump on a quick call.
            </p>

            {/* Quick action: WhatsApp */}
            <a
              href="https://wa.me/8801799296925?text=Hi%20Saidur%2C%20I%27d%20like%20to%20chat%20about%20an%20AI%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-5 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors font-semibold text-[15px]"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.615.136-.135.301-.345.451-.523.146-.181.194-.301.297-.496.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.195 2.105 3.195 5.1 4.485.714.3 1.27.48 1.704.629.714.227 1.365.195 1.88.121.574-.091 1.767-.721 2.016-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.57-.345m-5.446 7.443h-.016c-1.77 0-3.524-.48-5.055-1.38l-.36-.214-3.75.975 1.005-3.645-.239-.375a9.869 9.869 0 0 1-1.516-5.26c0-5.445 4.455-9.885 9.942-9.885a9.86 9.86 0 0 1 7.022 2.91 9.788 9.788 0 0 1 2.916 6.99c-.005 5.444-4.46 9.885-9.945 9.885zM20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.893c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652a12.062 12.062 0 0 0 5.71 1.447h.006c6.585 0 11.946-5.336 11.949-11.896 0-3.176-1.24-6.165-3.495-8.411" />
              </svg>
              <span>Ask on WhatsApp</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M9 5l7 7-7 7" />
              </svg>
            </a>

            {/* Secondary actions */}
            <div className="mt-6 sm:mt-8 flex flex-col gap-2 text-sm text-gray-600">
              <button
                onClick={openModal}
                className="inline-flex items-center gap-2 hover:text-gray-900 transition-colors w-fit"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="underline-offset-4 hover:underline">Or book a 30-min discovery call</span>
              </button>
              <a
                href="mailto:saidur@unicornstudio.io"
                className="inline-flex items-center gap-2 hover:text-gray-900 transition-colors w-fit"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="underline-offset-4 hover:underline">saidur@unicornstudio.io</span>
              </a>
            </div>
          </div>

          {/* RIGHT — Form card */}
          <form
            onSubmit={submit}
            className="relative bg-white rounded-3xl border border-gray-200/80 shadow-[0_30px_80px_-30px_rgba(15,23,42,0.18)] p-6 sm:p-8 lg:p-10"
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-blue-600 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              Quick brief
            </div>

            <div className="space-y-4 sm:space-y-5">
              {/* Service */}
              <div>
                <label
                  htmlFor="cta-service"
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  What service?
                </label>
                <div className="relative">
                  <select
                    id="cta-service"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="appearance-none w-full px-4 py-3.5 pr-10 rounded-xl border border-gray-300 bg-white text-gray-900 text-[15px] font-medium hover:border-gray-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 focus:outline-none transition-colors cursor-pointer"
                    required
                  >
                    <option value="" disabled>
                      Select a service…
                    </option>
                    {SERVICES.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                  <svg
                    className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              {/* Budget */}
              <div>
                <label
                  htmlFor="cta-budget"
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  What&apos;s your budget?
                </label>
                <div className="relative">
                  <select
                    id="cta-budget"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="appearance-none w-full px-4 py-3.5 pr-10 rounded-xl border border-gray-300 bg-white text-gray-900 text-[15px] font-medium hover:border-gray-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 focus:outline-none transition-colors cursor-pointer"
                    required
                  >
                    <option value="" disabled>
                      Select a range…
                    </option>
                    {BUDGETS.map((b) => (
                      <option key={b} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>
                  <svg
                    className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              {/* Name + Email */}
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                <div>
                  <label
                    htmlFor="cta-name"
                    className="block text-sm font-semibold text-gray-900 mb-2"
                  >
                    Your name
                  </label>
                  <input
                    id="cta-name"
                    type="text"
                    autoComplete="name"
                    placeholder="Jane Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-300 bg-white text-gray-900 text-[15px] placeholder:text-gray-400 hover:border-gray-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="cta-email"
                    className="block text-sm font-semibold text-gray-900 mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="cta-email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-300 bg-white text-gray-900 text-[15px] placeholder:text-gray-400 hover:border-gray-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 focus:outline-none transition-colors"
                    required
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="cta-message"
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  Tell us a little about it{" "}
                  <span className="font-normal text-gray-400">(optional)</span>
                </label>
                <textarea
                  id="cta-message"
                  rows={4}
                  placeholder="A few sentences about your business and what you'd like to automate."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-xl border border-gray-300 bg-white text-gray-900 text-[15px] placeholder:text-gray-400 hover:border-gray-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 focus:outline-none transition-colors resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "loading"}
                className="btn-primary group w-full px-6 py-4 text-white rounded-xl font-semibold text-base inline-flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === "loading" ? (
                  <>
                    <svg
                      className="relative z-10 w-5 h-5 animate-spin"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeOpacity="0.25"
                        fill="none"
                      />
                      <path
                        d="M22 12a10 10 0 0 0-10-10"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        fill="none"
                      />
                    </svg>
                    <span className="relative z-10">Sending…</span>
                  </>
                ) : (
                  <>
                    <span className="relative z-10">Send message</span>
                    <svg
                      className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </>
                )}
              </button>

              {/* Status feedback */}
              {status === "success" && (
                <div
                  role="status"
                  className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800 flex items-start gap-2.5"
                >
                  <svg className="w-5 h-5 flex-shrink-0 mt-0.5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>
                    Message sent. Unicorn Studio usually replies within 2 hours during business hours.
                  </span>
                </div>
              )}
              {status === "error" && (
                <div
                  role="alert"
                  className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-800 flex items-start gap-2.5"
                >
                  <svg className="w-5 h-5 flex-shrink-0 mt-0.5 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 4h.01M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z" />
                  </svg>
                  <span>
                    {errorMessage || "Couldn't send right now."} You can also email{" "}
                    <a href="mailto:saidur@unicornstudio.io" className="underline underline-offset-2 font-semibold">
                      saidur@unicornstudio.io
                    </a>{" "}
                    directly.
                  </span>
                </div>
              )}

              {status !== "success" && status !== "error" && (
                <p className="text-xs text-gray-500 text-center pt-1">
                  We typically reply within 2 hours during business hours.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
