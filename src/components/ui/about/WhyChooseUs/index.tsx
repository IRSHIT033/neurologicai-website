import FeatureList from "./feature-list";
import ConnectButton from "./connect-button";
import GlobeIllustration from "./globe";

export default function WhyChooseSection() {
  return (
    <section className="py-6 lg:py-16 px-8 flex flex-col items-center">
      <div className="mb-8 text-left">
        <h2 className="text-lg md:text-2xl lg:text-[48px] poppinsTextSemiBold text-[#F2F2F7] leading-xs md:leading-3xl lg:leading-[64px] mb-2 text-left">
          Why Choose Neurologic AI?
        </h2>
        <p className="text-[#E5E5EA] text-[13px] lg:text-[14px] font- inter font-normal leading-[15px] lg:leading-[28px] align-self-stretch">
          Experience the Neurologic AI Difference: Innovation, Expertise, and
          Impact.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start lg:max-w-7xl mx-auto mt-8">
        <div className="flex-1 mr-1 lg:mr-12 mb-4 lg:mb-0">
          <FeatureList />
        </div>
        <div className="flex flex-col justify-center items-center">
          <GlobeIllustration />
          <ConnectButton />
        </div>
      </div>
    </section>
  );
}
