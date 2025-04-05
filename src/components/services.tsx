/* eslint-disable */
"use client";
import React, { useEffect, useMemo, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import useDeviceType from "@/hooks/device-check";
const cards = [
  {
    title: "Generative AI",
    description:
      "Neurologic AI specializes in training and deploying multi-billion-parameter models, driving transformative breakthroughs in Generative AI. We leverage industry-leading platforms like GPT-3, GPT-4, LLaMA, Mixva, Qwen, BLIP-2, and domain-specific models like MedGPT and Med Image Insights to address complex challenges across industries. Our large-scale training pipelines orchestrate hundreds of top-tier GPUs (A100s, H100s) using Slurm, FSDP, and distributed optimization, ensuring unparalleled performance. We extract value in multi-turn (RLHF, LoRA), inference acceleration (speculative decoding, KV caching), and scalable deployments with SageMaker Endpoints, VLLM, TensorRT, and MLOpsDev. By integrating AI safety guardrails, multimodal fusion, synthetic data generation, and Retrieval-Augmented Generation (RAG), we deliver cutting-edge AI solutions that seamlessly transform business processes, drive innovation, and create generate meaningful significant impact.",
    button: "Deploy Now",
    buttonLink: "#",
    logo: "/landing-services/Generative-AI.png",
  },
  {
    title: "Robotics & Digital Twins",
    description:
      "Neurologic AI fuses advanced robotics with immersive digital twin technologies, leveraging NVIDIA COSMOS, ROS2, Isaac SIM, Isaac ROS, and NVIDIA Omniverse for photorealistic simulation, real-time sensor fusion, and domain randomization. We harness NVIDIA Replicator for synthetic data generation, manipulate datasets in headless mode, and deploy Omniverse microservices for seamless scalability. In today’s AI-driven world, combining predictive maintenance, we deliver next-generation automation, streamlined workflows, and data-driven insights across robotics ecosystems.",
    button: "Deploy Now",
    buttonLink: "#",
    logo: "/landing-services/Robotics-&-Digital-Twins.png",
  },
  {
    title: "Computer Vision & Video Analysis",
    description:
      "Computer Vision & Video Analytics: Neurologic AI delivers cutting-edge Computer Vision solutions for complex visual tasks that scale seamlessly from high-performance clusters to resource-constrained edge devices. We leverage state-of-the-art architectures like SAM2, Grounded SAM, YOLO, Vision Transformers (ViT), and CNNs for precise detection, segmentation, and classification. Our HPC-accelerated pipelines integrate multi-camera tracking (DeepSort), domain randomization, and synthetic data generation for robust performance. By employing ONNX-based conversions, quantization, and distillation, we achieve real-time inference on devices like NVIDIA Jetson. Through platforms such as NVIDIA Metropolis, DeepStream, and TensorRT, we deploy scalable microservices that drive actionable insights across surveillance, anomaly detection, and automated inspection.",
    button: "Deploy Now",
    buttonLink: "#",
    logo: "/landing-services/Computer-Vision-&-Video-Analysis.png",
  },
  {
    title: "Recommendation Engine",
    description:
      "Neurologic AI designs and deploys advanced recommendation systems that personalize user experiences. Through cutting-edge frameworks like NVIDIA Merlin, we combine collaborative filtering, deep retrieval, and transformer-based ranking to handle large-scale data with high efficiency. Our HPC-accelerated pipelines support microservices-based architectures for seamless integration and low-latency inference. From dynamic product recommendations to curated content suggestions, we empower businesses to maximize engagement and drive data-informed growth.",
    button: "Deploy Now",
    buttonLink: "#",
    logo: "/landing-services/Recommendation-engine.png",
  },
  {
    title: "Forecasting and Predictive Modelling",
    description:
      "Neurologic AI delivers advanced forecasting solutions that combine classical methods (ARIMA, Prophet) with deep learning architectures (LSTM, N-BEATS, Transformer-based models) for accurate trend prediction and anomaly detection. We leverage distributed training on HPC clusters using PyTorch, Horovod, and Kubernetes to handle large-scale time-series data. Our pipelines incorporate hyperparameter optimization, feature engineering, and ensemble techniques for robust performance. Whether optimizing supply chain demand, mitigating financial risk, or predicting customer behavior, Neurologic AI’s data-driven, scalable modeling empowers organizations to make confident, forward-looking decisions and maintain a competitive edge.",
    button: "Learn More",
    buttonLink: "#",
    logo: "/landing-services/Forecasting-and-Predictive-Modelling.png",
  },
  {
    title: "Natural Language Processing",
    description:
      "Neurologic AI harnesses cutting-edge Transformer architectures T5, BERT, GPT-4 and specialized large language models to tackle complex NLP tasks like information extraction, text classification, summarization, question answering, and named entity recognition (NER). Our large-scale training pipelines utilize HPC cluster frameworks such as DeepSpeed, Horovod, and Accelerate, enabling distributed multi-GPU solutions with diverse datasets. We integrate techniques like LoRA, RAG, retrieval-augmented generation (RAG), knowledge distillation, and prompt engineering to optimize performance and scalability. From multilingual frameworks to dynamic domain adaptation, our multilingual capabilities ensure precise NLP solutions deliver real-time insights and automation across diverse industries. Through microservices-based architectures and continuous model evaluation, we ensure scalable, high-availability deployments that drive transformative outcomes.",
    button: "Deploy Now",
    buttonLink: "#",
    logo: "/landing-services/Natural-Language-Processing.png",
  },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const ulRef = useRef<HTMLUListElement | null>(null); // <ul>
  const liRefs = useRef<(HTMLLIElement | null)[]>([]);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const device = useDeviceType();

  // const motionY: any = [];

  const motionY = cards.map((_, i) => {
    if (device === "sm") {
      return useTransform(scrollYProgress, [0, 1], [0, 0]);
    }
    const start = (i * 0.6) / cards.length; // Start earlier
    const end = (i + 0.7) / cards.length; // End sooner

    return useTransform(
      scrollYProgress,
      [start, end],
      [1, -i * (device === "sm" ? 300 : 400)] // Increased displacement for faster movement
    );
  });

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      if (device === "sm") return;
      if (!ulRef.current) return;

      const rect = ulRef.current.getBoundingClientRect();
      const inView = rect.top <= 0 && rect.bottom > 0;

      if (inView) {
        window.scrollBy(0, event.deltaY * 4); // Doubles scroll speed in Component 2
        event.preventDefault(); // Prevents default scrolling
      }
    };

    window.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return (
    <section className="lg:px-8 lg:py-10">
      <div
        className="max-w-screen lg:max-w-[1537px] mx-auto relative my-20 hidden lg:block"
        style={{
          height: device === "sm" ? "auto" : `${cards.length * 700}vh`,
        }}
        ref={sectionRef}
      >
          <h1 className="w-fit text-gradient text-4xl md:text-6xl  bg-gradient-to-r from-blue from-40% to-primary via-60%   bg-clip-text text-transparent mb-10">
            Services
          </h1>
          <ul className="sticky top-0" ref={ulRef}>
            {cards.map((item, index) => {
              return (
                <motion.li
                  key={index}
                  className={`px-6 md:px-12 py-14 w-full  lg:h-[500px] border border-[#EAD2FF] rounded-2xl relative  bg-background`}
                  style={{ y: motionY[index], zIndex: index }}
                  ref={(el) => {
                    liRefs.current[index] = el;
                  }}
                >
                  <div className="w-full h-full flex flex-col md:flex-row justify-between items-center">
                    <div className="w-full md:w-2/4 h-full flex flex-col justify-between">
                      <h3 className="text-4xl font-medium self-start">
                        {item.title}
                      </h3>
                      <p className=" my-12 text-sm md:text-lg whitespace-break-spaces">
                        {item.description}
                      </p>
                    </div>
                    <div className=" lg:w-2/4 flex justify-center items-center">
                      <Image
                        src={item.logo}
                        alt={item.title}
                        height={400}
                        width={400}
                      />
                    </div>
                  </div>
                </motion.li>
              );
            })}
          </ul>
        
      </div>

      <div className="block lg:hidden mt-6 mb-6">
          <div className="px-6">
            <h1 className="w-fit  poppinsTextSemiBold text-gradient text-2xl sm:text-4xl md:text-6xl  bg-gradient-to-r from-blue from-40% to-primary via-60%   bg-clip-text text-transparent mb-10">
                Services
              </h1>
          </div>

          <div className="" style={{
    backgroundImage: `radial-gradient(circle at center, #022730, #0f0224,#0a0a0a)`,
  }}>
              <div className="px-6 space-y-8 w-full max-w-3xl">
            {cards.map((service, index) => (
              <div
                key={index}
                className="relative bg-transparent
                p-6 rounded-xl border-2  border-[rgba(34,34,47,0.61)]  shadow-lg hover:bg-opacity-20 transition duration-300"
              >
                <h3 className="text-white bg-black text-md poppinsTextMedium mb-5 p-2 border-2 rounded-xl shadow-lg  border-[rgba(47,47,68,0.61)] ">{service.title}</h3>
                <p className="text-white text-xs bg-transparent">{service.description}</p>
              </div>
            ))}
            </div>
          </div>
        </div>
    </section>
  );
}
