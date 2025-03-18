import ExploreSectionHealthcare from "@/components/ui/verticals/healthcare/exploresection";
import HealthcareAICarousel from "@/components/ui/verticals/healthcare/healthcare";
import Header from "@/components/ui/verticals/healthcare/hero";
import RelatedResources from "@/components/ui/verticals/related-resources";

const retailHeroTexts = {
  primarytext: `Advanced AI Models, Automation, and Real-Time Intelligence`,
  secondarytext: `Revolutionizing Retail by Integrating Advanced AI Models, Automation, and Real-Time Intelligence`,
  description: `Optimize operations and enhance customer experiences. Our
expertise spans intelligent inventory management, dynamic customer engagement, and
predictive analytics, enabling retailers to drive efficiency and boost profitability. By
leveraging vision-enabled insights, personalized recommendations, and AI-driven service
automation, we empower businesses to make data-driven decisions, refine in-store
experiences, and adapt to evolving consumer behavior.`,
};

const caraouselfeature = [
  {
    title: "10M+ Data Points Processed Daily",

    description:
      "AI-driven analytics provide real-time production insights, enabling better capacity planning, supply chain visibility, and optimized equipment performance.",
  },
  {
    title: "99% Defect Detection Accuracy",

    description:
      "Advanced computer vision and machine learning identify quality issues at scale, drastically reducing rework, scrap, and customer returns.",
  },
  {
    title: "35% Reduction in Unplanned Downtime",
    description:
      "Predictive maintenance leverages sensor data and anomaly detection to preempt equipment failures, improving asset utilization and reliability.",
  },
  {
    title: "2× Faster Time to Market",
    description:
      "Simulation-based testing and agile prototyping via NVIDIA Omniverse and AI workflows accelerate product development, shrinking design-validation cycles",
  },
  {
    title: "Multi-Modal Insights for Production & Supply Chain",
    description:
      "Unified data models combine sensor, robotic, and ERP information to deliver actionable intelligence, fueling continuous improvement in manufacturing..",
  },
  {
    title: "Enterprise-Ready AI Scaling Across Global Plants",
    description:
      "A secure, distributed, and modular AI infrastructure ensures seamless deployment, standardizing best practices worldwide.",
  },
  {
    title: "40% Reduction in Overhead",
    description:
      "Automated inspections, robotic workflows, and data-driven process optimization cut labor costs and improve operational efficiency.",
  },
];

const cards = [
  {
    id: 0,
    title:
      "AI-Powered Smart Shelf: Vision-Enabled Analytics &amp; Real-Time Recommendations",
    content:
      " Neurologic’s Smart Shelf seamlessly merges advanced computer vision, real-time analytics, and recommendation engines to deliver a personalized in-store experience. It detects shopper demographics (age, gender, style) and instantly offers tailored product suggestions or promotions. By leveraging edge computing for low-latency analysis and cloud integration for deeper insights, retailers can scale effortlessly. Built with robust data privacy controls and easy API-driven integration, the Smart Shelf elevates customer engagement, boosts conversions, and drives operational efficiency—redefining the retail aisle for a new era of connected shopping.",
    src: "/healthcareCard-1.png",
  },
  {
    id: 1,
    title: "Context-Aware Recommendation Engine for Airport Retail",
    content:
      "Neurologic’s recommendation engine leverages real-time contextual data—such as time of day, weather, holidays, and product associations—to deliver highly personalized offers in high-traffic airport environments. By analyzing purchase patterns and situational triggers, it dynamically adjusts promotions and product placements to match passenger behaviors. Built on robust data pipelines and advanced ML algorithms, the solution integrates seamlessly with existing POS and CRM systems, boosting store revenue and enhancing the traveler shopping experience.",
    src: "/healthcareCard-2.png",
  },
  {
    id: 2,
    title: "Customer Service Using Agentic AI",
    content:
      "Neurologic’s Agentic AI platform transforms customer service by delivering real-time, personalized support across multiple channels. Built on advanced language models tailored for retail interactions, it interprets natural-language queries, pulls data from loyalty programs and order management systems, and automates resolutions or product recommendations. Through continuous learning and sentiment analysis, Agentic AI adapts responses to each customer’s context—resolving issues faster, minimizing wait times, and freeing human agents for complex tasks. Seamless integration with existing CRM and POS systems ensures a frictionless experience, driving higher customer satisfaction and solidifying brand loyalty.",
    src: "/healthcareCard-3.png",
  },
  {
    id: 3,
    title: "Inventory Forecasting for Retail Chains",
    content:
      " Neurologic’s AI-driven inventory forecasting solution optimizes stock levels across large retail networks by combining advanced time-series models, deep learning frameworks, and real-time market signals. Our approach integrates historical sales patterns, promotional calendars, seasonal trends, and external data (e.g., weather or local events) to deliver highly accurate demand predictions. By automating restocking strategies and proactively reducing stockouts or overstocks, retailers can streamline supply chains, minimize operational costs, and consistently meet customer needs. The result: improved profitability, higher in-store availability, and a distinctly competitive edge",
    src: "/healthcareCard-4.png",
  },
  {
    id: 4,
    title: "AI-Powered Multi-Camera Customer Tracking &amp; Analytics",
    content:
      "Neurologic’s multi-camera platform orchestrates real-time shopper tracking, generating heatmaps and behavioral insights to optimize store layouts and reduce bottlenecks. By blending advanced object detection, re-identification, and behavior modeling, it offers a 360° view of the in-store journey—from dwell times to product engagement. This AI-driven intelligence guides merchandising strategies, staff deployment, and promotional placements, elevating overall customer satisfaction and boosting sales. With robust data privacy controls and smooth integration into existing retail systems, Neurologic delivers immediate ROI and a sustainable competitive edge.",
    src: "/healthcareCard-5.png",
  },
  {
    id: 5,
    title: "Voice &amp; Chat-Based Conversational Recommendation Engine:",
    content:
      "Neurologic’s Conversational Recommender allows retailers to deliver natural, AI-driven product suggestions through voice and chat. By harnessing large language models and structured database queries, it interprets user requests, extracts constraints (allergies, budgets), and adapts suggestions on the fly. The system retains conversation context—handling mid-dialogue updates like “I’m also allergic to prawns”—and applies filtering to remove restricted or out-of-stock items. Deployed in the cloud or on-premise, it integrates seamlessly with existing catalogs and loyalty systems, boosting customer satisfaction and conversion rates while showcasing Neurologic’s expertise in advanced retail AI.",
    src: "/healthcareCard-1.png",
  },
];

const resources = [
  {
    title: "AI-Powered Grounded Report Generation for Medical Imaging",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    image: "/relatedResourceCard-1.png",
  },
  {
    title: "Prompt-Based Image Segmentation Using LLM",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    image: "/relatedResourceCard-2.png",
  },
  {
    title: "Efficient Vision-Language Models for Edge Computing",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    image: "/relatedResourceCard-3.png",
  },
];

const page = () => {
  return (
    <div className="smooth-scroll">
      <Header
        primarytext={retailHeroTexts.primarytext}
        secondarytext={retailHeroTexts.secondarytext}
        description={retailHeroTexts.description}
      />
      <HealthcareAICarousel features={caraouselfeature} />
      <ExploreSectionHealthcare cards={cards} />
      <RelatedResources resources={resources} />
    </div>
  );
};

export default page;
