"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Loader2 } from "lucide-react"; // Shadcn/ui's loading spinner
import { cn } from "@/lib/utils";

export default function ExperiencesSection({
  experiences,
}: {
  experiences: {
    text: string;
    desc: string;
    href: string;
  }[];
}) {
  const [selectedExperience, setSelectedExperience] = useState<{
    text: string;
    desc: string;
    href: string;
  } | null>(null);
  const [loading, setLoading] = useState(false);

  const handleIframeLoad = () => {
    setLoading(false);
  };

  const openModal = (experience: {
    text: string;
    desc: string;
    href: string;
  }) => {
    setSelectedExperience(experience);
    setLoading(true); // Set loading when opening modal
  };

  return (
    <section className="mb-30 flex flex-col items-center text-center relative w-full">
      {/* Gradient Background Effect */}
      <div className="absolute inset-0 flex items-center justify-center -z-10">
        <div className="w-[800px] h-[400px] bg-gradient-to-r from-[#7F36F5] to-[#4B0082] opacity-30 rounded-full blur-3xl"></div>
      </div>

      {/* Section Heading */}
      <h2
        className="w-full  md:w-[986px] h-[319px] flex flex-col justify-center flex-shrink-0 text-center 
               text-3xl md:text-[80px] font-extrabold md:leading-[112px] tracking-[-1.5px] capitalize 
               bg-gradient-to-b from-[#FFF] via-[#D1D1D1] to-[#373636] 
               bg-clip-text text-transparent"
      >
        Deep Dive Into Our Experiences
      </h2>

      {/* Experience Cards Grid */}
      <div className="grid lg:grid-cols-2  grid-cols-1 gap-6 mt-8 max-w-[1300px] ">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className="relative max-w-[600px] h-auto lg:h-44 flex-shrink-0 bg-[#14161A] rounded-[12px] flex flex-col cursor-pointer 
              border-[3px] border-t-[#14161A] border-b-[#7F36F5] border-l-[#7F36F5] border-r-[#7F36F5] overflow-hidden transition "
          >
            {/* Experience Text */}
            <p className="text-white text-left p-4 text-xl font-semibold leading-[45px] tracking-[-0.19px] capitalize mb-14 sm:mb-0">
              {experience.text}
            </p>

            {/* View More Button */}
            <Dialog>
              <DialogTrigger asChild>
                <button
                  onClick={() => openModal(experience)}
                  className="cursor-pointer absolute bottom-4 right-4 flex items-center gap-2 "
                >
                  <ArrowRight />
                  <span className="text-white text-lg text-[20px] font-semibold leading-[30px] ">
                    View More
                  </span>
                </button>
              </DialogTrigger>
              <DialogContent className="w-[80vw] h-[80vh] max-w-5xl p-6 flex flex-col items-center">
                {selectedExperience && (
                  <div className="w-full h-full flex flex-col items-center">
                    {/* Loader (Spinner) */}
                    {loading && (
                      <div className="flex justify-center items-center h-full">
                        <Loader2 className="animate-spin h-40 w-40 text-primary" />
                      </div>
                    )}

                    {/* iFrame (Hidden Until Loaded) */}
                    <iframe
                      src={selectedExperience.href.replace("/view", "/preview")}
                      className={cn(
                        "w-full h-full aspect-[16/9] rounded-md",
                        loading ? "hidden" : "block"
                      )}
                      allow="autoplay"
                      onLoad={handleIframeLoad} // Hide loader when loaded
                    />
                  </div>
                )}
              </DialogContent>
            </Dialog>
          </div>
        ))}
      </div>
    </section>
  );
}
