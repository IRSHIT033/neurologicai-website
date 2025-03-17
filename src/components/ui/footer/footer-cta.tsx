import Image from "next/image";
import Link from "next/link";

export default function FooterCallToAction() {
  return (
    <div className="ml-12 sm:ml-0 w-full flex flex-row sm:flex-col items-center md:items-start text-white text-center md:text-left gap-6 md:gap-12 px-4 sm:px-8">
      
      {/* Call-to-Action Section */}
      <div className="w-full flex flex-col items-center md:items-start text-white text-center md:text-left">
        <h2 className="text-3xl sm:text-3xl md:text-4xl font-medium opacity-80 leading-[120%] mb-4">
          Looking to Push Boundaries with Us?
        </h2>

        {/* Input + Button Section */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-lg">
          <input
            type="text"
            placeholder="Enter your email here..."
            className="w-full sm:w-auto py-2 px-4 text-gray-400 bg-white rounded-lg outline-none text-sm md:text-base focus:ring-2 focus:ring-[#7300FF] transition"
          />
          <button className="w-full sm:w-auto px-6 py-2 rounded-lg bg-gradient-to-b from-[#5323EC] to-[#A400FF] text-white text-sm md:text-base font-medium transition hover:from-[#4300CC] hover:to-[#8200CC]">
            Contact us
          </button>
        </div>
      </div>

      {/* Contact Information Section */}
      <div className="w-full flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16 ml-16 sm:ml-0">
        
        {/* Logo & Social Media */}
        <div className="flex flex-col items-center md:items-start">
          <div
            className="w-[184px] h-[46px] bg-lightgray"
            style={{
              backgroundImage: "url('/Logo.svg')",
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>

          <div className="flex flex-row justify-center md:justify-start gap-4 mt-4">
            <Link href="mailto:info@neurologicai.com">
              <Image
                src="/mail.svg"
                alt="Email"
                width={40}
                height={40}
                className="hover:opacity-75 transition"
              />
            </Link>
            <Link href="https://linkedin.com" target="_blank">
              <Image
                src="/LinkedIn.svg"
                alt="LinkedIn"
                width={40}
                height={40}
                className="hover:opacity-75 transition"
              />
            </Link>
          </div>
        </div>

        {/* Address & Contact Info */}
        <div className="flex flex-col text-[#686868] text-[15px] font-normal leading-[23px] tracking-[-0.45px] text-center md:text-left space-y-3">
          <p className="max-w-xs md:max-w-sm">
            254 Chapman Rd, Ste 208 #17957, Newark, Delaware 19702, United States - 19702
          </p>
          <p>info@neurologicai.com</p>
          <p>
            <Link href="https://www.linkedin.com/company/neurologicai" target="_blank" className="hover:text-white transition">
              https://www.linkedin.com/company/neurologicai
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
