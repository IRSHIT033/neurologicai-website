"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const cards = [
  {
    title: "Generative AI",
    description:
      "Neurologic AI specializes in training and deploying multi-billion-parameter models, driving transformative breakthroughs in Generative AI. We leverage industry-leading platforms...",
    button: "Deploy Now",
    buttonLink: "#",
  },
  {
    title: "Robotics & Digital Twins",
    description:
      "Neurologic AI fuses advanced robotics with immersive digital twin technologies, leveraging NVIDIA COSMOS, ROS2, Isaac SIM...",
    button: "Deploy Now",
    buttonLink: "#",
  },
  {
    title: "Computer Vision & Video Analysis",
    description:
      "Computer Vision & Video Analytics: Neurologic AI delivers cutting-edge Computer Vision solutions for complex visual tasks...",
    button: "Deploy Now",
    buttonLink: "#",
  },
  {
    title: "Recommendation Engine",
    description:
      "Neurologic AI designs and deploys advanced recommendation systems that personalize user experiences...",
    button: "Deploy Now",
    buttonLink: "#",
  },
  {
    title: "Forecasting and Predictive Modelling",
    description:
      "Neurologic AI delivers advanced forecasting solutions that combine classical methods (ARIMA, Prophet) with deep learning architectures...",
    button: "Learn More",
    buttonLink: "#",
  },
  {
    title: "Natural Language Processing",
    description:
      "Neurologic AI harnesses cutting-edge Transformer architectures T5, BERT, GPT-4 and specialized large language models...",
    button: "Deploy Now",
    buttonLink: "#",
  },
];

export default function ServicesSection() {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  return (
    <section className="relative">
      <div className="max-w-[1537px] sticky top-0 mx-auto ">
        <h1 className="text-gradient text-6xl mb-6">Services</h1>
        <ul className=" min-h-screen">
          {cards.map((item, index) => {
            const y = useTransform(scrollYProgress, [0, 1], [index * 40, 0]);
            const zIndex = useTransform(scrollYProgress, [0, 1], [index, 0]);
            return (
              <motion.li
                key={index}
                ref={cardRef}
                style={{ y, zIndex }}
                className={`px-12 py-14 border border-[#EAD2FF] rounded-2xl relative bg-black`}
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
            );
          })}
        </ul>
      </div>
    </section>
  );
}
