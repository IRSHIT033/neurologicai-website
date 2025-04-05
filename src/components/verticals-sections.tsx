"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function VerticalsSection() {
  // Define the content for each vertical
  const verticals = {
    healthcare: {
      title: "HealthCare",
      href: "/verticals/healthcare",
      content: (
        <>
          <p className="mb-4">
            Neurologic AI reimagines healthcare by pre-training{" "}
            <span className="font-bold">foundational generative AI models</span>
            , domain-specific{" "}
            <span className="font-bold">visual language models (VLMs)</span>,
            and{" "}
            <span className="font-bold">intelligent document processing</span>.
            For the first time in the world we enabled{" "}
            <span className="font-bold">
              prompt-based organ segmentation with LLM
            </span>{" "}
            in radiology, delivering precise, scalable solutions for patient
            diagnosis and treatment. Our advanced LLM-driven approach extracts
            critical findings from radiology reports, streamlining care pathways
            and fueling clinical insights. Meanwhile,{" "}
            <span className="font-bold">Automated claim approval systems</span>{" "}
            are revolutionizing next-generation health insurance workflows, with
            AI-driven prior authorization reducing administrative burdens and
            enhancing claim outcomes. By seamlessly integrating AI-powered
            diagnostics with advanced data intelligence, Neurologic AI is
            transforming healthcare—driving unparalleled accuracy, efficiency,
            and personalized patient care.
          </p>
        </>
      ),
    },
    manufacturing: {
      title: "Manufacturing",
      href: "/verticals/manufacturing",
      content: (
        <>
          <p className="mb-4">
            Neurologic AI accelerates manufacturing innovation by integrating
            AI-enabled robotics, synthetic data generation, and advanced digital
            twins. Our 3D simulations and domain-specific visual language models
            (VLMs) streamline product lifecycle management, from real-time
            performance insights to recycling and repair cost estimation. By
            weaving together knowledge graphs, agentic frameworks, and
            predictive analytics, we empower manufacturers to optimize
            processes, reduce downtime, and future-proof their operations in an
            increasingly competitive landscape.
          </p>
        </>
      ),
    },
    retail: {
      title: "Retail",
      href: "/verticals/retail",
      content: (
        <>
          <p className="mb-4">
            Neurologic AI redefines retail experiences by merging advanced
            analytics, computer vision, and conversational intelligence into a
            unified ecosystem. Our solutions range from frictionless vision
            checkout systems and real-time inventory management to multi-camera
            shopper tracking and voice-enabled recommendations. By integrating
            intelligent recommendation engines and actionable insights, we drive
            personalized customer journeys and optimized store operations,
            positioning retailers at the forefront of innovation.
          </p>
        </>
      ),
    },
  };

  // Set the default selected vertical
  const [selectedVertical, setSelectedVertical] = useState("healthcare");

  return (
    <div className=" text-white min-h-[50vh] px-6 lg:px-8 py-10 ">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl sm:text-4xl md:text-6xl tracking-wider poppinsTextSemiBold space-x-0.5 bg-gradient-to-r from-blue from-0% via-primary via-60%  to-white bg-clip-text text-transparent lg:mb-12">
          Verticals
        </h1>

        <div className="grid md:grid-cols-1 lg:grid-cols-4 gap-2 lg:gap-x-20 sm:gap-y-20 order-first md:order-last">
          {/* Left side content */}
          <div className="lg:col-span-2 order-2 lg:order-1 p-2">
            <div className="text-white poppinsTextLight text-sm lg:text-lg min-h-auto lg:min-h-[30vh] ">
              {verticals[selectedVertical as keyof typeof verticals].content}
            </div>
            <div className="mt-2 lg:mt-8 flex h-[5vh] lg:h-[10vh] items-center gap-4 font-bold text-white py-2 rounded-md p-2">
              <Link className="flex gap-4"
                href={
                  verticals[selectedVertical as keyof typeof verticals].href
                }
              >
                <div className="text-lg sm:text-xl md:text-3xl mt-1 lg:mt-6 lg:items-center poppinsTextRegular">
                  Explore{" "}
                  {verticals[selectedVertical as keyof typeof verticals].title}
                </div>
                <button className="cursor-pointer bg-gradient-to-r from-blue from-0% to-primary mt-1 lg:mt-6 px-2 py-1 text-lg  text-white  rounded-lg transition flex items-center gap-2">
                <ChevronRight className="h-6 w-6 md:h-8 md:w-8" />
              </button>
              </Link>
              
            </div>
          </div>

          {/* Right side navigation */}
          <div className="lg:col-span-2 order-1 lg:order-2 mt-3 lg:mt-0">
            <div className="flex flex-row gap-2 lg:flex-col space-y-1 lg:space-y-16 w-full justify-between lg:justify-end lg:items-end">
              {Object.entries(verticals).map(([key, vertical]) => (
                <button
                  key={key}
                  onClick={() => setSelectedVertical(key)}
                  className={cn(
                    "w-full lg:w-60 cursor-pointer lg:p-4 pt-0.5 lg:py-6 relative text-lg lg:text-xl text-center poppinsTextMedium transition-all duration-300",
                    selectedVertical === key &&
                      "bg-gradient-to-tr from-blue via-blue via-50% to-primary"
                  )}
                >
                  <div className="relative text-center lg:absolute flex gap-4 justify-between px-1 lg:px-4 poppinsTextMedium p-2 top-0.5 lg:right-0.5 w-full h-full bg-background ">
                    <Image
                      src="/arrow-left.svg"
                      alt={key}
                      width={50}
                      height={10}
                      className={cn(
                        "opacity-0 hidden lg:block",
                        selectedVertical === key && "opacity-100"
                      )}
                    />

                    {vertical.title}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
