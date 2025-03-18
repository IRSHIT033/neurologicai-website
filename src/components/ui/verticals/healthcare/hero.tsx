export default function Header({
  primarytext,
  secondarytext,
  description,
}: {
  primarytext: string;
  secondarytext: string;
  description: string;
}) {
  return (
    <div className="w-full min-h-[25vh]  flex flex-col items-center justify-center p-4 md:p-8">
      {/* Gradient border container using pseudo-elements */}
      <div className="relative w-full max-w-6xl h-[20vh] flex justify-center items-center rounded-4xl overflow-hidden">
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
              <h2 className="text-gray-300 text-xl  font-bold">
                {secondarytext}
              </h2>
              <h1 className="text-white text-5xl mt-2 font-bold tracking-tight">
                {primarytext}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <p className="text-gray-300 text-xs md:text-base leading-relaxed max-w-[60vw] mx-auto mt-8 text-center">
        {description}
      </p>
    </div>
  );
}
