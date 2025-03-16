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
    },
    {
      text: "Context-Aware Recommendation Engine for Airport Retail",
      desc: "VLM-driven framework automates radiology report generation, enhancing clinical accuracy and decision support. Integrating MiniGPT-Med & MedImageInsight, it extracts detailed CXR features, employs LoRA fine-tuned LLaMA 3.2 for efficient medical text generation, and achieves 90% accuracy in Visual Question Answering (VQA). With multi-image processing, advanced embeddings, and cross-attention, it generates structured, clinically relevant reports from frontal and lateral views of Chest X-rays.",
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
