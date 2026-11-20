"use client";

import Lenis from "lenis";
import { usePathname } from "next/navigation";
import { useEffect, type ReactNode } from "react";
import { DESKTOP_MOTION, gsap, ScrollTrigger } from "./gsap";

/** Owns Lenis smooth scrolling and keeps ScrollTrigger in sync with it. */
export function MotionProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add(DESKTOP_MOTION, () => {
      const lenis = new Lenis({ autoRaf: false, duration: 1.1, smoothWheel: true });
      const tick = (time: number) => lenis.raf(time * 1000);
      lenis.on("scroll", ScrollTrigger.update);
      gsap.ticker.add(tick);
      gsap.ticker.lagSmoothing(0);
      document.documentElement.dataset.lenis = "on";
      return () => {
        gsap.ticker.remove(tick);
        lenis.destroy();
        delete document.documentElement.dataset.lenis;
      };
    });
    let alive = true;
    void document.fonts?.ready.then(() => {
      if (alive) ScrollTrigger.refresh();
    });
    return () => {
      alive = false;
      mm.revert();
    };
  }, []);

  useEffect(() => {
    const id = window.setTimeout(() => ScrollTrigger.refresh(), 150);
    return () => window.clearTimeout(id);
  }, [pathname]);

  return children;
}
