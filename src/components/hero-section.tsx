import HoverDots from "./ui/dots-hover";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="relative my-0  min-h-[130vh] w-full bg-cover bg-center bg-no-repeat z-0">
      {/* Background Image */}
      <div className="absolute -inset-10 -top-50 bg-[url('/mesh.svg')] bg-cover  bg-no-repeat z-0" />

      {/* Content */}
      <div className="relative flex flex-col items-center justify-center h-64 text-white z-10">
        <div className="text-center mt-48">
          <h1 className="text-3xl md:text-7xl font-bold bg-gradient-to-r from-blue from-0% via-primary via-60% to-white bg-clip-text text-transparent mb-6 md:leading-20">
            Transforming Business <br /> with Intelligence.
          </h1>
        </div>
        <Link href="/contact">
          <button className="cursor-pointer relative z-10 text-md bg-gradient-to-r from-blue from-0% via-primary to-primary-dark mt-6 px-6 py-2 text-white rounded-lg transition flex items-center gap-2">
            Talk To Us
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </Link>
      </div>
      <HoverDots />
    </div>
  );
};

export default HeroSection;
