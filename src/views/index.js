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

const LINK_CLASS =
  "underline decoration-neutral-500 underline-offset-2 hover:decoration-neutral-300 transition-colors";
const linkProps = {
  target: "_blank",
  rel: "noopener noreferrer",
  className: LINK_CLASS,
};
const LIST_CLASS =
  "mt-1 list-disc list-inside space-y-0.5 pl-1 leading-snug text-neutral-400";

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
    // Centers on a laptop without clipping the top when the content outgrows a
    // short viewport. The 2rem accounts for the p-4 wrapper in App.js.
    <div className="min-h-[calc(100vh-2rem)] flex items-center">
      <div className="w-full max-w-2xl mx-auto py-6 px-4">
        <Helmet>
          <title>Caleb Hubbs - Staff Engineer & Tech Lead</title>
          <meta name="description" content="Full stack staff engineer and tech lead at YouVersion. Building technology for good, used by millions. Runner, mentor, and outdoor enthusiast based in Oklahoma." />
        </Helmet>

        <h1 className="text-3xl md:text-4xl font-bold text-neutral-100 mb-1">
          Caleb Hubbs
        </h1>

        <p className="text-lg md:text-xl mb-6 text-neutral-400">
          <span ref={typewriterRef} />
          <span className="blinking-cursor font-extrabold">_</span>
        </p>

        <div className="space-y-3 text-neutral-300 leading-relaxed text-base md:text-lg">
          <p>
            What's up! I'm a{" "}
            <span className="text-neutral-100">full stack staff engineer</span>{" "}
            and <span className="text-neutral-100">tech lead</span> at{" "}
            <a href="https://www.youversion.com" {...linkProps}>
              YouVersion
            </a>
            , where I've been for over four years. Most of what I build is{" "}
            <span className="text-neutral-100">technology for good</span>, apps
            and websites that actually help the people using them.
          </p>

          <p>
            I played{" "}
            <span className="text-neutral-100">college basketball</span> for two
            years and never really lost that competitive side. I've since run
            the <span className="text-neutral-100">OKC Marathon</span>, a
            backyard ultra, and a half marathon, and I'm still chasing a Boston
            qualifier.
          </p>

          <p>
            When I'm not running, I'm reading, walking, or watching sports. I'm
            happiest when I'm helping people, whether through code, mentorship,
            or just being there.
          </p>

          {/* Side by side on wider screens so both lists stay above the fold. */}
          <div className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
            <div>
              <p>Some things I've worked on:</p>
              <ul className={LIST_CLASS}>
                <li>
                  <a href="https://www.bible.com" {...linkProps}>
                    Bible.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://apps.apple.com/us/app/bible/id282935706"
                    {...linkProps}
                  >
                    Bible App (iOS &amp; Android)
                  </a>
                </li>
                <li>
                  <a href="https://cclegalaid.org/" {...linkProps}>
                    Community Legal
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p>Coming soon:</p>
              <ul className={LIST_CLASS}>
                <li>Pegasus</li>
                <li>Cruse</li>
              </ul>
            </div>
          </div>

          <p>
            To see my code:{" "}
            <a href="https://github.com/calebhubbs" {...linkProps}>
              GitHub
            </a>
            , to connect:{" "}
            <a
              href="https://www.linkedin.com/in/caleb-hubbs-7a163a158/"
              {...linkProps}
            >
              LinkedIn
            </a>
            , to get in touch:{" "}
            <a href="mailto:calebhubbs33@gmail.com" className={LINK_CLASS}>
              Email
            </a>
            . To learn more about me:{" "}
            <Link to="/about" className={LINK_CLASS}>
              here
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
