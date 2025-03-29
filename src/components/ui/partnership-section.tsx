export default function Partnership() {
  return (
    <section className=" text-white text-center w-full min-h-80">
      <h2
        className="text-center text-[36px] font-semibold leading-[65px]  mb-1"
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

      <p className="text-[#B3B3B3] text-xl font-normal mx-auto text-center">
        We have formalized a partnership with, a collaboration that will enhance
        our capabilities and broaden our reach within the market
      </p>

      <div className="flex flex-col md:flex-row items-center ">
        <div
          className="w-[180px] h-[67px]  bg-lightgray rounded-[10px]"
          style={{
            backgroundImage: "url('/gcp.svg')",
            backgroundSize: "cover",
            backgroundPosition: "50%",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div
          className="w-[100px] h-[38px]  bg-lightgray rounded-[10px]"
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
