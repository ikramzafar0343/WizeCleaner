import { cn } from "@/shared/lib/cn";

/**
 * Window squeegee drawn upright: a rubber blade on the right and the handle
 * pointing back to the left, so it reads as wiping left-to-right.
 */
export function Squeegee({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 120" fill="none" aria-hidden className={cn("block", className)}>
      <rect x="2" y="54" width="34" height="12" rx="6" fill="#0f3d2e" />
      <rect x="6" y="57" width="22" height="6" rx="3" fill="#2f6b4f" />
      <rect x="32" y="4" width="16" height="112" rx="5" fill="#0f3d2e" />
      <rect x="35" y="10" width="4" height="100" rx="2" fill="#2f6b4f" />
      <rect x="46" y="2" width="10" height="116" rx="5" fill="#c8f169" />
      <rect x="54" y="2" width="4" height="116" rx="2" fill="#8fbf2f" />
    </svg>
  );
}
