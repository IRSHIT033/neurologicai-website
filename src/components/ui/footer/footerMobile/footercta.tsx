import Image from "next/image";

export default function FooterCTA() {
  return (
    <div className="w-full flex flex-col items-start text-white px-4 py-6">
      {/* Logo (Flexible Width) */}
      <div className="w-full max-w-[125px] h-[32px] md:max-w-[180px] md:h-auto ">
        <Image
          src="/Logo.svg"
          alt="Neurologic Logo"
          width={250}
          height={60}
          className="w-full h-auto"
        />
      </div>

      {/* Heading (Flexible & Responsive) */}
      <h2 className="font-montserrat font-light text-[20px] lg:text-[28px]  text-gray-300 mt-4 leading-tight w-full poppinsTextMedium">
        Looking to Push <br /> Boundaries with Us?
      </h2>

      {/* Input Field */}
      <input
        type="text"
        placeholder="Enter your email here..."
        className="w-full py-2 px-4 text-[#B3B3B3] bg-white rounded-lg outline-none text-[12px] mt-3"
      />

      {/* Contact Us Button */}
      <button className="w-full mt-3 py-2 px-4 rounded-lg bg-gradient-to-b from-[#5323EC] to-[#A400FF] text-white text-[12px] font-medium transition">
        Contact us
      </button>
    </div>
  );
}
