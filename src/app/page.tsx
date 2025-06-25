import { AboutSection } from "@/components/about-section";
import Hero from "@/components/hero";
import MaxWidthWrapper from "@/components/layout/MaxWidthWrapper";
import { StatsSection } from "@/components/stats-section";

export default function Home() {
  return (
    <MaxWidthWrapper>
      <Hero />
      <AboutSection />
      <StatsSection />
    </MaxWidthWrapper>
  );
}
