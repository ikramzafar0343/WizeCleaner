import { Clock, Mail, Phone } from "lucide-react";
import Link from "next/link";
import { nav, site } from "@/shared/config/site";
import { whatsappLink } from "@/shared/lib/whatsapp";
import { Logo } from "./Logo";
import { FooterServicesSelect } from "./ServicesDropdown";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative z-10 frame mb-3 mt-3 overflow-x-clip bg-forest text-white md:mb-4">
      <div className="container-site grid gap-12 pb-10 pt-16 text-center md:grid-cols-4 md:pt-20 md:text-left">
        <div className="flex flex-col items-center gap-5 md:items-start">
          <Logo light />
          <p className="max-w-xs text-sm text-white/70">{site.tagline} across {site.serviceRegion}.</p>
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

        <div className="flex flex-col items-center md:items-start">
          <FooterServicesSelect />
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
              <Clock aria-hidden className="mt-0.5 size-4 shrink-0 text-lime" />
              <span>24/7</span>
            </li>
          </ul>
        </div>
      </div>

      <div aria-hidden className="relative select-none overflow-hidden px-4 py-6">
        <p className="whitespace-nowrap text-center text-[clamp(2rem,8.5vw,8rem)] font-semibold leading-none tracking-[-0.04em] text-white/[0.07]">
          {site.name}
        </p>
      </div>

      <div className="container-site flex flex-col items-center justify-between gap-2 border-t border-white/10 py-6 text-xs text-white/55 md:flex-row">
        <p>
          © {year} {site.legalName}. All rights reserved.
        </p>
        <p>Serving {site.serviceRegion}</p>
      </div>
    </footer>
  );
}
