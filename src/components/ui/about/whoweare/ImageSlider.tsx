"use client";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const images = ["/whoweare1.png", "/whoweare2.png"];

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative flex flex-col items-center mb-8">
      <div className="relative border-[2px] border-[#7F36F5] rounded-[20px] w-[820px] h-[520px] flex items-center justify-center overflow-hidden bg-black">
        <div
          onClick={handlePrev}
          className="absolute left-12 bg-gradient-to-r from-[#7F36F5] to-[#5323EC] rounded-full p-2 cursor-pointer shadow-lg"
        >
          <ArrowLeft />
        </div>

        <div className="border-[1px] border-[#7F36F5] rounded-[20px] overflow-hidden w-[612px] h-[370px]">
          <Image
            src={images[currentIndex]}
            alt="Award Image"
            width={816}
            height={490}
            className="object-cover w-full h-full"
          />
        </div>

        <div
          onClick={handleNext}
          className="absolute right-8 bg-gradient-to-r from-[#7F36F5] to-[#5323EC] rounded-full p-2 cursor-pointer shadow-lg"
        >
          <ArrowRight />
        </div>
      </div>

      <div className="absolute bottom-4 flex justify-center items-center gap-2 w-full">
        <div className="w-[14px] h-[14px] rounded-full bg-[#8875D8]"></div>
        <div className="w-[65px] h-[14px] rounded-full bg-[#3721F9]"></div>
        <div className="w-[14px] h-[14px] rounded-full bg-[#8875D8]"></div>
      </div>
    </div>
  );
}
