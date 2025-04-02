import Image from "next/image";

const PartnershipSection = () => {
  return (
    <section className="text-white  text-center my-6">
      <h2 className="text-center text-[38px] poppinsTextSemiBold leading-[65px] mb-1 text-transparent bg-gradient-to-r from-blue from-40% to-primary via-60% bg-clip-text">
        Our Partnership
      </h2>

      <p className="text-[#B3B3B3] text-[16px] font-normal leading-[31px] mb-8 max-w-2xl mx-auto text-center ">
        We have formalized a partnership with, a collaboration that will enhance
        our capabilities and broaden our reach within the market
      </p>

      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-20 w-full">
        <div className="w-[180px] h-[67px] flex-shrink-0 bg-lightgray rounded-[10px] relative">
          <Image
            src="/gcp.svg"
            alt="GCP Logo"
            layout="fill"
            objectFit="cover"
            className="rounded-[10px]"
          />
        </div>
        <div className="w-[100px] h-[38px] flex-shrink-0 bg-lightgray rounded-[10px] relative">
          <Image
            src="/piepeople.svg"
            alt="Pie People Logo"
            layout="fill"
            objectFit="cover"
            className="rounded-[10px]"
          />
        </div>
      </div>
    </section>
  );
};

export default PartnershipSection;
