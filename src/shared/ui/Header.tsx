"use client";

import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav } from "@/shared/config/site";
import { cn } from "@/shared/lib/cn";
import { whatsappLink } from "@/shared/lib/whatsapp";
import { Logo } from "./Logo";
import { WhatsAppIcon } from "./WhatsAppIcon";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-3 z-50 md:top-4">
      <div
        className={cn(
          "mx-3 flex items-center justify-between rounded-full py-2 pl-3 pr-2 transition-all duration-500 md:mx-auto md:max-w-6xl md:pl-4",
          scrolled ? "bg-white/85 shadow-[0_8px_30px_-12px_rgb(15_61_46/0.25)] backdrop-blur-md" : "bg-transparent",
        )}
      >
        <Logo />

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-1 rounded-full bg-white/90 p-1 shadow-[0_2px_10px_-4px_rgb(15_61_46/0.2)]">
            {nav.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href} className="relative">
                  {active ? (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-forest"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  ) : null}
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "relative block rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                      active ? "text-white" : "text-forest hover:text-moss",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden min-h-11 items-center gap-2 rounded-full bg-forest py-2 pl-4 pr-2 text-sm font-semibold text-white transition-colors hover:bg-forest-2 sm:inline-flex"
          >
            Book now
            <span className="grid size-7 place-items-center rounded-full bg-lime text-forest">
              <WhatsAppIcon className="size-4" />
            </span>
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid size-11 place-items-center rounded-full bg-white text-forest shadow-sm md:hidden"
          >
            {open ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.nav
            id="mobile-menu"
            aria-label="Mobile"
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mx-3 mt-2 rounded-3xl bg-white p-3 shadow-xl md:hidden"
          >
            <ul className="flex flex-col">
              {nav.map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.04 * i }}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "block rounded-2xl px-4 py-3.5 text-center text-lg font-semibold",
                      isActive(pathname, item.href) ? "bg-forest text-white" : "text-forest",
                    )}
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-lime font-semibold text-forest"
            >
              <WhatsAppIcon className="size-5" /> Book on WhatsApp
            </a>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
