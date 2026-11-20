const BUBBLES = [
  { left: "8%", size: 14, delay: "0s", dur: "7s" },
  { left: "18%", size: 8, delay: "2.4s", dur: "6s" },
  { left: "31%", size: 18, delay: "1.2s", dur: "9s" },
  { left: "68%", size: 10, delay: "3.1s", dur: "7.5s" },
  { left: "79%", size: 16, delay: "0.6s", dur: "8.5s" },
  { left: "91%", size: 9, delay: "4s", dur: "6.5s" },
];

/** Soft clouds and slow soap bubbles behind the hero copy. */
export function HeroBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden [contain:paint]">
      {/* Soft radial fills — no animated blur filters (those thrash paint while scrolling). */}
      <div className="animate-drift absolute -left-[10%] top-[8%] h-64 w-[55%] rounded-full bg-[radial-gradient(circle,rgb(255_255_255/0.75)_0%,transparent_70%)]" />
      <div className="animate-drift absolute -right-[12%] top-[22%] h-72 w-[50%] rounded-full bg-[radial-gradient(circle,rgb(255_255_255/0.65)_0%,transparent_70%)] [animation-delay:-6s]" />
      <div className="animate-drift absolute left-[30%] top-[46%] h-56 w-[40%] rounded-full bg-[radial-gradient(circle,rgb(238_249_212/0.75)_0%,transparent_70%)] [animation-delay:-11s]" />
      {BUBBLES.map((b) => (
        <span
          key={b.left}
          className="absolute bottom-[38%] rounded-full border border-white/80 bg-white/30"
          style={{
            left: b.left,
            width: b.size,
            height: b.size,
            animation: `bubble-rise ${b.dur} ease-in ${b.delay} infinite`,
          }}
        />
      ))}
    </div>
  );
}
