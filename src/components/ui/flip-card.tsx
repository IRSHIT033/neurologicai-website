"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const FlipCard = ({
  number,
  title,
  description,
}: {
  number: number;
  title: string;
  description: string;
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleMouseEnter = () => {
    if (window.innerWidth >= 1024) {
      setIsFlipped(true);
    }
  };
  
  const handleMouseLeave = () => {
    if (window.innerWidth >= 1024) {
      setIsFlipped(false);
    }
  };

  return (
    <div
    // w-[150px] h-[135px]  
      className="relative w-[125px] h-[160px] lg:w-[251px] lg:h-[328px] perspective-1000 cursor-pointer "
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="absolute w-full h-full transition-transform duration-75 preserve-3d border-1 rounded-xl md:rounded-2xl"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front Side */}
        <div className="absolute  w-full h-full bg-gradient-to-b from-black via-purple-dark via-50% to-purple-lighter text-white rounded-xl md:rounded-2xl flex flex-col items-start justify-evenly shadow-lg backface-hidden">
          <div className="flex-1 m-1 p-1 lg:p-2">
            <div className="text-[10px] md:text-lg lg:text-3xl text-primary-dark w-4 h-4 md:w-6 md:h-6  lg:w-15 lg:h-15 flex items-center justify-center  font-bold bg-purple-lightest rounded-full">
              {number}
            </div>
          </div>
          <p className="pb-1 px-1 lg:p-2 flex-1 text-[11px] md:text-[13px] lg:text-2xl text-left poppinsTextMedium mx-1">
            {title}
          </p>
        </div>

        {/* Back Side */}
        <div className="absolute w-full h-full bg-gradient-to-b from-black via-purple-dark via-50% to-purple-lighter text-white rounded-2xl flex flex-col items-start justify-evenly shadow-lg rotate-y-180 backface-hidden p-1">
          <div className="flex-1 m-1 lg:p-2">
            <div className="text-[10px] lg:text-3xl text-primary-dark w-4 h-4 lg:w-15 lg:h-15 flex items-center justify-center  font-bold bg-purple-lightest rounded-full">
              {number}
            </div>
          </div>
          <div className="lg:flex-3 flex flex-col items-start justify-around">
            <p className="text-[11px] lg:text-2xl lg:flex-1 text-left poppinsTextMedium px-[3px] lg:px-4">{title}</p>
            <p className="text-[8px] lg:text-xs lg:flex-1 text-left px-[3px] lg:px-4 leading-1.2">{description}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default FlipCard;
