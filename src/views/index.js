/*
 *   Copyright (c) 2024
 *   All rights reserved.
 */
import { useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import '../App.css';

const TITLES = [
  "Staff Engineer",
  "Reader",
  "Runner",
  "Coffee Enthusiast",
  "Mentor",
];

// 10% faster than the original 150ms/char, 1000ms hold
const CHAR_MS = 135;
const HOLD_MS = 900;
const CYCLE_MS = TITLES.reduce((sum, title) => sum + title.length * CHAR_MS + HOLD_MS, 0);

export default function HomePage() {
  const stopRef = useRef(null);

  // Callback ref: fires with the node on mount, with null on unmount.
  // Lets us start/stop a rAF loop without useEffect (works in React 18+).
  const typewriterRef = useCallback((node) => {
    if (!node) {
      stopRef.current?.();
      stopRef.current = null;
      return;
    }

    let frameId;
    const startTime = performance.now();

    const tick = (now) => {
      let elapsed = (now - startTime) % CYCLE_MS;

      for (const title of TITLES) {
        const segmentMs = title.length * CHAR_MS + HOLD_MS;
        if (elapsed < segmentMs) {
          const chars = Math.min(Math.floor(elapsed / CHAR_MS), title.length);
          const next = title.substring(0, chars);
          if (node.textContent !== next) node.textContent = next;
          break;
        }
        elapsed -= segmentMs;
      }

      frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);
    stopRef.current = () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <div className="max-w-2xl mx-auto py-16 md:py-24 px-4">
      <Helmet>
        <title>Caleb Hubbs - Staff Engineer & Tech Lead</title>
        <meta name="description" content="Staff engineer and tech lead at YouVersion. Building products used by millions. Runner, mentor, and outdoor enthusiast based in Oklahoma." />
      </Helmet>
      <h1 className="text-3xl md:text-4xl font-bold text-neutral-100 mb-2">
        <Link
          to="/about"
          className="underline decoration-neutral-500 underline-offset-4 hover:decoration-neutral-300 transition-colors"
        >
          Caleb Hubbs
        </Link>
      </h1>

      <p className="md:text-xl text-lg mb-8">
        <span ref={typewriterRef} className="multicolortext" />
        <span className="blinking-cursor multicolortext font-extrabold">
          _
        </span>
      </p>

      <div className="space-y-5 text-neutral-300 leading-relaxed text-base md:text-lg">
        <p>
          What's up! I'm a{" "}
          <span className="text-neutral-100">staff engineer</span> and{" "}
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
          years, and I've never really lost that competitive side. I've since
          run the{" "}
          <span className="text-neutral-100">OKC Marathon</span>, a backyard
          ultra, and a half marathon, and I'm still chasing a Boston qualifier.
        </p>

        <p>
          When I'm not running, I'm probably reading books, taking a long walk, catching a sunset, or watching sports. I'm happiest when I'm helping people, whether
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
              href="https://cclegalaid.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-300 underline decoration-neutral-500 underline-offset-2 hover:decoration-neutral-300 transition-colors"
            >
              Community Legal
            </a>
          </li>
        </ul>

        <p>
          Coming soon:
        </p>

        <ul className="list-disc list-inside space-y-1 pl-1 text-neutral-400">
          <li>Pegasus</li>
          <li>Cruse</li>
        </ul>

        <p>
          To see my code:{" "}
          <a
            href="https://github.com/calebhubbs"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-neutral-500 underline-offset-2 hover:decoration-neutral-300 transition-colors"
          >
            GitHub
          </a>
          , to connect:{" "}
          <a
            href="https://www.linkedin.com/in/caleb-hubbs-7a163a158/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-neutral-500 underline-offset-2 hover:decoration-neutral-300 transition-colors"
          >
            LinkedIn
          </a>
          , to get in touch:{" "}
          <a
            href="mailto:calebhubbs33@gmail.com"
            className="underline decoration-neutral-500 underline-offset-2 hover:decoration-neutral-300 transition-colors"
          >
            Email
          </a>
          .
        </p>
      </div>
    </div>
  );
}
