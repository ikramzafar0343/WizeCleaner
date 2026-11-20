import { Check } from "lucide-react";
import { BeforeAfter } from "@/features/beforeAfter/BeforeAfter";
import { Reveal } from "@/shared/motion/Reveal";
import { WipeImage } from "@/shared/motion/WipeImage";
import { SectionHead } from "@/shared/ui/SectionHead";
import { services, type Service } from "./data";
import { ServiceCard } from "./ServiceCard";
import { ServiceIcon } from "./ServiceIcon";

export function DetailMedia({ service }: { service: Service }) {
  return (
    <section className="container-site -mt-10 md:-mt-16">
      <WipeImage
        src={service.image}
        alt={service.title}
        sizes="(min-width: 1280px) 1200px, 100vw"
        priority
        className="mx-auto aspect-[4/3] max-w-6xl rounded-[2rem] shadow-[0_30px_80px_-40px_rgb(15_61_46/0.5)] sm:aspect-[21/9]"
      />
    </section>
  );
}

export function Included({ service }: { service: Service }) {
  return (
    <section className="section-y">
      <div className="container-site">
        <SectionHead kicker="What's included" title={`Every ${service.title.toLowerCase()} job covers`} />
        <Reveal stagger as="ul" className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {service.includes.map((item, i) => (
            <li
              key={item}
              className={
                i === 0
                  ? "flex flex-col items-center gap-4 rounded-[1.75rem] bg-forest p-7 text-center text-white"
                  : "flex flex-col items-center gap-4 rounded-[1.75rem] bg-white p-7 text-center text-forest"
              }
            >
              <span className="grid size-11 place-items-center rounded-full bg-lime text-forest">
                <Check aria-hidden className="size-5" strokeWidth={2.6} />
              </span>
              <span className="font-semibold">{item}</span>
            </li>
          ))}
          <li className="flex flex-col items-center justify-center gap-3 rounded-[1.75rem] border-2 border-dashed border-line p-7 text-center">
            <ServiceIcon name={service.icon} className="size-7 text-moss" />
            <span className="text-sm text-muted">Good for</span>
            <span className="flex flex-wrap justify-center gap-2">
              {service.tags.map((t) => (
                <span key={t} className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-forest">
                  {t}
                </span>
              ))}
            </span>
          </li>
        </Reveal>
      </div>
    </section>
  );
}

export function DetailCompare({ service }: { service: Service }) {
  return (
    <section className="section-y pt-0 md:pt-0">
      <div className="container-site">
        <SectionHead kicker="Before & after" title="The difference, side by side" intro="Drag the squeegee across the photo." />
        <Reveal className="mx-auto mt-10 max-w-5xl">
          <BeforeAfter src={service.image} alt={service.title} className="aspect-[4/3] rounded-[2rem] sm:aspect-[16/9]" />
        </Reveal>
      </div>
    </section>
  );
}

export function Related({ current }: { current: string }) {
  const index = services.findIndex((s) => s.slug === current);
  const picks = [1, 2, 3].map((n) => services[(index + n) % services.length]).filter((s): s is Service => !!s);
  return (
    <section className="section-y">
      <div className="container-site">
        <SectionHead kicker="More services" title="Often booked together" />
        <Reveal stagger as="ul" className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {picks.map((s, i) => (
            <li key={s.slug} className={i === 2 ? "sm:hidden lg:block" : undefined}>
              <ServiceCard service={s} featured={i === 1} />
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
