import type { SVGProps } from "react";
import { cn } from "@/shared/lib/cn";

const RIBBON_D =
  "M 110 90 C 360 50, 430 260, 300 420 C 150 620, 90 820, 250 1020 C 420 1220, 430 1440, 270 1640 C 120 1820, 160 2000, 280 2140";

/**
 * Centered brand S-ribbon. Pixel stroke + non-scaling so About matches Home.
 */
export default function CurvedRibbonFlat({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 2200"
      fill="none"
      aria-hidden
      overflow="visible"
      className={cn("block overflow-visible", className)}
      {...props}
    >
      <defs>
        <linearGradient id="ribbon-sheen" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#145240" />
          <stop offset="50%" stopColor="#0f3d2e" />
          <stop offset="100%" stopColor="#0a2e22" />
        </linearGradient>
      </defs>

      <path
        d={RIBBON_D}
        stroke="#0f3d2e"
        strokeWidth={58}
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.18"
        vectorEffect="non-scaling-stroke"
      />
      <path
        id="scroll-ribbon"
        d={RIBBON_D}
        stroke="url(#ribbon-sheen)"
        strokeWidth={54}
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
      <path
        id="scroll-ribbon-edge"
        d={RIBBON_D}
        stroke="#2f6b4f"
        strokeWidth={14}
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.4"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
