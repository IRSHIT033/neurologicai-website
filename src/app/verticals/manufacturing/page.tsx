import ExploreSectionHealthcare from "@/components/ui/verticals/healthcare/exploresection";
import HealthcareAICarousel from "@/components/ui/verticals/healthcare/healthcare";
import Header from "@/components/ui/verticals/healthcare/hero";
import RelatedResources from "@/components/ui/verticals/related-resources";

const manufacturingHeroTexts = {
  primarytext: `Cutting-Edge Artificial Intelligence and Advanced Simulations`,
  secondarytext: `At the forefront of Industry 4.0 Enables Manufacturers to Revolutionize Operations by Integrating`,
  description: `We leverage industry leading tools like NVIDIA Omniverse to deliver physics-accurate virtual testing, sensor simulation, and synthetic data generation. Our expertise helps manufacturers overcome complex challenges in product inspection, sustainable recycling practices, intelligent material classification, and robotic automation. By utilizing multi-stage intelligent frameworks for automated defect detection and autonomous AI-powered robots for precise tasks like RFID scanning, we drive significant improvements in efficiency, agility, and sustainability. Our solutions are designed to streamline manufacturing processes, accelerate deployment, reduce operational costs, and significantly shorten time-to-market, ensuring manufacturers stay competitive in an ever-evolving market.`,
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
      "Multi-Stage Agentic Framework powered by VLM and Knowledge Graphs for Product’s Damage Assessment and Recycling",
    content:
      "Our Multi-Stage Agentic Framework revolutionizes product damage assessment and recycling by integrating Vision-Language Models (VLMs), Knowledge Graphs, 3D design simulations, and Large Language Models (LLMs) into an intelligent decision-making pipeline. By combining automated defect detection, synthetic data augmentation using NVIDIA Omniverse, and structured reasoning with knowledge graphs, our solution enables rapid, high-accuracy assessment of repair feasibility and sustainability impact. This AI-driven system reduces inspection time by 40%, scales to 100K+ items/month, and optimizes cost-effective recycling decisions—enhancing efficiency, accuracy, and sustainability for manufacturers and recyclers.",
    src: "/manufacturing/explore/AI-Powered Chat with X-Ray Images Using Multimodal Vision-Language Models - graphics (9).png",
  },
  {
    id: 1,
    title: "Automated Sorting with Vision Enabled Robotic Arm",
    content:
      "Our Intelligent Robotic Sorting System integrates Omniverse Isaac Sim, ROS 2, and NVIDIA GPU-accelerated perception for real-time, high-precision automation in manufacturing. Using YOLO-based object detection, synthetic data, and physics-accurate simulation, it minimizes the sim-to-real gap, achieving >95% sorting accuracy with sub-50ms inference times. With depth-based 3D pose estimation and adaptive motion planning, it reduces labor costs, accelerates deployment, and enhances production efficiency, transforming manual sorting into an intelligent, scalable automation solution",
    src: "/manufacturing/explore/AI-Powered Chat with X-Ray Images Using Multimodal Vision-Language Models - graphics (10).png",
  },
  {
    id: 2,
    title:
      "Physics Accurate Synthetic Data Generation using NVIDIA Omniverse for Training Physical AI Models",
    content:
      "Our Physics-Accurate Synthetic Data Generation system, powered by NVIDIA Omniverse, PhysX, and advanced sensor simulation, creates high-fidelity 3D environments for AI training in robotics and physical AI applications. By modeling real-world physics including collisions, friction, and gravity it generates photorealistic synthetic datasets with RGB images, depth maps, LiDAR scans, and segmentation masks. This scalable, automated pipeline reduces data collection costs, accelerates AI model training, and enhances simulation-to-reality transfer, enabling faster, more accurate AI-driven automation for manufacturing and robotics.",
    src: "/manufacturing/explore/AI-Powered Chat with X-Ray Images Using Multimodal Vision-Language Models - graphics (11).png",
  },
  {
    id: 3,
    title: "Predictive Maintenance",
    content:
      "Our AI-driven Predictive Maintenance solution leverages sensor analytics, machine learning, and anomaly detection to predict equipment failures before they occur. By analyzing real-time IoT data, vibration patterns, and operational metrics, it enables proactive maintenance, reducing downtime, repair costs, and unexpected failures. This system optimizes asset health, extends equipment lifespan, and enhances operational efficiency for manufacturing and industrial operations",
    src: "/manufacturing/explore/AI-Powered Chat with X-Ray Images Using Multimodal Vision-Language Models - graphics (12).png",
  },
  {
    id: 4,
    title:
      "Autonomous Intelligent Robots for RFID Scanning with SLAM-Based Navigation",
    content:
      "Our Autonomous RFID Scanning Robots, powered by SLAM-based navigation and AI-driven path planning, automate real-time inventory tracking in manufacturing and logistics. By integrating computer vision, RFID sensors, and adaptive motion control, these robots precisely locate and scan tagged assets in dynamic environments, reducing manual labor, improving accuracy, and enhancing warehouse efficiency with fully autonomous, collision-free operation.",
    src: "/manufacturing/explore/AI-Powered Chat with X-Ray Images Using Multimodal Vision-Language Models - graphics (13).png",
  },
  {
    id: 5,
    title:
      "Simulating Sensor-Based Systems with NVIDIA Omniverse for Material Classification Using AI",
    content:
      "Our AI-driven Material Classification system leverages NVIDIA Omniverse’s physics-accurate simulations to train models for sensor-based defect detection and material analysis. By generating synthetic sensor data—including LiDAR, hyperspectral imaging, and depth maps—it enables AI models to classify materials with high precision. This simulation-first approach reduces data collection costs, accelerates AI deployment, and improves quality control in manufacturing and industrial inspection.",
    src: "/manufacturing/explore/AI-Powered Chat with X-Ray Images Using Multimodal Vision-Language Models - graphics (14).png",
  },
];

const resources = [
  {
    title:
      "Multi-Stage Agentic Framework powered by VLM and Knowledge Graphs for Product’s Damage Assessment and Recycling",
    desc: "Our Multi-Stage Agentic framework introduces product damage assessment and recycling by integrating Vision-Language Models (VLMs), Knowledge Graphs, 3D design simulations, and Large Language Models (LLMs) into an intelligent, decision-making pipeline. Our framework enables defect detection, strategic disassembly, part recognition via AI vision, and structured reasoning with knowledge graphs. Our AI solution enables rapid, high-accuracy assessment of repair feasibility and sustainability impact. This AI-driven solution optimizes inspection for OEMs, speeds up decision-making, and provides cost-effective recycling decisions—enhancing efficiency, accuracy, and sustainability for manufacturers and recyclers.",
    image:
      "/resources-case-studies/Manufacturing/Multi-Stage Agentic Framework powered by VLM and Knowledge Graphs for Product’s Damage Assessment and Recycling.png",
    href: "https://drive.google.com/file/d/1yvKjx0SoMIlBrOZRgHL7TlILZNGqCK48/view?usp=drive_link",
  },
  {
    title: "Automated Sorting with Vision Enabled Robotic Arm",
    desc: "Our Intelligent Robotic Sorting System integrates Omniverse Isaac Sim, ROS2, and NVIDIA GPU-accelerated perception for real-time, high-precision automation in manufacturing. Using YOLO-based object detection, synthetic data, and physics-accurate simulation, it minimizes sorting errors while enhancing speed by 30% in comparison with 3D-Sim inference time. With depth-based 3D pose estimation and adaptive grasping, this solution reduces factory sorting waste, automates enhancements, simplifies defects, transforms manual sorting into an intelligent, scalable automation solution.",
    image:
      "/resources-case-studies/Manufacturing/Automated Sorting with Vision Enabled Robotic Arm.png",
    href: "https://drive.google.com/file/d/1uEiXfMjiHIJ7_Oh-b5azHhyJ3yWbC0fx/view?usp=drive_link",
  },
  {
    title:
      "Physics Accurate Synthetic Data Generation using NVIDIA Omniverse for Training Physical AI Models",
    desc: "Our Physics-Accurate Synthetic Data Generation system, powered by NVIDIA Omniverse, aids in training AI models for industrial and physical AI applications by creating high-fidelity synthetic data simulations. All data is physics-grounded, simulating interactions with sensors, RGB images, depth maps, LiDAR scans, and object segmentations. This makes AI-based systems more robust for real-world environments, reducing failure rates and optimizing AI decision-making to really accelerate faster, more accurate AI-driven automation for manufacturing and robotics.",
    image:
      "/resources-case-studies/Manufacturing/Physics Accurate Synthetic Data Generation using NVIDIA Omniverse for Training Physical AI Models.png",
    href: "https://drive.google.com/file/d/1ACR3fvlsDPOijlKIYxM0pJcxPMRwN35g/view?usp=drive_link",
  },
  {
    title: "Predictive Maintenance",
    desc: "Our AI-driven Predictive Maintenance solution leverages sensor analytics, machine learning, and anomaly detection to reduce equipment failures. By analyzing historical and real-time IoT data, vibration patterns, and thermal imaging, it enables proactive maintenance to avoid downtime. This results in reduced repair costs, improved equipment lifespan, and increased manufacturing efficiency. Our solution transforms predictive maintenance for manufacturing and industrial operations.",
    image: "/resources-case-studies/Manufacturing/Predictive Maintenance.png",
    href: "https://drive.google.com/file/d/1uIvfJC56C918xNCiBmD6v11PzcjTrjeh/view?usp=drive_link",
  },
  {
    title:
      "Autonomous Intelligent Robots for RFID Scanning with SLAM-Based Navigation",
    desc: "Our AI and NVIDIA GPU Scanning Robot, powered by SLAM-based localization and path planning, automates warehouse RFID scanning. With real-time object avoidance, simulation-enhanced precision, and AI-driven tracking, it reduces errors by 40%, increasing inventory tracking autonomy and collision-free operation.",
    image:
      "/resources-case-studies/Manufacturing/Autonomous Intelligent Robots for RFID Scanning with SLAM-Based Navigation.png",
    href: "https://drive.google.com/file/d/1JXuNLC6ZYf1yyMw-6USAnfCIzHGSZoMJ/view?usp=drive_link",
  },
  {
    title:
      "Simulating Sensor-Based Systems with NVIDIA Omniverse for Material Classification Using AI",
    desc: "Our AI-driven Material Classification system leverages NVIDIA Omniverse for high-fidelity sensor data simulation, AI-powered classification, and material recognition. This accelerates automation in defect detection, construction, and robotics, making AI-based quality control in manufacturing and logistics more reliable.",
    image:
      "/resources-case-studies/Manufacturing/Simulating Sensor-Based Systems with NVIDIA Omniverse for Material Classification Using AI.png",
    href: "https://drive.google.com/file/d/1uQX39gHA4yWLo-mpEhdI5a0wOlxMbaAs/view?usp=drive_link",
  },
];

const page = () => {
  return (
    <div className="smooth-scroll">
      <Header
        primarytext={manufacturingHeroTexts.primarytext}
        secondarytext={manufacturingHeroTexts.secondarytext}
        description={manufacturingHeroTexts.description}
      />
      <HealthcareAICarousel features={caraouselfeature} />
      <ExploreSectionHealthcare cards={cards} />
      <RelatedResources resources={resources} />
    </div>
  );
};

export default page;
