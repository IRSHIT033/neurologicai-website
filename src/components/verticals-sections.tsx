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
    <div className=" text-white min-h-[50vh] p-10 md:p-40 ">
      <div className="max-w-7xl  mx-auto">
        <h1 className="text-6xl tracking-wider  space-x-0.5 bg-gradient-to-r from-blue from-0% via-primary via-60%  to-white bg-clip-text text-transparent  mb-12">
          Verticals
        </h1>

        <div className="grid md:grid-cols-1 lg:grid-cols-4 gap-x-20 sm:gap-y-20 order-first md:order-last ">
          {/* Left side content */}
          <div className="lg:col-span-2 order-2 lg:order-1 p-2">
            <div className="text-white min-h-[30vh] ">
              {verticals[selectedVertical as keyof typeof verticals].content}
            </div>
            <div className="mt-8 flex h-[10vh] items-center gap-4 font-bold text-white py-2 rounded-md p-2">
              <Link
                href={
                  verticals[selectedVertical as keyof typeof verticals].href
                }
              >
                <div className="text-3xl mt-6">
                  Explore{" "}
                  {verticals[selectedVertical as keyof typeof verticals].title}
                </div>
              </Link>
              <button className="cursor-pointer bg-gradient-to-r from-blue from-0% to-primary  mt-6 px-2 py-1 text-lg  text-white  rounded-lg transition flex items-center gap-2">
                <ChevronRight className="h-8 w-8" />
              </button>
            </div>
          </div>

          {/* Right side navigation */}
          <div className="lg:col-span-2 order-1 lg:order-2">
            <div className="flex flex-col space-y-16 w-full justify-end items-end">
              {Object.entries(verticals).map(([key, vertical]) => (
                <button
                  key={key}
                  onClick={() => setSelectedVertical(key)}
                  className={cn(
                    "w-full lg:w-60 cursor-pointer p-4 py-6 relative text-xl text-center font-medium transition-all duration-300",
                    selectedVertical === key &&
                      "bg-gradient-to-tr from-blue via-blue via-50% to-primary"
                  )}
                >
                  <div className="absolute  flex justify-between px-4 font-bold p-2 top-0.5 right-0.5 w-full h-full bg-background ">
                    <Image
                      src="/arrow-left.svg"
                      alt={key}
                      width={50}
                      height={10}
                      className={cn(
                        "opacity-0",
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
