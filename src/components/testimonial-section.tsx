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
  "/testimonial-1.png",
  "/testimonial-2.png",
  "/testimonial-3.png",
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
    <section className="py-16 text-center flex flex-col justify-center items-center text-white">
      <h1 className="text-4xl md:text-4xl text-center mb-4 bg-gradient-to-r from-blue from-40% to-primary via-60%  bg-clip-text text-transparent">
        Clients Who Trust Us, Heres Why
      </h1>
      <p className="text-sm text-center max-w-5xl mx-auto mb-16">
        Client satisfaction is the backbone of our business. It's not just about
        providing a satisfactory experience, but going above and beyond to
        exceed the expectations of our clients. This requires having a deep
        understanding of their needs and providing personalized solutions to
        meet them.
      </p>

      <Carousel
        plugins={[plugin.current]}
        className="relative w-full h-[40vh]"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        setApi={setApi} // Set the API reference
      >
        <CarouselContent>
          {testimonialsImages.map((image, index) => (
            <CarouselItem key={index}>
              <Card className="border-0">
                <CardContent className="flex items-center justify-center p-6">
                  <Image
                    src={image}
                    alt={`Testimonial ${index + 1}`}
                    width={850}
                    height={800}
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Dots Indicator */}
      <div className="flex justify-center items-center space-x-4 mt-4">
        {testimonialsImages.map((_, index) => (
          <div
            key={`dot-${index}`}
            className={cn(
              "w-4 h-4 rounded-full cursor-pointer transition-all",
              currentIndex === index ? "bg-primary" : "bg-primary-light"
            )}
            onClick={() => api?.scrollTo(index)}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
