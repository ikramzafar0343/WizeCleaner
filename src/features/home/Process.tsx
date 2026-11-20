"use client";

import { Camera, ClipboardCheck, MessageCircle, SprayCan, type LucideIcon } from "lucide-react";
import { useRef } from "react";
import { gsap, MOTION_OK, useGSAP } from "@/shared/motion/gsap";
import { SectionHead } from "@/shared/ui/SectionHead";

const STEPS: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: MessageCircle, title: "Message us", text: "Tell us the service and area on WhatsApp." },
  { icon: Camera, title: "Share photos", text: "A few pictures help us plan the crew and time." },
  { icon: SprayCan, title: "We clean", text: "The crew arrives on time with all equipment." },
  { icon: ClipboardCheck, title: "Walk-through", text: "Check every room with us before we leave." },
];

/** Four-step booking flow with a line that draws as you scroll. */
export function Process() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        gsap.fromTo(
          "[data-line]",
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: "none",
            scrollTrigger: { trigger: "[data-steps]", start: "top 80%", end: "bottom 55%", scrub: true },
          },
        );
        gsap.from("[data-step]", {
          y: 40,
          opacity: 0,
          duration: 0.8,
          stagger: 0.14,
          ease: "power3.out",
          scrollTrigger: { trigger: "[data-steps]", start: "top 82%", once: true },
        });
      });
      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <section ref={root} className="section-y">
      <div className="container-site">
        <SectionHead
          kicker="How it works"
          title="Booked in one message"
          intro="No forms, no waiting on hold. Most bookings are sorted in a short chat."
        />
        <div data-steps className="relative mt-16">
          <div
            aria-hidden
            className="absolute left-[12.5%] right-[12.5%] top-8 hidden h-0.5 bg-line lg:block"
          >
            <div data-line className="h-full origin-left bg-forest" />
          </div>
          <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map(({ icon: Icon, title, text }, i) => (
              <li key={title} data-step className="relative flex flex-col items-center text-center">
                <span className="relative grid size-16 place-items-center rounded-full bg-forest text-lime ring-8 ring-mist">
                  <Icon aria-hidden className="size-6" />
                  <span className="absolute -right-1 -top-1 grid size-6 place-items-center rounded-full bg-lime text-xs font-semibold text-forest">
                    {i + 1}
                  </span>
                </span>
                <div className="mt-5 w-full rounded-3xl bg-white px-5 py-6">
                  <h3 className="text-lg text-forest">{title}</h3>
                  <p className="mt-2 text-sm text-muted">{text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
