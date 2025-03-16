import { ArrowRight, PencilRulerIcon } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../dialog";

import Image from "next/image";

export default function SolutionGrid({
  solutions,
}: {
  solutions: { text: string; desc: string }[];
}) {
  return (
    <section className=" relative py-16 px-8  text-white flex flex-col items-center">
      {/* AI Themed Image Above Solutions */}
      <Image
        src="/ai.png" // Make sure this image is placed in the public folder
        alt="AI Themed Header"
        width={1250}
        height={600}
        className="rounded-[24px] mb-18"
      />
      {/* Centered Heading */}
      <div className="flex justify-center">
        <h2 className="text-[75px] mb-10 font-extrabold leading-[65px] tracking-[-1.5px] text-center text-transparent bg-clip-text bg-gradient-to-b from-white via-[#D1D1D1] to-[#373636]">
          SOLUTIONS
        </h2>
      </div>

      {/* Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-8 max-w-6xl mx-auto justify-items-center">
        {solutions.map((solution, index) => (
          <div
            key={index}
            className={` w-[380px] h-[400px]  rounded-[14px] bg-gradient-to-r from-[rgba(3,40,238,0.82)] via-[rgba(62,48,221,0.55)] to-[rgba(121,57,204,0.61)] p-6 flex flex-col items-center justify-center text-center shadow-lg relative`}
          >
            {/* Solution Text */}
            <PencilRulerIcon className="absolute inset-5" size={30} />
            <p className="flex flex-col justify-center text-center text-white text-2xl  font-bold leading-[45px] tracking-[-0.645px] capitalize ">
              {solution.text}
            </p>
            <Dialog>
              <DialogTrigger>
                <div className="cursor-pointer absolute bottom-4 right-4 flex items-center gap-2">
                  <ArrowRight />
                  <span className="text-white text-lg text-[20px] font-semibold leading-[30px]">
                    View More
                  </span>
                </div>
              </DialogTrigger>
              <DialogContent className="min-w-3xl ">
                <DialogHeader className="text-center m-4">
                  <DialogTitle className="text-4xl text-center">
                    {solution.text}
                  </DialogTitle>
                  <DialogDescription className="pt-10 text-left text-xl">
                    {solution.desc}
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
        ))}
      </div>
    </section>
  );
}
