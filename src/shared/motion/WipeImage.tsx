"use client";

import { BeforeAfter } from "@/features/beforeAfter/BeforeAfter";
import { cn } from "@/shared/lib/cn";

type Props = {
  src: string;
  alt: string;
  sizes: string;
  className?: string;
  priority?: boolean;
};

/**
 * Photo frame with a thin, draggable before/after squeegee wipe.
 * Until a real before photo is supplied upstream, the before side is staged.
 */
export function WipeImage({ src, alt, sizes, className, priority = false }: Props) {
  return (
    <BeforeAfter
      src={src}
      alt={alt}
      sizes={sizes}
      priority={priority}
      className={cn("relative overflow-hidden", className)}
    />
  );
}
