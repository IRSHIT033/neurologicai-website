"use client";
import useDeviceType from "@/hooks/device-check";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import MobileNav from "./mobile-nav";

export const NavItems = [
  {
    navtitle: "About Us",
    moretext: "Learn More About Neurologic AI",
    services: [
      {
        href: "/about",
        title: "Our Vision",
        description:
          "To create a one-stop solution for high-performance AI and ML deliverables in a world of rapid digital transformation",
      },
      {
        href: "/about",
        title: "Our Story",
        description:
          "We are a strong team of dedicated individuals, constantly pushing ourselves beyond our limits, from simply being an AI transformation organization to becoming a leader in enabling global AI transformation.",
      },
      {
        href: "/about",
        title: "Our Mission",
        description:
          "To understand how your business works, resolve bottlenecks, and accelerate business deliveries",
      },
    ],
  },
  {
    navtitle: "Verticals",
    moretext:
      "Beyond the Algorithm: Exploring Neurologic AI's Diverse Verticals",
    services: [
      {
        href: "/verticals/healthcare",
        title: "Healthcare",
        description:
          "Neurologic AI uses AI to transform healthcare. They've developed AI that precisely identifies organs in scans, reads and interprets medical reports, and automates insurance claims. This means faster diagnoses, streamlined care, and improved patient outcomes.",
      },
      {
        href: "/verticals/retail",
        title: "Retail",
        description:
          "Neurologic AI enhances retail with AI & offer vision-based checkouts, real-time inventory, shopper tracking, and voice recommendations. This creates personalized experiences and efficient store operations, keeping retailers ahead.",
      },
      {
        href: "/verticals/manufacturing",
        title: "Manufacturing",
        description:
          "Neurologic AI boosts manufacturing using AI. They offer AI robotics, digital twins, and simulations for better product management. This includes real-time insights, cost predictions, and optimized processes, helping manufacturers stay competitive.",
      },
    ],
  },
  {
    navtitle: "Services",
    moretext: "More About Neurologic AI’ Services",
    services: [
      {
        href: "/services/generative-ai",
        title: "Generative AI",
        description:
          "Creating novel solutions and content with intelligent systems",
      },
      {
        href: "/services/digital-twin-physical-ai-robotics",
        title: "Physical AI & Robotics",
        description:
          "Integrating AI into physical systems for automation and intelligence",
      },
      {
        href: "/services/digital-twin-physical-ai-robotics",
        title: "Digital Twin",
        description:
          "Simulating real-world systems for optimal performance and analysis",
      },
      {
        href: "/services/recommendation-engine",
        title: "Recommendation Engine",
        description:
          "Personalizing experiences with intelligent suggestions and insights",
      },
      {
        href: "/services/computer-vision-&-video-analytics",
        title: "Computer Vision & Video Analytics",
        description:
          "Extracting insights from visual data for informed decisions.x",
      },
      {
        href: "/services/forecasting-&-predictive-modeling",
        title: "Forecasting & Predictive Modeling",
        description: "Anticipating future trends with data-driven predictions",
      },
      {
        href: "/services/natural-language-processing",
        title: "Natural Language Processing",
        description:
          "Understanding and generating human language for seamless communication",
      },
    ],
  },
  {
    navtitle: "Logo",
  },
  {
    navtitle: "Resources",
    moretext: "View Research",
    services: [
      {
        href: "/resources",
        title: "Breakthroughs",
        description: "The Power of AI, Unleashed: Innovation at the Forefront.",
      },
      {
        href: "/resources",
        title: "Our Blogs",
        description: "Explore our recent Blogs",
      },
      {
        href: "/resources",
        title: "Case studies",
        description: "Solving Challenges, Driving Growth",
      },
    ],
  },
  {
    navtitle: "News & Updates",
    moretext: "Stay Updated on Neurologic AI's Latest News",
    services: [
      {
        href: "/news",
        title: "Our Innovation",
        description: "Latest breakthroughs in AI solutions",
      },
      {
        href: "/news",
        title: "Our Developments",
        description: "Updates on our company and product evolution",
      },
      {
        href: "/news",
        title: "Our Advances",
        description: "Progress in our technology and applications.",
      },
    ],
  },
  {
    navtitle: "Contact Us",
    moretext: "Know More About Neurologic AI",
    services: [
      {
        href: "/contact",
        title: "Connect",
        description: "Reach out to discuss your AI needs",
      },
      {
        href: "/contact",
        title: "Engage",
        description: "Start a conversation about AI solutions",
      },
      {
        href: "/contact",
        title: "Inquire",
        description: "Get answers to your Neurologic questions",
      },
    ],
  },
];

const Navbar = () => {
  const router = useRouter();
  const [activeNavItem, setActiveNavItem] = useState<string | null>();
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleActiveNavitem = (title: string) => {
    setActiveNavItem((prev) => (prev === title ? null : title));
  };
  const getCurrentNavServiceDetails = (title: string) => {
    return NavItems.find((navitem) => navitem.navtitle === title) || null;
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setActiveNavItem(null);
      }
    };

    if (activeNavItem) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [activeNavItem]);

  const device = useDeviceType();
  if (device === "lg")
    return (
      <>
        <div className="flex z-1000 relative bg-background  justify-center items-center space-x-20 w-[100vw] h-[15vh]  md:text-lg text-sm  text-white font-bold">
          {NavItems.map((navitem) =>
            navitem.navtitle === "Logo" ? (
              <Link key={navitem.navtitle} href="/">
                <Image
                  src="/Logo.svg"
                  alt="Neurologicai logo"
                  width={250}
                  height={250}
                />
              </Link>
            ) : (
              <div
                key={navitem.navtitle}
                className={cn(
                  "cursor-pointer px-2 py-0.5 rounded-md  transition-all select-none",
                  activeNavItem === navitem.navtitle
                    ? " bg-linear-to-r from-blue via-primary to-primary"
                    : " bg-transparent"
                )}
                onMouseDown={() => {
                  toggleActiveNavitem(navitem.navtitle);
                }}
              >
                {" "}
                {navitem.navtitle}
              </div>
            )
          )}
        </div>
        {activeNavItem &&
          createPortal(
            <>
              <div className="fixed inset-0 bg-black/10 backdrop-blur-sm z-40"></div>
              <div
                ref={dropdownRef}
                className="bg-background absolute top-[15vh] left-0 w-full z-50 py-12 shadow-lg  border-b-1"
              >
                <div className="container mx-auto px-4">
                  <div className="flex justify-between">
                    {/* Services Section */}
                    <div className="w-3/5 pr-8">
                      <Link
                        href="/services"
                        className="text-primary-bright flex items-center mb-6"
                      >
                        <span className="text-xl font-bold">
                          {
                            getCurrentNavServiceDetails(activeNavItem!)
                              ?.moretext
                          }
                        </span>
                        <ChevronRight className="ml-2 h-5 w-5" />
                      </Link>
                      <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                        {getCurrentNavServiceDetails(
                          activeNavItem!
                        )?.services?.map((service, index) => (
                          <div key={index} className="group">
                            <div
                              className="cursor-pointer"
                              onMouseDown={() => {
                                router.push(service.href);
                                setActiveNavItem(null);
                              }}
                            >
                              <h3 className="text-lg font-semibold mb-1 group-hover:text-primary-bright">
                                {service.title}
                              </h3>
                            </div>
                            <p className="text-gray-400 text-sm">
                              {service.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Latest News Section */}
                    <div className="w-2/5">
                      <h3 className="text-lg font-semibold mb-4">
                        Latest in Neurologic
                      </h3>
                      <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                        {Array.from({ length: 2 }).map((_, index) => (
                          <div key={index} className="group">
                            <div className="bg-white h-36 mb-2 rounded-md"></div>
                            <h4 className="text-sm font-medium group-hover:text-primary">
                              Latest news update
                            </h4>
                            <p className="text-xs text-gray-500">
                              March 02, 2025
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>,
            document.body
          )}
      </>
    );
  else return <MobileNav />;
};

export default Navbar;
