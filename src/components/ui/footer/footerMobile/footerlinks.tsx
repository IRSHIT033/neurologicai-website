import Link from "next/link";
import Image from "next/image";

const links: Record<string, string[]> = {
  Verticals: ["Healthcare", "Manufacturing", "Retail"],
  Services: [
    "Generative-AI",
    "Robotics & Digital Twins",
    "Computer Vision & Video Analysis",
    "Recommendation Engine",
    "Forecasting and Predictive Modelling",
    "Natural Language Processing",
  ],
  Resources: ["Case Studies", "Research Paper", "Blogs", "Docs"],
  Career: ["Work at Neurologic", "Life at Neurologic"],
  Company: ["About", "Team", "Join Us", "Contact"],
};

export default function FooterLinks() {
  return (
    <div className="w-full grid grid-cols-2 gap-x-10 gap-y-3 px-4 py-6 text-white">
      {/* Column 1 */}
      <div className="flex flex-col gap-7">
        {/* Verticals */}
        <div>
          <h3 className="text-[13px] font-bold border-l-4 border-purple-500 pl-2">
            Verticals
          </h3>
          <ul className="space-y-1 lg:space-y-3 mt-3">
            {links["Verticals"].map((link) => (
              <li key={link}>
                <Link
                  href={`/verticals/${link.toLowerCase().replace(/ /g, "-")}`}
                  className="text-[#FFFFFF] opacity-50 text-[10px] hover:text-white transition"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-[13px] font-bold border-l-4 border-purple-500 pl-2">
            Resources
          </h3>
          <ul className="space-y-1 lg:space-y-3 mt-3">
            {links["Resources"].map((link) => (
              <li key={link}>
                <Link
                  href={`/resources/${link.toLowerCase().replace(/ /g, "-")}`}
                  className="text-[#FFFFFF] opacity-50 text-[10px] hover:text-white transition"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Career */}
        <div>
          <h3 className="text-[13px] font-bold border-l-4 border-purple-500 pl-2">
            Career
          </h3>
          <ul className="space-y-1 lg:space-y-3 mt-3">
            {links["Career"].map((link) => (
              <li key={link}>
                <Link
                  href={`/career/${link.toLowerCase().replace(/ /g, "-")}`}
                  className="text-[#FFFFFF] opacity-50 text-[10px] hover:text-white transition"
                  style={{ lineHeight: 1.3 }}
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Awards & LinkedIn Images */}
        <div className="flex gap-4 items-center">
          <Image src="/business-award.svg" alt="Award" width={64} height={30} />
          <Link href="https://linkedin.com" target="_blank">
            <Image src="/Linkedin.svg" alt="LinkedIn" width={30} height={30} />
          </Link>
        </div>
      </div>

      {/* Column 2 */}
      <div className="flex flex-col gap-6">
        {/* Services (Written Differently) */}
        <div>
          <h3 className="text-[13px] font-bold border-l-4 border-purple-500 pl-2">
            Services
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
            {links["Services"].map((link) => (
              <Link
                key={link}
                href={`/services/${link.toLowerCase().replace(/ /g, "-")}`}
                className="text-[#FFFFFF] opacity-50 text-[10px] hover:text-white transition"
                style={{ lineHeight: 1.3 }}
              >
                {link}
              </Link>
            ))}
          </div>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-[13px] font-bold border-l-4 border-purple-500 pl-2 mt-3">
            Company
          </h3>
          <ul className="space-y-1 lg:space-y-3 mt-3">
            {links["Company"].map((link) => (
              <li key={link}>
                <Link
                  href={`/company/${link.toLowerCase().replace(/ /g, "-")}`}
                  className="text-[#FFFFFF] opacity-50 text-[10px] hover:text-white transition"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
