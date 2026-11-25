"use client";

import Lenis from "lenis";
import { usePathname } from "next/navigation";
import { useEffect, useRef, type ReactNode } from "react";
import { DESKTOP_MOTION, gsap, ScrollTrigger } from "./gsap";

function jumpToTop(lenis: Lenis | null) {
  lenis?.scrollTo(0, { immediate: true });
  window.scrollTo(0, 0);
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}

/** Owns Lenis smooth scrolling and keeps ScrollTrigger in sync with it. */
export function MotionProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    const mm = gsap.matchMedia();
    mm.add(DESKTOP_MOTION, () => {
      // Lerp (not long duration) keeps wheel response snappy while still smooth.
      const lenis = new Lenis({
        autoRaf: false,
        lerp: 0.12,
        smoothWheel: true,
        wheelMultiplier: 1.05,
        touchMultiplier: 1.2,
      });
      lenisRef.current = lenis;
      const tick = (time: number) => lenis.raf(time * 1000);
      lenis.on("scroll", ScrollTrigger.update);
      gsap.ticker.add(tick);
      gsap.ticker.lagSmoothing(0);
      document.documentElement.dataset.lenis = "on";
      return () => {
        gsap.ticker.remove(tick);
        lenis.destroy();
        lenisRef.current = null;
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

  // Always land at the top when switching pages (Lenis otherwise keeps scroll).
  useEffect(() => {
    jumpToTop(lenisRef.current);
    const id = window.setTimeout(() => {
      jumpToTop(lenisRef.current);
      ScrollTrigger.refresh();
    }, 150);
    return () => window.clearTimeout(id);
  }, [pathname]);

  return children;
}
