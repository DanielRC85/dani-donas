// Tracking service — conecta aquí tu Meta Pixel, GA4, o similar

type LeadData = {
  event: "view_product" | "click_whatsapp" | "view_promo" | "page_view";
  productName?: string;
  value?: number;
  currency?: string;
};

export const trackLead = (data: LeadData): void => {
  if (process.env.NODE_ENV === "development") {
    console.log("[Tracking]", data);
  }

  // Meta Pixel — descomenta cuando tengas el Pixel instalado:
  // if (typeof window !== "undefined" && window.fbq) {
  //   window.fbq("track", data.event, {
  //     content_name: data.productName,
  //     value: data.value,
  //     currency: data.currency ?? "COP",
  //   });
  // }

  // Google Analytics 4 — descomenta cuando tengas GA4:
  // if (typeof window !== "undefined" && window.gtag) {
  //   window.gtag("event", data.event, {
  //     event_category: "ecommerce",
  //     event_label: data.productName,
  //   });
  // }
};