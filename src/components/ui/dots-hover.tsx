import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight } from "lucide-react";

import React from "react";

const HoverDots = () => {
  const dots = [
    {
      id: 1,
      text: "We are a strong team of dedicated individuals, constantly pushing ourselves beyond our limits, from simply being an AI transformation organization to becoming a leader in enabling global AI transformation.",
      position: "top-6/20 left-1/6",
    },
    {
      id: 2,
      text: "To create a one-stop solution for high-performance AI and ML deliverables in a world of rapid digital transformation",
      position: "top-1/2 left-8/14",
    },
    {
      id: 3,
      text: "To understand how your business works, resolve bottlenecks, and accelerate business deliveries",
      position: "top-1/14 left-18/22",
    },
  ];

  return (
    <div className="relative w-screen h-screen">
      {dots.map((dot) => (
        <div
          key={dot.id}
          className={cn("absolute", dot.position, "group cursor-pointer")}
        >
          <div className="w-4 h-4 bg-blue rounded-full cursor-pointer group-hover:bg-white transition-all"></div>
          <div className="absolute flex justify-items-start items-start w-[20rem] -top-1 left-40  text-left transform -translate-x-1/2 opacity-0 group-hover:opacity-100  text-white text-xs  px-3 py-1  transition-opacity">
            <div className="ml-1 mb-1">
              {" "}
              <ArrowRight size={15} />
            </div>

            <div>{dot.text}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HoverDots;
