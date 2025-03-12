import MissionVisionHeader from "./header";
import MissionCard from "./mission-vision-card";

export default function MissionVisionSection() {
  return (
    <section className="flex flex-col items-center py-16">
      <MissionVisionHeader />
      <div className="flex gap-8 font-inter">
        <MissionCard
          text="To empower our customers to integrate AI/ML technologies into their solutions, driving innovation."
          variant="left"
        />
        <MissionCard
          text="Neurologic AI’s vision is to standardize AI for businesses of all sizes. Our unwavering goal is to become the go-to partner for global AI transformation."
          variant="right"
        />
      </div>
    </section>
  );
}
