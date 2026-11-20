import { HeartHandshake, Leaf, Ruler } from "lucide-react";
import type { Metadata } from "next";
import { CtaBand } from "@/features/home/CtaBand";
import { WhyUs } from "@/features/home/WhyUs";
import { site } from "@/shared/config/site";
import { Reveal } from "@/shared/motion/Reveal";
import { Ribbon } from "@/shared/motion/Ribbon";
import { WipeImage } from "@/shared/motion/WipeImage";
import { WordFill } from "@/shared/motion/WordFill";
import { PageHero } from "@/shared/ui/PageHero";
import { SectionHead } from "@/shared/ui/SectionHead";

export const metadata: Metadata = {
  title: "About Us",
  description: `${site.legalName} is a ${site.city}-based cleaning crew for homes, offices and new builds.`,
  alternates: { canonical: "/about" },
};

const VALUES = [
  { icon: Ruler, title: "Detail first", text: "Corners, tracks, grout and handles — the spots most people skip." },
  { icon: HeartHandshake, title: "Respect for your space", text: "Shoe covers, careful moving, and nothing touched without asking." },
  { icon: Leaf, title: "Safe by default", text: "Gentle products unless a surface truly needs something stronger." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="A crew that cares about the corners"
        intro={`We are a ${site.city}-based cleaning team for homes, offices and freshly built spaces.`}
        crumbs={[{ href: "/about", label: "About" }]}
      />

      <section className="section-y">
        <div className="container-site">
          <WordFill
            className="mx-auto max-w-4xl text-center text-[1.75rem] font-semibold leading-[1.2] tracking-tight text-forest md:text-5xl"
            text="We started with one simple idea: a clean space should feel calm, not just look tidy. So we train every crew member, bring the right tools for each surface, and walk through the result with you before we leave."
          />
        </div>
      </section>

      <section className="container-site">
        <WipeImage
          src="/images/about-team.webp"
          alt="Our team planning a cleaning job"
          sizes="(min-width: 1280px) 1200px, 100vw"
          className="mx-auto aspect-[2/1] max-w-6xl rounded-[2rem]"
        />
      </section>

      <section className="section-y">
        <div className="container-site">
          <SectionHead kicker="What we value" title="How we work" />
          <Reveal stagger as="ul" className="mx-auto mt-12 grid max-w-5xl gap-4 md:grid-cols-3">
            {VALUES.map(({ icon: Icon, title, text }, i) => (
              <li
                key={title}
                className={
                  i === 1
                    ? "flex flex-col items-center rounded-[2rem] bg-forest p-8 text-center text-white"
                    : "flex flex-col items-center rounded-[2rem] bg-white p-8 text-center"
                }
              >
                <span className="grid size-12 place-items-center rounded-2xl bg-lime text-forest">
                  <Icon aria-hidden className="size-6" />
                </span>
                <h3 className={i === 1 ? "mt-5 text-xl text-white" : "mt-5 text-xl text-forest"}>{title}</h3>
                <p className={i === 1 ? "mt-2 text-sm text-white/75" : "mt-2 text-sm text-muted"}>{text}</p>
              </li>
            ))}
          </Reveal>
        </div>
      </section>

      <Ribbon />
      <WhyUs />
      <CtaBand />
    </>
  );
}
