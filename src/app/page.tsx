import { AboutSection } from "@/components/about-section";
// import { CertificatesSection } from "@/components/certificates-section";
import { ContactSection } from "@/components/contact-section";
import { CVSection } from "@/components/cv-section";
import Hero from "@/components/hero";
import MaxWidthWrapper from "@/components/layout/MaxWidthWrapper";
import { ProcessSection } from "@/components/process-section";
import { ProjectsSection } from "@/components/projects-section";
import { ServicesSection } from "@/components/services-section";
import { StatsSection } from "@/components/stats-section";
// import { TestimonialsSection } from "@/components/testimonials-section";

export default function Home() {
  return (
    <MaxWidthWrapper>
      <Hero />
      <AboutSection />
      <StatsSection />
      <ServicesSection />
      <ProcessSection />
      <ProjectsSection />
      {/* <TestimonialsSection /> */}
      <CVSection />
      {/* <CertificatesSection /> */}
      <ContactSection />
    </MaxWidthWrapper>
  );
}
