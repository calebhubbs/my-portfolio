/*
 *   Copyright (c) 2024 
 *   All rights reserved.
 */
import { useState } from 'react';

export default function CarouselItem({
  item,
  isActive,
  opacity,
  transform,
  transitionDirection,
}) {
  const [isHovered, setIsHovered] = useState(false);
  const transitionClass =
    transitionDirection === "up"
      ? "slide-up-enter-active"
      : "slide-down-exit-active";

  return (
    <div
      className={`relative w-64 h-64 transition-opacity duration-300 ${opacity} ${
        isActive ? transitionClass : ""
      }`}
      style={{ transform }}
    >
      <a href={item.url} target="_blank" rel="noopener noreferrer">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover"
        />
      </a>
      {isActive ? (
        <div
          className="absolute bottom-0 left-0 p-4 text-white bg-opacity-60 bg-black w-full"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {isHovered && item.description ? (
            <p className="text-sm text-black dark:text-white">
              {item.description}
            </p>
          ) : (
            <h2 className="text-lg font-semibold text-black dark:text-white">
              {item.title}
            </h2>
          )}
        </div>
      ) : null}
    </div>
  );
};