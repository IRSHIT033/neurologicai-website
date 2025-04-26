import Image from "next/image";

const logos = [
  "/globus-medical-logo.svg",
  "/hoppr-logo.svg",
  "/prismforce-logo.svg",
  "/trace-logo.svg",
  "/ust-logo.svg",
  "/pentatonic-logo.svg",
  "/fxpay-logo.svg",
  "/felix.svg",
  "/upgrad.svg",
  "/smart-property.svg",
];

const PartnerWhoTrustedSection = () => {
  return (
    <div className="flex relative  flex-col lg:flex-row left-0 justify-center items-center lg:min-h-[40vh] px-6 lg:px-0 py-6 lg:py-0">
      <div className="lg:w-3/12 relative text-center text-lg lg:text-2xl font-bold">
        {/* Background behind text */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#AA48FE_0%,_transparent_65%)] opacity-20"></div>

        {/* Text content */}
        <div className=" text-primary-light lg:w-1/2 mx-auto relative z-10 py-10 lg:py-30">
          Trusted by our most innovative clients
        </div>
      </div>
      <div className="flex min-h-[20vh] lg:w-9/12 flex-wrap gap-4 justify-center">
        {logos.map((logo, idx) => (
          <li
            className="w-[100px] h-[60px] lg:w-[235px] lg:h-[98px] flex justify-center items-center max-w-full relative rounded-xl lg:rounded-2xl border flex-shrink-0 border-slate-700 p-3 lg:px-8 lg:py-6 "
            key={logo + idx}
          >
            <Image src={logo} alt={logo} width={150} height={150}
            className="max-w-full" />
          </li>
        ))}
      </div>
    </div>
  );
};

export default PartnerWhoTrustedSection;
