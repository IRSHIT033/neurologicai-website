import AboutSectionheader from "@/components/ui/about/header";
import Timeline from "@/components/ui/about/timeline";
import WhoWeAre from "@/components/ui/about/whoweare";

const About = () => {
  return (
    <div className="smooth-scroll">
      <WhoWeAre />
      <Timeline />
    </div>
  );
};

export default About;
