"use client";
import React from "react";

export default function WhoWeAreHeader() {
  return (
    <div className="flex flex-col justify-center items-center my-8">
      <h2 className=" poppinsTextSemiBold text-2xl lg:text-6xl md:text-[64px] font-bold leading-normal tracking-[-1.28px] text-transparent bg-clip-text bg-gradient-to-r from-[#5025FF] via-[#5A138E] to-[#F5F5F5]">
        Who We Are
      </h2>
      <p className="text-[#FFF]  text-xs leading-3 lg:text-[16px] font-normal text-center font-inter lg:leading-[21px] ">
        Know More About Us
      </p>
      <button className="cursor-pointer relative z-10 text-xs lg:text-md bg-gradient-to-r from-blue from-0% via-primary to-primary-dark mt-6 px-4 lg:px-6 py-1.5 lg:py-2   text-white  rounded-lg transition flex items-center gap-2">
        Talk To Us
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
  );
}
