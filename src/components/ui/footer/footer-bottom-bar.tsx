export default function FooterBottom() {
  return (
    <div className="text-white py-4">
      <div className="max-w-7xl mx-auto px-6 flex flex-col justify-between items-center ">
        <div
          className="mt-4 md:mt-0 w-[171px] h-[71px] flex-shrink-0 rounded-[23px] bg-cover md:self-end"
          style={{
            background: "url('/business-award.svg') no-repeat center / cover",
          }}
        />
        {/* Left Side: Copyright Text */}
        <div className="text-center text-[#B3B3B3] text-sm pt-4">
          <p>Copyright©2025 Neurologic AI</p>
        </div>
      </div>
    </div>
  );
}
