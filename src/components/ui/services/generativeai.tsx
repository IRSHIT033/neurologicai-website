import Link from "next/link";
import Image from "next/image";

export default function GenerativeAISection({
  servicesHeaderText,
}: {
  servicesHeaderText: {
    headertext: string;
    headerdesc: string;
  };
}) {
  return (
    <section className="flex flex-col items-center text-center w-full ">
      {/* 🔹 Gradient Background Only for Header Section */}
      <div className="relative w-full max-w-7xl h-[70vh] flex flex-col items-center justify-center text-white px-8 py-16 mx-auto overflow-hidden">
        {/* Background Image (Applies Only for This Section) */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/services-hero-bg.png"
            alt="Background Gradient"
            layout="fill"
            priority
            className="object-cover"
          />
        </div>

        {/* Section Heading (Fixed in Place) */}
        <h2
          className="flex flex-col justify-center flex-shrink-0 text-center 
               text-[75px] font-bold leading-[65px] tracking-[-1.5px] capitalize 
               font-poppins bg-gradient-to-b from-[#FFF] via-[#D1D1D1] to-[#373636] 
               bg-clip-text text-transparent w-[1300px] h-[125px]"
        >
          {servicesHeaderText.headertext}
        </h2>

        {/* 🔹 Subtitle & Buttons Wrapper (Moves Together) */}
        <div className="relative mt-14 flex flex-col items-center z-10">
          {/* Subtitle / Highlighted Text */}
          <p
            className="flex-shrink-0 text-white text-left 
                font-poppins text-[24px] font-medium leading-[36px]"
          >
            {servicesHeaderText.headerdesc}
          </p>

          {/* Buttons */}
          <div className="flex mt-12 gap-6 z-10">
            {/* Talk to Us Button */}
            <Link href="/contact">
              <button
                className="cursor-pointer px-6 py-2 flex items-center justify-center rounded-[600px] 
                                bg-white shadow-lg transition hover:opacity-80"
              >
                <span
                  className=" px-6 py-2 flex items-center justify-center 
                                text-lg font-semibold 
                                bg-gradient-to-r from-[#5442D1] to-[#EFAEF9] 
                                bg-clip-text text-transparent"
                >
                  Talk to Us
                </span>
              </button>
            </Link>

            {/* Learn More Button */}
            <Link href="/contact">
              <button
                className="cursor-pointer  px-6 py-2 flex items-center justify-center rounded-[600px] 
                                bg-[#4F40CF] shadow-lg transition hover:opacity-80"
              >
                <span
                  className="px-6 py-2 flex items-center justify-center text-white 
                                text-lg font-semibold "
                >
                  Learn More
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
