import Link from "next/link";
import { Reveal } from "@/shared/motion/Reveal";
import { SectionHead } from "@/shared/ui/SectionHead";
import { services } from "./data";
import { ServiceCard } from "./ServiceCard";

const FEATURED = new Set([1, 6]);

export function ServiceGrid({ showAllLink = true }: { showAllLink?: boolean }) {
  return (
    <section className="section-y">
      <div className="container-site">
        <SectionHead
          kicker="Services"
          title="Everything that needs a proper clean"
          intro="Eight focused services, each done by a crew trained for that job."
        />
        <Reveal stagger as="ul" className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <li key={s.slug}>
              <ServiceCard service={s} featured={FEATURED.has(i)} />
            </li>
          ))}
        </Reveal>
        {showAllLink ? (
          <div className="mt-10 flex justify-center">
            <Link
              href="/services"
              className="inline-flex min-h-12 items-center rounded-full border border-forest/15 bg-white px-6 font-semibold text-forest transition-colors hover:bg-forest hover:text-white"
            >
              View all services
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}
