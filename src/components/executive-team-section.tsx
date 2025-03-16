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
    <section className=" px-4 mt-28  text-white">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-4xl text-center  mb-4 bg-gradient-to-r from-blue from-40% via-primary via-60%  to-white bg-clip-text text-transparent ">
          Senior Team
        </h1>
        <p className="text-lg text-center max-w-3xl mx-auto mb-16">
          Discover the visionaries leading our team, committed to pioneering new
          frontiers and creating transformative results
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 justify-items-center">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="relative mb-6">
                <div className="absolute inset-0 rounded-full bg-purple-900/50 blur-md transform scale-110"></div>
                <div className="relative w-48 h-48 rounded-full overflow-hidden ">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover grayscale"
                  />
                </div>
              </div>

              <h3 className="text-xl font-semibold text-center mb-1 ">
                {member.name}
              </h3>
              <p className=" font-bold text-primary-bright tracking-tighter text-center  min-h-10 ">
                {member.title}
              </p>

              <div className="text-sm text-gray-300 text-center mt-1 mb-3 h-8">
                {member.education.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
