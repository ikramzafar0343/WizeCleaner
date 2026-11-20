import { site } from "@/shared/config/site";
import { Reveal } from "@/shared/motion/Reveal";
import { WhatsAppCta } from "@/shared/ui/WhatsAppCta";

type Props = { title?: string; text?: string; service?: string };

/** Closing call to action — lime panel with playful soap swirls. */
export function CtaBand({
  title = "Tell us what needs cleaning",
  text = `Send one WhatsApp message with a few photos. We reply with a time slot across ${site.serviceRegion}.`,
  service,
}: Props) {
  return (
    <section data-ribbon-end className="frame relative isolate overflow-hidden bg-lime">
      <svg aria-hidden viewBox="0 0 1200 500" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full">
        <path d="M-40 120c120-90 240 60 160 140S20 360 140 420" stroke="#0f3d2e" strokeWidth="46" strokeLinecap="round" fill="none" />
        <path d="M1060 -30c-60 110 120 150 80 250s-170 60-140 170" stroke="#fff" strokeWidth="40" strokeLinecap="round" fill="none" opacity="0.9" />
        <path d="M880 470c40-60 130-40 150-110" stroke="#0f3d2e" strokeWidth="34" strokeLinecap="round" fill="none" />
      </svg>
      <Reveal stagger className="container-site relative flex flex-col items-center py-24 text-center md:py-32">
        <h2 className="max-w-2xl text-[2.3rem] text-forest md:text-6xl">{title}</h2>
        <p className="mt-5 max-w-lg text-forest/75 md:text-lg">{text}</p>
        <div className="mt-9">
          <WhatsAppCta {...(service ? { service } : {})} label="Message us on WhatsApp" />
        </div>
      </Reveal>
    </section>
  );
}
