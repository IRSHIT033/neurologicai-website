export default function MissionCard({
  text,
  variant,
}: {
  text: string;
  variant: string;
}) {
  const borderColor = variant === "left" ? "#4B0082" : "#4B0082";
  const textColor = variant === "left" ? "text-white" : "text-white";

  return (
    <div
      className={`w-full h-auto lg:w-[400px] lg:h-[143px] flex-shrink-0 border rounded-[20px] flex items-center justify-center text-center px-4 py-4 ${textColor}`}
      style={{ borderColor: borderColor }}
    >
      <p className="text-[12px] leading-[18px] lg:text-[16px]  lg:leading-[24px]">{text}</p>
    </div>
  );
}
