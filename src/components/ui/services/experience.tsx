import Image from "next/image";

// Experience List (Two Cards Have Different Heights)
const experiences = [
  { text: "Foundational Generative AI Model Building For Healthcare" },
  { text: "AI-Powered Grounded Report Generation For Medical Imaging" },
  { text: "Prompt-Based Image Segmentation Using VLM" },
  { text: "Efficient Vision-Language Models For Edge Computing" },
  { text: "Evaluation Pipeline For LLM-Generated Radiology Reports" },
  {
    text: "AI-Powered Nuclear Morphological Analysis For Ovarian Cancer Diagnosis",
  },
  {
    text: "Multi-Stage Agentic Framework Powered By VLM And Knowledge Graphs For Product’s Damage Assessment And Recycling",
    height: "h-[220px]",
  },
  {
    text: "SLM-Powered Findings Extraction From Medical Reports Using PHI4",
    height: "h-[220px]",
  },
  { text: "Customer Service Using Agentic AI" },
];

export default function ExperiencesSection() {
  return (
    <section className=" mb-30 flex flex-col items-center text-center  relative w-full">
      <div className="absolute right-0 top-0 w-[825px] h-[1186px] aspect-[550/973] z-0">
        <Image
          src="/bg-2.png"
          alt="Decorative Background"
          fill
          className="object-cover"
        />
      </div>

      {/* Gradient Background Effect */}
      <div className="absolute inset-0 flex items-center justify-center -z-10">
        <div className="w-[800px] h-[400px] bg-gradient-to-r from-[#7F36F5] to-[#4B0082] opacity-30 rounded-full blur-3xl"></div>
      </div>

      {/* Section Heading */}
      <h2
        className="w-[986px] h-[319px] flex flex-col justify-center flex-shrink-0 text-center 
               text-[80px] font-extrabold leading-[112px] tracking-[-1.5px] capitalize 
               font-['Poppins'] bg-gradient-to-b from-[#FFF] via-[#D1D1D1] to-[#373636] 
               bg-clip-text text-transparent"
      >
        Deep Dive Into Our Experiences
      </h2>

      {/* Experience Cards Grid */}
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-8 max-w-[1300px]">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className={`relative w-[600px] ${
              experience.height || "h-[180px]"
            } flex-shrink-0 bg-[#14161A] rounded-[12px] flex flex-col justify-center cursor-pointer 
              border-[3px] border-t-[#14161A] border-b-[#7F36F5] border-l-[#7F36F5] border-r-[#7F36F5] overflow-hidden transition`}
          >
            {/* Left Gradient Border */}
            {/* <div className="absolute top-0 left-0 h-full w-[3px] bg-gradient-to-b from-[#14161A] to-[#7F36F5]"></div> */}

            {/* Right Gradient Border */}
            {/* <div className="absolute top-0 right-0 h-full w-[3px] bg-gradient-to-b from-[#14161A] to-[#7F36F5]"></div> */}

            {/* Experience Text */}
            <p className="text-white font-poppins text-[28px] font-semibold leading-[45px] tracking-[-0.19px] capitalize">
              {experience.text}
            </p>

            {/* View More Text & Arrow Container */}
            <div className="absolute bottom-4 right-4 flex items-center gap-2">
              <Image
                src="/rightArrow.png"
                alt="View More"
                width={23}
                height={17}
                className="opacity-70 hover:opacity-100 transition"
              />
              <span className="text-white font-['Poppins'] text-[20px] font-semibold leading-[30px]">
                View More
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
