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
      linkedinurl: "https://www.linkedin.com/in/ishanmishra01/",
    },
    {
      name: "Pranta Das",
      title: "Lead Data Scientist",
      education: ["M.Tech CS (IIS Kolkata)", "M.Sc Math (IIT Kanpur)"],
      image: "/headshots/PrantaDas.png?height=200&width=200",
      linkedinurl: "https://www.linkedin.com/in/pranta123/",
    },
    {
      name: "Yaswanth H",
      title: "Data scientist",
      education: ["B.Tech", "(Electrical Engineering)", "IIT Kharagpur"],
      image: "/headshots/Yaswanth.png?height=200&width=200",
      linkedinurl:
        "https://www.linkedin.com/in/yaswanth-haridasoham-8aa27a300/",
    },
    {
      name: "Harshad Shinde",
      title: "Data Scientist",
      education: ["M.Tech in", "Computer Science", "IIT Kharagpur"],
      image: "/headshots/HarshadShinde.png?height=200&width=200",
      linkedinurl: "https://www.linkedin.com/in/harshad-shinde-b36170288/",
    },
    {
      name: "Abhishek Selokar",
      title: "Data Scientist",
      education: ["M.Tech (Biomedical", "Engineering)", "IIT Kharagpur"],
      image: "/headshots/AbhishekSelokar.png?height=200&width=200",
      linkedinurl: "https://www.linkedin.com/in/abhishek-244477175/",
    },
    {
      name: "Himanshu Kale",
      title: "Associate Data Scientist",
      education: ["M.Tech (Biomedical", "Engineering)", "IIT Kharagpur"],
      image: "/headshots/HimanshuKale.png?height=200&width=200",
      linkedinurl: "https://www.linkedin.com/in/himanshu-kale-06308568/",
    },
    {
      name: "Akash Pal",
      title: "Associate Software Engineer",
      education: ["Masters in Computer Application", "Academy of Technology"],
      image: "/headshots/AkashPal.png?height=200&width=200",
      linkedinurl: "https://www.linkedin.com/in/akash-pal-88a015234/",
    },
    {
      name: "Irshit Mukherjee",
      title: "Associate Software Engineer",
      education: ["B.Tech (CSE)", "Academy of Technology"],
      image: "/headshots/IrshitMukherjee.png?height=200&width=200",
      linkedinurl: "https://www.linkedin.com/in/irshit-mukherjee-693a99219/",
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
      linkedinurl: "https://www.linkedin.com/in/sujan-das-a27743204/",
    },
    {
      name: "Soulina Mondal",
      title: "Associate ML Engineer",
      education: ["B.Tech (CSE)", "Academy of Technology"],
      image: "/headshots/SoulinaMondal.png?height=200&width=200",
      linkedinurl: "https://www.linkedin.com/in/soulina-mondal-59a922214/",
    },
    {
      name: "Someshwar Srimany",
      title: "Associate Software Engineer",
      education: ["B.Tech (EEE)", "Academy Of Technology"],
      image: "/headshots/SomeshwarSrimany.png?height=200&width=200",
      linkedinurl: "https://www.linkedin.com/in/someshwarsrimany/",
    },
    {
      name: "Yedla Anil Kumar",
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
      linkedinurl: "https://www.linkedin.com/in/adi-phd/",
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
      linkedinurl: "https://www.linkedin.com/in/indranil-b-9928876/",
    },
    {
      name: "Rupsa Roy",
      title: "Project Manager",
      education: ["MBA - IIM Kozhikode"],
      image: "/headshots/RupsaRoy.png?height=200&width=200",
      linkedinurl: "https://www.linkedin.com/in/rupsaguharoy/",
    },
    {
      name: "Nishan Ali",
      title: "Founder & CEO",
      education: ["M.Tech (Artificial Intelligence)", "IIT Jodhpur"],
      image: "/headshots/NishanAli.png?height=200&width=200",
      linkedinurl: "https://www.linkedin.com/in/nishan-ali-826552166/",
    },
    {
      name: "John Gillotte",
      title: "Co-Founder",
      education: ["B.S (Computer Science)", "University of Michigan"],
      image: "/headshots/JohnGillotte.png?height=200&width=200",
      linkedinurl: "https://www.linkedin.com/in/john-gillotte-78b9531a/",
    },
    {
      name: "Dr. Santanu Das",
      title: "Chairman of the Board",
      education: ["PhD (Electrical Engineering)", "Washington University"],
      image: "/headshots/DrSantanuDas.png?height=200&width=200",
      linkedinurl: "https://www.linkedin.com/in/dr-santanu-das-3917201b",
    },
  ];

  return (
    <div className="bg-background min-h-screen pt-4 md:p-6 px-8">
      <h2 className="text-[18px] lg:text-5xl py-10 text-center poppinsTextSemiBold mb-4 bg-gradient-to-r from-blue from-40% via-primary via-60%  to-white bg-clip-text text-transparent">
        Team Neurologicai
      </h2>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4">
          {teamMembers.map((member, index) => (
            // <Card
            //   key={index}
            //   className="bg-gray-100 overflow-hidden border-0 rounded-lg"
            // >
            //   <CardContent className="p-0 flex h-full">
            //     <div className="w-1/3 m-2 relative rounded-lg bg-gray-200 overflow-hidden">
            //       <Image
            //         src={member.image || "/placeholder.svg"}
            //         alt={`Photo of ${member.name}`}
            //         layout="fill"
            //         className="h-full w-full object-center object-cover"
            //       />
            //     </div>
            //     <div className="w-2/3 p-1 lg:p-4 flex flex-col justify-between">
            //       <div className="h-[90%] flex flex-col ">
            //         <h3 className="font-bold text-[12px] lg:text-lg text-background">
            //           {member.name}
            //         </h3>
            //         <p className="text-primary-light text-[10px] lg:text-sm font-medium">
            //           {member.title}
            //         </p>
            //         <div className="mt-2 space-y-0.5">
            //           {member.education.map((edu, eduIndex) => (
            //             <p key={eduIndex} className="text-gray-600 text-[8px] lg:text-xs">
            //               {edu}
            //             </p>
            //           ))}
            //         </div>
            //       </div>
            //       <div className="h-[10%]">
            //         <a
            //           href="#"
            //           className="inline-block text-gray-400 hover:text-gray-600"
            //         >
            //           <Linkedin size={18} />
            //         </a>
            //       </div>
            //     </div>
            //   </CardContent>
            // </Card>
            <Card
              key={index}
              className="bg-gray-100 overflow-hidden border-0 rounded-lg"
            >
              <CardContent className="p-0 flex h-full">
                {/* Desktop layout */}
                <div className="hidden md:flex w-full">
                  <div className="w-1/3 m-2 relative rounded-lg bg-gray-200 overflow-hidden">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={`Photo of ${member.name}`}
                      layout="fill"
                      className="h-full w-full object-center object-cover"
                    />
                  </div>
                  <div className="w-2/3 p-1 lg:p-4 flex flex-col justify-between">
                    <div className="h-[90%] flex flex-col">
                      <h3 className="font-bold text-[12px] lg:text-lg text-background">
                        {member.name}
                      </h3>
                      <p className="text-primary-light text-[10px] lg:text-sm font-medium">
                        {member.title}
                      </p>
                      <div className="mt-2 space-y-0.5">
                        {member.education.map((edu, eduIndex) => (
                          <p
                            key={eduIndex}
                            className="text-gray-600 text-[8px] lg:text-xs"
                          >
                            {edu}
                          </p>
                        ))}
                      </div>
                    </div>
                    <div className="h-[10%]">
                      <a
                        href={member.linkedinurl}
                        className="inline-block text-gray-400 hover:text-gray-600"
                      >
                        <Linkedin size={18} />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Mobile layout */}
                <div className="flex flex-col md:hidden w-full p-2">
                  <div className="flex items-center space-x-3">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={`Photo of ${member.name}`}
                        layout="fill"
                        className="object-cover"
                      />
                    </div>
                    <h3 className="font-bold text-[12px] text-background">
                      {member.name}
                    </h3>
                  </div>
                  <p className="text-primary-light text-[11px] font-medium mb-0">
                    {member.title}
                  </p>
                  <div className="mt-2 space-y-1">
                    {member.education.map((edu, eduIndex) => (
                      <p key={eduIndex} className="text-gray-600 text-[10px]">
                        {edu}
                      </p>
                    ))}
                  </div>
                  <div className="mt-2 bottom-1">
                    <a
                      href={member.linkedinurl}
                      className="inline-block text-gray-400 hover:text-gray-600"
                    >
                      <Linkedin size={16} />
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
