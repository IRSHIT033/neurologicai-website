import Image from "next/image";
import { Linkedin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function TeamDirectory() {
  const teamMembers = [
    {
      name: "Ishan Mishra",
      title: "Data scientist",
      education: ["M.Tech (CSE)", "PhD (CSE)", "IIT Jodhpur"],
      image: "/headshots/IshanMishra.png?height=200&width=200",
    },
    {
      name: "Pranta Das",
      title: "Lead Data Scientist",
      education: ["M.Tech CS (IIS Kolkata)", "M.Sc Math (IIT Kanpur)"],
      image: "/headshots/PrantaDas.png?height=200&width=200",
    },
    {
      name: "Yaswanth",
      title: "Data scientist",
      education: ["B.Tech", "(Electrical Engineering)", "IIT Kharagpur"],
      image: "/headshots/Yaswanth.png?height=200&width=200",
    },
    {
      name: "Harshad Shinde",
      title: "Data Scientist",
      education: ["M.Tech in", "Computer Science", "IIT Kharagpur"],
      image: "/headshots/HarshadShinde.png?height=200&width=200",
    },
    {
      name: "Abhishek Selokar",
      title: "Data Scientist",
      education: ["M.Tech (Biomedical", "Engineering)", "IIT Kharagpur"],
      image: "/headshots/AbhishekSelokar.png?height=200&width=200",
    },
    {
      name: "Himanshu Kale",
      title: "Associate Data Scientist",
      education: ["M.Tech (Biomedical", "Engineering)", "IIT Kharagpur"],
      image: "/headshots/HimanshuKale.png?height=200&width=200",
    },
    {
      name: "Akash Pal",
      title: "Associate Software Engineer",
      education: ["Masters in Computer Application", "Academy of Technology"],
      image: "/headshots/AkashPal.png?height=200&width=200",
      linkedinurl:
        "https://www.linkedin.com/in/akash-pal-88a015234?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "Irshit Mukherjee",
      title: "Associate Software Engineer",
      education: ["B.Tech (CSE)", "Academy of Technology"],
      image: "/headshots/IrshitMukherjee.png?height=200&width=200",
    },
    {
      name: "Sujan",
      title: "Senior Data Scientist",
      education: [
        "M.Tech. in Computer Science,",
        "ISI Kolkata",
        "M.Sc. in Mathematics,",
        "IIT Bombay",
      ],
      image: "/headshots/Sujan.png?height=200&width=200",
    },
    {
      name: "Soulina Mondal",
      title: "Associate ML Engineer",
      education: ["B.Tech (CSE)", "Academy of Technology"],
      image: "/headshots/SoulinaMondal.png?height=200&width=200",
    },
    {
      name: "Someshwar Srimany",
      title: "Associate Software Engineer",
      education: ["B.Tech (EEE)", "Academy Of Technology"],
      image: "/headshots/SomeshwarSrimany.png?height=200&width=200",
    },
    {
      name: "Yedia Anil Kumar",
      title: "Associate Software Engineer",
      education: [
        "Dual Degree (B.Tech+M.Tech)",
        "in Chemical Engineering",
        "IIT Kharagpur",
      ],
      image: "/headshots/YedlaAnilKumar.png?height=200&width=200",
      linkedinurl: "https://www.linkedin.com/in/yedla-anil-kumar-0b9430230",
    },
    {
      name: "Aditya Bhattachariya",
      title: "Principal Data Science & Engineering Advisor",
      education: ["MS (Machine Learning)", "Georgia Institute of Tech"],
      image: "/headshots/AdityaBhattachariya.png?height=200&width=200",
    },
    {
      name: "Indranil Basu",
      title: "Principal Data Science Advisor",
      education: [
        "B.Tech (Hons) (EE)",
        "IIT Kharagpur",
        "M.Tech (CS) ISI Kolkata",
      ],
      image: "/headshots/IndranilBasu.png?height=200&width=200",
    },
    {
      name: "Rupsa Roy",
      title: "Project Manager",
      education: ["MBA - IIM Kozhikode"],
      image: "/headshots/RupsaRoy.png?height=200&width=200",
    },
    {
      name: "Nishan Ali",
      title: "Founder & CEO",
      education: ["M.Tech (Artificial Intelligence)", "IIT Jodhpur"],
      image: "/headshots/NishanAli.png?height=200&width=200",
    },
    {
      name: "John Gillotte",
      title: "Co-Founder",
      education: ["B.S (Computer Science)", "University of Michigan"],
      image: "/headshots/JohnGillotte.png?height=200&width=200",
    },
    {
      name: "Dr. Santanu Das",
      title: "Chairman of the Board",
      education: ["PhD (Electrical Engineering)", "Washington University"],
      image: "/headshots/DrSantanuDas.png?height=200&width=200",
    },
  ];

  return (
    <div className="bg-background min-h-screen p-4 md:p-6">
      <h2 className="text-5xl py-10  text-center font-bold mb-4 bg-gradient-to-r from-blue from-40% via-primary via-60%  to-white bg-clip-text text-transparent  ">
        Team Neurologicai
      </h2>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="bg-gray-100 overflow-hidden border-0 rounded-lg"
            >
              <CardContent className="p-0 flex h-full">
                <div className="w-1/3 m-2 relative rounded-lg bg-gray-200 overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={`Photo of ${member.name}`}
                    layout="fill"
                    className="h-full w-full object-center object-cover"
                  />
                </div>
                <div className="w-2/3 p-4 flex flex-col justify-between">
                  <div className="h-[90%] flex flex-col ">
                    <h3 className="font-bold text-lg text-background">
                      {member.name}
                    </h3>
                    <p className="text-primary-light text-sm font-medium">
                      {member.title}
                    </p>
                    <div className="mt-2  space-y-0.5">
                      {member.education.map((edu, eduIndex) => (
                        <p key={eduIndex} className="text-gray-600 text-xs">
                          {edu}
                        </p>
                      ))}
                    </div>
                  </div>
                  <div className="h-[10%]">
                    <a
                      href="#"
                      className="inline-block text-gray-400 hover:text-gray-600"
                    >
                      <Linkedin size={18} />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
