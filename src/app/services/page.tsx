import type { Metadata } from "next";
import { CtaBand } from "@/features/home/CtaBand";
import { Process } from "@/features/home/Process";
import { services } from "@/features/services/data";
import { ServiceRow } from "@/features/services/ServiceRow";
import { site } from "@/shared/config/site";
import { Ribbon } from "@/shared/motion/Ribbon";
import { PageHero } from "@/shared/ui/PageHero";
import { WhatsAppCta } from "@/shared/ui/WhatsAppCta";

export const metadata: Metadata = {
  title: "Cleaning Services",
  description: `House deep cleaning, sofa, kitchen, washroom, floor and tiles cleaning, windows, commercial, pest control and more across ${site.serviceRegion}.`,
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our cleaning services"
        intro="Pick the service you need, send us a WhatsApp message, and we plan the right crew for the job."
        crumbs={[{ href: "/services", label: "Services" }]}
      >
        <WhatsAppCta label="Ask which service fits" />
      </PageHero>
      <section className="section-y">
        <div className="container-site flex flex-col gap-5">
          {services.map((s, i) => (
            <ServiceRow key={s.slug} service={s} index={i} />
          ))}
        </div>
      </section>
      <Ribbon />
      <Process />
      <CtaBand />
    </>
  );
}
