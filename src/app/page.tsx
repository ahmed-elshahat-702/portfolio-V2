import { AboutSection } from "@/components/about-section";
import Hero from "@/components/hero";
import MaxWidthWrapper from "@/components/layout/MaxWidthWrapper";
import { ProcessSection } from "@/components/process-section";
import { ServicesSection } from "@/components/services-section";
import { StatsSection } from "@/components/stats-section";

export default function Home() {
  return (
    <MaxWidthWrapper>
      <Hero />
      <AboutSection />
      <StatsSection />
      <ServicesSection />
      <ProcessSection />
    </MaxWidthWrapper>
  );
}
