import FlipCard from "./ui/flip-card";

const cardData = [
  {
    number: 1,
    title: "Generative AI & Custom LLMs / VLMs",
    description:
      "Fine-tuning LLMs, multimodal AI, and generative AI solutions for domain-specific applications and intelligent automation.",
  },
  {
    number: 2,
    title: "End-to-End AI Deployment & Inference Pipeline",
    description:
      "Seamless model deployment with cloud, edge, and on-prem solutions, optimized inference pipelines, and MLOps for continuous AI lifecycle management.",
  },
  {
    number: 3,
    title: "AI Strategy & Consulting",
    description:
      "Helping businesses identify high-impact AI opportunities, develop proof-of-concepts, and scale AI responsibly.",
  },
  {
    number: 4,
    title: "AI Model Development",
    description:
      "Custom-built AI solutions leveraging deep learning, NLP, computer vision, and transformer architectures for accuracy, efficiency, and scalability.",
  },
  {
    number: 5,
    title: "AI-Powered Product Engineering",
    description:
      "Building AI-native products, integrating intelligent automation, real-time decision-making, and scalable AI architectures.",
  },
];

const BusinessHelpSection = () => {
  return (
    <section className="py-8 lg:py-16 text-center text-white px-6 lg:px-8">
      <h2 className="text-2xl md:text-3xl lg:text-4xltext-center mb-4 bg-gradient-to-r from-blue from-40% via-primary via-60%  to-white bg-clip-text text-transparent poppinsTextSemiBold">
        How We Help Businesses
      </h2>
      <div className="flex mt-2 lg:mt-10 justify-center gap-2 lg:gap-6 flex-wrap">
        {cardData.map((card, index) => (
          <FlipCard
            key={index}
            number={card.number}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </section>
  );
};

export default BusinessHelpSection;
