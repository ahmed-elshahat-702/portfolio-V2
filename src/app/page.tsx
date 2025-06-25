import { AboutSection } from "@/components/about-section";
import Hero from "@/components/hero";
import MaxWidthWrapper from "@/components/layout/MaxWidthWrapper";

export default function Home() {
  return (
    <MaxWidthWrapper>
      <Hero />
      <AboutSection />
    </MaxWidthWrapper>
  );
}
