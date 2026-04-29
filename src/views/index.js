/*
 *   Copyright (c) 2024
 *   All rights reserved.
 */
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import '../App.css';


export default function HomePage() {
  const titles = [
    "Senior Software Engineer",
    "Tech Lead",
    "Runner",
    "Astronomy Enthusiast",
    "Mentor",
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
    <div className="max-w-2xl mx-auto py-16 md:py-24 px-4">
      <Helmet>
        <title>Caleb Hubbs - Senior Software Engineer & Tech Lead</title>
        <meta name="description" content="Senior software engineer and tech lead at YouVersion. Building products used by millions. Runner, mentor, and outdoor enthusiast based in Oklahoma." />
      </Helmet>
      <h1 className="text-3xl md:text-4xl font-bold text-neutral-100 mb-2">
        <Link to="/about" className="hover:text-neutral-300 transition-colors">
          Caleb Hubbs
        </Link>
      </h1>

      <p className="md:text-xl text-lg mb-8">
        <span className="multicolortext">
          {titles[currentIndex].substring(0, charIndex)}
        </span>
        <span
          className={`blinking-cursor multicolortext font-extrabold ${
            blink ? "visible" : "invisible"
          }`}
        >
          _
        </span>
      </p>

      <div className="space-y-5 text-neutral-300 leading-relaxed text-base md:text-lg">
        <p>
          What's up everyone! I'm a{" "}
          <span className="text-neutral-100">senior software engineer</span> and{" "}
          <span className="text-neutral-100">tech lead</span> at{" "}
          <a
            href="https://www.youversion.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-neutral-500 underline-offset-2 hover:decoration-neutral-300 transition-colors"
          >
            YouVersion
          </a>
          , where I've been for over four years.
        </p>

        <p>
          I played{" "}
          <span className="text-neutral-100">college basketball</span> for two
          years, and I've never really lost that competitive side. Right now I'm
          training for the{" "}
          <span className="text-neutral-100">OKC Marathon</span> and working
          toward qualifying for Boston someday. I've done an ultra and a half
          marathon so far. You can follow along on{" "}
          <a
            href="https://strava.app.link/YKLYVXF7G1b"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-neutral-500 underline-offset-2 hover:decoration-neutral-300 transition-colors"
          >
            Strava
          </a>
          .
        </p>

        <p>
          When I'm not running, I'm probably reading books, taking a long walk, catching a sunset, or watching sports on TV. I'm happiest when I'm helping people, whether
          that's through code, mentorship, or just being there.
        </p>

        <p>
          Some things I've worked on:
        </p>

        <ul className="list-disc list-inside space-y-1 pl-1 text-neutral-400">
          <li>
            <a
              href="https://www.bible.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-300 underline decoration-neutral-500 underline-offset-2 hover:decoration-neutral-300 transition-colors"
            >
              Bible.com
            </a>
          </li>
          <li>
            <a
              href="https://apps.apple.com/us/app/bible/id282935706"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-300 underline decoration-neutral-500 underline-offset-2 hover:decoration-neutral-300 transition-colors"
            >
              Bible App (iOS & Android)
            </a>
          </li>
          <li>
            <a
              href="https://give.bible.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-300 underline decoration-neutral-500 underline-offset-2 hover:decoration-neutral-300 transition-colors"
            >
              YouVersion Giving
            </a>
          </li>
          <li>
            <a
              href="https://play.google.com/store/apps/details?id=app.bible.lite.offline&hl=en_US"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-300 underline decoration-neutral-500 underline-offset-2 hover:decoration-neutral-300 transition-colors"
            >
              Bible App Lite
            </a>
          </li>
        </ul>

        <p>
          You can find my{" "}
          <a
            href="https://github.com/calebhubbs"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-neutral-500 underline-offset-2 hover:decoration-neutral-300 transition-colors"
          >
            code
          </a>
          , connect on{" "}
          <a
            href="https://www.linkedin.com/in/caleb-hubbs-7a163a158/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-neutral-500 underline-offset-2 hover:decoration-neutral-300 transition-colors"
          >
            LinkedIn
          </a>
          , or{" "}
          <a
            href="mailto:calebhubbs33@gmail.com"
            className="underline decoration-neutral-500 underline-offset-2 hover:decoration-neutral-300 transition-colors"
          >
            reach out
          </a>{" "}
          if you want to chat.
        </p>
      </div>
    </div>
  );
}
