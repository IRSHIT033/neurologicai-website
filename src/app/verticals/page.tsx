"use client"
import ExploreSectionHealthcare from "@/components/ui/verticals/healthcare/explore-section";
import HealthcareAICarousel from "@/components/ui/verticals/healthcare/healthcare";
import HeroSection from "@/components/ui/verticals/healthcare/hero";
import RelatedResources from "@/components/ui/verticals/healthcare/related-resource";

export default function Contact() {
  return (
    <div className="scroll-smooth ">
      <HeroSection />
      <HealthcareAICarousel />
      <ExploreSectionHealthcare/>
      <RelatedResources/>
    </div>
  );
}
