"use client";
import { useEffect, useState } from "react";
import HoverDots from "./ui/dots-hover";
import Link from "next/link";

const HeroSection = () => {

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const getStyle = () => {
    if (width >= 1024) {
      return { height: '100vh' };
    } else if (width >= 768) {
      return { height: '55vh' };
    } else if (width >= 425) {
      return { height: '37vh' };
    }
    else if (width >= 375) {
      return { height: '35vh' };
    } else {
      return { height: '27vh' };
    }
  };

  return (
    <div 
      className="bg-cover bg-center bg-no-repeat bg-[url('/Default.svg')] lg:bg-[url('/mesh.svg')]"

      style={{
        // backgroundImage: "url('/mesh.svg')",
        // backgroundPosition: "center top -120px",
        backgroundSize: "cover",  // Ensures the image covers the full area
        backgroundPosition: "center top",  // Positions image properly
        backgroundRepeat: "no-repeat",
        ...getStyle(),  
      }}
    >
      {/* Content */}
      <div className="relative flex flex-col items-center justify-center h-22 sm:h-24 text-white z-10 ">
        <div className="text-center mt-24 md:mt-48 px-4 pt-4 pb-1 rounded-lg">
          <h1 className="text-bs sm:text-2xl  md:text-5xl lg:text-7xl poppinsTextSemiBold bg-gradient-to-r from-blue from-0% via-primary via-60%
           to-white bg-clip-text text-transparent leading-[16px] md:leading-20">
            Transforming Business <br /> <span className="poppinsTextMedium text-sm sm:text-2xl md:text-5xl lg:text-6xl">with Intelligence.</span>
          </h1>
        </div>
        <Link href="/contact">
          <button className="cursor-pointer relative z-10 text-[9px] sm:text-xs md:text-sm lg:text-md bg-gradient-to-r from-blue from-0% via-primary to-primary-dark  md:mt-6 px-[8px] py-[2px] sm:px-3 sm:py-1 md:px-6 md:py-2 text-white 
          rounded-sm lg:rounded-lg transition flex items-center gap-2">
            Talk To Us
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[12px] lg:w-auto h-auto"
            >
              <path
                d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </Link>
      </div>
      <HoverDots />
    </div>
  );
};

export default HeroSection;
