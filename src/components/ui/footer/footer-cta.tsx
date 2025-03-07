export default function FooterCTA() {
  return (
    <div className="w-[549px] h-[115px] p-[10px] flex flex-col justify-center items-center bg-black text-white flex-shrink-0">
      <h2 className="text-[48px] font-medium  text-white opacity-70 leading-[120%] mb-4">
        Looking to Push Boundaries with Us?
      </h2>

      <div className="flex items-center gap-4 self-start ">
        <input
          type="text"
          placeholder="Enter your email here..."
          className="py-2 px-4 text-[#B3B3B3] bg-white rounded-[10px] outline-none text-[16px]  transition focus:ring-2 focus:ring-[#7300FF]"
        />
        <button className="flex justify-center items-center gap-[4px] w-[121.651px] h-[38.571px] py-[8px] px-[16px] flex-shrink-0 rounded-[10px] bg-gradient-to-b from-[#5323EC] to-[#A400FF] text-[#FFF]  text-[16px] font-normal leading-normal transition hover:bg-gradient-to-b hover:from-[#4300CC] hover:to-[#8200CC]">
          Contact us
        </button>
      </div>
    </div>
  );
}
