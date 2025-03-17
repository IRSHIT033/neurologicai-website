import ExperiencesSection from "@/components/ui/services/experience";
import HeaderSection from "@/components/ui/services/generativeai";
import SolutionGrid from "@/components/ui/services/solutions";

const page = () => {
  const servicesHeaderText = {
    headertext: "Generative AI As A Services",
    headerdesc: `Neurologic AI pioneers Generative AI by training and deploying multi-billion-parameter models across industries. Using architectures like GPT-4, LLaMA, Qwen, and domain-specific models (MedGPT, Med Image Insights), we tackle complex challenges with precision. Our large-scale pipelines run on top-tier GPUs (A100s, H100s) with Slurm, FSDP, and distributed optimization for peak efficiency. We specialize in fine-tuning (RLHF, LoRA), inference acceleration (speculative decoding, KV caching), and scalable deployment via SageMaker, VLLM, and TensorRT. With AI safety, multimodal capabilities, synthetic data generation, Retrieval-Augmented Generation (RAG), and adaptive learning, we drive innovation, automation, and business transformation.`,
  };

  const experiences = [
    {
      text: "Foundational Generative AI Model Building For Healthcare",
      desc: "Neurologic’s Healthcare Foundational Vision Model is engineered with tens of billions of parameters, trained on petabytes of medical images, and executed across hundreds of GPUs in parallel. By integrating self-supervised learning, contrastive training, and carefully supervised fine-tuning, we achieve state-of-the-art performance in image segmentation, classification, and text generation for diverse clinical tasks.\n Our proprietary data extraction and refinement pipelines ensure high-fidelity medical datasets, while the model’s large-scale architecture delivers unprecedented accuracy and scalability. This comprehensive approach sets a new benchmark in AI-driven medical imaging, enabling faster, more reliable diagnostic insights.",
      href: "https://drive.google.com/file/d/1wbG9CX0I8VW9VRSOY80f0SgIXaeKrZOl/view?usp=drive_link",
    },
    {
      text: "AI-Powered Grounded Report Generation For Medical Imaging",
      desc: "VLM-driven framework automates radiology report generation, enhancing clinical accuracy and decision support. Integrating MiniGPT-Med & MedImageInsight, it extracts detailed CXR features, employs LoRA fine-tuned LLaMA 3.2 for efficient medical text generation, and achieves 90% accuracy in Visual Question Answering (VQA). With multi-image processing, advanced embeddings, and cross-attention, it generates structured, clinically relevant reports from frontal and lateral views of Chest X-rays.",
      href: "https://drive.google.com/file/d/1nlVGbCKitXUUJ4d7Le1mOmTvhcWoR8Go/view?usp=drive_link",
    },
    {
      text: "Prompt-Based Image Segmentation Using VLM",
      desc: 'Our VLM-driven framework enables prompt-based organ and pathology detection in CXR images. Using MiniGPT-Med, it processes text prompts—e.g., "[segment] Left Lung"—to generate precise segmentation masks. By predicting structured sequences of 0s and 1s, it maps directly to image masks, enhancing automation, flexibility, and scalability in medical imaging workflows.',
      href: "https://drive.google.com/file/d/16jZqwTzzilk2cAouxjSmXsRzSA3vXJ1p/view?usp=drive_link",
    },
    {
      text: "Efficient Vision-Language Models For Edge Computing",
      desc: "Our optimized VLM delivers real-time AI on resource-constrained edge devices. Using model distillation, modal-adaptive pruning, and 4-bit AWQ quantization, it retains 92% of larger VLM performance with just 5% of the parameters, ensuring low-latency, memory-efficient processing for IoT, mobile, and embedded AI systems.",
      href: "https://drive.google.com/file/d/1x6C3PRNc9_tyxEXbepsc1qlOhMuNoOzh/view?usp=drive_link",
    },
    {
      text: "Evaluation Pipeline for LLM-Generated Radiology Reports",
      desc: "We ensure clinical accuracy in LLM-generated radiology reports with a specialized evaluation pipeline. While BLEU, ROUGE, and BERTScore assess linguistic quality, SEMB, RadGraph F1, and RadCliq verify medical correctness, an LLM-as-Judge further enhances contextual scoring. Tested on 100K+ chest X-ray reports, this pipeline detects hidden errors, ensuring AI-driven radiology models are reliable for real-world use.",
      href: "https://drive.google.com/file/d/1SzfN0Ui6SkzQbMXtkuU1f_anV_8RooYg/view?usp=drive_link",
    },
    {
      text: "AI-Powered Nuclear Morphological Analysis For Ovarian Cancer Diagnosis",
      desc: "Our Deep Hybrid Learning model combines Boosting models and deep learning to uncover patterns from nuclear morphometric analysis and nucleus-to-cytoplasm ratio, achieving AUC scores of 0.99 (validation) and 1.00 (test data) for highly accurate ovarian cancer diagnostics.",
      href: "https://drive.google.com/file/d/17Nz4KuFUQ-f6IL0aoCiLOsqC7FuGxJ2z/view?usp=drive_link",
    },
    {
      text: "Multi-Stage Agentic Framework Powered By VLM And Knowledge Graphs For Product’s Damage Assessment And Recycling",
      desc: "Our Multi-Stage Agentic Framework revolutionizes product damage assessment and recycling by integrating Vision-Language Models (VLMs), Knowledge Graphs, 3D design simulations, and Large Language Models (LLMs) into an intelligent decision-making pipeline. By combining automated defect detection, synthetic data augmentation using NVIDIA Omniverse, and structured reasoning with knowledge graphs, our solution enables rapid, high-accuracy assessment of repair feasibility and sustainability impact. This AI-driven system reduces inspection time by 40%, scales to 100K+ items/month, and optimizes cost-effective recycling decisions—enhancing efficiency, accuracy, and sustainability for manufacturers and recyclers.",
      href: "https://drive.google.com/file/d/1yvKjx0SoMIlBrOZRgHL7TlILZNGqCK48/view?usp=drive_link",
    },
    {
      text: "SLM-Powered Findings Extraction From Medical Reports Using PHI4",
      desc: "Neurologic AI’s fine-tuned SLM framework ensures high-accuracy findings extraction from radiology and mammography reports, minimizing hallucinations. Optimized for AWS SageMaker, it combines Phi4 modeling, LoRA fine-tuning, regex-based preprocessing, and feedback-driven learning to enhance medical text accuracy and reliability.",
      href: "https://drive.google.com/file/d/1SaViJmoFi2-BJtXvWEV9p1XwJEh206Ei/view?usp=drive_link",
    },
    {
      text: "Customer Service Using Agentic AI",
      desc: "Neurologic’s Agentic AI platform transforms customer service by delivering real-time, personalized support across multiple channels. Built on advanced language models tailored for retail interactions, it interprets natural-language queries, pulls data from loyalty programs and order management systems, and automates resolutions or product recommendations. Through continuous learning and sentiment analysis, Agentic AI adapts responses to each customer’s context—resolving issues faster, minimizing wait times, and freeing human agents for complex tasks. Seamless integration with existing CRM and POS systems ensures a frictionless experience, driving higher customer satisfaction and solidifying brand loyalty.",
      href: "https://drive.google.com/file/d/1zGsKEwGlH3gD_EC1e9alIAgnc6O4_ozt/view?usp=drive_link",
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
