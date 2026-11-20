"use client";

import { useRef, type ReactNode } from "react";
import { cn } from "@/shared/lib/cn";
import { gsap, MOTION_OK, useGSAP } from "./gsap";

type Props = {
  children: ReactNode;
  className?: string;
  /** Animate direct children one after another instead of the block as a whole. */
  stagger?: boolean;
  as?: "div" | "ul" | "section";
};

/** Rises content into place once as it enters the viewport. */
export function Reveal({ children, className, stagger = false, as: Tag = "div" }: Props) {
  const ref = useRef<HTMLDivElement & HTMLUListElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        const targets = stagger ? Array.from(el.children) : [el];
        gsap.from(targets, {
          y: 36,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          stagger: stagger ? 0.08 : 0,
          scrollTrigger: { trigger: el, start: "top 86%", once: true },
        });
      });
      return () => mm.revert();
    },
    { scope: ref },
  );

  return (
    <Tag ref={ref} className={cn(className)}>
      {children}
    </Tag>
  );
}
