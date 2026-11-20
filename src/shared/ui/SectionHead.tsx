import type { ReactNode } from "react";
import { cn } from "@/shared/lib/cn";
import { Reveal } from "@/shared/motion/Reveal";

type Props = {
  kicker?: string;
  title: ReactNode;
  intro?: ReactNode;
  light?: boolean;
  className?: string;
  as?: "h1" | "h2";
};

/** Centered section heading used on every page. */
export function SectionHead({ kicker, title, intro, light = false, className, as: H = "h2" }: Props) {
  return (
    <Reveal stagger className={cn("mx-auto flex max-w-3xl flex-col items-center text-center", className)}>
      {kicker ? (
        <span
          className={cn(
            "mb-5 inline-flex items-center gap-2 rounded-full border px-3.5 py-1 text-sm",
            light ? "border-white/25 text-white/80" : "border-line bg-white text-muted",
          )}
        >
          <span className="size-1.5 rounded-full bg-lime-2" aria-hidden />
          {kicker}
        </span>
      ) : null}
      <H
        className={cn(
          H === "h1" ? "text-[2.6rem] md:text-7xl" : "text-[2.1rem] md:text-[3.4rem]",
          light ? "text-white" : "text-forest",
        )}
      >
        {title}
      </H>
      {intro ? (
        <p className={cn("mt-5 max-w-xl text-base md:text-lg", light ? "text-white/75" : "text-muted")}>{intro}</p>
      ) : null}
    </Reveal>
  );
}
