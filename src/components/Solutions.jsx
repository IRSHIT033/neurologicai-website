"use client";
import Image from "next/image";

const solutions = [
  { text: "Foundational Generative AI Model Building For Healthcare", icon: "/icons/healthcare.png", width: "w-[370px]", height: "h-[380px]" },
  { text: "AI-Powered Grounded Report Generation For Medical Imaging", icon: "/icons/medical-report.png", width: "w-[370px]", height: "h-[380px]" },
  { text: "Prompt-Based Image Segmentation Using VLM", icon: "/icons/image-segmentation.png", width: "w-[370px]", height: "h-[380px]" },
  { text: "Efficient Vision-Language Models For Edge Computing", icon: "/icons/vision-models.png", width: "w-[370px]", height: "h-[380px]" },
  { text: "Evaluation Pipeline For LLM-Generated Radiology Reports", icon: "/icons/evaluation.png", width: "w-[370px]", height: "h-[380px]" },
  { text: "AI-Powered Nuclear Morphological Analysis For Ovarian Cancer Diagnosis", icon: "/icons/nuclear-analysis.png", width: "w-[370px]", height: "h-[380px]" },
  { text: "Multi-Stage Agentic Framework Powered By VLM And Knowledge Graphs For Product’s Damage Assessment And Recycling", icon: "/icons/agentic-framework.png", width: "w-[370px]", height: "h-[450px]" },
  { text: "SLM-Powered Findings Extraction From Medical Reports Using PHI4", icon: "/icons/slm-findings.png", width: "w-[370px]", height: "h-[450px]" },
  { text: "Customer Service Using Agentic AI", icon: "/icons/customer-service.png", width: "w-[370px]", height: "h-[450px]" },
];


export default function SolutionGrid() {
  return  (
    <section className=" relative py-16 px-8 bg-black text-white flex flex-col items-center">

      <div className="absolute left-0 top-[500px] w-[825px] h-[1276px] aspect-[550/973] z-0">
      <Image 
        src="/bg-1.png" 
        alt="Decorative Background" 
        fill
        className="object-cover"
      />

      </div>
      
      {/* AI Themed Image Above Solutions */}
      <Image
        src="/ai-header.png" // Make sure this image is placed in the public folder
        alt="AI Themed Header"
        width={1250}
        height={600}
        className="rounded-[24px] mb-18"
      />
      {/* Centered Heading */}
      <div className="flex justify-center">
        <h2 className="text-[75px] mb-10 font-extrabold leading-[65px] tracking-[-1.5px] text-center text-transparent bg-clip-text bg-gradient-to-b from-white via-[#D1D1D1] to-[#373636]">
          SOLUTIONS
        </h2>
      </div>

      {/* Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-32 gap-y-8 max-w-6xl mx-auto justify-items-center">
        {solutions.map((solution, index) => (
          <div
            key={index}
            className={`${solution.width || "w-[400px]"} ${solution.height || "h-[380px]"} rounded-[14px] bg-gradient-to-r from-[rgba(3,40,238,0.82)] via-[rgba(62,48,221,0.55)] to-[rgba(121,57,204,0.61)] p-6 flex flex-col items-center justify-center text-center shadow-lg relative`}

          >
            {/* Icon Positioned at Top-Left */}
            <Image
              src={solution.icon}
              alt="Solution Icon"
              width={50}
              height={50}
              className="absolute top-4 left-4"
            />

            {/* Solution Text */}
            <p className="w-[306px] h-[166px] flex flex-col justify-center text-center text-white text-[32px] font-medium leading-[45px] tracking-[-0.645px] capitalize font-[Poppins]">
              {solution.text}
            </p>

          </div>
        ))}
      </div>
    </section>
  );
}
