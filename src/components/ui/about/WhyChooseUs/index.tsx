import FeatureList from "./feature-list";
import ConnectButton from "./connect-button";
import GlobeIllustration from "./globe";

export default function WhyChooseSection() {
  return (
    <section className=" py-16 px-8 flex flex-col items-center">
      <div className="mb-8 text-left">
        <h2 className="text-[48px] font- inter font-bold text-[#F2F2F7] leading-[64px] mb-2 text-left">
          Why Choose Neurologic AI?
        </h2>
        <p className="text-[#E5E5EA] text-[14px] font- inter font-normal leading-[28px] align-self-stretch">
          Experience the Neurologic AI Difference: Innovation, Expertise, and
          Impact.
        </p>
      </div>

      <div className="flex justify-between items-start max-w-7xl mx-auto mt-8">
        <div className="flex-1 mr-12">
          <FeatureList />
        </div>
        <div className="flex flex-col items-center">
          <GlobeIllustration />
          <ConnectButton />
        </div>
      </div>
    </section>
  );
}
