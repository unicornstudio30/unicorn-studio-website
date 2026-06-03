"use client";

/**
 * Booking provider — wraps Cal.com's embed under the existing
 * `useCalendly` / `openModal` interface so every CTA on the site
 * keeps working without code changes.
 *
 * The file name and exports are kept for backwards compatibility
 * (formerly powered by react-calendly).
 */

import { createContext, useContext, useEffect, useRef, ReactNode } from "react";
import { getCalApi } from "@calcom/embed-react";

const CAL_NAMESPACE = "15min";
const CAL_LINK = "saidur-rahaman/15min";

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
  const calRef = useRef<CalApi | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const cal = (await getCalApi({ namespace: CAL_NAMESPACE })) as CalApi;
      if (cancelled) return;
      cal("ui", {
        cssVarsPerTheme: {
          light: { "cal-brand": "#3b82f6" },
          dark: { "cal-brand": "#1d4ed8" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
      calRef.current = cal;
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const openModal = () => {
    if (!calRef.current) return;
    calRef.current("modal", {
      calLink: CAL_LINK,
      config: {
        layout: "month_view",
        useSlotsViewOnSmallScreen: "true",
        theme: "auto",
      },
    });
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
