"use client";
import React from "react";

export default function WhoWeAreHeader() {
  return (
    <div className="text-center mb-8">
      <h2 className="w-[627px] mx-auto font-poppins text-[64px] font-bold leading-normal tracking-[-1.28px] text-transparent bg-clip-text bg-gradient-to-r from-[#5025FF] via-[#5A138E] to-[#F5F5F5]">
        Who We Are
      </h2>
      <p className="text-[#FFF]  text-[16px] font-normal font-inter leading-[21px] mb-4">
        Know More About Us
      </p>
      {/* <button className="w-[166.652px] h-[44px] flex-shrink-0 rounded-[10px] bg-gradient-to-r from-[#5323EC] via-[#4B0082] to-[#170226] text-white font-[Poppins] text-[16px] font-medium transition hover:opacity-90">
        Talk to Us
        <Image
        src="/Vector 168.png"
        alt="Arrow Icon"
        width={12}
        height={12}
        className="stroke-white"
      />
      </button> */}

      <button className="w-[166.652px] h-[44px] flex items-center justify-center gap-2 flex-shrink-0 rounded-[10px] bg-gradient-to-r from-[#5323EC] via-[#4B0082] to-[#170226] text-white font-[Poppins] text-[16px] font-medium transition hover:opacity-90 ml-160">
        <span className="">Talk to Us</span>
        <img
          src="/Vector 168.png"
          alt="Arrow"
          className="w-[11.975px] h-[12px] stroke-[#FFF] stroke-[2px]"
        />
      </button>
    </div>
  );
}
