"use client";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import React from "react";
import Image from "next/image";

export default function ExploreSectionHealthcare({
  cards,
}: {
  cards: { id: number; title: string; content: string; src: string }[];
}) {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const toggleCard = (id: number) => {
    setSelectedCard(selectedCard === id ? null : id);
  };
  return (
    <div className="mt-10 mb-50">
      <div className="py-25 md:px-35">
        <div className="text-center text-5xl mb-6">
          Explore Our <span className="font-extrabold"> Solution</span>
        </div>
        <div className="text-center text-lg mb-2">
          Discover a wide range of Solutions
        </div>
      </div>
      <div className="">
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-2 md:px-[10vw]">
            {cards.map((card) => (
              <div
                key={card.id}
                className={`w-full   rounded transition-all duration-100
                        ${
                          selectedCard === card.id
                            ? "h-[calc(100%+1rem)] rounded-b-none "
                            : "bg-gradient-to-r from-purple-800 via-[#4116CE] to-white p-0.25"
                        }`}
              >
                <Card
                  className={`relative p-3.5 flex  h-full 
                                rounded-sm border-none ${
                                  selectedCard === card.id
                                    ? "bg-white rounded-b-none  text-[#4116CE]"
                                    : "bg-background text-white"
                                }`}
                >
                  <h3 className="text-sm font-semibold w-75">{card.title}</h3>
                  <button
                    className="absolute flex align-middle right-2 text-gray-500 hover:text-black"
                    onClick={() => toggleCard(card.id)}
                  >
                    <Image
                      alt="toggler"
                      height={24}
                      width={24}
                      className="cursor-pointer"
                      src={
                        selectedCard === card.id
                          ? "/minus-circle.png"
                          : "/plus-circle.png"
                      }
                    />
                  </button>
                </Card>
                {selectedCard === card.id && (
                  <div className="w-full ">
                    {/* <div className="absolute">{card.title}</div> */}
                    <div
                      className="flex md:flex-row flex-col gap-10 z-20  mx-2 md:mx-[10vw] rounded-b-lg min-h-88
                            absolute left-0 right-0 bg-white px-4 md:px-14  md:pt-18 pb-15 shadow-lg text-black justify-between border-none"
                    >
                      <div className="flex flex-1 flex-col justify-between">
                        <p className="leading-tight text-[17px]">
                          {card.content}
                        </p>
                        <button
                          className="self-start mt-4"
                          onClick={() => toggleCard(card.id)}
                          style={{ color: "#602EEF" }}
                        >
                          Read Case Studies {">"}
                        </button>
                      </div>
                      <div className="flex-1">
                        <Image
                          src={card.src}
                          alt="image missing"
                          width={900}
                          height={400}
                        ></Image>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
