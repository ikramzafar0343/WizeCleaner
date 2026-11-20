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
 * Absolute in-flow shell — positioned only on refresh, never per scroll frame.
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
    const setPath = gsap.quickSetter(path, "strokeDashoffset");
    const setEdge = edge ? gsap.quickSetter(edge, "strokeDashoffset") : null;

    path.style.strokeDasharray = `${length}`;
    setPath(length);
    if (edge) {
      edge.style.strokeDasharray = `${edgeLen}`;
      setEdge?.(edgeLen);
    }

    const placeShell = () => {
      const parent = wrap.offsetParent as HTMLElement | null;
      const parentTop = parent ? pageTop(parent) : 0;
      const start = pageTop(startEl) + startEl.offsetHeight - parentTop;
      const end = pageTop(endEl) - parentTop;
      wrap.style.visibility = "visible";
      wrap.style.top = `${start}px`;
      wrap.style.height = `${Math.max(1, end - start)}px`;
    };

    placeShell();

    const st = ScrollTrigger.create({
      trigger: startEl,
      start: "bottom top",
      endTrigger: endEl,
      end: "top top",
      scrub: true,
      invalidateOnRefresh: true,
      onRefresh: placeShell,
      onUpdate: (self) => {
        const p = self.progress;
        setPath(length * (1 - p));
        setEdge?.(edgeLen * (1 - p));
      },
    });

    const refreshId = window.setTimeout(() => ScrollTrigger.refresh(), 200);

    return () => {
      window.clearTimeout(refreshId);
      st.kill();
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
      className="pointer-events-none absolute inset-x-0 -z-10 overflow-hidden [contain:paint]"
      style={{ top: 0, height: 0, visibility: "hidden" }}
    >
      <div
        ref={stage}
        className="absolute left-1/2 top-0 h-full w-[min(22vw,11rem)] -translate-x-1/2 opacity-[0.88]"
      >
        <CurvedRibbonFlat className="h-full w-full" preserveAspectRatio="xMidYMid slice" width="100%" height="100%" />
      </div>
    </div>
  );
}
