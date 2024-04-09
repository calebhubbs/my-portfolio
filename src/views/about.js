/*
 *   Copyright (c) 2024 
 *   All rights reserved.
 */

import me from '../images/me.png'

export default function AboutPage() {
  return (
    <div className="flex flex-col h-screen justify-center items-center px-4 md:px-12">
      <h1 className="text-5xl font-semibold text-center dark:text-white text-black md:mb-6">
        About Me
      </h1>
      <div className="flex flex-col md:flex-row justify-center items-center md:items-start w-full max-w-4xl">
        <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
          <img
            alt="Caleb Hubbs - Software Engineer"
            src={me}
            height={256}
            width={256}
          />
        </div>
        <div className="w-full md:w-1/2 p-2">
          <p className="dark:text-white text-black font-extralight text-center md:text-left">
            Howdy! I'm Caleb Hubbs, a dedicated full-stack engineer based in the
            Southern United States. I attended college at Southern Nazarene
            University in Bethany, Oklahoma, where I played basketball and
            majored in Business Administration. My software engineering journey
            kicked off shortly graduation and through a rigorous software
            engineering bootcamp. For the last two years, I've been at a
            non-profit in Edmond, Oklahoma. While here, I've sharpened my skills
            in a variety of technologies including Next.js, TypeScript, React,
            and Python, contributing to websites that have over 25 million
            monthly users, and an app that has more than 15 million daily active
            users. Outside of work, you can find me at the gym, hanging out with
            friend watching sports, enjoying nature, or simply relaxing under
            the stars.
          </p>
        </div>
      </div>
    </div>
  );
}

