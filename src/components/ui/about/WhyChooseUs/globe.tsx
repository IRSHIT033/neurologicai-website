import Image from "next/image";

export default function GlobeIllustration() {
  return (
    <div className="flex justify-center items-center">
      <Image
        src="/planet.svg"
        alt="Global Reach"
        width={451.639}
        height={431.463}
        className="object-cover"
      />
    </div>
  );
}
