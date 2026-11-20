import { site } from "@/shared/config/site";

/** Builds a wa.me link with a prefilled, human-readable message. */
export function whatsappLink(service?: string): string {
  const text = service
    ? `Hi ${site.name}, I'd like a quote for ${service}.`
    : `Hi ${site.name}, I'd like to book a cleaning.`;
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
}
