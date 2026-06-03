"use client";

/**
 * Booking provider — wraps Cal.com's embed under the existing
 * `useCalendly` / `openModal` interface so every CTA on the site
 * keeps working without code changes.
 *
 * Implementation: Cal.com binds click handlers to elements that
 * carry data-cal-link / data-cal-namespace attributes. We render
 * one hidden trigger button with those attributes; openModal()
 * just programmatically clicks it. This is the most reliable way
 * to fire the modal (the cal("modal", ...) action isn't always
 * exposed in @calcom/embed-react builds).
 *
 * The file name and exports are kept for backwards compatibility
 * (formerly powered by react-calendly).
 */

import { createContext, useContext, useEffect, useRef, ReactNode } from "react";
import { getCalApi } from "@calcom/embed-react";

const CAL_NAMESPACE = "15min";
const CAL_LINK = "saidur-rahaman/15min";

const CAL_CONFIG = JSON.stringify({
  layout: "month_view",
  useSlotsViewOnSmallScreen: "true",
  theme: "auto",
});

interface BookingContextType {
  openModal: () => void;
  closeModal: () => void;
}

const BookingContext = createContext<BookingContextType>({
  openModal: () => {},
  closeModal: () => {},
});

export function CalendlyProvider({ children }: { children: ReactNode }) {
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const cal = await getCalApi({ namespace: CAL_NAMESPACE });
      if (cancelled) return;
      cal("ui", {
        cssVarsPerTheme: {
          light: { "cal-brand": "#3b82f6" },
          dark: { "cal-brand": "#1d4ed8" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const openModal = () => {
    triggerRef.current?.click();
  };

  // Cal.com handles its own close. Kept for API compatibility.
  const closeModal = () => {};

  return (
    <BookingContext.Provider value={{ openModal, closeModal }}>
      {children}

      {/*
        Hidden trigger that Cal.com's embed script auto-binds to.
        Every "Book a discovery call" button across the site calls
        openModal(), which programmatically clicks this element.
      */}
      <button
        ref={triggerRef}
        type="button"
        data-cal-namespace={CAL_NAMESPACE}
        data-cal-link={CAL_LINK}
        data-cal-config={CAL_CONFIG}
        aria-hidden="true"
        tabIndex={-1}
        style={{
          position: "absolute",
          width: 1,
          height: 1,
          padding: 0,
          margin: -1,
          overflow: "hidden",
          clip: "rect(0 0 0 0)",
          whiteSpace: "nowrap",
          border: 0,
          opacity: 0,
          pointerEvents: "none",
        }}
      >
        Open booking modal
      </button>
    </BookingContext.Provider>
  );
}

export function useCalendly() {
  return useContext(BookingContext);
}
