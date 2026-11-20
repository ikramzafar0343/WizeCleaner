import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CtaBand } from "@/features/home/CtaBand";
import { Faq } from "@/features/home/Faq";
import { Process } from "@/features/home/Process";
import { findService, services } from "@/features/services/data";
import { DetailCompare, DetailMedia, Included, Related } from "@/features/services/ServiceDetail";
import { site } from "@/shared/config/site";
import { Ribbon } from "@/shared/motion/Ribbon";
import { PageHero } from "@/shared/ui/PageHero";
import { WhatsAppCta } from "@/shared/ui/WhatsAppCta";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = findService((await params).slug);
  if (!service) return {};
  return {
    title: `${service.title} in ${site.city}`,
    description: service.intro,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: { images: [{ url: service.image }] },
  };
}

export default async function ServicePage({ params }: Props) {
  const service = findService((await params).slug);
  if (!service) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.intro,
    areaServed: site.city,
    provider: { "@type": "HouseCleaningService", name: site.legalName, url: site.url },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHero
        title={service.title}
        intro={service.intro}
        crumbs={[
          { href: "/services", label: "Services" },
          { href: `/services/${service.slug}`, label: service.title },
        ]}
      >
        <WhatsAppCta service={service.title} label="Get a quote on WhatsApp" />
      </PageHero>
      <DetailMedia service={service} />
      <Included service={service} />
      <DetailCompare service={service} />
      <Ribbon />
      <Process />
      <Faq items={service.faqs} title={`${service.title}: common questions`} />
      <Related current={service.slug} />
      <CtaBand title={`Book ${service.title.toLowerCase()}`} service={service.title} />
    </>
  );
}
