"use client";

import { useRef } from "react";
import { cn } from "@/shared/lib/cn";
import { gsap, MOTION_OK, useGSAP } from "./gsap";

/** Large statement whose words brighten one by one as you scroll past. */
export function WordFill({ text, className }: { text: string; className?: string }) {
  const root = useRef<HTMLParagraphElement>(null);
  const words = text.split(" ");

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        gsap.fromTo(
          "[data-w]",
          { opacity: 0.18 },
          {
            opacity: 1,
            stagger: 0.1,
            ease: "none",
            scrollTrigger: { trigger: root.current, start: "top 80%", end: "bottom 45%", scrub: true },
          },
        );
      });
      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <p ref={root} className={cn("text-balance", className)}>
      {words.map((w, i) => (
        <span key={`${w}-${i}`} data-w className="inline">
          {w}
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </p>
  );
}
