import CounterSection from "@/components/counter-section";
import PartnerWhoTrustedSection from "@/components/partner-who-trusted";
import MissionVisionSection from "@/components/ui/about/MissionVision";
import TeamDirectory from "@/components/ui/about/teams";
import Timeline from "@/components/ui/about/timeline";
import WhoWeAre from "@/components/ui/about/whoweare";
import WhyChooseSection from "@/components/ui/about/WhyChooseUs";
import Partnership from "@/components/ui/partnership-section";

const About = () => {
  return (
    <div className="smooth-scroll">
      <WhoWeAre />
      <MissionVisionSection />
      <WhyChooseSection />
      <Timeline />
      <CounterSection />
      <PartnerWhoTrustedSection />
      <TeamDirectory />
      <Partnership />
    </div>
  );
};

export default About;
