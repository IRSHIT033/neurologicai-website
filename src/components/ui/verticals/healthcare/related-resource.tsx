import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

const resources = [
  {
    title: "AI-Powered Grounded Report Generation for Medical Imaging",
    desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
    image: "/relatedResourceCard-1.png",
  },
  {
    title: "Prompt-Based Image Segmentation Using LLM",
    desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
    image: "/relatedResourceCard-2.png",
  },
  {
    title: "Efficient Vision-Language Models for Edge Computing",
    desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
    image: "/relatedResourceCard-3.png",
  },
];

export default function RelatedResources() {
    const [isToggled, setIsToggled] = useState(false);
    const [selected, setSelected] = useState("Popular");

  
    return (
      <section className="mt-[8vh] text-white py-6 px-6 mb-30">
        <div className="text-center mb-2">
          <h2 className="text-5xl z-10 ">Related Resource</h2>
        </div>
  
        <div className="mt-12 mb-6">
            <div className="flex flex-col items-center">
                <div className="relative flex gap-6">
                    <button
                    className={`px-4 py-1 transition font-medium relative ${
                        selected === "Popular" ? "text-white" : "text-gray-500"
                    }`}
                    onClick={() => setSelected("Popular")}>
                    Popular
                    </button>

                    <button
                    className={`px-4 py-1 transition font-medium relative ${
                        selected === "Recommended" ? "text-white" : "text-gray-500"
                    }`}
                    onClick={() => setSelected("Recommended")}>
                    Recommended
                    </button>
                    <div
                    className={`absolute bottom-[-8px] h-[0.75px] bg-gray-500 transition-all duration-300`}
                    style={{
                        width: selected === "Popular"? "35%" : "55%",
                        left: selected === "Popular" ? "0%" : "45%",
                    }}
                    />
                </div>
            </div>
            <div className="flex justify-end items-center pr-[10vw] mt-[-70]">
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
      

        <div className="flex justify-center gap-6 mt-15 px-[10vw] min-h-125 h-auto rounded-6xl">
        {resources.map((resource, index) => (
          <Card key={index} className="bg-white text-black rounded-3xl shadow-lg overflow-hidden w-[26vw] flex flex-col">
            <img src={resource.image} alt={resource.title} className="h-74 object-cover" />
            <CardContent className="p-4 flex flex-col flex-1">
            <div className="flex flex-col justify-between h-full">
                <div>
                    <p className="text-xs font-semibold">Case Study</p>
                    <h3 className="font-extrabold text-2xl">{resource.title}</h3>
                    <p className="text-gray-700 text-sm mt-2">
                        {resource.desc}
                    </p>
                </div>
                <Button variant="outline" className="mt-3 px-5 py-3 bg-white w-25 mb-1">
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
          <img src="/Vector 168.png" className=""></img>
        </Button>
       
      </div>
      </section>
    );
  }
