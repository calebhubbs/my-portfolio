/*
 *   Copyright (c) 2024 
 *   All rights reserved.
 */
import { useState } from 'react';
import CarouselItem from './Carouseltem';
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

export default function VerticalCarousel({ items }) {
 const [currentIndex, setCurrentIndex] = useState(0);
 const [transitionDirection, setTransitionDirection] = useState("");

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + items.length) % items.length);
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % items.length);
  };

  const visibleItems = [
    items[(currentIndex - 1 + items.length) % items.length], // Previous item
    items[currentIndex], // Current item
    items[(currentIndex + 1) % items.length], // Next item
  ];

  return (
    <div className="relative flex flex-col items-center justify-center h-full overflow-hidden">
      {visibleItems.map((item, index) => (
        <CarouselItem
          key={index}
          item={item}
          opacity={index === 1 ? "opacity-100 z-10" : "opacity-50"}
          transform={index === 1 ? "scale(1.1)" : "scale(0.9)"}
          isActive={index === 1}
          transitionDirection={transitionDirection}
        />
      ))}
      <button
        className="absolute left-1/2 bottom-0 transform -translate-x-1/2 p-2 bg-opacity-60 bg-black text-white mb-2"
        onClick={handlePrev}
      >
        <FaAngleDown />
      </button>
      <button
        className="absolute left-1/2 top-0 transform -translate-x-1/2 p-2 bg-opacity-60 bg-black text-white mt-2"
        onClick={handleNext}
      >
        <FaAngleUp />
      </button>
    </div>
  );
};

