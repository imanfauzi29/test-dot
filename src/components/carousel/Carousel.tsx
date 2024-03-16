"use client";

import { cn } from "@/utils/cn";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface CarouselProps {
  images: string[];
  autoSlide?: boolean;
  interval?: number;
}

const Carousel = ({
  images = [],
  autoSlide = true,
  interval = 3000,
}: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex: number) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex: number) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(nextSlide, interval);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="relative w-full">
      <div className="relative h-56 overflow-hidden rounded-lg md:h-[560px]">
        <div
          className={cn("flex transition ease-out duration-500")}
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {images.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`slide-${index}`}
              width={0}
              height={0}
              sizes="100vw"
              className="w-full object-cover"
            />
          ))}
        </div>
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-0 transform z-40 -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-l"
      >
        Prev
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 transform z-40 -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-r"
      >
        Next
      </button>
    </div>
  );
};

export default Carousel;
