import { Clock, Mail, MapPin, Phone } from "lucide-react";
import type { Metadata } from "next";
import { CtaBand } from "@/features/home/CtaBand";
import { Faq } from "@/features/home/Faq";
import { site } from "@/shared/config/site";
import { Reveal } from "@/shared/motion/Reveal";
import { Ribbon } from "@/shared/motion/Ribbon";
import { PageHero } from "@/shared/ui/PageHero";
import { WhatsAppCta } from "@/shared/ui/WhatsAppCta";
import { WhatsAppIcon } from "@/shared/ui/WhatsAppIcon";

export const metadata: Metadata = {
  title: "Contact",
  description: `Message ${site.name} on WhatsApp for a quick cleaning quote across ${site.serviceRegion}.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Let's talk on WhatsApp"
        intro="The fastest way to book. Send the service, your area and a few photos — we reply with a slot."
        crumbs={[{ href: "/contact", label: "Contact" }]}
      />

      <section className="section-y">
        <Reveal stagger className="container-site grid gap-4 md:grid-cols-3">
          <div className="relative flex flex-col items-center overflow-hidden rounded-[2rem] bg-forest p-10 text-center text-white md:col-span-2 md:row-span-2 md:p-14">
            <span className="grid size-16 place-items-center rounded-2xl bg-[#25d366] text-white">
              <WhatsAppIcon className="size-8" />
            </span>
            <h2 className="mt-7 text-4xl md:text-5xl">{site.phoneDisplay}</h2>
            <p className="mt-4 max-w-md text-white/75">
              Tap below to open a chat with a ready message. Attach photos of the space for an accurate quote.
            </p>
            <div className="mt-8">
              <WhatsAppCta tone="lime" label="Start the chat" />
            </div>
            <div aria-hidden className="pointer-events-none absolute -bottom-24 -right-24 size-72 rounded-full border-[40px] border-lime/15" />
          </div>

          <div className="flex flex-col items-center rounded-[2rem] bg-white p-8 text-center">
            <Phone aria-hidden className="size-6 text-moss" />
            <h3 className="mt-4 text-lg text-forest">Call</h3>
            <a href={`tel:+${site.whatsapp}`} className="mt-1 text-muted hover:text-forest">{site.phoneDisplay}</a>
            <Mail aria-hidden className="mt-7 size-6 text-moss" />
            <h3 className="mt-4 text-lg text-forest">Email</h3>
            <a href={`mailto:${site.email}`} className="mt-1 break-all text-muted hover:text-forest">{site.email}</a>
          </div>

          <div className="flex flex-col items-center rounded-[2rem] bg-lime p-8 text-center">
            <Clock aria-hidden className="size-6 text-forest" />
            <h3 className="mt-4 text-lg text-forest">Working hours</h3>
            <ul className="mt-2 space-y-1 text-sm text-forest/80">
              {site.hours.map((h) => (
                <li key={h.days}>
                  {h.days}: {h.time}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-center rounded-[2rem] bg-white p-8 text-center md:col-span-3">
            <MapPin aria-hidden className="size-6 text-moss" />
            <h3 className="mt-4 text-lg text-forest">Cities we cover</h3>
            <ul className="mt-6 grid w-full max-w-3xl grid-cols-2 gap-3 sm:grid-cols-3">
              {site.areas.map((a) => (
                <li
                  key={a}
                  className="flex flex-col items-center gap-2 rounded-2xl border border-transparent bg-mist px-4 py-5 transition-colors hover:border-moss/30 hover:bg-lime-soft"
                >
                  <span className="grid size-9 place-items-center rounded-xl bg-white text-moss shadow-sm">
                    <MapPin aria-hidden className="size-4" />
                  </span>
                  <span className="text-sm font-semibold text-forest">{a}</span>
                </li>
              ))}
              <li className="col-span-2 flex items-center justify-center rounded-2xl border border-dashed border-line px-4 py-4 text-sm text-muted sm:col-span-3">
                and major towns nearby
              </li>
            </ul>
            <p className="mt-5 text-sm text-muted">{site.address}</p>
          </div>
        </Reveal>
      </section>

      <Faq />
      <Ribbon />
      <CtaBand title="Ready to book a clean?" />
    </>
  );
}
