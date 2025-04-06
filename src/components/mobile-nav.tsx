"use client";

import { useState } from "react";
import { ChevronLeft, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { NavItems } from "./navbar";

export default function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Reset expanded item when closing menu
    if (!isOpen === false) {
      setExpandedItem(null);
    }
  };

  const toggleAccordion = (title: string) => {
    setExpandedItem((prev) => (prev === title ? null : title));
  };

  // Filter out the Logo item for mobile navigation
  const mobileNavItems = NavItems.filter((item) => item.navtitle !== "Logo");

  return (
    <>
      <div className="h-[5vh]"
      />
      <header
        className={cn(
          "fixed w-screen z-50 inset-0 ",
          isOpen ? "h-full" : "h-[10vh]"
        )}
      >
        {/* Navbar */}
        <nav className="relative  flex items-center justify-between px-6 py-4 bg-background text-white">
          <div className="text-xl font-bold">
            <Link href="/">
              <Image
                src="/Logo.svg"
                alt="Neurologicai logo"
                width={150}
                height={150}
                className="w-[100] md:w-[150] lg:w-auto"
              />
            </Link>
          </div>
          <button
            onClick={toggleMenu}
            className="focus:outline-none cursor-pointer"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <Menu
              className={cn(
                "h-6 w-6",
                isOpen ? "text-primary-bright" : "text-white"
              )}
            />
          </button>
        </nav>

        {/* Mobile Navigation Drawer */}
        <div
          className={cn(
            "fixed  h-screen w-full bg-background z-50 text-white transform transition-transform duration-300 ease-in-out",
            isOpen
              ? "translate-x-0 pointer-events-auto"
              : "translate-x-full pointer-events-none"
          )}
        >
          <div className="px-6 py-4 overflow-y-auto h-screen">
            <ul>
              {mobileNavItems.map((item) => (
                <li key={item.navtitle}>
                  {item.services ? (
                    <div>
                      {(expandedItem === item.navtitle ||
                        expandedItem === null) && (
                        <button
                          onClick={() => toggleAccordion(item.navtitle)}
                          className="flex items-center justify-between w-full text-left py-2 cursor-pointer"
                          aria-expanded={expandedItem === item.navtitle}
                        >
                          <div className="my-4 w-full flex justify-between">
                            <div className="flex items-center ">
                              <ChevronLeft
                                className={cn(
                                  "h-5 w-5 mr-4 transition-transform ",
                                  expandedItem === item.navtitle
                                    ? "-rotate-90"
                                    : ""
                                )}
                              />
                            </div>
                            <span className="text-2xl whitespace-nowrap font-extrabold">
                              {item.navtitle}
                            </span>
                          </div>
                        </button>
                      )}

                      {expandedItem === item.navtitle && (
                        <ul className="pl-9 mt-4 space-y-4">
                          <div className="flex justify-between text-primary-bright">
                            <ChevronLeft className="" />
                            <a href={item.services[0].href}>
                              <span className="font-bold text-xl">
                                {item.moretext}
                              </span>
                            </a>
                          </div>
                          {item.services.map((service, index) => (
                            <li key={index} className="mb-4 text-right">
                              <a href={service.href} className="block">
                                <h3 className="text-lg  text-white font-bold">
                                  {service.title}
                                </h3>
                                <p className="text-sm text-gray-400 mt-1">
                                  {service.description}
                                </p>
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <a href="#" className="flex items-center py-2">
                      <span className="text-xl">{item.navtitle}</span>
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}
