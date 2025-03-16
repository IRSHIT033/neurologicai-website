import ExperiencesSection from "@/components/ui/services/experience";
import HeaderSection from "@/components/ui/services/generativeai";
import SolutionGrid from "@/components/ui/services/solutions";

const page = () => {
  const servicesHeaderText = {
    headertext: "Computer Vision & Video Analytics",
    headerdesc: `Neurologic AI delivers cutting-edge Computer Vision solutions for complex visual tasks that scale seamlessly from high-performance clusters to resource-constrained edge devices. We leverage state-of-the-art architectures like SAM2, Grounded SAM, YOLO, Vision Transformers (ViT), and CNNs for precise detection, segmentation, and classification. Our HPC-accelerated pipelines integrate multi-camera tracking (DeepSort), domain randomization, and synthetic data generation for robust performance. By employing ONNX-based conversions, quantization, and distillation, we achieve real-time inference on devices like NVIDIA Jetson. Through platforms such as NVIDIA Metropolis, DeepStream, and TensorRT, we deploy scalable microservices that drive actionable insights across surveillance, anomaly detection, and automated inspection.`,
  };

  const experiences = [
    {
      text: "Efficient Vision-Language Models for Edge Computing",
      desc: "Our optimized VLM delivers real-time AI on resource-constrained edge devices. Using model distillation, modal-adaptive pruning, and 4-bit AWQ quantization, it retains 92% of larger VLM performance with just 5% of the parameters, ensuring low-latency, memory-efficient processing for IoT, mobile, and embedded AI systems.",
      href: "https://drive.google.com/file/d/1x6C3PRNc9_tyxEXbepsc1qlOhMuNoOzh/view?usp=drive_link",
    },
    {
      text: "AI-Powered Nuclear Morphological Analysis for Ovarian Cancer Diagnosis",
      desc: "Our Deep Hybrid Learning model combines Boosting models and deep learning to uncover patterns from nuclear morphometric analysis and nucleus-to-cytoplasm ratio, achieving AUC scores of 0.99 (validation) and 1.00 (test data) for highly accurate ovarian cancer diagnostics.",
      href: "https://drive.google.com/file/d/17Nz4KuFUQ-f6IL0aoCiLOsqC7FuGxJ2z/view?usp=drive_link",
    },
    {
      text: "Enhanced MII with LoRA & MLP for Pathological Classification",
      desc: "Our enhanced MedImageInsight framework leverages the power of deep learning to transform pathological classification in chest X-ray (CXR) images. By employing a distilled version of the MedImageInsight (MII) vision encoder, fine-tuned with Low-Rank Adaptation (LoRA) and a Multi-Layer Perceptron (MLP) head, this solution maintains robust feature extraction capabilities while addressing regulatory challenges. Our approach significantly improves classification performance across multiple pathological conditions, ensuring accurate and efficient clinical diagnoses. With a focus on regulatory compliance and model transparency, this advanced system offers a scalable, effective solution for medical image analysis, paving the way for enhanced patient management and care.",
      href: "https://drive.google.com/file/d/1K4vfGoEE3jMx9lDbyP5bZDFVqzdF8NXq/view?usp=sharing",
    },
    {
      text: "AI-Powered Smart Shelf: Vision-Enabled Analytics & Real-Time Recommendation",
      desc: "Neurologic’s Smart Shelf seamlessly merges advanced computer vision, real-time analytics, and recommendation engines to deliver a personalized in-store experience. It detects shopper demographics (age, gender, style) and instantly offers tailored product suggestions or promotions. By leveraging edge computing for low-latency analysis and cloud integration for deeper insights, retailers can scale effortlessly. Built with robust data privacy controls and easy API-driven integration, the Smart Shelf elevates customer engagement, boosts conversions, and drives operational efficiency—redefining the retail aisle for a new era of connected shopping.",
      href: "https://drive.google.com/file/d/1xOfvgbnLY5bgSYdjS0fp21CxZmb21Nl7/view?usp=drive_link",
    },
    {
      text: "AI-Powered Multi-Camera Customer Tracking and Analytics",
      desc: "Our AI-powered multi-camera customer tracking and analytics solution revolutionizes retail environments by accurately monitoring shoppers across multiple camera views. Using advanced object detection, feature extraction, and spatio-temporal data, our system ensures reliable shopper identification even in challenging conditions, such as occlusions, overlapping trajectories, and varying lighting. With over 80% tracking accuracy, it provides retailers with valuable insights into shopper movement patterns, dwell times, and high-traffic areas, enabling data-driven store layout optimization. This solution enhances marketing strategies, improves operational efficiency, and strengthens loss prevention efforts, all while offering a competitive edge with cutting-edge AI-driven analytics for personalized customer experiences.",
      href: "https://drive.google.com/file/d/14Mg1Vjx0nFszt9QsXy9J5KRFgfy-6RY0/view?usp=drive_link",
    },
    {
      text: "Multi-Stage Agentic Framework powered by VLM and Knowledge Graphs for Product’s Damage Assessment and Recycling",
      desc: "Our multi-stage agentic framework for product damage assessment and recycling leverages advanced computer vision, vision-language models (VLM), and knowledge graphs to automate and optimize the product lifecycle. This system efficiently handles tasks such as damage detection, repair cost estimation, and recycling recommendations. With a modular architecture, it supports product lines like L'Oréal packaging, Tumi suitcases, and ON running shoes. By integrating synthetic data generation and leveraging NVIDIA's NeRF-AI for 3D model retrieval, it enhances decision-making accuracy. The platform promotes sustainability by encouraging recycling and repair, reducing operational costs, and supporting scalable, eco-friendly practices across industries.",
      href: "https://drive.google.com/file/d/1yvKjx0SoMIlBrOZRgHL7TlILZNGqCK48/view?usp=drive_link",
    },
    {
      text: "Automated Sorting with Vision Enabled Robotic Arm",
      desc: "Our Intelligent Robotic Sorting System integrates Omniverse Isaac Sim, ROS 2, and NVIDIA GPU-accelerated perception for real-time, high-precision automation in manufacturing. Using YOLO-based object detection, synthetic data, and physics-accurate simulation, it minimizes the sim-to-real gap, achieving >95% sorting accuracy with sub-50ms inference times. With depth-based 3D pose estimation and adaptive motion planning, it reduces labor costs, accelerates deployment, and enhances production efficiency, transforming manual sorting into an intelligent, scalable automation solution.",
      href: "https://drive.google.com/file/d/1uEiXfMjiHIJ7_Oh-b5azHhyJ3yWbC0fx/view?usp=drive_link",
    },
    {
      text: "Real-Time AI-Powered Detection for Retail Inventory Optimization",
      desc: "Efficient inventory management plays a crucial role in improving profitability and customer satisfaction within retail operations. Traditional manual methods are labor-intensive and prone to errors, leading to stock discrepancies, overstocking, or out-of-stock situations. Our AI-powered real-time inventory detection system, powered by Detectron2, achieves over 98% detection accuracy, enabling seamless stock monitoring and management. By automating inventory detection, our solution enhances operational efficiency, improves inventory accuracy, and provides real-time stock visibility. This results in significant cost reduction, increased customer satisfaction, and optimized resource allocation, offering a competitive edge in retail operations.",
      href: "https://drive.google.com/file/d/1iIn37eeCf6UVdWkfgdlnWKcLDIcEMM8P/view?usp=drive_link",
    },
    {
      text: "Automated Barcode Recognition and Data Logging for Supply Chain Efficiency",
      desc: "Effective inventory management and accurate product tracking are essential for efficient operations in retail, logistics, and warehousing sectors. Manual barcode scanning methods are error-prone, labor-intensive, and inadequate for high volume inventory operations. We introduce an advanced, automated barcode recognition system utilizing real-time image processing and deep learning techniques, achieving barcode detection accuracy exceeding 98%. Our solution substantially improved operational efficiency, data accuracy, and real-time visibility, delivering significant cost savings and increased supply chain agility.",
      href: "https://drive.google.com/file/d/11qRCegLRez07Kxdh0IQ4LGmduQryxZrw/view?usp=drive_link",
    },
    {
      text: "Comprehensive Video Analytics Suite for Safety, Compliance, and Content Insights",
      desc: "The exponential growth of video content on digital platforms has created substantial challenges for effective moderation, compliance monitoring, and security. Our AI-driven video analytics suite addresses these challenges by integrating advanced computer vision, NLP, and audio-visual analytics to accurately and swiftly identify objectionable content, compliance violations, and security threats. With an impressive 98% accuracy rate, our system enhances safety measures, ensures strict compliance adherence, and boosts operational efficiency, providing a robust solution for managing and securing large volumes of video content across platforms. ",
      href: "https://drive.google.com/file/d/1fHYHrH18JT6s24mBlFfrcwow6-hPmhRd/view?usp=drive_link",
    },
    {
      text: "Intelligent Receipt and Invoice Data Extraction for Accelerated Financial Workflows",
      desc: "Traditional methods of manually processing financial documents like receipts and invoices are time-consuming, error-prone, and lack scalability. To address these challenges, we developed an automated intelligent data extraction system that combines advanced AI technologies, utilizing LayoutLM V3 for section segmentation and Large Language Models (LLMs) for structured data extraction. With over 98% accuracy, our solution has significantly streamlined financial workflows, reduced manual workloads by 60%, and delivered annual operational savings exceeding $800,000. This intelligent system enhances efficiency, accuracy, and cost-effectiveness, transforming financial document processing for businesses. ",
      href: "https://drive.google.com/file/d/1b8UrJ812TrGX6du3wuMmgTKawHIHbuBW/view?usp=drive_link",
    },
    {
      text: "AI-Powered Multi-Organ Segmentation for Chest X-Rays",
      desc: "EfficientNet-B0 + UNET model achieves 89% IoU on ribs, 86% on lungs and heart, and 85% on clavicles, setting a new SOTA. Through extensive experimentation with DinoV2, RadDino, UNETR, and ViT-based models, we refined segmentation accuracy, enhancing radiology workflows with precise organ detection and automated analysis—advancing AI-powered diagnostics at scale.",
      href: "https://drive.google.com/file/d/1EtqXO_PQIf-jo9GCt8nSjhFq7nxNSBsE/view?usp=drive_link",
    },
    {
      text: "Enhanced MII with LoRA & MLP for Pathological Classification",
      desc: "Accurate classification of pathological conditions from chest X-ray (CXR) images is essential for effective clinical diagnosis and patient management. This work introduces an enhanced pathological classification framework that utilizes a distilled version of the MedImageInsight (MII) vision encoder, fine-tuned with Low-Rank Adaptation (LoRA) and a Multi-Layer Perceptron (MLP) head. This innovative approach retains the robust feature extraction capabilities of the original model while addressing regulatory constraints, improving classification performance across multiple pathological classes, and ensuring high precision in clinical settings.",
      href: "https://drive.google.com/file/d/1K4vfGoEE3jMx9lDbyP5bZDFVqzdF8NXq/view?usp=sharing",
    },
    {
      text: "Self-Supervised Learning for Medical Imaging with DINOv2",
      desc: "We leveraged DINOv2 for self-supervised learning on 10M+ radiology images, reducing reliance on labeled data. Using ViTs and a 100+ A100 GPU setup, our model extracts robust features, enhancing classification, segmentation, and abnormality detection while improving generalizability in medical AI.",
      href: "https://drive.google.com/file/d/138OaLQ29AQ1N_UW9-xaECwFgmk_XjJEP/view?usp=drive_link",
    },
    {
      text: "AI-Powered Grounded Report Generation for Medical Imaging",
      desc: "Our VLM-driven framework automates radiology report generation, enhancing clinical accuracy and decision support. Integrating MiniGPT-Med & MedImageInsight, it extracts detailed CXR features, employs LoRA fine-tuned LLaMA 3.2 for efficient medical text generation, and achieves 90% accuracy in Visual Question Answering (VQA). With multi-image processing, advanced embeddings, and cross-attention, it generates structured, clinically relevant reports from frontal and lateral views of Chest X-rays.",
      href: "https://drive.google.com/file/d/14AYLhNQMCT5MRCgzBs9fKUpcqPb7Q2IF/view?usp=drive_link",
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
