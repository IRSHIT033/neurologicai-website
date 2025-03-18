export default function FeatureCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex relative items-start gap-4 mb-6">
      <div className="absolute w-[36px] h-[36px] rounded-lg bg-gradient-to-r from-[#4B0082] to-[#5323EC] "></div>
      <div className="pl-[46px]">
        <h3 className=" text-[#F2F2F7] text-2xl  font-bold leading-[32px] self-stretch mb-1">
          {title}
        </h3>

        <p className="text-[#C7C7CC]  text-sm font-normal leading-[18px] lg:w-[532px]">
          {description}
        </p>
      </div>
    </div>
  );
}
