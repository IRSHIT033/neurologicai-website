import Link from "next/link";

export default function ConnectButton() {
  return (
    <div className="relative flex justify-center items-center">
      <div className="absolute inset-0 w-[340.309px] h-[200.045px] rounded-full bg-[rgba(140,69,255,0.7)] blur-[152px] z-0"></div>
      <Link href="/contact">
        <button className="cursor-pointer relative z-1 px-3 py-2 mt-20 rounded-lg bg-gradient-to-r from-[#5323EC] to-[#AA48FE] text-white font-inter text-[16px] font-bold transition hover:opacity-90 ">
          Connect With Us
        </button>
      </Link>
    </div>
  );
}
