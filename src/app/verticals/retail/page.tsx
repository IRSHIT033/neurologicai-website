import ExploreSectionHealthcare from "@/components/ui/verticals/healthcare/exploresection";
import HealthcareAICarousel from "@/components/ui/verticals/healthcare/healthcare";
import Header from "@/components/ui/verticals/healthcare/hero";
import RelatedResources from "@/components/ui/verticals/related-resources";
import IndustrySection from "@/components/ui/verticals/why-choose-neurologic";

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
    src: "/retail/explore/AI-Powered Chat with X-Ray Images Using Multimodal Vision-Language Models - graphics (15).png",
  },
  {
    id: 1,
    title: "Context-Aware Recommendation Engine for Airport Retail",
    content:
      "Neurologic’s recommendation engine leverages real-time contextual data—such as time of day, weather, holidays, and product associations—to deliver highly personalized offers in high-traffic airport environments. By analyzing purchase patterns and situational triggers, it dynamically adjusts promotions and product placements to match passenger behaviors. Built on robust data pipelines and advanced ML algorithms, the solution integrates seamlessly with existing POS and CRM systems, boosting store revenue and enhancing the traveler shopping experience.",
    src: "/retail/explore/AI-Powered Chat with X-Ray Images Using Multimodal Vision-Language Models - graphics (16).png",
  },
  {
    id: 2,
    title: "Customer Service Using Agentic AI",
    content:
      "Neurologic’s Agentic AI platform transforms customer service by delivering real-time, personalized support across multiple channels. Built on advanced language models tailored for retail interactions, it interprets natural-language queries, pulls data from loyalty programs and order management systems, and automates resolutions or product recommendations. Through continuous learning and sentiment analysis, Agentic AI adapts responses to each customer’s context—resolving issues faster, minimizing wait times, and freeing human agents for complex tasks. Seamless integration with existing CRM and POS systems ensures a frictionless experience, driving higher customer satisfaction and solidifying brand loyalty.",
    src: "/retail/explore/AI-Powered Chat with X-Ray Images Using Multimodal Vision-Language Models - graphics (17).png",
  },
  {
    id: 3,
    title: "Inventory Forecasting for Retail Chains",
    content:
      " Neurologic’s AI-driven inventory forecasting solution optimizes stock levels across large retail networks by combining advanced time-series models, deep learning frameworks, and real-time market signals. Our approach integrates historical sales patterns, promotional calendars, seasonal trends, and external data (e.g., weather or local events) to deliver highly accurate demand predictions. By automating restocking strategies and proactively reducing stockouts or overstocks, retailers can streamline supply chains, minimize operational costs, and consistently meet customer needs. The result: improved profitability, higher in-store availability, and a distinctly competitive edge",
    src: "/retail/explore/AI-Powered Chat with X-Ray Images Using Multimodal Vision-Language Models - graphics (18).png",
  },
  {
    id: 4,
    title: "AI-Powered Multi-Camera Customer Tracking &amp; Analytics",
    content:
      "Neurologic’s multi-camera platform orchestrates real-time shopper tracking, generating heatmaps and behavioral insights to optimize store layouts and reduce bottlenecks. By blending advanced object detection, re-identification, and behavior modeling, it offers a 360° view of the in-store journey—from dwell times to product engagement. This AI-driven intelligence guides merchandising strategies, staff deployment, and promotional placements, elevating overall customer satisfaction and boosting sales. With robust data privacy controls and smooth integration into existing retail systems, Neurologic delivers immediate ROI and a sustainable competitive edge.",
    src: "/retail/explore/AI-Powered Chat with X-Ray Images Using Multimodal Vision-Language Models - graphics (19).png",
  },
  {
    id: 5,
    title: "Voice & Chat-Based Conversational Recommendation Engine:",
    content:
      "Neurologic’s Conversational Recommender allows retailers to deliver natural, AI-driven product suggestions through voice and chat. By harnessing large language models and structured database queries, it interprets user requests, extracts constraints (allergies, budgets), and adapts suggestions on the fly. The system retains conversation context—handling mid-dialogue updates like “I’m also allergic to prawns”—and applies filtering to remove restricted or out-of-stock items. Deployed in the cloud or on-premise, it integrates seamlessly with existing catalogs and loyalty systems, boosting customer satisfaction and conversion rates while showcasing Neurologic’s expertise in advanced retail AI.",
    src: "/retail/explore/AI-Powered Chat with X-Ray Images Using Multimodal Vision-Language Models - graphics (20).png",
  },
];

const resources = [
  {
    title:
      "AI-Powered Smart Shelf: Vision-Enabled Analytics & Real-Time Recommendations",
    desc: "Neurologic's Smart Shelf seamlessly merges advanced computer vision, real-time analytics, and recommendation engines to deliver a personalized in-store experience. It detects shopper demographics (age, gender, etc.) and instantly offers tailored product suggestions and promotions. By leveraging edge computing for low-latency analysis and data integration for deeper insights, retailers can scale effortlessly. Built with cloud data privacy control and easy API integration, the Smart Shelf elevates customer engagement, boosts conversions, and drives operational efficiency—redefining the retail aisle for a new era of connected shopping.",
    image:
      "/resources-case-studies/Retail/AI-Powered Smart Shelf_ Vision-Enabled Analytics &amp; Real-Time Recommendations_.png",
    href: "https://drive.google.com/file/d/1xOfvgbnLY5bgSYdjS0fp21CxZmb21Nl7/view?usp=drive_link",
  },
  {
    title: "Context-Aware Recommendation Engine for Airport Retail",
    desc: "Neurologic's recommendation engine leverages real-time contextual data—such as time of day, weather, holidays, and product associations—to deliver highly personalized AI-driven insights for high-traffic airport environments. By analyzing purchasing patterns and historical triggers, it dynamically adjusts promotions and product placements to match passenger behaviors. Built on robust data models and AI-driven ML algorithms, the solution integrates seamlessly with existing POS and CRM systems, boosting store revenue and enhancing the traveler shopping experience.",
    image:
      "/resources-case-studies/Retail/Context-Aware Recommendation Engine for Airport Retail_.png",
    href: "https://drive.google.com/file/d/1P7C4XKu52a5eJvCt6BfdJsPIry9Omdma/view?usp=drive_link",
  },
  {
    title: "Customer Service Using Agentic AI",
    desc: "Neurologic's Agentic AI platform transforms customer service by delivering real-time, personalized support across multiple channels. Built on advanced language models tailored for retail interactions, it interprets natural language queries, pulls data from loyalty records & smart triggers, and automates FAQs & sentiment analysis for prompt responses. Through continuous learning and contextual awareness, Agentic AI adapts and monitors consumer contact-seeking issues faster, reducing friction, improving NPS, and human agents' completion tasks. Seamless integration with POS, CRM, and PIM systems redefines the frictionless experience, driving higher customer satisfaction and solidifying brand loyalty.",
    image:
      "/resources-case-studies/Retail/Customer Service Using Agentic AI.png",
    href: "https://drive.google.com/file/d/1zGsKEwGlH3gD_EC1e9alIAgnc6O4_ozt/view?usp=drive_link",
  },
  {
    title: "Inventory Forecasting for Retail Chains",
    desc: "Neurologic's AI-driven inventory forecasting solution optimizes stock levels across large retail networks by combining data from store demand trends, historical frameworks, and real-time market signals. Our approach integrates intelligent sales patterns, performs predictive demand sensing, and enhances decision-making for automated stock replenishment. This AI-driven pipeline reduces stockouts by automating restocking strategies and accurately predicting product demand, overseeing data inconsistencies, and procurement errors. Retailers can control excess stock, enhance supply chain efficiency, improve profitability, and create higher store availability with a distinctly competitive advantage.",
    image:
      "/resources-case-studies/Retail/Inventory Forecasting for Retail Chains_.png",
    href: "https://drive.google.com/file/d/1iIn37eeCf6UVdWkfgdlnWKcLDIcEMM8P/view",
  },
  {
    title: "AI-Powered Multi-Camera Customer Tracking & Analytics",
    desc: "Neurologic's multi-camera platform orchestrates real-time shopper tracking, heatmaps, and behavioral insights to optimize store layouts and marketing strategies. By blending advanced object detection, re-identification models, and AI-driven foot traffic tracking, retailers gain a 360° view of in-store engagements for precision product engagement. This AI-driven intelligence improves decision-making, marketing strategies, shelf deployment, and promotional placements—creating elevated customer satisfaction and boosting retail sales. With data-driven visibility across multi-channel insights and in-store digital systems, businesses can optimize in-store engagement, reduce ROI, and maintain a sustainable competitive edge.",
    image:
      "/resources-case-studies/Retail/AI-Powered Multi-Camera Customer Tracking & Analytics.png",
    href: "https://drive.google.com/file/d/14Mg1Vjx0nFszt9QsXy9J5KRFgfy-6RY0/view?usp=drive_link",
  },
  {
    title: "Voice & Chat-Based Conversational Recommendation Engine",
    desc: "Neurologic's Conversational Recommendation AI allows retailers to deliver natural, AI-driven product suggestions through voice and chat. By harnessing AI-generated models and structured database queries, it interprets user requests, extracts constraints (categories, budgets), and suggests the best options in-store. The system includes smart conversation hand-offs, real-time nudging, and adaptive filtering to remove irrelevant or out-of-stock items. Deployed in the cloud and on-premise, it enhances customer service by unifying static catalogs with loyalty systems, boosting customer satisfaction and conversion rates while showcasing Neurologic's expertise in advanced retail AI.",
    image:
      "/resources-case-studies/Retail/Voice & Chat-Based Conversational  Recommendation Engine.png",
    href: "https://drive.google.com/file/d/1hfB1_y1RC2OitpH-AO5-PXTCatvvPVHH/view?usp=drive_link",
  },
];


const industryData = {
  retail: {
    heading: "Why Neurologic for Retail:",
    images :{
    icons: [
      { src: "/healthcare/icon-top.png", width: 196, height: 71 },
      { src: "/healthcare/icon-bottom.png", width: 196, height: 62 },
    ],
    flipCards: [
      { front: "/retail/vertical-flipcard/Domain-specific-unflipped.png", back: "/retail/vertical-flipcard/Domain-specific-flipped.png", alt: "Domain Specific", size: "w-[196px] h-[297px]" },
      { front: "/retail/vertical-flipcard/Real-time-unflipped.png", back: "/retail/vertical-flipcard/Real-time-flipped.png", alt: "Real Time", size: "w-[196px] h-[217px]" },
      { front: "/retail/vertical-flipcard/omnichannel-unflipped.png", back: "/retail/vertical-flipcard/omnichannel-flipped.png", alt: "Omnichannel", size: "w-[417px] h-[297px]" },
      { front: "/retail/vertical-flipcard/exterprise-grade-unflipped.png", back: "/retail/vertical-flipcard/exterprise-grade-flipped.png", alt: "Exterprise Grade", size: "w-[196px] h-[227px]" },
      { front: "/retail/vertical-flipcard/Predictive-unflipped.png", back: "/retail/vertical-flipcard/Predictive-flipped.png", alt: "Predictive", size: "w-[214px] h-[301px]" },
      { front: "/retail/vertical-flipcard/accelerated-unflipped.png", back: "/retail/vertical-flipcard/accelerated-flipped.png", alt: "Accelerated", size: "w-[402px] h-[301px]" },
    ],
  }
  },
};

const page = () => {
  return (
    <div className="smooth-scroll">
      <Header
        primarytext={retailHeroTexts.primarytext}
        secondarytext={retailHeroTexts.secondarytext}
        description={retailHeroTexts.description}
      />
      <HealthcareAICarousel features={caraouselfeature} />
      <IndustrySection industryName="retail" {...industryData.retail} ></IndustrySection>
      <ExploreSectionHealthcare cards={cards} />
      <RelatedResources resources={resources} />
    </div>
  );
};

export default page;
