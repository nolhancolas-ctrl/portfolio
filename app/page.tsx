import HeroSection from "@/components/sections/HeroSection";
import StyleCarouselSection from "@/components/sections/StyleCarouselSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ProcessSection from "@/components/sections/ProcessSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ContactSection from "@/components/sections/ContactSection";
import PageSection from "@/components/layout/PageSection";
import FaqSection from "@/components/sections/FaqSection";
import PricingSection from "@/components/sections/PricingSection";
import DesignSection from "@/components/sections/DesignSection";
import MainNavbar from "@/components/layout/MainNavbar";

export default function Page() {
  return (
    <>
      <MainNavbar />

      <PageSection id="hero">
        <HeroSection />
      </PageSection>

      <PageSection id="styles">
        <StyleCarouselSection />
      </PageSection>

      <PageSection id="process">
        <ProcessSection />
      </PageSection>

      <PageSection id="services">
        <ServicesSection />
      </PageSection>

      <PageSection id="pricing">
        <PricingSection />
      </PageSection>

      <PageSection id="design">
        <DesignSection />
      </PageSection>

      <PageSection id="modules">
        <ProjectsSection />
      </PageSection>

      <PageSection id="contact" className="pb-18">
        <ContactSection />
      </PageSection>

      <PageSection id="faq">
        <FaqSection />
      </PageSection>
    </>
  );
}