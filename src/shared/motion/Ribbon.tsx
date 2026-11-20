"use client";

import { useRef } from "react";
import { cn } from "@/shared/lib/cn";
import { gsap, MOTION_OK, ScrollTrigger, useGSAP } from "./gsap";

const DEFAULT_WORDS = [
  "5 Marla Deep Clean",
  "10 Marla Deep Clean",
  "1 Kanal Deep Clean",
  "Sofa Cleaning",
  "Kitchen Deep Clean",
  "Washroom Deep Clean",
  "Water Tank Cleaning",
  "Commercial Cleaning",
  "Hygiene Solutions",
  "Carpet & Upholstery",
  "Steam Cleaning",
  "High-Rise Windows",
  "Window & Glass",
  "Pressure Washing",
  "Pest Control",
  "Disinfecting Fogging",
  "Floor Cleaning",
  "Tiles Cleaning",
];

type Props = {
  words?: readonly string[];
  className?: string;
  /** Marks where the page scroll ribbon should begin (after this bar). */
  scrollRibbonStart?: boolean;
};

/**
 * Two crossing ribbons that drift in opposite directions. Scrolling speeds
 * them up gently and flips their direction, like a wiper changing stroke.
 */
export function Ribbon({ words = DEFAULT_WORDS, className, scrollRibbonStart = false }: Props) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        const tracks = gsap.utils.toArray<HTMLElement>("[data-track]", root.current);
        const loops = tracks.map((track, i) =>
          gsap.fromTo(
            track,
            { xPercent: i === 0 ? 0 : -50 },
            { xPercent: i === 0 ? -50 : 0, duration: 140, ease: "none", repeat: -1 },
          ),
        );
        loops.forEach((loop) => loop.totalTime(loop.duration() * 500));
        const st = ScrollTrigger.create({
          trigger: root.current,
          start: "top bottom",
          end: "bottom top",
          onUpdate: (self) => {
            // Direct timeScale — no per-frame tweens competing with Lenis.
            const boost = Math.min(1.35, 1 + Math.abs(self.getVelocity()) / 1400);
            const scale = self.direction * boost;
            for (const loop of loops) loop.timeScale(scale);
          },
        });
        return () => {
          st.kill();
          loops.forEach((l) => l.kill());
        };
      });
      return () => mm.revert();
    },
    { scope: root },
  );

  const row = (dark: boolean) => (
    <div data-track className="flex w-max">
      {[0, 1].map((copy) => (
        <ul key={copy} aria-hidden={copy === 1} className="flex shrink-0 items-center">
          {words.map((w) => (
            <li key={w} className="flex items-center gap-6 px-6 py-5 md:gap-9 md:px-9 md:py-6">
              <span className="whitespace-nowrap text-2xl font-semibold md:text-4xl">{w}</span>
              <svg
                aria-hidden
                viewBox="0 0 24 24"
                className={cn("size-6 md:size-8", dark ? "text-lime" : "text-forest")}
              >
                <path
                  fill="currentColor"
                  d="M12 0c.8 6.4 5.6 11.2 12 12-6.4.8-11.2 5.6-12 12-.8-6.4-5.6-11.2-12-12C6.4 11.2 11.2 6.4 12 0Z"
                />
              </svg>
            </li>
          ))}
        </ul>
      ))}
    </div>
  );

  return (
    <div
      ref={root}
      {...(scrollRibbonStart ? { "data-ribbon-start": "" } : {})}
      className={cn("relative overflow-hidden py-16 md:py-24", className)}
    >
      <span className="sr-only">Our services: {words.join(", ")}</span>
      <div aria-hidden className="relative left-1/2 w-[130vw] -translate-x-1/2">
        <div className="-rotate-[3deg] bg-lime text-forest shadow-[0_14px_40px_-14px_rgb(15_61_46/0.4)]">
          {row(false)}
        </div>
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 rotate-[2.5deg] bg-forest text-white shadow-[0_14px_40px_-14px_rgb(15_61_46/0.35)]">
          {row(true)}
        </div>
      </div>
    </div>
  );
}
