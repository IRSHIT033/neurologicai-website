export default function FooterCTA() {
  return (
    <div className="min-w-full px-4 py-6 flex flex-col justify-center items-center text-white">
      <h2 className="text-2xl sm:text-4xl md:text-4xl font-bold text-white opacity-70 leading-[120%] mb-4 text-left mx-4">
        Looking to Push Boundaries with Us?
      </h2>

      <div className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-sm">
        <input
          type="text"
          placeholder="Enter your email here..."
          className="w-full sm:w-auto flex-1 py-2 px-4 text-[#B3B3B3] bg-white rounded-lg outline-none text-[16px] transition focus:ring-2 focus:ring-[#7300FF]"
        />
        <button className="w-full sm:w-auto flex justify-center items-center gap-2 py-2 px-4 rounded-lg bg-gradient-to-b from-[#5323EC] to-[#A400FF] text-white text-[16px] font-normal transition hover:from-[#4300CC] hover:to-[#8200CC]">
          Contact us
        </button>
      </div>
    </div>
  );
}
