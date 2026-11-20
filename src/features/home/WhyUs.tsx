import { BadgeCheck, Leaf, ShieldCheck, Timer } from "lucide-react";
import Image from "next/image";
import { Reveal } from "@/shared/motion/Reveal";
import { SectionHead } from "@/shared/ui/SectionHead";

const POINTS = [
  { icon: ShieldCheck, title: "Vetted, trained crew", text: "Background-checked staff trained for each service." },
  { icon: Leaf, title: "Safe products", text: "Gentle on families, pets and delicate surfaces." },
  { icon: Timer, title: "On time, every time", text: "We arrive in the slot we agreed, ready to work." },
  { icon: BadgeCheck, title: "Checked before we leave", text: "A walk-through with you closes every job." },
];

/** Bento of reasons to choose the crew. */
export function WhyUs() {
  return (
    <section className="section-y pt-0 md:pt-0">
      <div className="container-site">
        <SectionHead kicker="Why us" title="Clean you can count on" />
        <Reveal stagger className="mt-14 grid gap-4 md:grid-cols-3 md:grid-rows-2">
          <div className="relative min-h-[22rem] overflow-hidden rounded-[2rem] bg-forest md:row-span-2">
            <Image
              src="/images/team.webp"
              alt="Our cleaning team planning a job"
              fill
              sizes="(min-width: 768px) 33vw, 100vw"
              quality={60}
              className="object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/40 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7 text-center">
              <p className="text-2xl font-semibold text-white">One crew, start to finish</p>
              <p className="mt-2 text-sm text-white/75">The same team plans, cleans and checks your space.</p>
            </div>
          </div>
          {POINTS.map(({ icon: Icon, title, text }, i) => (
            <div
              key={title}
              className={
                i === 1
                  ? "flex flex-col items-center justify-center rounded-[2rem] bg-lime p-8 text-center"
                  : "flex flex-col items-center justify-center rounded-[2rem] bg-white p-8 text-center"
              }
            >
              <span className={i === 1 ? "grid size-12 place-items-center rounded-2xl bg-forest text-lime" : "grid size-12 place-items-center rounded-2xl bg-lime-soft text-forest"}>
                <Icon aria-hidden className="size-6" />
              </span>
              <h3 className="mt-5 text-xl text-forest">{title}</h3>
              <p className={i === 1 ? "mt-2 text-sm text-forest/75" : "mt-2 text-sm text-muted"}>{text}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
