import Image from "next/image";
import Link from "next/link";
import { site } from "@/shared/config/site";
import { cn } from "@/shared/lib/cn";

/** Compact mark for tight UI spots. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <Image
      src="/images/brand/logo-mark.png"
      alt=""
      width={40}
      height={40}
      className={cn("size-9 object-contain", className)}
      priority
    />
  );
}

/** Full brand logo (transparent PNG). On dark surfaces, sits on a light plate. */
export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="inline-flex items-center" aria-label={`${site.name} home`}>
      <span
        className={cn(
          "inline-flex items-center justify-center",
          light && "rounded-2xl bg-white/95 px-2 py-1 shadow-sm",
        )}
      >
        <Image
          src="/images/brand/logo.png"
          alt={site.name}
          width={180}
          height={162}
          className={cn("h-12 w-auto object-contain md:h-14", light && "h-14 md:h-16")}
          priority
        />
      </span>
    </Link>
  );
}
