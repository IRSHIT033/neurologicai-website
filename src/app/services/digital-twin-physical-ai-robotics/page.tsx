import ExperiencesSection from "@/components/ui/services/experience";
import HeaderSection from "@/components/ui/services/generativeai";
import SolutionGrid from "@/components/ui/services/solutions";

const page = () => {
  const servicesHeaderText = {
    headertext: "Digital Twin,Physical AI & Robotics ",
    headerdesc: `Neurologic AI integrates advanced robotics with immersive digital twin technologies to revolutionize automation. Using platforms like NVIDIA COSMOS, ROS2, Isaac SIM, Isaac ROS, and Omniverse, we enable photorealistic simulations, real-time sensor fusion, and dynamic domain randomization. With NVIDIA Replicator, we generate scalable synthetic data for efficient training in headless mode. Our Omniverse microservices bridge the sim-to-real gap, optimizing workflow automation, predictive maintenance, and operational efficiency. By leveraging AI-driven insights, machine learning, and USD-based simulations, we empower robotics ecosystems to accelerate innovation and deliver transformative results.`,
  };

  const experiences = [
    {
      text: "Simulating Sensor-Based Systems with NVIDIA Omniverse for Material Classification Using AI",
      desc: "Unlock the power of AI-driven sensor simulations with NVIDIA Omniverse Isaac Sim for material classification in industrial applications. Our innovative solution simulates sensor-based systems, automating material identification and drastically reducing the need for expensive physical testing. By leveraging Omniverse’s real-time simulation capabilities, this system extracts semantic data and object properties such as color, texture, and reflectivity, enabling efficient material classification workflows. The integration of a custom LiDAR sensor extension optimizes material detection accuracy through recursive semantic search. With enhanced scalability, automation, and precision, this AI-driven platform empowers faster development cycles and cost-effective, high-quality results.",
      href: "https://drive.google.com/file/d/1uQX39gHA4yWLo-mpEhdI5a0wOlxMbaAs/view?usp=drive_link",
    },
    {
      text: "Predictive Maintenance",
      desc: "Our advanced predictive maintenance solution, powered by Neurologic AI, is transforming the automotive manufacturing industry. By leveraging state-of-the-art machine learning algorithms, we predict equipment failures with over 94% accuracy, reducing downtime by 55% and generating annual savings exceeding $1.2 million. Our system integrates IoT sensors to capture real-time data on critical parameters such as temperature, pressure, and vibration, ensuring precise predictive analytics. With proactive maintenance and early failure detection, we help manufacturers improve operational continuity, enhance customer satisfaction, and gain a competitive advantage. Our solution is the key to a smarter, more efficient future in automotive manufacturing.",
      href: "https://drive.google.com/file/d/1uIvfJC56C918xNCiBmD6v11PzcjTrjeh/view?usp=drive_link",
    },
    {
      text: "Physics Accurate Synthetic Data Generation using NVIDIA Omniverse for Training Physical AI Models",
      desc: "Our synthetic data generation system revolutionizes AI training by creating highly realistic datasets using advanced physics simulations and detailed 3D environments. Powered by NVIDIA PhysX and Omniverse, our system models real-world object dynamics, including collisions, friction, and gravity, offering unmatched accuracy. With customizable object properties such as wear, damage, and environmental effects, it generates diverse and high-fidelity datasets perfect for AI training, quality control, and robotics. We provide realistic camera, LiDAR, and depth sensor simulations, enhancing multi-modal training. This approach automates large-scale data creation, dramatically reducing costs, improving model accuracy, and accelerating time-to-market. By scaling data generation without expanding human resources, we enable businesses to create more robust models and stay competitive in a fast-evolving landscape.",
      href: "https://drive.google.com/file/d/1ACR3fvlsDPOijlKIYxM0pJcxPMRwN35g/view?usp=drive_link",
    },
    {
      text: "Automated Sorting with Vision Enabled Robotic Arm",
      desc: "Our Intelligent Robotic Sorting System integrates Omniverse Isaac Sim, ROS 2, and NVIDIA GPU-accelerated perception for real-time, high-precision automation in manufacturing. Using YOLO-based object detection, synthetic data, and physics-accurate simulation, it minimizes the sim-to-real gap, achieving >95% sorting accuracy with sub-50ms inference times. With depth-based 3D pose estimation and adaptive motion planning, it reduces labor costs, accelerates deployment, and enhances production efficiency, transforming manual sorting into an intelligent, scalable automation solution.",
      href: "https://drive.google.com/file/d/1uEiXfMjiHIJ7_Oh-b5azHhyJ3yWbC0fx/view?usp=drive_link",
    },
    {
      text: "Autonomous Intelligent Robots for RFID Scanning with SLAM-Based Navigation",
      desc: "Our Autonomous RFID Scanning Robots, powered by SLAM-based navigation and AI-driven path planning, automate real-time inventory tracking in manufacturing and logistics. By integrating computer vision, RFID sensors, and adaptive motion control, these robots precisely locate and scan tagged assets in dynamic environments, reducing manual labor, improving accuracy, and enhancing warehouse efficiency with fully autonomous, collision-free operation.",
      href: "https://drive.google.com/file/d/1JXuNLC6ZYf1yyMw-6USAnfCIzHGSZoMJ/view?usp=drive_link",
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
