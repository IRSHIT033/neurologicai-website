export default function Header() {
  return (
    <div className="w-full min-h-[80vh]  flex items-center justify-center p-4 md:p-8">
      {/* Gradient border container using pseudo-elements */}
      <div className="relative w-full max-w-5xl rounded-3xl overflow-hidden">
        {/* Gradient border using padding + pseudo-element */}
        <div
          className="absolute inset-0 rounded-3xl bg-linear-to-b from-primary via-white to-primary"
          style={{
            padding: "2px",

            mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            maskComposite: "exclude",
            WebkitMaskComposite: "xor",
          }}
        />

        {/* Content container */}
        <div className="relative rounded-3xl overflow-hidden  z-10">
          {/* Background video */}
          <video
            className="absolute inset-0 w-full h-full object-cover opacity-40"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/vertical-healthcare.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Content overlay */}
          <div className="relative z-10 text-center">
            <div className="max-w-3xl mx-auto  py-12 md:py-16 mt-20">
              <h2 className="text-gray-300 text-3xl  font-medium">
                Redefining Healthcare by Integrating
              </h2>
              <h1 className="text-white text-5xl  font-bold tracking-tight">
                Cutting-Edge AI Models
              </h1>
              <p className="text-gray-300 text-xs md:text-base leading-relaxed max-w-3xl mx-auto mt-8">
                Large-Scale Automation, And Real-Time Intelligence Into
                Mission-Critical Applications. Our Expertise Spans Health
                Insurance, Life Sciences, And Radiology, Enabling Data-Driven
                Decision-Making, Faster Diagnostics, And Seamless Automation
                While Ensuring Full Compliance With HIPAA & FHIR.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
