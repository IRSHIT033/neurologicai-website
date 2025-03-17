import Link from "next/link";

export default function VerticalContainer() {
  return (
    <div className="flex flex-col items-start flex-shrink-0 gap-[5px] ml-0 md:ml-[100px] w-auto md:w-[120px] min-h-[306px]">
      {/* Title */}
      <h3 className="text-[#FFF] text-[13px] font-medium leading-[26px] tracking-[-0.001em] mb-4">
        Services
      </h3>

      {/* Links */}
      <ul className="space-y-2">
        <li>
          <Link
            href="/services/generative-ai"
            className="text-[#979797] text-[13px] font-normal leading-[26px] tracking-[-0.001em] hover:text-white transition"
          >
            Generative-AI
          </Link>
        </li>
        <li>
          <Link
            href="/services/robotics-digital-twins"
            className="text-[#979797] text-[13px] font-normal leading-[18px] tracking-[-0.001em] hover:text-white transition"
          >
            Robotics & Digital Twins
          </Link>
        </li>
        <li>
          <Link
            href="/services/computer-vision"
            className="text-[#979797] text-[13px] font-normal leading-[18px] tracking-[-0.001em] hover:text-white transition"
          >
            Computer Vision & Video Analysis
          </Link>
        </li>
        <li>
          <Link
            href="/services/recommendation-engine"
            className="text-[#979797] text-[13px] font-normal leading-[18px] tracking-[-0.001em] hover:text-white transition"
          >
            Recommendation Engine
          </Link>
        </li>
        <li>
          <Link
            href="/services/forecasting"
            className="text-[#979797] text-[13px] font-normal leading-[18px] tracking-[-0.001em] hover:text-white transition"
          >
            Forecasting and Predictive Modelling
          </Link>
        </li>
        <li>
          <Link
            href="/services/natural-language-processing"
            className="text-[#979797] text-[13px] font-normal leading-[18px] tracking-[-0.001em] hover:text-white transition"
          >
            Natural Language Processing
          </Link>
        </li>
      </ul>
    </div>
  );
}
