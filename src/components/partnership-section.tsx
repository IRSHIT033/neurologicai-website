import Image from "next/image";

const PartnershipSection = () => {
  return (
    <section className="text-white  text-center pb-4 md:pb-0  lg:mt-8 mb-10 bg-background px-6 py-8 lg:px-8 ">
      <h2 className="text-center text-[16px] sm:text-[26px] md:text-[32px] lg:text-[38px] poppinsTextSemiBold leading-[30px] lg:leading-[65px] lg:mb-1 text-transparent bg-gradient-to-r from-blue from-40% to-primary via-60% bg-clip-text">
        Our Partnership
      </h2>

      <p className="text-[#B3B3B3] text-[10px] md:text-[14px] lg:text-[16px] leading-[13px] md:leading-[31px] mb-4 md:mb-8 w-full sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto text-center ">
        We have formalized a partnership with, a collaboration that will enhance
        our capabilities and broaden our reach within the market
      </p>

      <div className="flex flex-row items-center justify-center gap-8 md:gap-20 w-full">
        <div className="w-[70px] h-[24px] md:w-[180px] md:h-[67px] flex-shrink-0 bg-lightgray rounded-[10px] relative">
          <Image
            src="/gcp.svg"
            alt="GCP Logo"
            layout="fill"
            objectFit="cover"
            className=""
          />
        </div>
        <div className="w-[70px] h-[24px] md:w-[100px] md:h-[38px] flex-shrink-0 bg-lightgray rounded-[10px] relative">
          <Image
            src="/piepeople.svg"
            alt="Pie People Logo"
            layout="fill"
            objectFit="cover"
            className=""
          />
        </div>
      </div>
    </section>
  );
};

export default PartnershipSection;
