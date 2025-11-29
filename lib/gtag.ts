// lib/gtag.ts
export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "";

type GTagEvent = {
  action: string;
  category?: string;
  label?: string;
  value?: number;
};

// Generic GA4 event
export const gtagEvent = ({ action, category, label, value }: GTagEvent) => {
  if (typeof window === "undefined") return;
  // @ts-ignore
  if (!window.gtag) return;
  // @ts-ignore
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value,
  });
};

// Convenience helper specifically for lead submissions
export const gtagLeadSubmit = (source: string) => {
  gtagEvent({
    action: "lead_submit",
    category: "lead",
    label: source,
  });
};
