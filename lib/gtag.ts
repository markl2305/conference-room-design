// lib/gtag.ts
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "";

type GTagEvent = {
  action: string;
  category?: string;
  label?: string;
  value?: number;
};

export const gtagEvent = ({ action, category, label, value }: GTagEvent) => {
  if (typeof window === "undefined") return;
  // @ts-ignore
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value,
  });
};
