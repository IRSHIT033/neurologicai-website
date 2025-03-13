import ExploreSectionHealthcare from "@/components/ui/verticals/healthcare/exploresection";
import HealthcareAICarousel from "@/components/ui/verticals/healthcare/healthcare";
import HeroSection from "@/components/ui/verticals/healthcare/hero";
import RelatedResources from "@/components/ui/verticals/related-resources";
import HealthcareSection from "@/components/ui/verticals/why-choose-neurologic";

export default function Contact() {
  return (
    <div className="scroll-smooth ">
      <HeroSection />
      <HealthcareAICarousel />
      <HealthcareSection />
      <ExploreSectionHealthcare />
      <RelatedResources />
    </div>
  );
}
