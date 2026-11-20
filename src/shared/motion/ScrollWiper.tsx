"use client";

import { usePathname } from "next/navigation";
import { useRef, useSyncExternalStore } from "react";
import CurvedRibbonFlat from "@/shared/ui/CurvedRibbonFlat";
import { Squeegee } from "@/shared/ui/Squeegee";
import { gsap, ScrollTrigger, useGSAP } from "./gsap";

function subscribeReducedMotion(onChange: () => void) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

function getReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function pageTop(el: Element) {
  return el.getBoundingClientRect().top + window.scrollY;
}

/**
 * Centered brand ribbon: draws/erases with scroll (scrubbed both ways).
 */
export function ScrollWiper() {
  const pathname = usePathname();
  const reduceMotion = useSyncExternalStore(subscribeReducedMotion, getReducedMotion, () => false);

  const shell = useRef<HTMLDivElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const fill = useRef<HTMLDivElement>(null);
  const blade = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (reduceMotion) {
      const setFill = gsap.quickSetter(fill.current, "scaleX");
      const setBlade = gsap.quickSetter(blade.current, "left", "%");
      const update = () => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
        setFill(p);
        setBlade(p * 100);
      };
      update();
      window.addEventListener("scroll", update, { passive: true });
      window.addEventListener("resize", update);
      return () => {
        window.removeEventListener("scroll", update);
        window.removeEventListener("resize", update);
      };
    }

    const wrap = shell.current;
    const el = stage.current;
    const path = el?.querySelector<SVGPathElement>("#scroll-ribbon");
    const edge = el?.querySelector<SVGPathElement>("#scroll-ribbon-edge");
    if (!wrap || !el || !path) return;

    const startEl = document.querySelector<HTMLElement>("[data-ribbon-start]");
    const endEl = document.querySelector<HTMLElement>("[data-ribbon-end]");
    if (!startEl || !endEl) {
      wrap.style.visibility = "hidden";
      return;
    }

    const length = path.getTotalLength();
    const edgeLen = edge?.getTotalLength() ?? length;
    gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
    if (edge) gsap.set(edge, { strokeDasharray: edgeLen, strokeDashoffset: edgeLen });

    const placeShell = () => {
      const start = pageTop(startEl) + startEl.offsetHeight;
      const end = pageTop(endEl);
      const span = Math.max(1, end - start);
      wrap.style.visibility = "visible";
      wrap.style.height = `${span}px`;
      // translate3d stays smoother than rewriting `top` every frame
      wrap.style.transform = `translate3d(0, ${start - window.scrollY}px, 0)`;
    };

    placeShell();

    const st = ScrollTrigger.create({
      trigger: startEl,
      start: "bottom top",
      endTrigger: endEl,
      end: "top top",
      scrub: 0.5,
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        placeShell();
        const p = self.progress; // 0→1 down, 1→0 up
        gsap.set(path, { strokeDashoffset: length * (1 - p) });
        if (edge) gsap.set(edge, { strokeDashoffset: edgeLen * (1 - p) });
      },
      onRefresh: placeShell,
    });

    const onScroll = () => placeShell();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    const refreshId = window.setTimeout(() => ScrollTrigger.refresh(), 200);

    return () => {
      window.clearTimeout(refreshId);
      st.kill();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [reduceMotion, pathname]);

  if (reduceMotion) {
    return (
      <div aria-hidden className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-1.5">
        <div className="absolute inset-0 bg-forest/10" />
        <div ref={fill} className="absolute inset-0 origin-left scale-x-0 bg-gradient-to-r from-lime-2 to-lime" />
        <div ref={blade} className="absolute top-0 -translate-x-[70%]" style={{ left: "0%" }}>
          <Squeegee className="h-6 w-auto drop-shadow-[0_2px_4px_rgb(15_61_46/0.3)]" />
        </div>
      </div>
    );
  }

  return (
    <div
      ref={shell}
      aria-hidden
      className="pointer-events-none fixed inset-x-0 top-0 z-0 overflow-hidden will-change-transform"
      style={{ height: 0 }}
    >
      <div
        ref={stage}
        className="absolute left-1/2 top-0 h-full w-[min(22vw,11rem)] -translate-x-1/2 opacity-[0.88]"
      >
        <CurvedRibbonFlat
          className="h-full w-full drop-shadow-[0_12px_28px_rgb(15_61_46/0.18)]"
          preserveAspectRatio="xMidYMid slice"
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
}
