export default function FeatureCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex relative items-start gap-2 lg:gap-4 mb-6">
      <div className="absolute w-[20px] lg:w-[36px] h-[20px] lg:h-[36px] rounded-md lg:rounded-lg bg-gradient-to-r from-[#4B0082] to-[#5323EC] "></div>
      <div className="pl-[30px] lg:pl-[46px]">
        <h3 className=" text-[#F2F2F7] text-[16px] lg:text-2xl  font-bold leading-[16px] lg:leading-[32px] self-stretch mb-1">
          {title}
        </h3>

        <p className="text-[#C7C7CC]  text-[10px] lg:text-sm font-normal leading-[13px] lg:leading-[18px] w-[240px] lg:w-[532px]">
          {description}
        </p>
      </div>
    </div>
  );
}
