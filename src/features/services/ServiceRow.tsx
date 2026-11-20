import { ArrowUpRight, Check } from "lucide-react";
import Link from "next/link";
import { cn } from "@/shared/lib/cn";
import { Reveal } from "@/shared/motion/Reveal";
import { WipeImage } from "@/shared/motion/WipeImage";
import { WhatsAppCta } from "@/shared/ui/WhatsAppCta";
import type { Service } from "./data";
import { ServiceIcon } from "./ServiceIcon";

/** Large alternating row used on the Services page. */
export function ServiceRow({ service, index }: { service: Service; index: number }) {
  const flip = index % 2 === 1;
  return (
    <article className="grid items-center gap-6 rounded-[2rem] bg-white p-3 md:grid-cols-2 md:gap-10 md:p-4">
      <WipeImage
        src={service.image}
        alt={service.title}
        sizes="(min-width: 768px) 45vw, 100vw"
        className={cn("aspect-video rounded-[1.5rem]", flip && "md:order-2")}
      />
      <Reveal stagger className="flex flex-col items-center px-3 pb-6 text-center md:px-8 md:pb-0">
        <span className="inline-flex items-center gap-2 rounded-full bg-mist px-3 py-1 text-sm text-muted">
          <ServiceIcon name={service.icon} className="size-4 text-moss" />
          Service {String(index + 1).padStart(2, "0")}
        </span>
        <h2 className="mt-5 text-3xl text-forest md:text-[2.6rem]">{service.title}</h2>
        <p className="mt-4 max-w-md text-muted">{service.intro}</p>
        <ul className="mt-6 flex flex-col items-center gap-2.5">
          {service.includes.slice(0, 3).map((item) => (
            <li key={item} className="flex items-center gap-2.5 text-sm text-forest">
              <span className="grid size-5 shrink-0 place-items-center rounded-full bg-lime">
                <Check aria-hidden className="size-3" strokeWidth={3} />
              </span>
              {item}
            </li>
          ))}
        </ul>
        <ul className="mt-6 flex flex-wrap justify-center gap-2" aria-label="Good for">
          {service.tags.map((t) => (
            <li key={t} className="rounded-full border border-line px-3 py-1 text-xs text-muted">
              {t}
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <WhatsAppCta service={service.title} label="Get a quote" />
          <Link
            href={`/services/${service.slug}`}
            className="group inline-flex min-h-12 items-center gap-2 rounded-full px-5 font-semibold text-forest hover:bg-mist"
          >
            Full details
            <ArrowUpRight aria-hidden className="size-4 transition-transform group-hover:rotate-45" />
          </Link>
        </div>
      </Reveal>
    </article>
  );
}
