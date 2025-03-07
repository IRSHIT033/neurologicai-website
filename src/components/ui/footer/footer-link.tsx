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

export default function FooterLinks() {
  return (
    <div className="grid grid-cols-4 gap-36">
      {" "}
      {/* Increased gap between columns */}
      {Object.keys(links).map((category) => (
        <div key={category} className="flex flex-col items-start gap-5">
          <h3 className="text-white text-[13px]  font-medium leading-[26px] tracking-[-0.001px]">
            {category}
          </h3>
          <ul className="space-y-2">
            {links[category].map((link) => (
              <li key={link}>
                <Link
                  href={`/${category.toLowerCase()}/${link
                    .toLowerCase()
                    .replace(/ /g, "-")}`}
                  className="text-[#979797] text-[13px]  font-normal leading-[26px] tracking-[-0.001px] hover:text-white transition"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
