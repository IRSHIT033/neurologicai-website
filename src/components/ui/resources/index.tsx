"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Loader2 } from "lucide-react";

export default function Resources() {
  const blogs = [
    {
      id: 1,
      category: "Healthcare",
      image: "/resources-case-studies/foundational-generative-ai.png", // Replace with actual image URL
      title: "Foundational Generative AI Model Building for Healthcare",
      href: "https://drive.google.com/file/d/1wbG9CX0I8VW9VRSOY80f0SgIXaeKrZOl/view?usp=drive_link",
      description:
        "Foundational multimodal model designed specifically for healthcare applications, integrating advanced vision and language processing capabilities to enable comprehensive medical insights.",
    },
    {
      id: 2,
      category: "Retail",
      image: "/resources-case-studies/voice-chat.png", // Replace with actual image URL
      title: "Voice & Chat-Based Conversational Recommendation Engine",
      href: "https://drive.google.com/file/d/1hfB1_y1RC2OitpH-AO5-PXTCatvvPVHH/view?usp=drive_link",
      description:
        "Retail customers increasingly seek personalized product recommendations through dynamic voice and chat interactions.",
    },
    {
      id: 3,
      category: "Retail",
      image: "/resources-case-studies/realtime-retail.png", // Replace with actual image URL
      title: "Real-Time AI-Powered Detection for Retail Inventory Optimization",
      href: "https://drive.google.com/file/d/1iIn37eeCf6UVdWkfgdlnWKcLDIcEMM8P/view?usp=drive_link",
      description:
        "Efficient inventory management significantly impacts profitability and customer satisfaction in retail operations.",
    },
  ];

  const breakthroughs = [
    {
      id: 1,
      image: "/featured-journey-3.png?height=300&width=500",

      title: "Honored with Times Business Award 2024",
      description:
        "We are thrilled to announce that [Your Company/Team Name] has been honored with the Times Business Award 2024. This prestigious recognition underscores our dedication to business excellence and innovation",
    },
    {
      id: 2,
      image: "/whoweare2.png?height=300&width=500",
      title:
        "Honored to Receive Excellence in Healthcare Award at Health 2.0 Conference, Dubai 2024",
      description:
        'We are incredibly honored to announce that [Your Company/Team Name] has been awarded the "Excellence in Healthcare Award" at the Health 2.0 Conference in Dubai 2024. This prestigious recognition highlights our dedication to pushing the boundaries of healthcare innovation',
    },
    {
      id: 3,
      image: "/featured-journey-2.png?height=300&width=500",
      title: "Honored to be Invited Among the 50 Startups",
      description:
        "We had insightful discussions on the expansive opportunities for AI in the region. The discussions focused on capitalizing on the burgeoning AI landscape in Dubai/UAE, leveraging the robust inter-country trade corridor between India and the UAE, and identifying actionable pathways for rapid market penetration.",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const router = useRouter();

  const categories = ["All", "Healthcare", "Manufacturing", "Retail"];
  const filteredBlogs =
    selectedCategory === "All"
      ? blogs
      : blogs.filter((blog) => blog.category === selectedCategory);

  const [selectedBlog, setSelectedBlog] = useState<{
    image: string;
    title: string;
    description: string;
    href: string;
  } | null>(null);
  const [loading, setLoading] = useState(false);

  const handleIframeLoad = () => {
    setLoading(false);
  };

  const openModal = (blog: {
    image: string;
    title: string;
    description: string;
    href: string;
  }) => {
    setSelectedBlog(blog);
    setLoading(true); // Set loading when opening modal
  };

  return (
    <div>
      <section className="py-[5vh] px-[5vw]">
        <div className="py-8">
          <div className="p-6 relative rounded-4xl flex flex-col md:flex-row items-center justify-between">
            {/* Gradient border using padding + pseudo-element */}
            <div
              className="absolute inset-0 rounded-4xl bg-linear-to-r from-primary from-60% to-white"
              style={{
                padding: "2px",
                mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                maskComposite: "exclude",
                WebkitMaskComposite: "xor",
              }}
            />
            <div className="px-6 py-6 w-full md:w-[50%] md:mt-9">
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
                src="/resources/resourcesCard-2.png"
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
        <div className="flex flex-col md:flex-row justify-between">
          <h2 className="text-white text-4xl font-bold mb-6">Case Studies</h2>
          <div className="flex flex-col md:flex-row space-x-4 gap-4 mb-6">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[6vw] mt-6">
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map((blog) => (
              <div
                key={blog.id}
                className="bg-[#010D50]  rounded-4xl overflow-hidden"
              >
                <div className="relative h-64 ">
                  <Image
                    src={blog.image}
                    alt={blog.image}
                    layout="fill"
                    className="object-cover object-center w-full h-full"
                  />
                </div>

                <div className=" z-50 h-full flex flex-col px-6 text-white mb-4 w-full ">
                  <p className="min-h-23  mt-4 text-xl font-semibold">
                    {blog.title}
                  </p>
                  <p className="min-h-32 text-gray-200 text-sm ">
                    {blog.description}
                  </p>

                  <div className=" flex items-center">
                    <Dialog>
                      <DialogTrigger asChild>
                        <button
                          onClick={() => openModal(blog)}
                          className=" bg-[#0328EE] px-6 py-2 text-xs rounded-4xl whitespace-nowrap cursor-pointer"
                        >
                          READ IT
                        </button>
                      </DialogTrigger>
                      <DialogContent className="w-[80vw] h-[80vh] max-w-5xl p-6 flex flex-col items-center">
                        {selectedBlog && (
                          <div className="w-full h-full flex flex-col items-center">
                            {/* Loader (Spinner) */}
                            {loading && (
                              <div className="flex justify-center items-center h-full">
                                <Loader2 className="animate-spin h-40 w-40 text-primary" />
                              </div>
                            )}

                            {/* iFrame (Hidden Until Loaded) */}
                            <iframe
                              src={selectedBlog.href.replace(
                                "/view",
                                "/preview"
                              )}
                              className={cn(
                                "w-full h-full aspect-[16/9] rounded-md",
                                loading ? "hidden" : "block"
                              )}
                              allow="autoplay"
                              onLoad={handleIframeLoad} // Hide loader when loaded
                            />
                          </div>
                        )}
                      </DialogContent>
                    </Dialog>
                    <div className="w-[70%] h-[1.5px] bg-[#FFFFFF1A] "></div>
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[6vw] mt-6">
          {breakthroughs.length > 0 ? (
            breakthroughs.map((blog) => (
              <div
                key={blog.id}
                className="bg-[#010D50]  rounded-4xl overflow-hidden"
              >
                <div className="relative h-64">
                  <Image
                    src={blog.image}
                    alt={blog.image}
                    layout="fill"
                    className="object-cover object-center w-full h-full"
                  />
                </div>

                <div className=" z-50 h-full flex flex-col px-6 text-white mb-4 w-full ">
                  <p className="min-h-23  mt-4 text-xl font-semibold">
                    {blog.title}
                  </p>
                  <p className="min-h-32 text-gray-200 text-sm ">
                    {blog.description}
                  </p>

                  <div className=" flex items-center">
                    <button
                      className=" bg-[#0328EE] px-6 py-2 text-xs rounded-4xl whitespace-nowrap cursor-pointer"
                      onClick={() => router.push("/news")}
                    >
                      READ IT
                    </button>
                    <div className="w-[70%] h-[1.5px] bg-[#FFFFFF1A] "></div>
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
          <div className="py-6 flex lg:flex-row gap-6 flex-col justify-between items-center">
            <div className="w-full lg:w-[50%] leading-tight flex flex-row gap-4 items-center">
              <div className="hidden lg:flex p-5 rounded-2xl bg-white flex-col items-center">
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
                <p className="text-[38px] font-bold text-center lg:text-left">
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
