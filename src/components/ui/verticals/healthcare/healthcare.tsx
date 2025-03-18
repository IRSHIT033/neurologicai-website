"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function HealthcareAICarousel({
  features,
}: {
  features: { title: string; description: string }[];
}) {
  const [activeIndex, setActiveIndex] = useState(3);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

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
    <div className="w-screen relative flex flex-col items-center justify-center px-4 py-12 mt-5">
      <div className="relative w-[95%] overflow-hidden">
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
                  "absolute flex h-[400px] md:h-[450px] w-[90%] md:w-[350px] transform flex-col items-center justify-center space-y-12 rounded-2xl  border-2 border-[#8875D8]  backdrop-blur-xl p-4 md:p-6 text-center text-white shadow-lg transition-all duration-500 ease-in-out",
                  "before:absolute before:inset-0 before:-z-10 before:rounded-2xl  before:bg-gradient-to-b before:from-[#602EEF1A] before:via-[#FFFFFF05] before:to-[#A400FF0F]   before:overflow-hidden before:content-[''] ",
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
                <div className="mb-4 flex h-25 w-25 md:h-30 md:w-30 items-center justify-center  ">
                  <Image
                    src="/file-vertical.svg"
                    width={60}
                    height={60}
                    alt={`vertical-${index}`}
                  />
                </div>
                <h3 className="mb-3 w-[70%] md:w-full text-lg font-semibold md:text-2xl md:font-extrabold ">
                  {feature.title}
                </h3>
                <p className=" text-xs md:text-sm text-gray-300">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <button
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
          onClick={prevSlide}
          className="absolute left-4 top-1/2 z-40 -translate-y-1/2 rounded-full  p-3 text-white backdrop-blur-sm hover:bg-primary-light bg-[radial-gradient(58.97%_79.17%_at_27.37%_18.36%,_#397FF7_0%,_#602EEF_100%)]"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-2 w-2 md:h-6 md:w-6 cursor-pointer" />
        </button>

        <button
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
          onClick={nextSlide}
          className="absolute right-4 top-1/2 z-40 -translate-y-1/2 rounded-full  p-3 text-white backdrop-blur-sm hover:bg-primary-light bg-[radial-gradient(58.97%_79.17%_at_27.37%_18.36%,_#397FF7_0%,_#602EEF_100%)]"
          aria-label="Next slide"
        >
          <ChevronRight className="h-2 w-2 md:h-6 md:w-6 cursor-pointer" />
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
