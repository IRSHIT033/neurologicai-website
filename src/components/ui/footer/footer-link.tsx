import Link from "next/link";

type LinksType = {
  [key: string]: string[];
};

const links: LinksType = {
  Verticals: ["Healthcare", "Manufacturing", "Retail"],
  Company: ["About", "Team", "Join Us", "Contact"],
  Resources: ["Case Studies", "Research Paper", "Blogs", "Docs"],
  Career: ["Work at Neurologic", "Life at Neurologic"],
};

export default function FooterNavigation() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-16 md:gap-24 px-4 sm:px-6 ml-28 lg:ml-40 text-center md:text-left">
      {/* Column 1: Footer Services (Spanning Two Rows) */}
      <div className="row-span-2 flex flex-col items-center md:items-start">
        {/* Title */}
        <h3 className="text-white text-[13px] font-medium leading-[26px] tracking-[-0.001em] mb-4">
          Services
        </h3>

        {/* Links */}
        <ul className="space-y-2 text-center md:text-left">
          {[
            "Generative-AI",
            "Robotics & Digital Twins",
            "Computer Vision & Video Analysis",
            "Recommendation Engine",
            "Forecasting and Predictive Modelling",
            "Natural Language Processing",
          ].map((service) => (
            <li key={service}>
              <Link
                href={`/services/${service.toLowerCase().replace(/ /g, "-")}`}
                className="text-[#979797] text-[13px] font-normal leading-[18px] tracking-[-0.001em] hover:text-white transition"
              >
                {service}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Column 2 & 3: Footer Links */}
      <div className="ml-24 grid grid-cols-2 sm:grid-cols-4 gap-x-48 gap-y-12 md:gap-24">
        {Object.keys(links).map((category) => (
          <div key={category} className="flex flex-col items-center md:items-start gap-3">
            <h3 className="text-white text-[13px] font-medium leading-[26px] tracking-[-0.001px]">
              {category}
            </h3>
            <ul className="space-y-2 text-center md:text-left">
              {links[category].map((link) => (
                <li key={link}>
                  <Link
                    href={`/${category.toLowerCase()}/${link
                      .toLowerCase()
                      .replace(/ /g, "-")}`}
                    className="text-[#979797] text-[13px] font-normal leading-[18px] tracking-[-0.001px] hover:text-white transition"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {/* 2nd Row Last Column: Business Award Image */}
      <div className="ml-4 sm:ml-8 md:ml-10 col-start-4 row-start-2 flex justify-center items-center md:col-start-5 md:row-start-2 sm:col-start-auto sm:row-start-auto sm:w-full">
        <div className="w-44 h-20 flex-shrink-0 rounded-lg bg-cover bg-no-repeat bg-center bg-[url('/business-award.svg')] sm:w-32 sm:h-16 md:w-44 md:h-20" />
      </div>
    </div>
  );
}