"use client";

/**
 * Booking provider — wraps Cal.com's embed under the existing
 * `useCalendly` / `openModal` interface so every CTA on the site
 * keeps working without code changes.
 *
 * Implementation strategy:
 *   1. Initialize Cal.com via getCalApi on mount; capture the
 *      namespaced cal function in React state.
 *   2. openModal() calls cal("modal", { calLink, config }) directly.
 *      This is Cal.com's official programmatic-open API and the most
 *      reliable trigger.
 *   3. If a visitor clicks a CTA before the embed script has
 *      finished loading (rare, but possible on slow connections),
 *      fall back to opening the Cal.com page in a new tab so the
 *      click is never a dead end.
 *
 * File name and exports are kept for backwards compatibility
 * (formerly powered by react-calendly).
 */

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { getCalApi } from "@calcom/embed-react";

const CAL_NAMESPACE = "intro";
const CAL_LINK = "saidur-rahaman/intro";
const CAL_FALLBACK_URL = `https://cal.com/${CAL_LINK}`;

type CalApi = (action: string, payload?: Record<string, unknown>) => void;

interface BookingContextType {
  openModal: () => void;
  closeModal: () => void;
}

const BookingContext = createContext<BookingContextType>({
  openModal: () => {},
  closeModal: () => {},
});

export function CalendlyProvider({ children }: { children: ReactNode }) {
  const [cal, setCal] = useState<CalApi | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const calApi = (await getCalApi({
          namespace: CAL_NAMESPACE,
        })) as CalApi;
        if (cancelled) return;
        calApi("ui", {
          cssVarsPerTheme: {
            light: { "cal-brand": "#3b82f6" },
            dark: { "cal-brand": "#1d4ed8" },
          },
          hideEventTypeDetails: false,
          layout: "month_view",
        });
        setCal(() => calApi);
      } catch (err) {
        // Surface in browser devtools but don't crash the app.
        // openModal() will still work via the new-tab fallback.
        console.warn("[booking] Cal.com embed failed to initialize:", err);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const openModal = () => {
    if (cal) {
      cal("modal", {
        calLink: CAL_LINK,
        config: {
          layout: "month_view",
          theme: "auto",
        },
      });
      return;
    }
    // Embed script hasn't finished loading yet — don't leave the
    // visitor with a dead click. Send them to the Cal.com page.
    if (typeof window !== "undefined") {
      window.open(CAL_FALLBACK_URL, "_blank", "noopener,noreferrer");
    }
  };

  // Cal.com manages its own close behaviour. Kept for API compatibility
  // with the previous react-calendly provider.
  const closeModal = () => {};

  return (
    <BookingContext.Provider value={{ openModal, closeModal }}>
      {children}
    </BookingContext.Provider>
  );
}

export function useCalendly() {
  return useContext(BookingContext);
}
