"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

export default function RelatedResources({
  resources,
}: {
  resources: { title: string; desc: string; image: string; href: string }[];
}) {
  const [shownAll, setShownAll] = useState(false);
  // const [selected, setSelected] = useState("Popular");
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
    <section className="mt-[8vh] text-white py-6 px-6 mb-30 w-screen">
      <div className="text-center mb-2">
        <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl z-10 ">Case Studies</h2>
      </div>

      <div className="mt-4 md:mt-12 mb-6">
        <div className="flex flex-col items-center"></div>
        <div className="flex justify-end items-center pr-[10vw] md:mt-[-70]">
          <div className="flex flex-col gap-4 mb-2">
            <span className="text-gray-300">{resources.length} results</span>
            <label className="relative inline-flex items-center cursor-pointer mt-2">
              <input
                type="checkbox"
                checked={shownAll}
                onChange={() => setShownAll(!shownAll)}
                className="sr-only peer"
              />
              <div className="w-17 h-7 bg-gray-300 rounded-full peer peer-checked:bg-white transition-all"></div>
              <div
                className={`absolute left-1 w-6 h-6 bg-transparent border-[#460CFF] border-3 rounded-full transition ${
                  shownAll ? "translate-x-9" : ""
                }`}
              >
                <div className="absolute inset-0 flex items-center justify-center ">
                  <div
                    className={`w-3 h-3 rounded-full transition bg-[#460CFF] ${
                      shownAll ? "" : ""
                    }`}
                  ></div>
                </div>
              </div>
            </label>
          </div>
        </div>
      </div>

      {/* Toggle Switch */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4 mt-15 md:px-[10vw] min-h-125 h-auto rounded-6xl ">
        {(shownAll ? resources : resources.slice(0, 3)).map(
          (resource, index) => (
            <Card
              key={index}
              className="bg-white  text-background rounded-3xl shadow-lg overflow-hidden min-h-[580px]  flex flex-col "
            >
              <CardTitle className="rounded-3xl overflow-hidden h-[45%]">
                <Image
                  src={resource.image}
                  alt={resource.image}
                  width={580}
                  height={300}
                  loading="lazy"
                />
              </CardTitle>
              <CardContent className="flex flex-col flex-1 h-[55%]">
                <div className="flex-3/5 flex flex-col justify-between h-full ">
                  <div>
                    <p className="text-sm font-bold pt-2">Case Study</p>
                    <h3 className="font-extrabold text-lg min-h-20">
                      {resource.title}
                    </h3>
                    <p className="text-gray-700 text-xs mt-2">
                      {resource.desc}
                    </p>
                  </div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        className="mt-auto px-5 cursor-pointer bg-white w-25 "
                        onClick={() =>
                          openModal({
                            title: resource.title,
                            description: resource.desc,
                            image: resource.image,
                            href: resource.href,
                          })
                        }
                      >
                        View Now
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="w-[80vw] h-[80vh] max-w-5xl p-6 flex flex-col items-center">
                      {selectedBlog && (
                        <div className="w-full h-full flex flex-col items-center">
                          {/* Loader (Spinner) */}
                          {loading && (
                            <div className="flex justify-center items-center h-full">
                              <Loader2 className="animate-spin h-30 w-30 text-primary" />
                            </div>
                          )}

                          {/* iFrame (Hidden Until Loaded) */}
                          <iframe
                            src={selectedBlog.href.replace("/view", "/preview")}
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
                </div>
              </CardContent>
            </Card>
          )
        )}
      </div>
    </section>
  );
}
