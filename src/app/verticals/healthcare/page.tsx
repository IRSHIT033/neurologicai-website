import ExploreSectionHealthcare from "@/components/ui/verticals/healthcare/exploresection";
import HealthcareAICarousel from "@/components/ui/verticals/healthcare/healthcare";
import Header from "@/components/ui/verticals/healthcare/hero";
import RelatedResources from "@/components/ui/verticals/related-resources";
//import HealthcareSection from "@/components/ui/verticals/why-choose-neurologic";
import IndustrySection from "@/components/ui/verticals/why-choose-neurologic";

const healthcareHeroTexts = {
  primarytext: "Cutting-Edge AI Models",
  secondarytext: "Redefining Healthcare by Integratin",
  description: `Large-Scale Automation, And Real-Time Intelligence Into Mission-Critical
        Applications. Our Expertise Spans Health Insurance, Life Sciences, And
        Radiology, Enabling Data-Driven Decision-Making, Faster Diagnostics, And
        Seamless Automation While Ensuring Full Compliance With HIPAA & FHIR.`,
};

const caraouselfeature = [
  {
    title: "End-to-End Inference Optimized for Healthcare",

    description:
      "Latency-reduced AI models with VLLM power real-time clinical decision making.",
  },
  {
    title: "Multi-Modal AI Imaging",

    description:
      "Integration of text, images, and data into unified, comprehensive patient analysis.",
  },
  {
    title: "80B+ Parameter Model Processing",
    description:
      "Developed domain-specific VLMs tailored for radiology understanding, and diagnostics.",
  },
  {
    title: "3x Faster Model Training Speed",
    description:
      "Optimized AI pipelines using FSDP, DeepSpeed, and multi-GPU training (A100/H100 clusters) to accelerate healthcare AI model development.",
  },
  {
    title: "Automation in Workflow",
    description:
      "Patient intelligence and machine medical records, and EHR processing.",
  },
  {
    title: "Accuracy in Detection",
    description:
      "Learning models improve early identification of diseases from imaging and clinical data.",
  },
  {
    title: "Processing Time",
    description: "Speeds up approvals, workflows for insurers and providers.",
  },
];

const resources = [
  {
    title:
      "AI-Powered Chat with X-Ray Images Using Multimodal Vision-Language Models",
    desc: "Our upgraded advanced X-Ray model enables seamless integration with multimodal vision-language models to interpret medical images, aiding radiologists and clinicians with accurate diagnostics.",
    image:
      "/resources-case-studies/Healthcare/AI-Powered Chat with X-Ray Images Using Multimodal Vision-Language Models.png",
    href: "",
  },
  {
    title:
      "AI-Powered Nuclear Morphological Analysis for Ovarian Cancer Diagnosis",
    desc: "Leveraging AI, we enhance nuclear morphological analysis to detect ovarian cancer with high precision. Our solution automates feature extraction and classification to assist pathologists.",
    image:
      "/resources-case-studies/Healthcare/AI-Powered Nuclear Morphological Analysis for Ovarian Cancer Diagnosis.png",
    href: "https://drive.google.com/file/d/17Nz4KuFUQ-f6IL0aoCiLOsqC7FuGxJ2z/view?usp=drive_link",
  },
  {
    title: "AI-Powered Health Insurance Claim Success Prediction",
    desc: "This AI-driven model predicts health insurance claim success rates, reducing fraud and ensuring faster claim settlements with higher accuracy.",
    image:
      "/resources-case-studies/Healthcare/AI-Powered Health Insurance Claim Success Prediction.png",
    href: "https://drive.google.com/file/d/1XUx5m8CbWfU2Fox3j5-AM4v2UFkozycw/view?usp=drive_link",
  },
  {
    title: "AI-Powered Multi-Organ Segmentation for Chest X-Rays",
    desc: "Our ChestXNet-LLM model enhances segmentation in X-ray images, improving detection of lung, heart, and rib abnormalities, aiding clinicians in accurate diagnoses.",
    image:
      "/resources-case-studies/Healthcare/AI-Powered Multi-Organ Segmentation for Chest X-Rays.png",
    href: "https://drive.google.com/file/d/1EtqXO_PQIf-jo9GCt8nSjhFq7nxNSBsE/view?usp=drive_link",
  },
  {
    title: "Prompt-Based Image Segmentation Using LLM",
    desc: "We utilize large language models for medical image segmentation, enabling flexible and adaptive segmentation processes for radiology and pathology applications.",
    image:
      "/resources-case-studies/Healthcare/Prompt-Based Image Segmentation Using LLM.png",
    href: "https://drive.google.com/file/d/16jZqwTzzilk2cAouxjSmXsRzSA3vXJ1p/view?usp=drive_link",
  },
  {
    title: "Enhanced EvaCLIP with LoRA & MLP for Pathological Classification",
    desc: "The latest EvaCLIP with LoRA and MLP enhances accuracy in pathology classification, enabling AI-powered automated diagnostics.",
    image:
      "/resources-case-studies/Healthcare/Enhanced EvaCLIP with LoRA & MLP for Pathological Classification.png",
    href: "https://drive.google.com/file/d/1K4vfGoEE3jMx9lDbyP5bZDFVqzdF8NXq/view?usp=sharing",
  },
  {
    title: "Self-Supervised Learning for Medical Imaging with DINOv2",
    desc: "Our self-supervised learning framework using DINOv2 enhances AI models for medical imaging, boosting accuracy in feature extraction and classification.",
    image:
      "/resources-case-studies/Healthcare/Self-Supervised Learning for Medical Imaging with DINOv2.png",
    href: "https://drive.google.com/file/d/138OaLQ29AQ1N_UW9-xaECwFgmk_XjJEP/view?usp=drive_link",
  },
  {
    title: "Evaluation Pipeline for LLM-Generated Radiology Reports",
    desc: "A structured evaluation pipeline designed for LLM-generated radiology reports ensures accuracy, consistency, and improved report quality for clinical use.",
    image:
      "/resources-case-studies/Healthcare/Evaluation Pipeline for LLM-Generated Radiology Reports.png",
    href: "https://drive.google.com/file/d/1SzfN0Ui6SkzQbMXtkuU1f_anV_8RooYg/view?usp=drive_link",
  },
  {
    title: "PHIA (SLM)-Precision Findings Extraction for Radiology Reports",
    desc: "PHIA (SLM) improves precision in extracting clinical findings from radiology reports, enhancing decision-making and patient outcomes.",
    image:
      "/resources-case-studies/Healthcare/PHI4 (SLM)-Precision Findings Extraction for Radiology Reports.png",
    href: "https://drive.google.com/file/d/1SaViJmoFi2-BJtXvWEV9p1XwJEh206Ei/view?usp=drive_link",
  },
  {
    title: "AI-Powered Grounded Report Generation for Medical Imaging",
    desc: "Our LLM-driven model enhances report generation for medical imaging, ensuring contextual accuracy and consistency across clinical reports.",
    image:
      "/resources-case-studies/Healthcare/AI-Powered Grounded Report Generation for Medical Imaging - vector graphics - purple.png",
    href: "https://drive.google.com/file/d/14AYLhNQMCT5MRCgzBs9fKUpcqPb7Q2IF/view?usp=drive_link",
  },
  {
    title: "Efficient Vision-Language Models for Edge Computing",
    desc: "Optimized VLMs for edge computing applications in healthcare, reducing computational load while maintaining high accuracy.",
    image:
      "/resources-case-studies/Healthcare/Efficient Vision-Language Models for Edge Computing.png",
    href: "https://drive.google.com/file/d/1x6C3PRNc9_tyxEXbepsc1qlOhMuNoOzh/view?usp=drive_link",
  },
  {
    title: "AI-Driven Intelligent Claim Processing & Audit System",
    desc: "A smart AI model that automates insurance claim processing and audits, reducing manual errors and accelerating claims verification.",
    image:
      "/resources-case-studies/Healthcare/AI-Driven Intelligent Claim Processing & Audit System.png",
    href: "https://drive.google.com/file/d/1gkelG_6wS9YpMCJ2wj6Ckr6KjMymNQYk/view?usp=drive_link",
  },
  {
    title: "AI-Powered Healthcare Risk Assessment & Predictive Analytics",
    desc: "AI-driven risk assessment tools leverage predictive analytics to identify potential health risks early, enhancing preventive care strategies.",
    image:
      "/resources-case-studies/Healthcare/AI-Powered Healthcare Risk Assessment & Predictive Analytics.png",
    href: "https://drive.google.com/file/d/1LZEym40U4L73D133cPc52SpTnYEQtDIA/view?usp=drive_link",
  },
  {
    title: "Foundational Generative AI Model Building for Healthcare",
    desc: "Developing foundational generative AI models tailored for healthcare applications, enabling personalized medicine and advanced diagnostics.",
    image:
      "/resources-case-studies/Healthcare/Foundational Generative AI Model Building for Healthcare.png",
    href: "https://drive.google.com/file/d/1wbG9CX0I8VW9VRSOY80f0SgIXaeKrZOl/view?usp=drive_link",
  },
];

const cards = [
  {
    id: 0,
    title:
      "AI-Powered Chat with X-Ray Images Using Multimodal Vision-Language Models",
    content:
      "Our surgically enhanced BLIP-2 model enables seamless interaction between medical images and text. Trained on 3 million X-ray images paired with curated radiology reports , it facilitates AI-driven conversations, anomaly detection, and real-time insights for clinicians.",
    src: "/healthcare/explore/AI-Powered Chat with X-Ray Images Using Multimodal Vision-Language Models - graphics.png",
    href: "",
  },
  {
    id: 1,
    title:
      "AI-Powered Nuclear Morphological Analysis for Ovarian Cancer Diagnosis",
    content:
      "Our Deep Hybrid Learning model combines Boosting models and deep learning to uncover patterns from nuclear morphometric analysis and nucleus-to-cytoplasm ratio, achieving AUC scores of 0.99 (validation) and 1.00 (test data) for highly accurate ovarian cancer diagnostics.",
    src: "/healthcare/explore/AI-Powered Nuclear Morphological Analysis for Ovarian Cancer Diagnosis.png",
    href: "https://drive.google.com/file/d/17Nz4KuFUQ-f6IL0aoCiLOsqC7FuGxJ2z/view?usp=drive_link",
  },
  {
    id: 2,
    title: "AI-Powered Health Insurance Claim Success Prediction",
    content:
      "Our fully automated automated ML pipeline predicts health insurance claim success with unmatched accuracy. Trained on 100k+ claims, it leverages advanced feature engineering and real-time processing for reliability. State of the art event driven inferencing system built with Kafka. With a 97% F1 score and 99% recall, it helps insurers proactively optimize claim processing and mitigate financial risks.",
    src: "/healthcare/explore/Health Insurance Claim.png",
    href: "https://drive.google.com/file/d/1XUx5m8CbWfU2Fox3j5-AM4v2UFkozycw/view?usp=drive_link",
  },
  {
    id: 3,
    title: "AI-Powered Multi-Organ Segmentation for Chest X-Rays",
    content:
      "Our Efficient Net-B0 + UNET model achieves 89% IoU on ribs, 86% on lungs and heart, and 85% on clavicles, setting a new SOTA. Through extensive experimentation with DinoV2, RadDino, UNETR, and ViT-based models, we refined segmentation accuracy, enhancing radiology workflows with precise organ detection and automated analysis—advancing AI-powered diagnostics at scale.",
    src: "/healthcare/explore/AI-Powered Multi-Organ Segmentation for Chest X-Rays.png",
    href: "https://drive.google.com/file/d/1EtqXO_PQIf-jo9GCt8nSjhFq7nxNSBsE/view?usp=drive_link",
  },
  {
    id: 4,
    title: "Prompt-Based Image Segmentation Using LLM",
    content:
      "Our LLM-driven framework enables prompt-based organ and pathology detection in CXR images. Using MiniGPT-Med, it processes text prompts—e.g., '[segment] Left Lung'—to generate precise segmentation masks. By predicting structured sequences of 0s and 1s, it maps directly to image masks, enhancing automation, flexibility, and scalability in medical imaging workflows.",
    src: "/healthcare/explore/Our LLM-driven framework enables prompt-based organ and pathology detection in CXR images. Using MiniGPT-Med, it processes text prompts—e.g., _[segment] Left Lung_—to generate precise segmentation masks. By predicting structured sequenc.png",
    href: "https://drive.google.com/file/d/16jZqwTzzilk2cAouxjSmXsRzSA3vXJ1p/view?usp=drive_link",
  },
  {
    id: 5,
    title: "Enhanced EvaCLIP with LoRA & MLP for Pathological Classification",
    content:
      "We fine-tuned EvaCLIP with LoRA to enhance visual-language alignment in medical imaging. An MLP classifier trained on top enables binary classification across 50 pathologies in chest X-rays, improving disease detection accuracy and AI-driven radiology diagnostics.",
    src: "/healthcare/explore/AI-Powered Chat with X-Ray Images Using Multimodal Vision-Language Models - graphics (1).png",
    href: "https://drive.google.com/file/d/1K4vfGoEE3jMx9lDbyP5bZDFVqzdF8NXq/view?usp=sharing",
  },
  {
    id: 6,
    title: "Self-Supervised Learning for Medical Imaging with DINOv2",
    content:
      "We leveraged DINOv2 for self-supervised learning on 10M+ radiology images, reducing reliance on labeled data. Using ViTs and a 100+ A100 GPU setup, our model extracts robust features, enhancing classification, segmentation, and abnormality detection while improving generalizability in medical AI.",
    src: "/healthcare/explore/Self-Supervised Learning for Medical Imaging with DINOv2.png",
    href: "https://drive.google.com/file/d/138OaLQ29AQ1N_UW9-xaECwFgmk_XjJEP/view?usp=drive_link",
  },
  {
    id: 7,
    title: "Evaluation Pipeline for LLM-Generated Radiology Reports",
    content:
      "We ensure clinical accuracy in LLM-generated radiology reports with a specialized evaluation pipeline. While BLEU, ROUGE, and BERTScore assess linguistic quality, SEMB, RadGraph F1, and RadCliq verify medical correctness, an LLM-as-Judge further enhances contextual scoring. Tested on 100K+ chest X-ray reports, this pipeline detects hidden errors, ensuring AI-driven radiology models are reliable for real-world use.",
    src: "/healthcare/explore/Radiology Reports.png",
    href: "https://drive.google.com/file/d/1SzfN0Ui6SkzQbMXtkuU1f_anV_8RooYg/view?usp=drive_link",
  },
  {
    id: 8,
    title: "PHI4 (SLM) - Precision Findings Extraction for Radiology Reports",
    content:
      "Neurologic AI’s fine-tuned SLM framework ensures high-accuracy findings extraction from radiology and mammography reports, minimizing hallucinations. Optimized for AWS SageMaker, it combines Phi4 modeling, LoRA fine-tuning, regex-based preprocessing, and feedback-driven learning to enhance medical text accuracy and reliability.",
    src: "/healthcare/explore/PHI4 (SLM) - Precision Findings Extraction for Radiology Reports.png",
    href: "https://drive.google.com/file/d/1SaViJmoFi2-BJtXvWEV9p1XwJEh206Ei/view?usp=drive_link",
  },
  {
    id: 9,
    title: "AI-Powered Grounded Report Generation for Medical Imaging",
    content:
      "Our VLM-driven framework automates radiology report generation, enhancing clinical accuracy and decision support. Integrating MiniGPT-Med & MedImageInsight, it extracts detailed CXR features, employs LoRA fine-tuned LLaMA 3.2 for efficient medical text generation, and achieves 90% accuracy in Visual Question Answering (VQA). With multi-image processing, advanced embeddings, and cross-attention, it generates structured, clinically relevant reports from frontal and lateral views of Chest X-rays.",
    src: "/healthcare/explore/AI-Powered Chat with X-Ray Images Using Multimodal Vision-Language Models - graphics (3).png",
    href: "https://drive.google.com/file/d/14AYLhNQMCT5MRCgzBs9fKUpcqPb7Q2IF/view?usp=drive_link",
  },
  {
    id: 10,
    title: "Efficient Vision-Language Models for Edge Computing",
    content:
      "Our optimized VLM delivers real-time AI on resource-constrained edge devices. Using model distillation, modal-adaptive pruning, and 4-bit AWQ quantization, it retains 92% of larger VLM performance with just 5% of the parameters, ensuring low-latency, memory-efficient processing for IoT, mobile, and embedded AI systems.",
    src: "/healthcare/explore/AI-Powered Chat with X-Ray Images Using Multimodal Vision-Language Models - graphics (4).png",
    href: "https://drive.google.com/file/d/1x6C3PRNc9_tyxEXbepsc1qlOhMuNoOzh/view?usp=drive_link",
  },
  {
    id: 11,
    title: "AI-Driven Intelligent Claim Processing & Audit System",
    content:
      "We automated document management system processes 50,000+ medical documents daily with 98%+ accuracy, reducing manual effort by 30%. Leveraging OCR, NLP, and multimodal deep learning, it streamlines claim audits through automated indexing, LayoutLM-powered data extraction (97% accuracy), LLM-based audit validation, and interactive search & annotation. Deployed on AWS with Docker & Kubernetes (EKS), it ensures seamless scalability and compliance.",
    src: "/healthcare/explore/AI-Powered Chat with X-Ray Images Using Multimodal Vision-Language Models - graphics (5).png",
    href: "https://drive.google.com/file/d/1gkelG_6wS9YpMCJ2wj6Ckr6KjMymNQYk/view?usp=drive_link",
  },
  {
    id: 12,
    title: "AI-Powered Healthcare Risk Assessment & Predictive Analytics",
    content:
      "Our risk modeling suite optimizes insurance premiums and enhances proactive care for Medicare & Medicaid populations. By integrating ICD & CC codes, predictive modeling, and patient behavior analytics, it ensures accurate risk scoring, early disease detection, and fair premium settings. With 15% improved data completeness and 10-15% better early diagnosis, it reduces risk assessment errors by 25%, aligning costs with true patient risk.",
    src: "/healthcare/explore/AI-Powered Chat with X-Ray Images Using Multimodal Vision-Language Models - graphics (7).png",
    href: "https://drive.google.com/file/d/1LZEym40U4L73D133cPc52SpTnYEQtDIA/view?usp=drive_link",
  },
  {
    id: 13,
    title: "Foundational Generative AI Model Building for Healthcare",
    content:
      "Neurologic’s Healthcare Foundational Vision Model is engineered with tens of billions of parameters, trained on petabytes of medical images, and executed across hundreds of GPUs in parallel. By integrating self-supervised learning, contrastive training, and carefully supervised fine-tuning, we achieve state-of-the-art performance in image segmentation, classification, and text generation for diverse clinical tasks. Our proprietary data extraction and refinement pipelines ensure high-fidelity medical datasets, while the model’s large-scale architecture delivers unprecedented accuracy and scalability. This comprehensive approach sets a new benchmark in AI-driven medical imaging, enabling faster, more reliable diagnostic insights.",
    src: "/healthcare/explore/AI-Powered Chat with X-Ray Images Using Multimodal Vision-Language Models - graphics (8).png",
    href: "https://drive.google.com/file/d/1wbG9CX0I8VW9VRSOY80f0SgIXaeKrZOl/view?usp=drive_link",
  },
];

const industryData = {
  healthcare: {
    heading: "Why Neurologic for Healthcare:",
    images :{
    icons: [
      { src: "/healthcare/icon-top.png", width: 196, height: 71 },
      { src: "/healthcare/icon-bottom.png", width: 196, height: 62 },
    ],
    flipCards: [
      { front: "/healthcare/custom-ai-models.png", back: "/healthcare/custom-ai-models-back.png", alt: "Custom AI Models", size: "w-[196px] h-[297px]" },
      { front: "/healthcare/fast-model-training.png", back: "/healthcare/fast-model-training-back.png", alt: "Fast Model Training", size: "w-[196px] h-[217px]" },
      { front: "/healthcare/ai-automation.png", back: "/healthcare/ai-automation-back.png", alt: "AI Automation", size: "w-[417px] h-[297px]" },
      { front: "/healthcare/proven-impact.png", back: "/healthcare/proven-impact-back.png", alt: "Proven Impact", size: "w-[196px] h-[227px]" },
      { front: "/healthcare/accurate-diagnostics.png", back: "/healthcare/accurate-diagnostics-back.png", alt: "Accurate Diagnostics", size: "w-[214px] h-[301px]" },
      { front: "/healthcare/secure-scalable-ai.png", back: "/healthcare/secure-scalable-ai-back.png", alt: "Secure & Scalable AI", size: "w-[402px] h-[301px]" },
    ],
  }
  },
};

const page = () => {
  return (
    <div className="smooth-scroll">
      <Header
        primarytext={healthcareHeroTexts.primarytext}
        secondarytext={healthcareHeroTexts.secondarytext}
        description={healthcareHeroTexts.description}
      />
    
      <HealthcareAICarousel features={caraouselfeature} />
      <IndustrySection industryName="Healthcare" {...industryData.healthcare} />
      <ExploreSectionHealthcare cards={cards} />
      <RelatedResources resources={resources} />
    </div>
  );
};

export default page;
