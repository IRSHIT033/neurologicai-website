"use client";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const images = ["/whoweare1.png", "/whoweare2.png"];

export default function ImageSlider() {
  const [activeIndex, setActiveIndex] = useState(2);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const handlePrev = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToSlide = (index: number) => {
    setActiveIndex(index);
    setIsAutoPlaying(false);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      handleNext();
    }, 2000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  return (
    <div className="relative flex flex-col items-center mb-8">
      <div className="relative border-[2px] border-[#7F36F5] rounded-[20px] w-[820px] h-[520px] flex items-center justify-center overflow-hidden ">
        <button
          onClick={handlePrev}
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
          className="absolute left-12 bg-gradient-to-r from-[#7F36F5] to-[#5323EC] rounded-full p-2 cursor-pointer shadow-lg"
        >
          <ArrowLeft />
        </button>

        <div className="border-[1px] border-[#7F36F5] rounded-[20px] overflow-hidden w-[612px] h-[370px]">
          {images[activeIndex] && (
            <Image
              src={images[activeIndex]}
              alt="Award Image"
              priority
              width={816}
              height={490}
              className="object-cover w-full h-full"
            />
          )}
        </div>

        <button
          onClick={handleNext}
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
          className="absolute right-8 bg-gradient-to-r from-[#7F36F5] to-[#5323EC] rounded-full p-2 cursor-pointer shadow-lg"
        >
          <ArrowRight />
        </button>
      </div>

      <div className="absolute bottom-4 flex justify-center items-center gap-2 w-full">
        {images.map((_, index) => (
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
  );
}
