"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import Image from "next/image";

export default function RelatedResources({
  resources,
}: {
  resources: { title: string; desc: string; image: string }[];
}) {
  const [isToggled, setIsToggled] = useState(false);
  // const [selected, setSelected] = useState("Popular");

  return (
    <section className="mt-[8vh] text-white py-6 px-6 mb-30 w-screen">
      <div className="text-center mb-2">
        <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl z-10 ">Case Studies</h2>
      </div>

      <div className="mt-12 mb-6">
        <div className="flex flex-col items-center">
          {/* <div className="relative flex gap-6">
            <button
              className={`px-4 py-1 transition font-medium relative ${
                selected === "Popular" ? "text-white" : "text-gray-500"
              }`}
              onClick={() => setSelected("Popular")}
            >
              Popular
            </button>

            <button
              className={`px-4 py-1 transition font-medium relative ${
                selected === "Recommended" ? "text-white" : "text-gray-500"
              }`}
              onClick={() => setSelected("Recommended")}
            >
              Recommended
            </button>
            <div
              className={`absolute bottom-[-8px] h-[0.75px] bg-gray-500 transition-all duration-300`}
              style={{
                width: selected === "Popular" ? "35%" : "55%",
                left: selected === "Popular" ? "0%" : "45%",
              }}
            />
          </div> */}
        </div>
        <div className="flex justify-end items-center pr-[10vw] mt-[-30] sm:mt-[-40] xl:mt-[-70]">
          <div className="flex flex-col gap-4 mb-2">
            <span className="text-gray-300">14 results</span>
            <label className="relative inline-flex items-center cursor-pointer mt-2">
              <input
                type="checkbox"
                checked={isToggled}
                onChange={() => setIsToggled(!isToggled)}
                className="sr-only peer"
              />
              <div className="w-17 h-7 bg-gray-300 rounded-full peer peer-checked:bg-white transition-all"></div>
              <div
                className={`absolute left-1 w-6 h-6 bg-transparent border-[#460CFF] border-3 rounded-full transition ${
                  isToggled ? "translate-x-9" : ""
                }`}
              >
                <div className="absolute inset-0 flex items-center justify-center ">
                  <div
                    className={`w-3 h-3 rounded-full transition bg-[#460CFF] ${
                      isToggled ? "" : ""
                    }`}
                  ></div>
                </div>
              </div>
            </label>
          </div>
        </div>
      </div>

      {/* Toggle Switch */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  justify-center gap-6 mt-15 px-4 md:px-[10vw] min-h-125 h-auto rounded-6xl">
        {resources.map((resource, index) => (  
          <Card
            key={index}
            className="bg-white text-background rounded-3xl shadow-lg overflow-hidden flex flex-col
            "
          >
            <Image
              src={resource.image}
              alt={resource.title}
              width={600}
              height={600}
              loading="lazy"
            />
            <CardContent className="p-4 flex flex-col flex-1">
              <div className="flex flex-col justify-between h-full">
                <div>
                  <p className="text-[10px] md:text-xs font-semibold">Case Study</p>
                  <h3 className="font-bold lg:font-extrabold text-lg lg:text-xl xl:text-2xl">{resource.title}</h3>
                  <p className="text-gray-700 text-xs md:text-sm mt-2">{resource.desc}</p>
                </div>
                <Button
                  variant="outline"
                  className="mt-3 px-3 py-2 md:px-5 md:py-3 bg-white w-20 md:w-25 mb-1 text-sm md:text-base"
                >
                  View Now
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Show More Button */}
      <div className="flex justify-center mt-8 px-2 py-1">
        <Button className="bg-gradient-to-r from-[#5323EC] via-[#4B0082] to-[#170226] text-white flex items-center px-6 py-3 text-base">
          Show More
          {/* <Image src="" alt="show more" className=""></Image> */}
        </Button>
      </div>
    </section>
  );
}
