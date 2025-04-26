"use client";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import React, { useState, useEffect } from "react";
import { Card, CardContent } from "./ui/card";
import { cn } from "@/lib/utils";

const testimonialsImages = [
  "/testimonials-1.svg",
  "/testimonials-2.svg",
  // "/testimonials-3.svg",
];

const TestimonialSection = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle index change
  useEffect(() => {
    if (!api) return;
    const updateIndex = () => {
      setCurrentIndex(api.selectedScrollSnap());
    };
    api.on("select", updateIndex);
    updateIndex(); // Set initial index
    return () => {
      api.off("select", updateIndex);
    };
  }, [api]);

  return (
    <section className="px-6 md:px-7 lg:px-8 py-8 mt-4 md:py-10  text-center flex flex-col justify-center items-center text-white bg-background">
      <h1 className="text-[16px] sm:text-2xl md:text-4xl min-w-[40vw] md:min-w-full text-center mb-2 md:mb-4 bg-gradient-to-r from-blue from-40% to-primary via-60%  bg-clip-text text-transparent
      poppinsTextSemiBold">
        Clients Who Trust Us, Heres Why
      </h1>
      <p className="text-[10px] md:text-sm text-center max-w-5xl px-1 md:px-4 md:mx-auto mb-3 md:mb-6 lg:mb-16 poppinsTextLight">
        Client satisfaction is the backbone of our business. It&apos;not just
        about providing a satisfactory experience, but going above and beyond to
        exceed the expectations of our clients. This requires having a deep
        understanding of their needs and providing personalized solutions to
        meet them.
      </p>

      <Carousel
        plugins={[plugin.current]}
        className="max-w-5xl"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        setApi={setApi} // Set the API reference
      >
        <CarouselContent>
          {testimonialsImages.map((image, index) => (
            <CarouselItem key={index} className="max-h-[40vh]">
              <div className="lg:p-1">
                <Card className="border-0">
                  <CardContent className="flex items-center justify-center px-1 md:px-2 lg:px-6">
                    <Image
                      src={image}
                      alt={`Testimonial ${index + 1}`}
                      width={850}
                      height={800}
                      className="w-full h-auto transition-transform duration-500 ease-in-out
             scale-125 md:scale-100"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Dots Indicator */}
      <div className="flex justify-center items-center z-10 space-x-1 lg:space-x-4 mt-[-20px] md:mt-0 ">
        {testimonialsImages.map((_, index) => (
          <div
            key={`dot-${index}`}
            className={cn(
              "w-1 h-1 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 rounded-full cursor-pointer transition-all",
              currentIndex === index ? "bg-blue" : "bg-primary-light"
            )}
            onClick={() => api?.scrollTo(index)}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
