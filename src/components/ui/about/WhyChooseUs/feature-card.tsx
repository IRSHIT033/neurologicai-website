export default function FeatureCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start gap-4 mb-6">
      <div className="w-[36px] h-[36px] rounded-lg bg-gradient-to-r from-[#4B0082] to-[#5323EC] flex-shrink-0"></div>
      <div>
        <h3 className="text-[#F2F2F7] text-[24px] font-inter font-bold leading-[32px] self-stretch mb-1">
          {title}
        </h3>

        <p className="text-[#C7C7CC] font-inter text-[14px] font-normal leading-[18px] w-[532px]">
          {description}
        </p>
      </div>
    </div>
  );
}
