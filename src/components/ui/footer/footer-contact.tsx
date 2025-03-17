import Image from "next/image";
import Link from "next/link";

export default function FooterContact() {
  return (
    <div className="flex items-start gap-4 w-full ">
      <div>
        <div
          className="w-[183.726px] h-[46.347px]  flex-shrink-0 bg-lightgray"
          style={{
            backgroundImage: "url('/Logo.svg')",
            backgroundSize: "cover",
            backgroundPosition: "50%",
            backgroundRepeat: "no-repeat",
            aspectRatio: "183.73 / 46.35",
          }}
        ></div>

        <div className="flex flex-col  justify-end gap-4 auto items-end mt-4 w-full text-sm">
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

      <div className="flex flex-col justify-end items-start ml-4 h-full ">
        <div className="flex-1 flex items-center text-[#686868] text-[15px] font-normal leading-[23px] tracking-[-0.45px]">
          254 Chapman Rd, Ste 208 #17957, Newark, Delaware 19702, United States
        </div>
        <div className="flex-1 flex items-center text-[#686868] text-[15px] font-normal leading-[23px] tracking-[-0.45px]">
          info@neurologicai.com
        </div>
        <div className="flex-1 flex items-center text-[#686868] text-[15px] font-normal leading-[23px] tracking-[-0.45px]">
          <a
            href="https://www.linkedin.com/company/neurologicai"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.linkedin.com/company/neurologicai
          </a>
        </div>
      </div>
    </div>
  );
}
