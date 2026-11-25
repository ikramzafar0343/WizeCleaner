"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { site } from "@/shared/config/site";
import { cn } from "@/shared/lib/cn";

/** First paint / refresh — professional mid pace */
const FIRST_HOLD_MS = 720;
/** In-app page change */
const NAV_HOLD_MS = 540;
const FADE_MS = 300;

/**
 * Full-screen branded preloader: centered logo on refresh and between pages.
 */
export function PagePreloader() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);
  const boot = useRef(true);
  const timers = useRef<number[]>([]);
  const prevPath = useRef(pathname);

  const clearTimers = () => {
    for (const id of timers.current) window.clearTimeout(id);
    timers.current = [];
  };

  const showFor = (holdMs: number) => {
    clearTimers();
    setVisible(true);
    setFading(false);
    // Reset scroll under the overlay so the next page never opens on the footer.
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    const fadeAt = window.setTimeout(() => setFading(true), holdMs);
    const doneAt = window.setTimeout(() => {
      setVisible(false);
      setFading(false);
    }, holdMs + FADE_MS);
    timers.current = [fadeAt, doneAt];
  };

  // Initial load / refresh
  useEffect(() => {
    const start = performance.now();
    let cancelled = false;

    const done = () => {
      if (cancelled) return;
      const elapsed = performance.now() - start;
      showFor(Math.max(160, FIRST_HOLD_MS - elapsed));
    };

    void Promise.race([
      document.fonts?.ready ?? Promise.resolve(),
      new Promise<void>((r) => window.setTimeout(r, FIRST_HOLD_MS)),
    ]).then(done);

    return () => {
      cancelled = true;
      clearTimers();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- boot once
  }, []);

  // Soft navigation: show as soon as an in-app link is clicked
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as Element | null)?.closest?.("a");
      if (!a) return;
      const href = a.getAttribute("href");
      if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) return;
      if (a.target === "_blank" || a.hasAttribute("download")) return;
      let url: URL;
      try {
        url = new URL(href, window.location.href);
      } catch {
        return;
      }
      if (url.origin !== window.location.origin) return;
      if (url.pathname === window.location.pathname && url.search === window.location.search && !url.hash) return;
      showFor(NAV_HOLD_MS);
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Pathname settled (covers router.push / footer select)
  useEffect(() => {
    if (boot.current) {
      boot.current = false;
      prevPath.current = pathname;
      return;
    }
    if (prevPath.current === pathname) return;
    prevPath.current = pathname;
    showFor(NAV_HOLD_MS);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(() => {
    document.documentElement.classList.toggle("preloader-lock", visible);
    return () => document.documentElement.classList.remove("preloader-lock");
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Loading"
      className={cn(
        "fixed inset-0 z-[100] grid place-items-center bg-mist transition-opacity ease-out",
        fading ? "pointer-events-none opacity-0" : "opacity-100",
      )}
      style={{ transitionDuration: `${FADE_MS}ms` }}
    >
      <div className="flex flex-col items-center gap-6">
        <div className="preloader-logo">
          <Image
            src="/images/brand/logo.png"
            alt={site.name}
            width={440}
            height={396}
            priority
            className="h-48 w-auto object-contain sm:h-56"
          />
        </div>
        <span className="sr-only">Loading {site.name}</span>
        <div className="h-1 w-28 overflow-hidden rounded-full bg-forest/10">
          <div className="preloader-bar h-full rounded-full bg-gradient-to-r from-lime-2 via-lime to-forest" />
        </div>
      </div>
    </div>
  );
}
