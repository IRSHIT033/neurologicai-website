"use client";

import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const timelineData = [
  {
    year: "2021",
    details: [
      "Idea of Neurologic, as a new age AI/ML based startup, was formed",
    ],
  },
  {
    year: "2022",
    details: ["Started Neurologic", "First client, RoutineAI, acquired"],
  },
  {
    year: "2023",
    details: [
      "Jon Gilotte joined as co-founder",
      "Revenue growth of 150% since 2022",
    ],
  },
  {
    year: "2024",
    details: [
      "Revenue growth of 367% from yr2",
      "Excellence in Healthcare Award at Health 2.0 Conference, Dubai",
      "Neurologic receives Times Business Award",
    ],
  },
];

const Timeline = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" }); // Starts animation when the section is slightly in view

  return (
    <div
      ref={ref}
      className=" flex flex-col lg:flex-row items-center justify-evenly mx-auto h-[50vh] gap-10"
    >
      <h1 className="text-gradient text-5xl font-bold bg-gradient-to-r from-blue from-40% to-primary  bg-clip-text text-transparent">
        Timeline
      </h1>
      <div className="w-3xl relative flex">
        <div className="scale-50 md:scale-70 lg:scale-100 relative w-full flex justify-center items-center text-white">
          {/* Animated Timeline Line */}
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: "100%" } : { width: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="bg-[#3D5AF1] h-[2px] absolute top-[50%] left-0 w-full"
          />

          {/* Timeline Items */}
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 1, delay: index * 0.6 }}
              className={`w-[180px] h-[300px] flex flex-col ${
                index % 2 === 0 ? "justify-start" : "flex-col-reverse"
              } items-center absolute top-[50%] ${
                index % 2 === 0
                  ? "translate-y-[-38px]"
                  : "translate-y-[calc(-100%+42px)]"
              }`}
              style={{ left: `${index * 180}px` }} // ✅ Fix: Dynamically set `left` inline
            >
              <h3 className="text-lg font-semibold">{item.year}</h3>
              <div>{circle}</div>
              <div className={cn("py-2", index % 2 === 0 ? "rotate-180" : "")}>
                {svgDown}
              </div>
              <div className="text-center mt-2">
                <ul className="list-disc text-sm text-gray-300">
                  {item.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const svgDown = (
  <svg
    width="7"
    height="52"
    viewBox="0 0 7 52"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.5 46.3333C2.02724 46.3333 0.833331 47.5272 0.833331 49C0.833331 50.4728 2.02724 51.6667 3.5 51.6667C4.97276 51.6667 6.16666 50.4728 6.16666 49C6.16666 47.5272 4.97276 46.3333 3.5 46.3333ZM3 -2.18557e-08L3 49L4 49L4 2.18557e-08L3 -2.18557e-08Z"
      fill="#DCDCDC"
    />
  </svg>
);

const circle = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM2.4 12C2.4 17.3019 6.69807 21.6 12 21.6C17.3019 21.6 21.6 17.3019 21.6 12C21.6 6.69807 17.3019 2.4 12 2.4C6.69807 2.4 2.4 6.69807 2.4 12Z"
      fill="#AA48FE"
    />
    <circle cx="12" cy="12" r="7" fill="#5323EC" />
  </svg>
);

export default Timeline;
