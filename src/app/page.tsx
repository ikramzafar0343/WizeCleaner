import { BeforeAfterShowcase } from "@/features/beforeAfter/BeforeAfterShowcase";
import { CtaBand } from "@/features/home/CtaBand";
import { Faq } from "@/features/home/Faq";
import { Hero } from "@/features/home/Hero";
import { Process } from "@/features/home/Process";
import { WhyUs } from "@/features/home/WhyUs";
import { ServiceGrid } from "@/features/services/ServiceGrid";
import { Ribbon } from "@/shared/motion/Ribbon";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Ribbon scrollRibbonStart />
      <ServiceGrid />
      <BeforeAfterShowcase />
      <Ribbon words={["Spotless", "Fresh", "Dust-free", "Streak-free", "Sanitised", "Polished"]} />
      <Process />
      <WhyUs />
      <Faq />
      <CtaBand />
    </>
  );
}
