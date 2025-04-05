"use client";
import Image from "next/image";

type TeamMember = {
  name: string;
  title: string;
  titleColor: string;
  education: string[];
  experience: string;
  image: string;
};

export default function ExecutiveTeam() {
  const teamMembers: TeamMember[] = [
    {
      name: "Dr. Santanu Das",
      title: "Chairman of the Board",
      titleColor: "text-purple-400",
      education: ["PhD (EE)", "Washington University"],
      experience: "52 Years",
      image: "/dr-santanu-das.png?height=200&width=200",
    },
    {
      name: "John Gillotte",
      title: "Co-Founder & CTO",
      titleColor: "text-purple-400",
      education: ["BS (Computer Science)", "M.Tech University of Michigan"],
      experience: "23 Years",
      image: "/john.png?height=200&width=200",
    },
    {
      name: "Nishan Ali",
      title: "Founder & CEO",
      titleColor: "text-purple-500",
      education: ["Mtech (AI)", "IIT Jodhpur"],
      experience: "9 Years",
      image: "/nishan-ali.png?height=200&width=200",
    },
    {
      name: "Indranil Basu",
      title: "Principal Data Science Advisor",
      titleColor: "text-purple-500",
      education: [
        "Btech (Hons) (Electrical Engineering)",
        "IIT, Kharagpur - MSTech (CS) - ISI Kolkata",
      ],
      experience: "18 Years",
      image: "/Indranil-basu.png?height=200&width=200",
    },
    {
      name: "Aditya Bhattachariya",
      title: "Principal Data Science & Engineering Advisor",
      titleColor: "text-purple-500",
      education: ["MS (Machine Learning)", "Georgia Institute of Tech"],
      experience: "9 Years",
      image: "/aditya.png?height=200&width=200",
    },
  ];

  return (
    <section className=" px-6 lg:px-8 mt-10  text-white h-auto lg:min-h-[70vh]">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-center poppinsTextSemiBold  mb-4 bg-gradient-to-r from-blue from-40% via-primary via-60%  to-white bg-clip-text text-transparent ">
          Senior Team
        </h1>
        <p className="text-sm lg:text-lg lg:text-center max-w-3xl mx-auto mb-16 poppinsTextLight">
          Discover the visionaries leading our team, committed to pioneering new
          frontiers and creating transformative results
        </p>

        <div className="flex flex-row flex-wrap justify-between md:grid md:grid-cols-2 lg:grid-cols-5 gap-2 lg:gap-8 justify-items-center">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="relative mb-4 lg:mb-6">
                <div className="absolute inset-0 rounded-full bg-purple-900/50 blur-md transform scale-110"></div>
                <div className="relative w-11 h-12 sm:w-20 sm:h-20 md:w-30 md:h-30 lg:w-48 lg:h-48 rounded-full overflow-hidden ">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover grayscale"
                  />
                </div>
              </div>

              <h3 className="text-[9px] sm:text-md md:text-xl font-semibold text-center mb-1 ">
                {member.name}
              </h3>
              <p className=" font-bold text-primary-bright tracking-tighter text-[8px] sm:text-sm md:text-base text-center min-h-auto lg:min-h-10 ">
                {member.title}
              </p>

              <div className="text-[7px] sm:text-sm text-gray-300 text-center mb-3 h-8">
                {member.education.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* <div className="flex flex-row flex-wrap justify-between md:grid md:grid-cols-2 lg:grid-cols-5 gap-2 md:gap-8 lg:justify-start overflow-x-auto px-1 md:px-2">
  {teamMembers.map((member, index) => (
    <div
      key={index}
      className="flex flex-col items-center min-w-[40px] md:min-w-[120px] lg:min-w-[180px] md:min-w-0"
    >
      <div className="relative mb-4">
        <div className="absolute inset-0 rounded-full bg-purple-900/50 blur-md transform scale-110"></div>
        <div className="relative w-12 h-12 sm:w-20 sm:h-20 md:w-30 md:h-30 lg:w-48 lg:h-48 rounded-full overflow-hidden">
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover grayscale"
          />
        </div>
      </div>

      <h3 className="text-[9px] sm:text-md md:text-xl font-semibold text-center mb-0 md:mb-1">
        {member.name}
      </h3>
      <p className="text-primary-bright font-bold text-[9px] sm:text-sm md:text-base tracking-tighter text-center min-h-auto lg:min-h-10">
        {member.title}
      </p>

      <div className="text-[7px] sm:text-sm text-gray-300 text-center mb-3 h-8">
        {member.education.map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>
    </div>
  ))}
</div> */}

      </div>
    </section>
  );
}
