import ExperiencesSection from "@/components/ui/services/experience";
import HeaderSection from "@/components/ui/services/generativeai";
import SolutionGrid from "@/components/ui/services/solutions";

const page = () => {
  const servicesHeaderText = {
    headertext: "Natural Language Processing",
    headerdesc: `Neurologic AI leverages cutting-edge Transformer models like T5, BERT, and GPT-4 to power NLP solutions for tasks such as information extraction, text classification, summarization, and NER. Our HPC-optimized pipelines use DeepSpeed, Horovod, and Accelerate for large-scale fine-tuning. We enhance performance with LoRA, RLHF, RAG, knowledge distillation, and prompt engineering. With multilingual capabilities, domain adaptation, and real-time insights, our scalable, microservices-based NLP solutions drive automation and transformation across industries.`,
  };

  const experiences = [
    {
      text: "Intelligent Receipt and Invoice Data Extraction for Accelerated Financial Workflows",
      desc: "Traditional methods of manually processing financial documents like receipts and invoices are time-consuming, error-prone, and lack scalability. To address these challenges, we developed an automated intelligent data extraction system that combines advanced AI technologies, utilizing LayoutLM V3 for section segmentation and Large Language Models (LLMs) for structured data extraction. With over 98% accuracy, our solution has significantly streamlined financial workflows, reduced manual workloads by 60%, and delivered annual operational savings exceeding $800,000. This intelligent system enhances efficiency, accuracy, and cost-effectiveness, transforming financial document processing for businesses. ",
    },
    {
      text: "SLM-Powered Findings Extraction from Medical Reports using PHI4",
      desc: "Neurologic AI’s fine-tuned SLM framework ensures high-accuracy findings extraction from radiology and mammography reports, minimizing hallucinations. Optimized for AWS SageMaker, it combines Phi4 modeling, LoRA fine-tuning, regex-based preprocessing, and feedback-driven learning to enhance medical text accuracy and reliability.",
    },
    {
      text: "Intelligent Receipt and Invoice Data Extraction for Accelerated Financial Workflows",
      desc: "Traditional methods of manually processing financial documents like receipts and invoices are time-consuming, error-prone, and lack scalability. To address these challenges, we developed an automated intelligent data extraction system that combines advanced AI technologies, utilizing LayoutLM V3 for section segmentation and Large Language Models (LLMs) for structured data extraction. With over 98% accuracy, our solution has significantly streamlined financial workflows, reduced manual workloads by 60%, and delivered annual operational savings exceeding $800,000. This intelligent system enhances efficiency, accuracy, and cost-effectiveness, transforming financial document processing for businesses. ",
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
