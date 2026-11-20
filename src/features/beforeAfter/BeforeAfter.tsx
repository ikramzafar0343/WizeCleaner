"use client";

import { ChevronsLeftRight } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/shared/lib/cn";
import { Squeegee } from "@/shared/ui/Squeegee";
import { Grime } from "./Grime";

type Props = {
  src: string;
  /** Real "before" photo. Without it, the after photo gets a staged dust layer. */
  beforeSrc?: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  /** Sweep the handle once when the slider first comes into view. */
  intro?: boolean;
};

/**
 * Drag (or use arrow keys) to wipe from "before" to "after". Pass a real
 * before photo via `beforeSrc`; until then the before side is staged.
 */
export function BeforeAfter({
  src,
  beforeSrc,
  alt,
  className,
  sizes = "(min-width: 1024px) 70vw, 100vw",
  priority = false,
  intro = true,
}: Props) {
  const [pos, setPos] = useState(50);
  const box = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const moveTo = useCallback((clientX: number) => {
    const rect = box.current?.getBoundingClientRect();
    if (!rect) return;
    setPos(Math.min(100, Math.max(0, ((clientX - rect.left) / rect.width) * 100)));
  }, []);

  useEffect(() => {
    const el = box.current;
    if (!intro || !el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const step = (now: number) => {
          const t = Math.min(1, (now - start) / 1800);
          setPos(50 + Math.sin(t * Math.PI * 2) * 32 * (1 - t));
          if (t < 1 && !dragging.current) frame = requestAnimationFrame(step);
        };
        frame = requestAnimationFrame(step);
      },
      { threshold: 0.5 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [intro]);

  return (
    <div
      ref={box}
      className={cn(
        "relative cursor-ew-resize select-none overflow-hidden touch-none has-[input:focus-visible]:ring-4 has-[input:focus-visible]:ring-lime",
        className,
      )}
      onPointerDown={(e) => {
        e.preventDefault();
        dragging.current = true;
        e.currentTarget.setPointerCapture(e.pointerId);
        moveTo(e.clientX);
      }}
      onPointerMove={(e) => dragging.current && moveTo(e.clientX)}
      onPointerUp={() => (dragging.current = false)}
      onPointerCancel={() => (dragging.current = false)}
    >
      <Image
        src={src}
        alt={`${alt} — after cleaning`}
        fill
        sizes={sizes}
        priority={priority}
        quality={75}
        className="object-cover"
      />

      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        {beforeSrc ? (
          <Image src={beforeSrc} alt={`${alt} — before cleaning`} fill sizes={sizes} quality={60} className="object-cover" />
        ) : (
          <>
            <Image
              src={src}
              alt=""
              aria-hidden
              fill
              sizes={sizes}
              quality={60}
              className="object-cover [filter:sepia(0.5)_saturate(0.55)_brightness(0.78)_contrast(0.88)_blur(0.4px)]"
            />
            <Grime />
          </>
        )}
      </div>

      <span className="absolute left-4 top-4 rounded-full bg-forest/85 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
        Before
      </span>
      <span className="absolute right-4 top-4 rounded-full bg-lime px-3 py-1 text-xs font-semibold text-forest">
        After
      </span>

      <div className="pointer-events-none absolute inset-y-0" style={{ left: `${pos}%` }}>
        <div className="absolute inset-y-0 -ml-px w-0.5 bg-white/90 shadow-[0_0_12px_rgb(255_255_255/0.8)]" />
        <div className="absolute top-1/2 -translate-x-[62%] -translate-y-1/2">
          <Squeegee className="h-16 w-auto drop-shadow-[0_6px_12px_rgb(0_0_0/0.35)] md:h-[5.5rem]" />
        </div>
        <span className="absolute bottom-5 grid size-9 -translate-x-1/2 place-items-center rounded-full bg-white text-forest shadow-lg">
          <ChevronsLeftRight aria-hidden className="size-4" />
        </span>
      </div>

      <input
        type="range"
        min={0}
        max={100}
        value={Math.round(pos)}
        onChange={(e) => setPos(Number(e.target.value))}
        onFocus={() => (dragging.current = true)}
        aria-label="Compare before and after cleaning"
        className="pointer-events-none absolute inset-0 h-full w-full opacity-0"
      />
    </div>
  );
}
