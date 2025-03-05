/*
 *   Copyright (c) 2024 
 *   All rights reserved.
 */

import me from '../images/me.png'

export default function AboutPage() {
  return (
      <div className="flex flex-col px-4 items-center">
        <h1 className="text-5xl font-semibold text-gray-400 mb-4 text-center md:text-left">
          About
        </h1>
        <div className="flex flex-col md:flex-row w-full max-w-4xl">
          <div className="md:w-1/2 flex flex-col items-center pr-2">
            <div className="md:mb-4 flex justify-center">
              <img
                  alt="Caleb Hubbs - Software Engineer"
                  src={me}
                  height={300}
                  width={300}
                  className="rounded-2xl"
              />
            </div>
            <div className="text-white">
              <h2 className="text-xl font-medium mb-2">Current Projects</h2>
              <ul className="list-disc list-inside pl-4 mb-4 space-y-1">
                <li>
                  <a
                      href="https://play.google.com/store/apps/details?id=app.bible.lite.offline&hl=en_US"
                      className=" hover:text-gray-300"
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                    Bible App Lite – YouVersion
                  </a>
                </li>
                <li>AccountaPal – (coming soon)</li>
              </ul>

              <h3 className="text-xl font-medium mb-2">Previous Projects</h3>
              <ul className="list-disc list-inside pl-4 space-y-1">
                <li>
                  <a
                      href="https://www.bible.com"
                      className="hover:text-gray-300"
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                    Bible.com – YouVersion
                  </a>
                </li>
                <li>
                  <a
                      href="https://give.bible.com"
                      className="hover:text-gray-300"
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                    YouVersion Giving – YouVersion
                  </a>
                </li>
                <li>
                  <a
                      href="https://login.youversion.com"
                      className="hover:text-gray-300"
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                    YouVersion Login – YouVersion
                  </a>
                </li>
                <li>
                  <a
                      href="https://www.life.church/give/"
                      className="hover:text-gray-300"
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                    Life.Church Giving – Life.Church
                  </a>
                </li>
                <li>
                  <a
                      href="https://www.life.church/webview-app/multistep-forms/serving/"
                      className="hover:text-gray-300"
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                    Simple Serving Forms – Life.Church
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="md:w-1/2 mt-0 md:pl-6 ">
            <p className="text-white font-extralight text-center md:text-left leading-relaxed">
              Howdy! I'm Caleb, a dedicated full-stack engineer based in the Southern
              United States. For the last three years, I've been at YouVersion in Edmond,
              Oklahoma. While here, I've sharpened my skills in a variety of
              technologies including JavaScript, TypeScript, Dart, and Python,
              contributing to websites that have over 25 million monthly users, and
              an app with more than 1 million daily active users.
              I've been fortunate to learn from mentors, books, and a lot of failure.
              Outside of work, you can find me at the gym, hanging out with friends,
              watching sports, enjoying nature, or simply relaxing under the stars.
            </p>
          </div>
        </div>
      </div>

  );
}

