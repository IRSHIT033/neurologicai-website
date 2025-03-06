import HeroSection from "@/components/hero-section";
import PartnerSection from "@/components/partners-section";
import VerticalsSection from "@/components/verticals-sections";

export default function Home() {
  return (
    <div className="scroll-smooth">
      <HeroSection />
      <PartnerSection />
      <VerticalsSection />
    </div>
  );
}
