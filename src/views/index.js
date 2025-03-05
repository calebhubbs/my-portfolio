/*
 *   Copyright (c) 2024 
 *   All rights reserved.
 */
import { useState, useEffect } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

import '../App.css';


export default function HomePage() {
const titles = [
  "Full-Stack Engineer",
  "Web Developer",
  "Astronomy Enthusiast",
  "Health & Wellness Advocate",
  "Coffee Connoisseur",
];
const [currentIndex, setCurrentIndex] = useState(0);
const [charIndex, setCharIndex] = useState(0);
const [blink, setBlink] = useState(true);

useEffect(() => {
  const typeTimeout = setTimeout(() => {
    setCharIndex((prevCharIndex) => {
      if (prevCharIndex < titles[currentIndex].length) {
        return prevCharIndex + 1;
      }
      return prevCharIndex;
    });
  }, 150);


  const changeTitleTimeout = setTimeout(() => {
    if (charIndex === titles[currentIndex].length) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
      setCharIndex(0);
    }
  }, 1000);

  // Blinking cursor effect
  const blinkTimeout = setInterval(() => {
    setBlink((prevBlink) => !prevBlink);
  }, 500);

  return () => {
    clearTimeout(typeTimeout);
    clearTimeout(changeTitleTimeout);
    clearInterval(blinkTimeout);
  };
}, [charIndex, currentIndex]);

return (
  <div className="flex flex-col min-h-screen justify-center space-y-3">
    <div className="flex flex-col justify-center items-start">
      <h1 className="text-center text-4xl md:text-7xl text-gray-400 font-extrabold ps-2 tracking-wider">Caleb Hubbs</h1>
      <p className="md:text-2xl text-lg ps-4">
        <span className="multicolortext">
          {titles[currentIndex].substring(0, charIndex)}
        </span>
        <span
          className={` blinking-cursor multicolortext font-extrabold ${
            blink ? "visible" : "invisible"
          }`}
        >
          _
        </span>
      </p>
    </div>
    <div className="flex items-start ps-4 space-x-2">
      <a
        href="https://www.linkedin.com/in/caleb-hubbs-7a163a158/"
        target="_blank"
      >
        <FaLinkedin className="text-gray-400 hover:text-gray-300 cursor-pointer h-6 w-6" />
      </a>
      <a
        href="https://github.com/calebhubbs"
        target="_blank"
      >
        <FaGithub className="text-gray-400 hover:text-gray-300 cursor-pointer h-6 w-6" />
      </a>
      <a
        href="mailto: calebhubbs33@gmail.com"
        target="_blank"
      >
        <FaEnvelope className="text-gray-400 hover:text-gray-300 cursor-pointer h-6 w-6" />
      </a>
    </div>
  </div>
);
}