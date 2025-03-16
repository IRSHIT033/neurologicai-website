import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ExperiencesSection({
  experiences,
}: {
  experiences: {
    text: string;
    desc: string;
    href: string;
  }[];
}) {
  return (
    <section className=" mb-30 flex flex-col items-center text-center  relative w-full">
      {/* Gradient Background Effect */}
      <div className="absolute inset-0 flex items-center justify-center -z-10">
        <div className="w-[800px] h-[400px] bg-gradient-to-r from-[#7F36F5] to-[#4B0082] opacity-30 rounded-full blur-3xl"></div>
      </div>

      {/* Section Heading */}
      <h2
        className="w-[986px] h-[319px] flex flex-col justify-center flex-shrink-0 text-center 
               text-[80px] font-extrabold leading-[112px] tracking-[-1.5px] capitalize 
               text-lg bg-gradient-to-b from-[#FFF] via-[#D1D1D1] to-[#373636] 
               bg-clip-text text-transparent"
      >
        Deep Dive Into Our Experiences
      </h2>

      {/* Experience Cards Grid */}
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-8 max-w-[1300px]">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className={`relative w-[600px] h-44 flex-shrink-0 bg-[#14161A] rounded-[12px] flex flex-col  cursor-pointer 
              border-[3px] border-t-[#14161A] border-b-[#7F36F5] border-l-[#7F36F5] border-r-[#7F36F5] overflow-hidden transition`}
          >
            {/* Left Gradient Border */}
            {/* <div className="absolute top-0 left-0 h-full w-[3px] bg-gradient-to-b from-[#14161A] to-[#7F36F5]"></div> */}

            {/* Right Gradient Border */}
            {/* <div className="absolute top-0 right-0 h-full w-[3px] bg-gradient-to-b from-[#14161A] to-[#7F36F5]"></div> */}

            {/* Experience Text */}
            <p className="text-white text-left p-4 text-xl font-semibold leading-[45px] tracking-[-0.19px] capitalize">
              {experience.text}
            </p>

            {/* View More Text & Arrow Container */}

            <Link
              href={experience.href}
              rel="noopener noreferrer"
              target="_blank"
            >
              <div className="cursor-pointer absolute bottom-4 right-4 flex items-center gap-2">
                <ArrowRight />
                <span className="text-white text-lg text-[20px] font-semibold leading-[30px]">
                  View More
                </span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
