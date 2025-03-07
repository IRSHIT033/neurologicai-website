"use client";

import Lenis from "@studio-freight/lenis";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import ParallaxCards from "./ui/parallax-cards";

const services = [
  {
    title: "Generative AI",
    description:
      "Neurologic AI specializes in training and deploying multi-billion-parameter models, driving transformative breakthroughs in Generative AI. We leverage industry-leading platforms like GPT-3, GPT-4, LLaMA, LLava, Qwen, BLIP2, and domain-specific models like MedGPT and Med Image Insights to address complex challenges across industries. Our large-scale training pipelines orchestrate hundreds of top-tier GPUs (A100s, H100s) using Slurm, FSDP, and distributed optimization, ensuring unparalleled performance. We further excel in fine-tuning (RLHF, LoRA), inference acceleration (speculative decoding, KV caching), and scalable deployments with SageMaker Endpoints, VLLM, TensorRT, and LMDeploy. By integrating AI safety guardrails, multimodal capabilities, synthetic data generation, and Retrieval-Augmented Generation (RAG), we deliver cutting-edge AI solutions that seamlessly transform business processes, drive innovation, and create generate meaningful significant impact.",
  },
  {
    title: "Robotics & Digital Twins",
    description:
      "Neurologic AI fuses advanced robotics with immersive digital twin technologies, leveraging NVIDIA COSMOS, ROS2, Isaac SIM, Isaac ROS, and NVIDIA Omniverse for photorealistic simulation, real-time sensor fusion, and domain randomization. We harness NVIDIA Replicator for synthetic data generation, manipulate datasets in headless mode, and deploy Omniverse microservices for seamless scalability. By bridging the sim-to-real gap and enabling predictive maintenance, we drive next-generation automation, streamlined workflows, and data-driven insights across robotics ecosystems.",
  },
  {
    title: "Computer Vision & Video Analysis",
    description:
      "Computer Vision & Video Analytics: Neurologic AI delivers cutting-edge Computer Vision solutions for complex visual tasks that scale seamlessly from high-performance clusters to resource-constrained edge devices. We leverage state-of-the-art architectures like SAM2, Grounded SAM, YOLO, Vision Transformers (ViT), and CNNs for precise detection, segmentation, and classification. Our HPC-accelerated pipelines integrate multi-camera tracking (DeepSort), domain randomization, and synthetic data generation for robust performance. By employing ONNX-based conversions, quantization, and distillation, we achieve real-time inference on devices like NVIDIA Jetson. Through platforms such as NVIDIA Metropolis, DeepStream, and TensorRT, we deploy scalable microservices that drive actionable insights across surveillance, anomaly detection, and automated inspection.",
  },
  {
    title: "Recommendation Engine",
    description:
      "Neurologic AI designs and deploys advanced recommendation systems that personalize user experiences in real time. Leveraging frameworks like NVIDIA Merlin, we combine collaborative filtering, deep retrieval, and transformer-based ranking to handle large-scale data with high efficiency. Our HPC-accelerated pipelines support microservices-based architectures for seamless integration and low-latency inference. From dynamic product recommendations to curated content suggestions, we empower businesses to maximize engagement and drive data-informed growth.",
  },
  {
    title: "Forecasting and Predictive Modelling",
    description:
      "Neurologic AI delivers advanced forecasting solutions that combine classical methods (ARIMA, Prophet) with deep learning architectures (LSTM, N-BEATS, Transformer-based models) for accurate trend prediction and anomaly detection. We leverage distributed training on HPC clusters using PyTorch, Horovod, and Kubernetes to handle large-scale time-series data. Our pipelines incorporate hyperparameter optimization, feature engineering, and ensemble techniques for robust performance. Whether optimizing supply chain demand, mitigating financial risk, or predicting customer behavior, Neurologic AI’s data-driven, scalable modeling empowers organizations to make confident, forward-looking decisions and maintain a competitive edge.",
  },
  {
    title: "Natural Language Processing",
    description:
      "Neurologic AI harnesses cutting-edge Transformer architectures T5, BERT, GPT-4 and specialized large language models to tackle complex NLP tasks like information extraction, text classification, summarization, question answering, and named entity recognition (NER). Our large-scale training pipelines utilize HPC clusters with frameworks such as DeepSpeed, Horovod, and Accelerate, enabling distributed fine-tuning on massive datasets. We integrate techniques like LoRA, RLHF, retrieval-augmented generation (RAG), knowledge distillation and prompt engineering to optimize performance and adaptability. With advanced data preprocessing, domain adaptation, and multilingual capabilities, our enterprise-grade NLP solutions deliver real-time insights and automation across diverse industries. Through microservices-based architectures and continuous model evaluation, we ensure scalable, high-availability deployments that drive transformative outcomes.",
  },
];

export default function Services() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });

  return (
    <div className="relative h-screen  max-w-7xl mx-auto text-white p-10">
      <h1 className="text-3xl  font-bold mb-8 w-[10rem] space-x-0.5 bg-gradient-to-r from-blue from-0% via-primary via-60%  to-white bg-clip-text text-transparent ">
        Services
      </h1>
      <div className="relative space-y-10" ref={container}>
        {services.map((service, index) => {
          return (
            <ParallaxCards
              description={service.description}
              title={service.title}
              idx={index}
            />
          );
        })}
      </div>
    </div>
  );
}
