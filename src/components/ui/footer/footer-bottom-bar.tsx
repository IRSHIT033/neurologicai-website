export default function FooterBottom() {
  return (
    <div className=" text-white py-4">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center md:flex-row md:justify-between">
        {/* Left Side: Copyright Text */}
        <div className="mt-24 ml-[500px] text-center text-[#B3B3B3] text-[14px] pt-4">
          <p>Copyright©2025 Neurologic AI</p>
        </div>

        {/* Right Side: Awards Image */}
        <div
          className="  w-[171.103px] h-[71.374px] flex-shrink-0 rounded-[23px] bg-cover"
          style={{
            background: "url('/business-award.svg')  no-repeat",
          }}
        />
      </div>
    </div>
  );
}
