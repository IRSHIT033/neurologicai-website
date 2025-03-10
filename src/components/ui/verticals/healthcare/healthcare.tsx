"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function HealthcareAICarousel() {
  const [activeIndex, setActiveIndex] = useState(3);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const features = [
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

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % features.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + features.length) % features.length
    );
  };

  const goToSlide = (index: number) => {
    setActiveIndex(index);
    setIsAutoPlaying(false);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  return (
    <div className="relative flex flex-col  items-center justify-center px-4 py-12">
      <div className="relative w-full  overflow-hidden">
        <div className="relative flex h-[60vh] items-center justify-center ">
          {features.map((feature, index) => {
            // Calculate position relative to active index
            const position =
              (index - activeIndex + features.length) % features.length;
            // Normalize position to be between -3 and 3
            const normalizedPosition =
              position > 3 ? position - features.length : position;

            return (
              <div
                key={index}
                className={cn(
                  "absolute flex h-[450px] w-[350px] transform flex-col items-center justify-center space-y-12 rounded-2xl  border-2 border-[#8875D8] bg-gradient-to-b  backdrop-blur-3xl  p-6 text-center text-white shadow-lg transition-all duration-500 ease-in-out",
                  "before:absolute before:inset-0 before:-z-10 before:rounded-2xl before:bg-purple-600/20 before:blur-xl before:content-[''] ",
                  {
                    "z-30 scale-110": normalizedPosition === 0,
                    "z-20 -translate-x-[250px] scale-90 ":
                      normalizedPosition === -1,
                    "z-20 translate-x-[250px] scale-90 ":
                      normalizedPosition === 1,
                    "z-10 -translate-x-[450px] scale-80 ":
                      normalizedPosition === -2,
                    "z-10 translate-x-[450px] scale-80 ":
                      normalizedPosition === 2,
                    "z-0 -translate-x-[650px] scale-70 ":
                      normalizedPosition === -3,
                    "z-0 translate-x-[650px] scale-70 ":
                      normalizedPosition === 3,
                    "opacity-0": Math.abs(normalizedPosition) > 3,
                  }
                )}
              >
                <div className="mb-4 flex h-30 w-30 items-center justify-center  ">
                  <Image
                    src="/file-vertical.svg"
                    width={60}
                    height={60}
                    alt={`vertical-${index}`}
                  />
                </div>
                <h3 className="mb-3 text-2xl font-extrabold">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-300">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 z-40 -translate-y-1/2 rounded-full bg-purple-600/20 p-3 text-white backdrop-blur-sm hover:bg-purple-600/40"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 z-40 -translate-y-1/2 rounded-full bg-purple-600/20 p-3 text-white backdrop-blur-sm hover:bg-purple-600/40"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        <div className="mt-8 flex items-center justify-center gap-2">
          {features.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                "h-2 w-2 rounded-full transition-all",
                index === activeIndex
                  ? "w-8 bg-purple-lighter"
                  : "bg-purple-600/40 hover:bg-purple-600/60"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
