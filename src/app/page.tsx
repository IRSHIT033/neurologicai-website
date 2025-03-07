import BusinessHelpSection from "@/components/business-help";
import CounterSection from "@/components/counter-section";
import ExecutiveTeam from "@/components/executive-team-section";
import HeroSection from "@/components/hero-section";
import PartnerSection from "@/components/partners-section";
import PartnershipSection from "@/components/partnership-section";
import TestimonialSection from "@/components/testimonial-section";
import Footer from "@/components/ui/footer";
import VerticalsSection from "@/components/verticals-sections";

export default function Home() {
  return (
    <div className="scroll-smooth">
      <HeroSection />
      <PartnerSection />
      <VerticalsSection />
      <ExecutiveTeam />
      <CounterSection />
      <BusinessHelpSection />
      <TestimonialSection />
      <PartnershipSection />
      <Footer />
    </div>
  );
}
