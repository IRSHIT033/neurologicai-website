import ExperiencesSection from "@/components/ui/services/experience";
import HeaderSection from "@/components/ui/services/generativeai";
import SolutionGrid from "@/components/ui/services/solutions";

const page = () => {
  const servicesHeaderText = {
    headertext: "Recommendation Engine",
    headerdesc: `Neurologic AI’s Recommendation Engine leverages advanced machine learning and real-time data to deliver highly personalized experiences. By analyzing contextual data and user behavior, our solutions drive engagement, optimize performance, and enhance environments like airports and AI-powered smart shelves. Seamlessly integrating with existing systems, our AI-driven recommendations boost conversions, improve customer satisfaction, and unlock new growth opportunities. Neurologic AI empowers businesses with smarter decisions and greater operational efficiency.`,
  };

  const experiences = [
    {
      text: "AI-Powered Smart Shelf: Vision-Enabled Analytics & Real-Time Recommendations",
      desc: "Neurologic’s Smart Shelf seamlessly merges advanced computer vision, real-time analytics, and recommendation engines to deliver a personalized in-store experience. It detects shopper demographics (age, gender, style) and instantly offers tailored product suggestions or promotions. By leveraging edge computing for low-latency analysis and cloud integration for deeper insights, retailers can scale effortlessly. Built with robust data privacy controls and easy API-driven integration, the Smart Shelf elevates customer engagement, boosts conversions, and drives operational efficiency—redefining the retail aisle for a new era of connected shopping.",
      href: "https://drive.google.com/file/d/1xOfvgbnLY5bgSYdjS0fp21CxZmb21Nl7/view?usp=drive_link",
    },
    {
      text: "Context-Aware Recommendation Engine for Airport Retail",
      desc: "Neurologic’s recommendation engine leverages real-time contextual data—such as time of day, weather, holidays, and product associations—to deliver highly personalized offers in high-traffic airport environments. By analyzing purchase patterns and situational triggers, it dynamically adjusts promotions and product placements to match passenger behaviors. Built on robust data pipelines and advanced ML algorithms, the solution integrates seamlessly with existing POS and CRM systems, boosting store revenue and enhancing the traveler shopping experience.",
      href: "https://drive.google.com/file/d/1P7C4XKu52a5eJvCt6BfdJsPIry9Omdma/view?usp=drive_link",
    },
  ];

  return (
    <div className="scroll-smooth">
      <HeaderSection servicesHeaderText={servicesHeaderText} />
      <SolutionGrid solutions={experiences} />
      <ExperiencesSection experiences={experiences} />
    </div>
  );
};

export default page;
