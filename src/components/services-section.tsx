'use client'
import React, { useState, useRef } from "react";
import { motion, useScroll, useInView, useTransform } from "framer-motion";
import { twMerge } from "tailwind-merge";
const cards = [
  {
    title: "Generative AI",
    description:
      "Neurologic AI specializes in training and deploying multi-billion-parameter models, driving transformative breakthroughs in Generative AI. We leverage industry-leading platforms like GPT-3, GPT-4, LLaMA, Mixva, Qwen, BLIP-2, and domain-specific models like MedGPT and Med Image Insights to address complex challenges across industries. Our large-scale training pipelines orchestrate hundreds of top-tier GPUs (A100s, H100s) using Slurm, FSDP, and distributed optimization, ensuring unparalleled performance. We extract value in multi-turn (RLHF, LoRA), inference acceleration (speculative decoding, KV caching), and scalable deployments with SageMaker Endpoints, VLLM, TensorRT, and MLOpsDev. By integrating AI safety guardrails, multimodal fusion, synthetic data generation, and Retrieval-Augmented Generation (RAG), we deliver cutting-edge AI solutions that seamlessly transform business processes, drive innovation, and create generate meaningful significant impact.",
    button: "Deploy Now",
    buttonLink: "#",
  },
  {
    title: "Robotics & Digital Twins",
    description:
      "Neurologic AI fuses advanced robotics with immersive digital twin technologies, leveraging NVIDIA COSMOS, ROS2, Isaac SIM, Isaac ROS, and NVIDIA Omniverse for photorealistic simulation, real-time sensor fusion, and domain randomization. We harness NVIDIA Replicator for synthetic data generation, manipulate datasets in headless mode, and deploy Omniverse microservices for seamless scalability. In today’s AI-driven world, combining predictive maintenance, we deliver next-generation automation, streamlined workflows, and data-driven insights across robotics ecosystems.",
    button: "Deploy Now",
    buttonLink: "#",
  },
  {
    title: "Computer Vision & Video Analysis",
    description:
      "Computer Vision & Video Analytics: Neurologic AI delivers cutting-edge Computer Vision solutions for complex visual tasks that scale seamlessly from high-performance clusters to resource-constrained edge devices. We leverage state-of-the-art architectures like SAM2, Grounded SAM, YOLO, Vision Transformers (ViT), and CNNs for precise detection, segmentation, and classification. Our HPC-accelerated pipelines integrate multi-camera tracking (DeepSort), domain randomization, and synthetic data generation for robust performance. By employing ONNX-based conversions, quantization, and distillation, we achieve real-time inference on devices like NVIDIA Jetson. Through platforms such as NVIDIA Metropolis, DeepStream, and TensorRT, we deploy scalable microservices that drive actionable insights across surveillance, anomaly detection, and automated inspection.",
    button: "Deploy Now",
    buttonLink: "#",
  },
  {
    title: "Recommendation Engine",
    description:
      "Neurologic AI designs and deploys advanced recommendation systems that personalize user experiences. Through cutting-edge frameworks like NVIDIA Merlin, we combine collaborative filtering, deep retrieval, and transformer-based ranking to handle large-scale data with high efficiency. Our HPC-accelerated pipelines support microservices-based architectures for seamless integration and low-latency inference. From dynamic product recommendations to curated content suggestions, we empower businesses to maximize engagement and drive data-informed growth.",
    button: "Deploy Now",
    buttonLink: "#",
  },
  {
    title: "Forecasting and Predictive Modelling",
    description:
      "Neurologic AI delivers advanced forecasting solutions that combine classical methods (ARIMA, Prophet) with deep learning architectures (LSTM, N-BEATS, Transformer-based models) for accurate trend prediction and anomaly detection. We leverage distributed training on HPC clusters using PyTorch, Horovod, and Kubernetes to handle large-scale time-series data. Our pipelines incorporate hyperparameter optimization, feature engineering, and ensemble techniques for robust performance. Whether optimizing supply chain demand, mitigating financial risk, or predicting customer behavior, Neurologic AI’s data-driven, scalable modeling empowers organizations to make confident, forward-looking decisions and maintain a competitive edge.",
    button: "Learn More",
    buttonLink: "#",
  },
  {
    title: "Natural Language Processing",
    description:
      "Neurologic AI harnesses cutting-edge Transformer architectures T5, BERT, GPT-4 and specialized large language models to tackle complex NLP tasks like information extraction, text classification, summarization, question answering, and named entity recognition (NER). Our large-scale training pipelines utilize HPC cluster frameworks such as DeepSpeed, Horovod, and Accelerate, enabling distributed multi-GPU solutions with diverse datasets. We integrate techniques like LoRA, RAG, retrieval-augmented generation (RAG), knowledge distillation, and prompt engineering to optimize performance and scalability. From multilingual frameworks to dynamic domain adaptation, our multilingual capabilities ensure precise NLP solutions deliver real-time insights and automation across diverse industries. Through microservices-based architectures and continuous model evaluation, we ensure scalable, high-availability deployments that drive transformative outcomes.",
    button: "Deploy Now",
    buttonLink: "#",
  },
];

export default function ServicesSection() {
    const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const motionY:any = [];

  for (let i = 0; i < cards.length; i++) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    motionY.push(useTransform(scrollYProgress, [0, 1], [0, -i * 300]));
  }
  
  return (
    <section>
      <div className="max-w-[1537px] mx-auto relative h-[600vh]" ref={sectionRef}>
        <h1 className="text-gradient text-6xl mb-6">Services</h1>
        <ul className="sticky top-0 min-h-screen">
          {cards.map((item, index) => {
           
            return (
            <motion.li
              key={index}
              className={`px-12 py-14 border border-[#EAD2FF] rounded-2xl relative bg-black`}
              style={{ 
                y: motionY[index],
               }}
            >
              <h3 className="text-4xl font-medium">{item.title}</h3>
              <p className="my-12">{item.description}</p>
              <a
                href={item.buttonLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-4 items-center justify-center max-w-max 
                px-5 py-3  rounded-lg text-white
             bg-gradient-to-r from-[#5323EC] via-[#4B0082] to-[#170226] shadow-lg"
              >
                {item.button}
                <svg
                  width={14}
                  height={13}
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.58838 1.13625L12.5527 1.13623M12.5527 1.13623L12.5527 11.5775M12.5527 1.13623L1.58839 11.5774"
                    stroke="white"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </motion.li>
          )})}
        </ul>
      </div>
    </section>
  );
}
