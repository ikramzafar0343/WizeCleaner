"use client";

import Link from "next/link";
import { useRef, type ReactNode } from "react";
import { HeroBackdrop } from "@/features/home/HeroBackdrop";
import { gsap, MOTION_OK, useGSAP } from "@/shared/motion/gsap";

type Crumb = { href: string; label: string };
type Props = { title: string; intro?: string; crumbs?: readonly Crumb[]; children?: ReactNode };

/** Compact sky-framed hero for inner pages. */
export function PageHero({ title, intro, crumbs = [], children }: Props) {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        gsap.from("[data-in]", { y: 40, opacity: 0, duration: 0.9, stagger: 0.1, ease: "power3.out" });
      });
      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <section ref={root} data-ribbon-start className="frame relative mt-3 overflow-hidden bg-gradient-to-b from-sky-2 via-sky to-mist md:mt-4">
      <HeroBackdrop />
      <div className="container-site relative flex flex-col items-center pb-20 pt-36 text-center md:pb-28 md:pt-48">
        {crumbs.length ? (
          <nav data-in aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center justify-center gap-2 rounded-full bg-white/70 px-4 py-1.5 text-sm text-muted backdrop-blur">
              <li>
                <Link href="/" className="hover:text-forest">Home</Link>
              </li>
              {crumbs.map((c, i) => (
                <li key={c.href} className="flex items-center gap-2">
                  <span aria-hidden>/</span>
                  {i === crumbs.length - 1 ? (
                    <span aria-current="page" className="font-semibold text-forest">{c.label}</span>
                  ) : (
                    <Link href={c.href} className="hover:text-forest">{c.label}</Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        ) : null}
        <h1 data-in className="max-w-4xl text-[2.6rem] text-forest md:text-7xl">{title}</h1>
        {intro ? <p data-in className="mt-6 max-w-xl text-base text-muted md:text-lg">{intro}</p> : null}
        {children ? <div data-in className="mt-9">{children}</div> : null}
      </div>
    </section>
  );
}
