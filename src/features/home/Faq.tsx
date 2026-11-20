"use client";

import { Plus } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useId, useState } from "react";
import { cn } from "@/shared/lib/cn";
import { Reveal } from "@/shared/motion/Reveal";
import { SectionHead } from "@/shared/ui/SectionHead";

export type FaqItem = { q: string; a: string };

export const GENERAL_FAQS: readonly FaqItem[] = [
  { q: "How do I book a cleaning?", a: "Send us a WhatsApp message with the service, your area and a few photos. We reply with a time slot and quote." },
  { q: "Do you bring your own equipment?", a: "Yes. The crew brings all machines, tools and cleaning products needed for the job." },
  { q: "Which areas do you cover?", a: "We cover the main areas of the city. Message us your location and we will confirm." },
  { q: "Are your products safe for kids and pets?", a: "We use gentle, safe products by default and tell you if a stronger product is needed." },
  { q: "What if I am not happy with something?", a: "Point it out during the walk-through and we fix it on the spot." },
];

/** Accessible accordion; one answer open at a time. */
export function Faq({ items = GENERAL_FAQS, title = "Questions, answered" }: { items?: readonly FaqItem[]; title?: string }) {
  const [open, setOpen] = useState<number | null>(0);
  const base = useId();

  return (
    <section className="section-y">
      <div className="container-site">
        <SectionHead kicker="FAQ" title={title} />
        <Reveal stagger as="ul" className="mx-auto mt-12 flex max-w-3xl flex-col gap-3">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <li key={item.q} className={cn("rounded-3xl transition-colors", isOpen ? "bg-white" : "bg-white/60")}>
                <h3>
                  <button
                    type="button"
                    id={`${base}-q${i}`}
                    aria-expanded={isOpen}
                    aria-controls={`${base}-a${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex min-h-16 w-full items-center justify-between gap-4 px-6 py-4 text-left text-base font-semibold text-forest md:text-lg"
                  >
                    {item.q}
                    <span
                      className={cn(
                        "grid size-9 shrink-0 place-items-center rounded-full transition-all duration-300",
                        isOpen ? "rotate-45 bg-forest text-lime" : "bg-mist text-forest",
                      )}
                    >
                      <Plus aria-hidden className="size-4" />
                    </span>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      id={`${base}-a${i}`}
                      role="region"
                      aria-labelledby={`${base}-q${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-muted">{item.a}</p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </li>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
