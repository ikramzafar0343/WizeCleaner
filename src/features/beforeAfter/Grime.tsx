import { useId } from "react";

const STAINS = [
  { cx: 18, cy: 72, rx: 14, ry: 8 },
  { cx: 62, cy: 82, rx: 18, ry: 7 },
  { cx: 84, cy: 30, rx: 9, ry: 12 },
  { cx: 36, cy: 26, rx: 11, ry: 6 },
  { cx: 50, cy: 55, rx: 8, ry: 5 },
];

/**
 * A dusty, stained film laid over a photo to stage the "before" state.
 * Pure SVG — no extra image download.
 */
export function Grime() {
  const id = useId().replace(/:/g, "");
  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute inset-0 h-full w-full mix-blend-multiply"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <defs>
        <filter id={`n${id}`} x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" seed="7" />
          <feColorMatrix
            values="0 0 0 0 0.42  0 0 0 0 0.33  0 0 0 0 0.2  0 0 0 0.55 0"
          />
        </filter>
        <filter id={`b${id}`}>
          <feGaussianBlur stdDeviation="2.4" />
        </filter>
        <radialGradient id={`v${id}`} cx="50%" cy="50%" r="70%">
          <stop offset="55%" stopColor="#6b5a3c" stopOpacity="0" />
          <stop offset="100%" stopColor="#4a3a22" stopOpacity="0.55" />
        </radialGradient>
      </defs>
      <rect width="100" height="100" filter={`url(#n${id})`} />
      <g filter={`url(#b${id})`} fill="#5b4526" opacity="0.45">
        {STAINS.map((s) => (
          <ellipse key={`${s.cx}-${s.cy}`} {...s} />
        ))}
      </g>
      <rect width="100" height="100" fill={`url(#v${id})`} />
    </svg>
  );
}
