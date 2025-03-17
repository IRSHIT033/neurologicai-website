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
      className={`w-[400px] h-[143px] flex-shrink-0 border rounded-[20px] flex items-center justify-center text-center px-4 ${textColor}`}
      style={{ borderColor: borderColor }}
    >
      <p className="text-[16px]  leading-[24px]">{text}</p>
    </div>
  );
}
