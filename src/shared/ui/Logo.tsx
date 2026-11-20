import Link from "next/link";
import { site } from "@/shared/config/site";
import { cn } from "@/shared/lib/cn";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" aria-hidden className={cn("size-9", className)}>
      <rect width="40" height="40" rx="12" fill="#0f3d2e" />
      <path d="M20 8c4.8 6 8 10.4 8 14.6A8 8 0 0 1 12 22.6C12 18.4 15.2 14 20 8Z" fill="#c8f169" />
      <path d="M26.5 9.5l1 2.4 2.4 1-2.4 1-1 2.4-1-2.4-2.4-1 2.4-1z" fill="#fff" />
      <path d="M16.5 23.5a3.6 3.6 0 0 0 3.5 3.3" stroke="#0f3d2e" strokeWidth="1.8" strokeLinecap="round" fill="none" />
    </svg>
  );
}

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2.5" aria-label={`${site.name} home`}>
      <LogoMark className={light ? "rounded-xl ring-1 ring-lime/40" : ""} />
      <span className={cn("text-xl font-semibold tracking-tight", light ? "text-white" : "text-forest")}>
        {site.name}
      </span>
    </Link>
  );
}
