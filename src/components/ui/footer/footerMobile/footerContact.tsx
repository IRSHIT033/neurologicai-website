import Image from "next/image";

export default function FooterContact() {
  return (
    <div className="w-full text-white px-1 py-6">
      {/* Address & Email in Two Columns */}
      <div className="w-full flex justify-between items-center text-[#B3B3B3] text-sm pb-4">
        {/* Column 1: Location Icon & Address */}
        <div className="flex items-center gap-1">
          <Image
            src="/location_on.png"
            alt="Location"
            width={20}
            height={20}
            className="w-[24px] h-[24px]"
          />
          <p className="text-[10px] leading-[15px]">
            254 Chapman Rd, Ste 208
            <br />
            #17957, Newark, Delaware
            <br />
            19702, United States - 19702
          </p>
        </div>

        {/* Column 2: Email Icon & Email */}
        <div className="flex items-center gap-1">
          <Image
            src="/mail.svg"
            alt="Email"
            width={20}
            height={20}
            className="w-[20px] h-[20px]"
          />
          <p className="text-[10px] whitespace-nowrap">info@neurologicai.com</p>
        </div>
      </div>

      {/* Copyright Text (Bottom Center) */}
      <div className="w-full text-center text-[#FFFFFF] opacity-32 poppinsTextLight text-[12px] mt-8 italic">
        <p>Copyright©2025 Neurologic AI</p>
      </div>
    </div>
  );
}
