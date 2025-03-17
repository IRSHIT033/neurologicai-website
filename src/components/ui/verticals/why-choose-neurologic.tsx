"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const FlipCard = ({
  className,
  frontSrc,
  backSrc,
  alt,
}: {
  className: string;
  frontSrc: string;
  backSrc: string;
  alt: string;
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className={`relative ${className} perspective-1000 cursor-pointer`}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="absolute w-full h-full transition-transform preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.15, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front Side */}
        <div className="absolute w-full h-full backface-hidden">
          <Image
            src={frontSrc}
            alt={alt}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>

        {/* Back Side */}
        <div className="absolute w-full h-full rotate-y-180 backface-hidden">
          <Image
            src={backSrc}
            alt={`${alt} - Back`}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default function HealthcareSection() {
  return (
    <section className="py-16 px-24 w-full flex items-center justify-center">
      {/* Left Heading Section */}
      <div className="w-[321px] flex-shrink-0">
        <h2 className="text-white text-[30px] ml-10 font-inter font-bold leading-[60px] tracking-[-0.44px]">
          Why Neurologic for Healthcare:
        </h2>
      </div>

      {/* Right Content Grid */}
      <div className="grid grid-cols-[196px_619px] ml-30 grid-rows-[auto_auto] gap-x-2 gap-y-2 max-w-[850px] flex-grow">
        {/* Column 1 (Spanning Two Rows) */}
        <div className="row-span-2 grid grid-rows-[auto_auto_auto] gap-y-2">
          {/* Top Left Small Icon */}
          <div className="flex items-center justify-center">
            <Image
              src="/healthcare/icon-top.png"
              alt="Healthcare Icon"
              width={196}
              height={71}
              className="object-contain"
            />
          </div>

          {/* Custom AI Models for Healthcare */}
          <div>
            <FlipCard
              frontSrc="/healthcare/custom-ai-models.png"
              backSrc="/healthcare/custom-ai-models-back.png"
              alt="Custom AI Models"
              className="w-[196px] h-[297px]"
            />
          </div>

          {/* Fast Model Training & Real-Time AI */}
          <div>
            <FlipCard
              frontSrc="/healthcare/fast-model-training.png"
              backSrc="/healthcare/fast-model-training-back.png"
              alt="Fast Model Training"
              className="w-[196px] h-[217px]"
            />
          </div>
        </div>

        {/* Column 2 - First Row (AI Automation in One Column Spanning Two Rows, Other Two Images in Another Column) */}
        <div className="grid grid-cols-[417px_196px] grid-rows-[auto_auto] gap-x-2 gap-y-2">
          {/* AI Automation for Healthcare - Main Card (Spanning Two Rows) */}
          <div className="row-span-2">
            <FlipCard
              frontSrc="/healthcare/ai-automation.png"
              backSrc="/healthcare/ai-automation-back.png"
              alt="AI Automation"
              className="w-[417px] h-[297px]"
            />
          </div>

          {/* Small Right Icon (First Row, Second Column) */}
          <div className="flex items-center justify-start">
            <Image
              src="/healthcare/icon-bottom.png"
              alt="Healthcare Icon"
              width={196}
              height={62}
              className="object-contain"
            />
          </div>

          {/* Proven Impact (Second Row, Second Column) */}
          <div>
            <FlipCard
              frontSrc="/healthcare/proven-impact.png"
              backSrc="/healthcare/proven-impact-back.png"
              alt="Proven Impact"
              className="w-[196px] h-[227px]"
            />
          </div>
        </div>

        {/* Column 3 - Second Row (Accurate Diagnostics & Secure AI in the Same Row) */}
        <div className="grid grid-cols-[214px_402px] grid-rows-1 gap-x-2">
          {/* Accurate Diagnostics & Predictions (First Column) */}
          <div>
            <FlipCard
              frontSrc="/healthcare/accurate-diagnostics.png"
              backSrc="/healthcare/accurate-diagnostics-back.png"
              alt="Accurate Diagnostics"
              className="w-[214px] h-[301px]"
            />
          </div>

          {/* Secure & Scalable AI (Second Column) */}
          <div>
            <FlipCard
              frontSrc="/healthcare/secure-scalable-ai.png"
              backSrc="/healthcare/secure-scalable-ai-back.png"
              alt="Secure & Scalable AI"
              className="w-[402px] h-[301px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
