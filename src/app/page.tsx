import BusinessHelpSection from "@/components/business-help";
import CounterSection from "@/components/counter-section";
import ExecutiveTeam from "@/components/executive-team-section";
import HeroSection from "@/components/hero-section";
import PartnerSection from "@/components/partners-section";
import PartnershipSection from "@/components/partnership-section";
import TestimonialSection from "@/components/testimonial-section";
import VerticalsSection from "@/components/verticals-sections";
import ServicesSection from "@/components/services-section";

export default function Home() {
  return (
    <div className="scroll-smooth">
      <HeroSection />
      <PartnerSection />
      <VerticalsSection />
      <ExecutiveTeam />
      <ServicesSection />
      <CounterSection />
      <BusinessHelpSection />
      <TestimonialSection />
      <PartnershipSection />
    </div>
  );
}
