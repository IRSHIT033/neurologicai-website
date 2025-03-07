"use client";
export default function Partnership() {
  return (
    <section className=" text-white py-16 px-24 text-center">
      <h2
        className="text-center text-[36px] font-semibold leading-[65px] font-[Inter] mb-1"
        style={{
          background: "linear-gradient(90deg, #5323EC 56.37%, #7F36F5 78.53%)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          letterSpacing: "-0.54px",
        }}
      >
        Our Partnership
      </h2>

      <p
        className="text-[#B3B3B3] text-[16px] font-normal leading-[31px] font-[Inter] mb-8 max-w-2xl mx-auto text-center"
        style={{
          width: "619px",
          height: "38px",
          letterSpacing: "-0.002px",
        }}
      >
        We have formalized a partnership with, a collaboration that will enhance
        our capabilities and broaden our reach within the market
      </p>

      <div className="inline-flex items-center gap-[68px]">
        <div
          className="w-[180px] h-[67px] flex-shrink-0 bg-lightgray rounded-[10px]"
          style={{
            backgroundImage: "url('/gcp.svg')",
            backgroundSize: "cover",
            backgroundPosition: "50%",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div
          className="w-[100px] h-[38px] flex-shrink-0 bg-lightgray rounded-[10px]"
          style={{
            backgroundImage: "url('/piepeople.svg')",
            backgroundSize: "cover",
            backgroundPosition: "50%",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>
    </section>
  );
}
