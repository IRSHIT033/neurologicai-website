/* eslint-disable */

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
import { Card, CardContent } from "@/components/ui/card";

const testimonialsImages = [
  "/testimonials-1.svg",
  "/testimonials-2.svg",
  "/testimonials-3.svg",
];

const AboutUsHeaderCarousel = () => {
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
    <Carousel
      plugins={[plugin.current]}
      className="max-w-5xl"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      setApi={setApi} // Set the API reference
    >
      <CarouselContent>
        {testimonialsImages.map((image, index) => (
          <CarouselItem key={index} className="h-[40vh]">
            <div className="p-1">
              <Card className="border-0">
                <CardContent className="flex items-center justify-center px-6">
                  <Image
                    src={image}
                    alt={`Testimonial ${index + 1}`}
                    width={850}
                    height={800}
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default AboutUsHeaderCarousel;
