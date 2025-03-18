import FeatureCard from "./feature-card";

const features = [
  {
    title: "Pioneering Innovation",
    description:
      "Our founders' extensive experience in Fortune 5 companies and FAANG companies ensures our solutions are built with the most advanced techniques.",
  },
  {
    title: "Impact",
    description:
      "Our mission is to bridge the gap between innovation and practical application, ensuring our technology makes a real-world difference.",
  },
  {
    title: "Expertise",
    description:
      "We bring a wealth of knowledge and expertise to every project, ensuring you receive the highest quality solutions.",
  },
  {
    title: "Global Vision",
    description:
      "Our state-of-the-art encryption and fraud detection ensure your data is always protected.",
  },
  {
    title: "Democratized AI",
    description:
      "We believe AI should be accessible to businesses of all sizes, and we're committed to providing tailored solutions that meet your specific needs.",
  },
  {
    title: "Global Reach and Recognition",
    description:
      "With offices in Bangalore and New York, we provide global expertise and support. Our industry recognition validates our commitment to excellence.",
  },
];

export default function FeatureList() {
  return (
    <div className="space-y-6 w-full">
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </div>
  );
}
