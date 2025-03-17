"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";
// import { FaMinus, FaPlus } from "react-icons/fa";

export default function Resources() {
  const blogs = [
    {
      id: 1,
      category: "Healthcare",
      image: "/resources/resourcesCard-3.png", // Replace with actual image URL
      title: "Hosting a Hugging Face Model on AWS SageMaker",
      description:
        "When fine-tuning a Hugging Face model, it often saves as LoRA adapters.",
    },
    {
      id: 2,
      category: "Manufacturing",
      image: "/resources/resourcesCard-2.png", // Replace with actual image URL
      title: "Hosting a Hugging Face Model on AWS SageMaker",
      description:
        "When fine-tuning a Hugging Face model, it often saves as LoRA adapters.",
    },
    {
      id: 3,
      category: "Retail",
      image: "/resources/resourcesCard-1.png", // Replace with actual image URL
      title: "Hosting a Hugging Face Model on AWS SageMaker",
      description:
        "When fine-tuning a Hugging Face model, it often saves as LoRA adapters.",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Healthcare", "Manufacturing", "Retail"];
  const filteredBlogs =
    selectedCategory === "All"
      ? blogs
      : blogs.filter((blog) => blog.category === selectedCategory);

  return (
    <div>
      <section className="py-[5vh] px-[5vw]">
        <div className="py-8">
          <div className="p-6 bg-[linear-gradient(to_right,#8875D8,#40129D,#2E004F,#170028)] rounded-4xl flex flex-col md:flex-row items-center justify-between">
            <div className="px-6 py-6 w-[50%] mt-9">
              <div className="mt">
                <span className="bg-[#0328EE] text-white px-3 py-2 rounded-full text-xs">
                  FEATURED
                </span>
                <h1 className="text-[24px] md:text-3xl font-bold mt-6">
                  Hosting a Hugging Face Model on AWS SageMaker: A Step-by-Step
                  Guide
                </h1>
              </div>
              <div className="text-gray-200 mt-8 text-[22px] w-[75%] leading-7">
                <p>
                  Hugging Face models are powerful tools for NLP, vision, and
                  other machine learning tasks.
                </p>
              </div>
            </div>
            <div className="">
              <Image
                src="/resources/resources-1.png"
                width={500}
                height={450}
                className="rounded-3xl"
                alt="AI Model"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-[2vh] px-[5vw] mb-20">
        <div className="flex flex-row justify-between">
          <h2 className="text-white text-4xl font-bold mb-6">Case Studies</h2>
          <div className="flex space-x-4 mb-6">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category)}
                className={cn(
                  "px-6 py-2 rounded-full cursor-pointer text-sm text-white",
                  selectedCategory === category
                    ? "bg-[#0328EE]"
                    : "bg-[#181818]",
                  "transition-all duration-300"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[6vw] mt-6">
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map((blog) => (
              <div
                key={blog.id}
                className="bg-[#010D50] rounded-4xl overflow-hidden shadow-lg"
              >
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={500}
                  height={500}
                />
                <div className="py-4 px-6 text-white mb-4">
                  <div className="w-[92%]">
                    <p className="text-[20px] font-semibold">{blog.title}</p>
                    <p className="text-gray-200 text-[17px] mt-6">
                      {blog.description}
                    </p>
                  </div>
                  <div className="mt-5 flex items-center">
                    <button className="cursor-pointer mt-4 bg-[#0328EE] px-6 py-2 text-xs rounded-full top-[-10px]">
                      READ IT
                    </button>
                    <div className="w-[65%] h-[1.5px] bg-[#FFFFFF1A] mt-3 ml-3"></div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-400 text-center col-span-3">
              No blogs found.
            </p>
          )}
        </div>
        <p className="text-white text-[15px] font-bold text-right mt-16 cursor-pointer">
          Show More <span className="align-middle">{">"}</span>{" "}
        </p>
        {/* </div> */}
      </section>

      <section className="py-[2vh] px-[5vw] mt-20 mb-30">
        <div className="flex flex-row justify-between">
          <h2 className="text-white text-4xl font-bold mb-6">Breakthroughs</h2>
          <div className="flex mb-6">
            <button className="border-white border-[1px] text-white rounded-lg text-sm h-[30px] px-4">
              View All
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[6vw] mt-6">
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map((blog) => (
              <div
                key={blog.id}
                className="bg-[#010D50] rounded-4xl overflow-hidden shadow-lg"
              >
                <Image
                  src={blog.image}
                  alt={blog.title}
                  height={500}
                  width={500}
                />
                <div className="py-4 px-6 text-white mb-4">
                  <div className="w-[92%]">
                    <p className="text-[20px] font-semibold">{blog.title}</p>
                    <p className="text-gray-200 text-[17px] mt-6">
                      {blog.description}
                    </p>
                  </div>
                  <div className="mt-5 flex items-center">
                    <button className="mt-4 bg-[#0328EE] px-6 py-2 text-xs rounded-full top-[-10px]">
                      READ IT
                    </button>
                    <div className="w-[70%] h-[1.5px] bg-[#FFFFFF1A] mt-3"></div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-400 text-center col-span-3">
              No blogs found.
            </p>
          )}
        </div>
      </section>

      <section className="py-[2vh] mt-30 mb-20">
        <div className="bg-[radial-gradient(circle_at_top_left,_#1a1f42,_#0a0c1a)] text-white rounded-3xl flex justify-between items-center px-[5vw] ">
          <div className="py-6 flex flex-row justify-between items-center">
            <div className="w-[50%] leading-tight flex flex-row gap-4 items-center">
              <div className="p-5 rounded-2xl bg-white flex flex-col items-center">
                {/* <img src="/vectorTop.png" className="h-[20px] w-[70px]" ></img>
                                <img src="/vectorBase.png" className="h-[20px] w-[70px] mt-[-8px]"></img> */}
                <Image
                  src="/vectorTop.png"
                  alt="vectortop"
                  height={100}
                  width={100}
                  className="h-[2.5vh] w-[5vw]"
                ></Image>
                <Image
                  src="/vectorBase.png"
                  alt="vectorbase"
                  height={100}
                  width={100}
                  className="h-[2.5vh] w-[5vw] mt-[-1vh]"
                />
              </div>
              <div className="ml-1">
                <p className="text-[38px] font-bold">
                  Subscribe to our Neurologic AI’s news weekly newsletter!
                </p>
              </div>
            </div>
            <div className="bg-white rounded-4xl px-4 py-2 h-[25%]">
              <input
                type="email"
                placeholder="Enter email address"
                className="px-4 py-2 rounded-full border-none w-64 text-gray-900 focus:ring-0 focus:outline-none"
              />
              <button className="cursor-pointer bg-[#0328EE] text-white px-6 py-2 rounded-full">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
