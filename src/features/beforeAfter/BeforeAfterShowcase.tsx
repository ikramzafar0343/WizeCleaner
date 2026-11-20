"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { cn } from "@/shared/lib/cn";
import { Reveal } from "@/shared/motion/Reveal";
import { SectionHead } from "@/shared/ui/SectionHead";
import { BeforeAfter } from "./BeforeAfter";

const SCENES = [
  { id: "living", label: "Living room", src: "/images/hero-living.webp", alt: "Living room" },
  { id: "lounge", label: "Lounge", src: "/images/deep-cleaning.webp", alt: "Lounge corner" },
  { id: "office", label: "Office desk", src: "/images/janitorial.webp", alt: "Office workspace" },
  { id: "floor", label: "Marble floor", src: "/images/marble-floor.webp", alt: "Marble floor" },
] as const;

/** Tabbed before/after comparison — the proof section of the home page. */
export function BeforeAfterShowcase() {
  const [active, setActive] = useState<(typeof SCENES)[number]["id"]>("living");
  const scene = SCENES.find((s) => s.id === active) ?? SCENES[0];

  return (
    <section className="section-y">
      <div className="container-site">
        <SectionHead
          kicker="Before & after"
          title="Drag the squeegee, see the difference"
          intro="Slide across any photo to compare how a space looks before and after our crew."
        />

        <Reveal className="mt-10 flex justify-center">
          <div role="tablist" aria-label="Choose a space" className="flex flex-wrap justify-center gap-1 rounded-3xl bg-white p-1 shadow-sm sm:rounded-full">
            {SCENES.map((s) => (
              <button
                key={s.id}
                type="button"
                role="tab"
                aria-selected={s.id === active}
                onClick={() => setActive(s.id)}
                className={cn(
                  "relative min-h-10 shrink-0 rounded-full px-4 text-sm font-semibold transition-colors",
                  s.id === active ? "text-white" : "text-forest hover:text-moss",
                )}
              >
                {s.id === active ? (
                  <motion.span layoutId="ba-tab" className="absolute inset-0 rounded-full bg-forest" />
                ) : null}
                <span className="relative">{s.label}</span>
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal className="mx-auto mt-8 max-w-5xl">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-mist-2 sm:aspect-[16/9]">
            <AnimatePresence mode="wait">
              <motion.div
                key={scene.id}
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <BeforeAfter src={scene.src} alt={scene.alt} className="h-full w-full" />
              </motion.div>
            </AnimatePresence>
          </div>
          <p className="mt-4 text-center text-sm text-muted">Use the arrow keys after selecting the photo to compare.</p>
        </Reveal>
      </div>
    </section>
  );
}
