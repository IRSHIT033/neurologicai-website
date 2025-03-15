"use client";
import Link from "next/link";
import Image from "next/image";

export default function GenerativeAISection() {
  return (
    <section className="flex flex-col items-center text-center w-full bg-black">
      {/* 🔹 Gradient Background Only for Header Section */}
      <div className="relative w-full max-w-[1300px] h-[580px] flex flex-col items-center justify-center text-white px-8 py-16 mx-auto overflow-hidden">
        
        {/* Background Image (Applies Only for This Section) */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/image-1.png"
            alt="Background Gradient"
            width={1300}
            height={540}
            priority
            className="object-cover"
          />
        </div>

        {/* Section Heading (Fixed in Place) */}
        <h2 className="flex flex-col justify-center flex-shrink-0 text-center 
               text-[75px] font-extrabold leading-[65px] tracking-[-1.5px] capitalize 
               font-poppins bg-gradient-to-b from-[#FFF] via-[#D1D1D1] to-[#373636] 
               bg-clip-text text-transparent w-[1300px] h-[125px]">
          Generative AI As A Services
        </h2>

        {/* 🔹 Subtitle & Buttons Wrapper (Moves Together) */}
        <div className="relative mt-14 flex flex-col items-center z-10">
          
          {/* Subtitle / Highlighted Text */}
          <p className="w-[1250px] h-[182px] flex-shrink-0 text-white text-left 
                font-poppins text-[24px] font-semibold leading-[36px]">
            "Neurologic AI pioneers next-gen Generative AI with multi-billion-parameter models, 
            harnessing cutting-edge tech for transformative industry solutions. From large-scale 
            training to accelerated inference and AI safety, we redefine what's possible in AI innovation."
          </p>

          {/* Buttons */}
          <div className="flex mt-12 gap-6 z-10">
            
            {/* Talk to Us Button */}
            <Link href="/contact">
              <button className="w-[350px] h-[108px] flex items-center justify-center rounded-[600px] 
                                bg-white shadow-lg transition hover:opacity-80">
                <span className="w-[268px] h-[50px] flex items-center justify-center 
                                font-['Poppins'] text-[38px] font-semibold leading-[76.5px] 
                                bg-gradient-to-r from-[#5442D1] to-[#EFAEF9] 
                                bg-clip-text text-transparent">
                  Talk to Us
                </span>
              </button>
            </Link>

            {/* Learn More Button */}
            <Link href="/learn-more">
              <button className="w-[350px] h-[108px] flex items-center justify-center rounded-[600px] 
                                bg-[#4F40CF] shadow-lg transition hover:opacity-80">
                <span className="w-[300px] h-[50px] flex items-center justify-center text-white 
                                font-['Poppins'] text-[38px] font-semibold leading-[76.5px]">
                  Learn More
                </span>
              </button>
            </Link>

          </div>
        </div>
      </div>

      {/* 🔹 Extended Description (Separate Black Background) */}
      <div className="w-full px-8 py-12 bg-black text-white flex justify-center">
        <div className="max-w-[1250px] w-full text-[24px] leading-[36px] text-white font-poppins font-normal text-left">
          <p>
            Neurologic AI specializes in training and deploying multi-billion-parameter models, enabling transformative breakthroughs in Generative AI.
            We utilize industry-leading architectures, including GPT-3, GPT-4, LLaMA, LLaVA, Qwen, BLIP2, as well as domain-specific models such as MedGPT and Med Image Insights,
            to address complex challenges across diverse industries. Our large-scale training pipelines harness the power of top-tier GPUs (A100s, H100s) and cutting-edge technologies like
            Slurm, FSDP, and distributed optimization, ensuring unparalleled performance.
          </p>

          <p className="mt-4">
            In addition, we excel in fine-tuning techniques (RLHF, LoRA), inference acceleration (speculative decoding, KV caching), and scalable deployments through solutions like
            SageMaker Endpoints, VLLM, TensorRT, and LMDeploy. By incorporating AI safety guardrails, multimodal capabilities, synthetic data generation, and Retrieval-Augmented Generation (RAG),
            we deliver state-of-the-art AI solutions that seamlessly enhance business processes, foster innovation, and drive meaningful impact.
          </p>
        </div>
      </div>
    </section>
  );
}
