export default function FooterBottom() {
  return (
    <div className="relative w-full text-white py-4">
      <div className="mt-10 max-w-7xl mx-auto px-6 flex flex-col items-center md:flex-row md:justify-between">
        
        {/* Left Side: Copyright Text */}
        <div className="text-center text-[#B3B3B3] text-sm md:text-base md:ml-[40%]">
          <p>Copyright©2025 Neurologic AI</p>
        </div>

        {/* Right Side: Awards Image */}
        {/* <div className="w-44 h-20 flex-shrink-0 rounded-lg bg-cover bg-no-repeat bg-center md:mt-0 mt-6 bg-[url('/business-award.svg')]" /> */}
      </div>
    </div>
  );
}
