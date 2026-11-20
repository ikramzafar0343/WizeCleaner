import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/shared/lib/cn";
import { whatsappLink } from "@/shared/lib/whatsapp";
import { WhatsAppIcon } from "@/shared/ui/WhatsAppIcon";
import type { Service } from "./data";
import { ServiceIcon } from "./ServiceIcon";

/** Image-led service card. The whole card opens the detail page. */
export function ServiceCard({ service, featured = false }: { service: Service; featured?: boolean }) {
  return (
    <article
      className={cn(
        "group relative flex h-full flex-col rounded-[1.75rem] p-2.5 text-center transition-all duration-500 ease-[var(--ease-out-soft)] hover:-translate-y-1.5",
        featured
          ? "bg-lime shadow-[0_20px_50px_-28px_rgb(15_61_46/0.6)]"
          : "bg-white shadow-[0_2px_0_rgb(15_61_46/0.04)] hover:shadow-[0_24px_50px_-30px_rgb(15_61_46/0.45)]",
      )}
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-[1.35rem]">
        <Image
          src={service.image}
          alt=""
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          quality={60}
          className="object-cover transition-transform duration-700 ease-[var(--ease-out-soft)] group-hover:scale-[1.07]"
        />
        <span
          className={cn(
            "absolute left-3 top-3 grid size-11 place-items-center rounded-full shadow-sm",
            featured ? "bg-forest text-lime" : "bg-lime text-forest",
          )}
        >
          <ServiceIcon name={service.icon} className="size-5" />
        </span>
        <span className="absolute right-3 top-3 grid size-10 place-items-center rounded-full bg-white/90 text-forest opacity-0 transition-all duration-500 group-hover:rotate-45 group-hover:opacity-100">
          <ArrowUpRight aria-hidden className="size-4" />
        </span>
      </div>

      <div className="flex flex-1 flex-col items-center px-3 pb-3 pt-5">
        <h3 className="text-xl text-forest">
          <Link href={`/services/${service.slug}`} className="after:absolute after:inset-0 after:rounded-[1.75rem]">
            {service.title}
          </Link>
        </h3>
        <p className={cn("mt-2 text-sm", featured ? "text-forest/75" : "text-muted")}>{service.short}</p>
        <span className="mt-auto pt-5" />
        <a
          href={whatsappLink(service.title)}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "relative z-10 inline-flex min-h-10 items-center gap-2 rounded-full px-4 text-sm font-semibold transition-colors",
            featured ? "bg-forest text-white hover:bg-forest-2" : "bg-mist text-forest hover:bg-lime",
          )}
        >
          <WhatsAppIcon className="size-4" /> Ask about this
        </a>
      </div>
    </article>
  );
}
