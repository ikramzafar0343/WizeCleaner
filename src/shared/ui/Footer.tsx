import { Clock, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { services } from "@/features/services/data";
import { nav, site } from "@/shared/config/site";
import { whatsappLink } from "@/shared/lib/whatsapp";
import { Logo } from "./Logo";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative z-10 frame mb-3 mt-3 overflow-hidden bg-forest text-white md:mb-4">
      <div className="container-site grid gap-12 pb-10 pt-16 text-center md:grid-cols-4 md:pt-20 md:text-left">
        <div className="flex flex-col items-center gap-5 md:items-start">
          <Logo light />
          <p className="max-w-xs text-sm text-white/70">{site.tagline} in {site.city}.</p>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-2 rounded-full bg-lime px-4 text-sm font-semibold text-forest transition-colors hover:bg-lime-2"
          >
            <WhatsAppIcon className="size-4" /> {site.phoneDisplay}
          </a>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-semibold text-lime">Pages</h2>
          <ul className="space-y-2.5 text-sm text-white/75">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="transition-colors hover:text-white">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-semibold text-lime">Services</h2>
          <ul className="space-y-2.5 text-sm text-white/75">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="transition-colors hover:text-white">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-semibold text-lime">Reach us</h2>
          <ul className="space-y-3 text-sm text-white/75">
            <li className="flex items-start justify-center gap-2 md:justify-start">
              <Phone aria-hidden className="mt-0.5 size-4 shrink-0 text-lime" />
              <a href={`tel:+${site.whatsapp}`} className="hover:text-white">{site.phoneDisplay}</a>
            </li>
            <li className="flex items-start justify-center gap-2 md:justify-start">
              <Mail aria-hidden className="mt-0.5 size-4 shrink-0 text-lime" />
              <a href={`mailto:${site.email}`} className="break-all hover:text-white">{site.email}</a>
            </li>
            <li className="flex items-start justify-center gap-2 md:justify-start">
              <MapPin aria-hidden className="mt-0.5 size-4 shrink-0 text-lime" />
              <span>{site.address}</span>
            </li>
            {site.hours.map((h) => (
              <li key={h.days} className="flex items-start justify-center gap-2 md:justify-start">
                <Clock aria-hidden className="mt-0.5 size-4 shrink-0 text-lime" />
                <span>
                  {h.days}: {h.time}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div aria-hidden className="relative select-none overflow-hidden">
        <p className="text-center text-[22vw] font-semibold leading-[0.8] tracking-[-0.06em] text-white/[0.07] md:text-[19vw]">
          {site.name}
        </p>
      </div>

      <div className="container-site flex flex-col items-center justify-between gap-2 border-t border-white/10 py-6 text-xs text-white/55 md:flex-row">
        <p>
          © {year} {site.legalName}. All rights reserved.
        </p>
        <p>Serving {site.city} and nearby areas</p>
      </div>
    </footer>
  );
}
