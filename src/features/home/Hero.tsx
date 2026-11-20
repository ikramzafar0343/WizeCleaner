"use client";

import { CalendarCheck, Leaf, ShieldCheck, Sparkles } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import { BeforeAfter } from "@/features/beforeAfter/BeforeAfter";
import { site } from "@/shared/config/site";
import { gsap, MOTION_OK, useGSAP } from "@/shared/motion/gsap";
import { WhatsAppCta } from "@/shared/ui/WhatsAppCta";
import { HeroBackdrop } from "./HeroBackdrop";

const HEADLINE = ["A", "spotless", "space,", "without", "lifting", "a", "finger."];

const chips = [
  { icon: Leaf, title: "Eco-safe products", note: "Kind to kids & pets", pos: "left-2 top-3 md:-left-10 md:top-[18%]" },
  { icon: ShieldCheck, title: "Vetted crew", note: "Trained and insured", pos: "right-2 bottom-4 md:bottom-auto md:-right-12 md:top-[10%]" },
  { icon: CalendarCheck, title: "Same-week slots", note: "Book in one message", pos: "hidden md:flex md:-right-8 md:bottom-[18%]" },
];

export function Hero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
        tl.from("[data-word]", { yPercent: 110, duration: 0.9, stagger: 0.06 })
          .from("[data-fade]", { y: 20, opacity: 0, duration: 0.7, stagger: 0.1 }, "-=0.5")
          .from("[data-media]", { y: 80, opacity: 0, duration: 1 }, "-=0.5")
          .from("[data-chip]", { scale: 0.6, opacity: 0, duration: 0.6, stagger: 0.12, ease: "back.out(1.8)" }, "-=0.4");
      });
      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <section ref={root} className="frame relative mt-3 overflow-hidden bg-gradient-to-b from-sky-2 via-sky to-mist md:mt-4">
      <HeroBackdrop />

      <div className="container-site relative flex flex-col items-center pt-32 text-center md:pt-44">
        <span data-fade className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/70 px-3.5 py-1.5 text-sm text-forest backdrop-blur">
          <Sparkles aria-hidden className="size-4 text-moss" />
          Professional cleaning in {site.city}
        </span>
        <h1 className="max-w-4xl text-[2.7rem] text-forest sm:text-6xl md:text-[5.2rem]">
          {HEADLINE.map((w, i) => (
            <span key={`${w}-${i}`} className="inline-block overflow-hidden pb-[0.08em] align-bottom">
              <span data-word className="inline-block">
                {w}
                {i < HEADLINE.length - 1 ? " " : ""}
              </span>
            </span>
          ))}
        </h1>
        <p data-fade className="mt-6 max-w-xl text-base text-muted md:text-lg">
          Homes, offices and fresh builds cleaned by a trained crew. Send a message, share a few photos,
          and we take it from there.
        </p>
        <div data-fade className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
          <WhatsAppCta label="Get a quick quote" />
          <Link
            href="/services"
            className="inline-flex min-h-12 items-center rounded-full border border-forest/15 bg-white/60 px-6 font-semibold text-forest backdrop-blur transition-colors hover:bg-white"
          >
            Explore services
          </Link>
        </div>
      </div>

      <div className="container-site relative mt-14 md:mt-20">
        <div data-media className="relative mx-auto max-w-5xl">
          <BeforeAfter
            src="/images/hero-living.webp"
            alt="Bright, freshly cleaned living space"
            priority
            sizes="(min-width: 1024px) 1024px, 100vw"
            className="aspect-[4/3] rounded-t-[1.75rem] shadow-[0_-20px_60px_-30px_rgb(15_61_46/0.45)] sm:aspect-[16/9] md:rounded-t-[2.25rem]"
          />

          {chips.map(({ icon: Icon, title, note, pos }) => (
            <div
              key={title}
              data-chip
              className={`animate-float pointer-events-none absolute flex items-center gap-3 rounded-2xl bg-white/90 p-3 pr-4 text-left shadow-[0_14px_40px_-16px_rgb(15_61_46/0.4)] backdrop-blur ${pos}`}
            >
              <span className="grid size-10 place-items-center rounded-xl bg-lime-soft text-forest">
                <Icon aria-hidden className="size-5" />
              </span>
              <span className="flex flex-col">
                <span className="text-sm font-semibold text-forest">{title}</span>
                <span className="text-xs text-muted">{note}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
