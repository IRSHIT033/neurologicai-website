export default function Header() {
  return (
    <div className="w-full min-h-[25vh]  flex flex-col items-center justify-center p-4 md:p-8">
      {/* Gradient border container using pseudo-elements */}
      <div className="relative w-full max-w-6xl h-[30vh] flex justify-center items-center rounded-4xl overflow-hidden">
        {/* Gradient border using padding + pseudo-element */}
        <div
          className="absolute inset-0 rounded-4xl bg-linear-to-b from-primary via-white to-primary"
          style={{
            padding: "2px",

            mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            maskComposite: "exclude",
            WebkitMaskComposite: "xor",
          }}
        />

        {/* Content container */}
        <div className="relative w-full h-full rounded-4xl overflow-hidden z-10">
          {/* Background video */}
          <video
            className="absolute inset-0 w-full h-full object-cover object-center opacity-40"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/vertical-healthcare.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Content overlay */}
          <div className="relative z-10 text-center h-full">
            <div className=" mx-auto h-full flex flex-col justify-center items-center ">
              <h2 className="text-gray-300 text-3xl  font-bold">
                Redefining Healthcare by Integrating
              </h2>
              <h1 className="text-white text-7xl mt-2 font-bold tracking-tight">
                Cutting-Edge AI Models
              </h1>
            </div>
          </div>
        </div>
      </div>
      <p className="text-gray-300 text-xs md:text-base leading-relaxed max-w-3xl mx-auto mt-8 text-center">
        Large-Scale Automation, And Real-Time Intelligence Into Mission-Critical
        Applications. Our Expertise Spans Health Insurance, Life Sciences, And
        Radiology, Enabling Data-Driven Decision-Making, Faster Diagnostics, And
        Seamless Automation While Ensuring Full Compliance With HIPAA & FHIR.
      </p>
    </div>
  );
}
