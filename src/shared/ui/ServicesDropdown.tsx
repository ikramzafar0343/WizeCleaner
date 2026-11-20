"use client";

import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { services } from "@/features/services/data";
import { cn } from "@/shared/lib/cn";

/** Desktop nav dropdown — all services in a scrollable panel. */
export function NavServicesDropdown({ active }: { active: boolean }) {
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLLIElement>(null);
  const menuId = useId();
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      if (!root.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDoc);
    window.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <li ref={root} className="relative">
      {active ? (
        <span className="absolute inset-0 rounded-full bg-forest" aria-hidden />
      ) : null}
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="menu"
        aria-controls={menuId}
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "relative flex items-center gap-1 rounded-full px-4 py-2 text-sm font-semibold transition-colors",
          active ? "text-white" : "text-forest hover:text-moss",
        )}
      >
        Services
        <ChevronDown aria-hidden className={cn("size-4 transition-transform", open && "rotate-180")} />
      </button>

      {open ? (
        <div
          id={menuId}
          role="menu"
          className="absolute left-1/2 top-[calc(100%+0.75rem)] z-50 w-[min(22rem,calc(100vw-2rem))] -translate-x-1/2 overflow-hidden rounded-2xl bg-white p-2 shadow-[0_24px_60px_-28px_rgb(15_61_46/0.45)] ring-1 ring-forest/10"
        >
          <div className="max-h-[min(24rem,60vh)] overflow-y-auto overscroll-contain">
            <ul className="flex flex-col gap-0.5">
              {services.map((s) => (
                <li key={s.slug} role="none">
                  <Link
                    role="menuitem"
                    href={`/services/${s.slug}`}
                    className="block rounded-xl px-3 py-2.5 text-sm font-semibold text-forest transition-colors hover:bg-mist"
                    onClick={() => setOpen(false)}
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <Link
            href="/services"
            className="mt-1 block rounded-xl bg-forest px-3 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-forest-2"
            onClick={() => setOpen(false)}
          >
            View all services
          </Link>
        </div>
      ) : null}
    </li>
  );
}

/** Mobile accordion list of services. */
export function MobileServicesList({ onNavigate }: { onNavigate?: () => void }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const servicesActive = pathname.startsWith("/services");

  return (
    <li>
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "flex w-full items-center justify-center gap-2 rounded-2xl px-4 py-3.5 text-lg font-semibold",
          servicesActive ? "bg-forest text-white" : "text-forest",
        )}
      >
        Services
        <ChevronDown aria-hidden className={cn("size-5 transition-transform", open && "rotate-180")} />
      </button>
      {open ? (
        <ul className="mt-1 max-h-64 space-y-0.5 overflow-y-auto rounded-2xl bg-mist p-2">
          <li>
            <Link
              href="/services"
              onClick={onNavigate}
              className="block rounded-xl px-3 py-2.5 text-center text-sm font-semibold text-forest"
            >
              All services
            </Link>
          </li>
          {services.map((s) => (
            <li key={s.slug}>
              <Link
                href={`/services/${s.slug}`}
                onClick={onNavigate}
                className="block rounded-xl px-3 py-2.5 text-center text-sm font-medium text-forest/90 hover:bg-white"
              >
                {s.title}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </li>
  );
}

/** Footer accordion — expands footer height and shows every service inline. */
export function FooterServicesSelect() {
  const id = useId();
  const listId = useId();
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);

  return (
    <div className="w-full max-w-xs md:max-w-none">
      <p id={id} className="mb-4 text-sm font-semibold text-lime">
        Services
      </p>
      <button
        type="button"
        aria-labelledby={id}
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-3 rounded-full border border-white/15 bg-white/10 py-3 pl-4 pr-3 text-left text-sm font-semibold text-white outline-none transition-colors hover:bg-white/15 focus:border-lime focus:ring-2 focus:ring-lime/40"
      >
        <span>{open ? "Hide services" : "Show all services"}</span>
        <ChevronDown aria-hidden className={cn("size-4 shrink-0 text-lime transition-transform", open && "rotate-180")} />
      </button>

      <div
        id={listId}
        className={cn(
          "grid transition-[grid-template-rows] duration-300 ease-[var(--ease-out-soft)]",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="overflow-hidden">
          <ul className="mt-3 space-y-1 border-t border-white/10 pt-3 text-left">
            <li>
              <Link
                href="/services"
                className="block rounded-xl px-2 py-2 text-sm font-semibold text-lime transition-colors hover:bg-white/10"
              >
                View all services
              </Link>
            </li>
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="block rounded-xl px-2 py-2 text-sm text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
