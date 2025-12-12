import HeroSection from "@/components/sections/HeroSection";
import StyleCarouselSection from "@/components/sections/StyleCarouselSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ProcessSection from "@/components/sections/ProcessSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ContactSection from "@/components/sections/ContactSection";
import PageSection from "@/components/layout/PageSection";
import FaqSection from "@/components/sections/FaqSection";
import PricingSection from "@/components/sections/PricingSection";

export default function Page() {
  return (
    <>
      <PageSection id="hero">
        <HeroSection />
      </PageSection>

      <PageSection>
        <StyleCarouselSection />
      </PageSection>

      <PageSection>
        <ProcessSection />
      </PageSection>

      <PageSection>
        <ServicesSection />
      </PageSection>

      <PageSection>
        <PricingSection />
      </PageSection>

      <PageSection id="project">
        <ProjectsSection />
      </PageSection>

      <PageSection id="contact" className="pb-18">
        <ContactSection />
      </PageSection>

      <PageSection id="project">
        <FaqSection />
      </PageSection>
    </>
  );
}