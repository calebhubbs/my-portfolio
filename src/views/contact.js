/*
 *   Copyright (c) 2024 
 *   All rights reserved.
 */
export default function ContactPage() {
  return (
    <div className="flex flex-col h-screen items-center justify-center px-4">
      <div className="w-full max-w-lg text-center">
        <h1 className="text-4xl font-semibold mb-4 dark:text-white text-black">
          Let's create something together!
        </h1>
        <p className="text-md mb-6 dark:text-white text-black">
          I'm always open to discussing software development work or partnership
          opportunities. If you have an idea you'd like to bring to life, don't
          hesitate to reach out. As a dedicated software engineer with a passion
          for coding and problem-solving, I thrive on creating elegant solutions
          to complex challenges. Whether it’s developing seamless applications,
          optimizing existing systems, or sharing knowledge, I'm here to help
          you bring your tech dreams to life.
        </p>
        <div className="flex justify-center">
          <a
            className="dark:text-white text-black bg-gray-500 p-3 rounded-full w-20 text-center hover:bg-gray-600"
            href="mailto: calebhubbs33@gmail.com"
            target="_blank"
          >
            Email
          </a>
        </div>
      </div>
    </div>
  );
}
