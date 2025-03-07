import Image from "next/image";

const PartnershipSection = () => {
  return (
    <section className="text-white py-16 px-24 text-center">
      <h2 className="text-center text-[36px] font-semibold leading-[65px] mb-1 text-transparent bg-gradient-to-r from-blue from-40% to-primary via-60% bg-clip-text">
        Our Partnership
      </h2>

      <p className="text-[#B3B3B3] text-[16px] font-normal leading-[31px] mb-8 max-w-2xl mx-auto text-center w-[619px] h-[38px]">
        We have formalized a partnership with, a collaboration that will enhance
        our capabilities and broaden our reach within the market
      </p>

      <div className="inline-flex items-center gap-[68px]">
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
