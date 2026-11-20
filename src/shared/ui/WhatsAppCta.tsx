import { ArrowUpRight } from "lucide-react";
import { whatsappLink } from "@/shared/lib/whatsapp";
import { cn } from "@/shared/lib/cn";
import { WhatsAppIcon } from "./WhatsAppIcon";

type Props = {
  service?: string;
  label?: string;
  tone?: "dark" | "lime" | "light";
  className?: string;
};

const tones = {
  dark: "bg-forest text-white hover:bg-forest-2",
  lime: "bg-lime text-forest hover:bg-lime-2",
  light: "bg-white text-forest hover:bg-mist",
} as const;

const dot = {
  dark: "bg-lime text-forest",
  lime: "bg-forest text-lime",
  light: "bg-forest text-white",
} as const;

/** Primary action across the site: opens WhatsApp with a ready message. */
export function WhatsAppCta({ service, label = "Chat on WhatsApp", tone = "dark", className }: Props) {
  return (
    <a
      href={whatsappLink(service)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "shine group relative inline-flex min-h-12 items-center gap-3 overflow-hidden rounded-full py-1.5 pl-5 pr-1.5 text-[0.95rem] font-semibold transition-colors duration-300",
        tones[tone],
        className,
      )}
    >
      <WhatsAppIcon className="size-5" />
      <span>{label}</span>
      <span
        className={cn(
          "grid size-9 place-items-center rounded-full transition-transform duration-500 ease-[var(--ease-out-soft)] group-hover:rotate-45",
          dot[tone],
        )}
      >
        <ArrowUpRight aria-hidden className="size-4" />
      </span>
      <span className="sr-only">(opens WhatsApp)</span>
    </a>
  );
}
