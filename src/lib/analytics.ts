import { track } from "@vercel/analytics";

// Track button/link clicks with custom events
export const trackClick = (
  eventName: string,
  properties?: Record<string, string | number | boolean>
) => {
  track(eventName, properties);
};

// Common click tracking events
export const trackCTAClick = (ctaName: string, location?: string) => {
  trackClick("cta_click", {
    cta_name: ctaName,
    location: location || "unknown",
  });
};

export const trackExternalLink = (url: string, linkText?: string) => {
  trackClick("external_link_click", {
    url,
    link_text: linkText || "unknown",
  });
};

export const trackSocialClick = (platform: string) => {
  trackClick("social_click", {
    platform,
  });
};

export const trackProjectClick = (projectName: string) => {
  trackClick("project_click", {
    project_name: projectName,
  });
};

export const trackContactClick = (method: string) => {
  trackClick("contact_click", {
    method,
  });
};
