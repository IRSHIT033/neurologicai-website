import ExperiencesSection from "@/components/ui/services/experience";
import GenerativeAISection from "@/components/ui/services/generativeai";
import SolutionGrid from "@/components/ui/services/solutions";

const page = () => {
  return (
    <div className="scroll-smooth">
      <GenerativeAISection />
      <SolutionGrid />
      <ExperiencesSection />
    </div>
  );
};

export default page;
