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
      "AI-Powered Chat with X-Ray Images Using Multimodal Vision-Language Models",
    content:
      "Our surgically enhanced BLIP-2 model enables seamless interaction between medical images and text. Trained on 3 million X-ray images paired with curated radiology reports , it facilitates AI-driven conversations, anomaly detection, and real-time insights for clinicians.",
    src: "/healthcareCard-1.png",
  },
  {
    id: 1,
    title:
      "AI-Powered Nuclear Morphological Analysis for Ovarian Cancer Diagnosis",
    content:
      "Our Deep Hybrid Learning model combines Boosting models and deep learning to uncover patterns from nuclear morphometric analysis and nucleus-to-cytoplasm ratio, achieving AUC scores of 0.99 (validation) and 1.00 (test data) for highly accurate ovarian cancer diagnostics.",
    src: "/healthcareCard-2.png",
  },
  {
    id: 2,
    title: "AI-Powered Health Insurance Claim Success Prediction",
    content:
      "Our fully automated automated ML pipeline predicts health insurance claim success with unmatched accuracy. Trained on 100k+ claims, it leverages advanced feature engineering and real-time processing for reliability. State of the art event driven inferencing system built with Kafka. With a 97% F1 score and 99% recall, it helps insurers proactively optimize claim processing and mitigate financial risks.",
    src: "/healthcareCard-3.png",
  },
  {
    id: 3,
    title: "AI-Powered Multi-Organ Segmentation for Chest X-Rays",
    content:
      "Our Efficient Net-B0 + UNET model achieves 89% IoU on ribs, 86% on lungs and heart, and 85% on clavicles, setting a new SOTA. Through extensive experimentation with DinoV2, RadDino, UNETR, and ViT-based models, we refined segmentation accuracy, enhancing radiology workflows with precise organ detection and automated analysis—advancing AI-powered diagnostics at scale.",
    src: "/healthcareCard-4.png",
  },
  {
    id: 4,
    title: "Prompt-Based Image Segmentation Using LLM",
    content:
      "Our LLM-driven framework enables prompt-based organ and pathology detection in CXR images. Using MiniGPT-Med, it processes text prompts—e.g., '[segment] Left Lung'—to generate precise segmentation masks. By predicting structured sequences of 0s and 1s, it maps directly to image masks, enhancing automation, flexibility, and scalability in medical imaging workflows.",
    src: "/healthcareCard-5.png",
  },
  {
    id: 5,
    title: "Enhanced EvaCLIP with LoRA & MLP for Pathological Classification",
    content:
      "We fine-tuned EvaCLIP with LoRA to enhance visual-language alignment in medical imaging. An MLP classifier trained on top enables binary classification across 50 pathologies in chest X-rays, improving disease detection accuracy and AI-driven radiology diagnostics.",
    src: "/healthcareCard-1.png",
  },
  {
    id: 6,
    title: "Self-Supervised Learning for Medical Imaging with DINOv2",
    content:
      "We leveraged DINOv2 for self-supervised learning on 10M+ radiology images, reducing reliance on labeled data. Using ViTs and a 100+ A100 GPU setup, our model extracts robust features, enhancing classification, segmentation, and abnormality detection while improving generalizability in medical AI.",
    src: "/healthcareCard-6.png",
  },
  {
    id: 7,
    title: "Evaluation Pipeline for LLM-Generated Radiology Reports",
    content:
      "We ensure clinical accuracy in LLM-generated radiology reports with a specialized evaluation pipeline. While BLEU, ROUGE, and BERTScore assess linguistic quality, SEMB, RadGraph F1, and RadCliq verify medical correctness, an LLM-as-Judge further enhances contextual scoring. Tested on 100K+ chest X-ray reports, this pipeline detects hidden errors, ensuring AI-driven radiology models are reliable for real-world use.",
    src: "/healthcareCard-7.png",
  },
  {
    id: 8,
    title: "PHI4 (SLM) - Precision Findings Extraction for Radiology Reports",
    content:
      "Neurologic AI’s fine-tuned SLM framework ensures high-accuracy findings extraction from radiology and mammography reports, minimizing hallucinations. Optimized for AWS SageMaker, it combines Phi4 modeling, LoRA fine-tuning, regex-based preprocessing, and feedback-driven learning to enhance medical text accuracy and reliability.",
    src: "/healthcareCard-8.png",
  },
  {
    id: 9,
    title: "AI-Powered Grounded Report Generation for Medical Imaging",
    content:
      "Our VLM-driven framework automates radiology report generation, enhancing clinical accuracy and decision support. Integrating MiniGPT-Med & MedImageInsight, it extracts detailed CXR features, employs LoRA fine-tuned LLaMA 3.2 for efficient medical text generation, and achieves 90% accuracy in Visual Question Answering (VQA). With multi-image processing, advanced embeddings, and cross-attention, it generates structured, clinically relevant reports from frontal and lateral views of Chest X-rays.",
    src: "/healthcareCard-1.png",
  },
  {
    id: 10,
    title: "Efficient Vision-Language Models for Edge Computing",
    content:
      "Our optimized VLM delivers real-time AI on resource-constrained edge devices. Using model distillation, modal-adaptive pruning, and 4-bit AWQ quantization, it retains 92% of larger VLM performance with just 5% of the parameters, ensuring low-latency, memory-efficient processing for IoT, mobile, and embedded AI systems.",
    src: "/healthcareCard-1.png",
  },
  {
    id: 11,
    title: "AI-Driven Intelligent Claim Processing & Audit System",
    content:
      "We automated document management system processes 50,000+ medical documents daily with 98%+ accuracy, reducing manual effort by 30%. Leveraging OCR, NLP, and multimodal deep learning, it streamlines claim audits through automated indexing, LayoutLM-powered data extraction (97% accuracy), LLM-based audit validation, and interactive search & annotation. Deployed on AWS with Docker & Kubernetes (EKS), it ensures seamless scalability and compliance.",
    src: "/healthcareCard-1.png",
  },
  {
    id: 12,
    title: "AI-Powered Healthcare Risk Assessment & Predictive Analytics",
    content:
      "Our risk modeling suite optimizes insurance premiums and enhances proactive care for Medicare & Medicaid populations. By integrating ICD & CC codes, predictive modeling, and patient behavior analytics, it ensures accurate risk scoring, early disease detection, and fair premium settings. With 15% improved data completeness and 10-15% better early diagnosis, it reduces risk assessment errors by 25%, aligning costs with true patient risk.",
    src: "/healthcareCard-1.png",
  },
  {
    id: 13,
    title: "Foundational Generative AI Model Building for Healthcare",
    content:
      "Neurologic’s Healthcare Foundational Vision Model is engineered with tens of billions of parameters, trained on petabytes of medical images, and executed across hundreds of GPUs in parallel. By integrating self-supervised learning, contrastive training, and carefully supervised fine-tuning, we achieve state-of-the-art performance in image segmentation, classification, and text generation for diverse clinical tasks. Our proprietary data extraction and refinement pipelines ensure high-fidelity medical datasets, while the model’s large-scale architecture delivers unprecedented accuracy and scalability. This comprehensive approach sets a new benchmark in AI-driven medical imaging, enabling faster, more reliable diagnostic insights.",
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
