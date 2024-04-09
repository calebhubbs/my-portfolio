/*
 *   Copyright (c) 2024 
 *   All rights reserved.
 */
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { BsXLg } from "react-icons/bs"; // Assuming you've imported this
import { FaPlus } from "react-icons/fa"; // Assuming you've imported this

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();


   useEffect(() => {
     setIsOpen(false);
   }, [location]);

  function toggleSidebar() {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        className="absolute top-10 right-10 md:right-20 z-30 flex items-center justify-center dark:text-white text-black text-2xl"
        onClick={toggleSidebar}
      >
        {isOpen ? <BsXLg /> : <FaPlus />}
      </button>
      <div
        className={`absolute top-10 right-0 h-full z-20 pr-6 md:pr-14 shadow-md transition-opacity duration-500 ease-in-out ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      >
        <nav className="flex flex-col justify-start items-center mt-10 text-black dark:text-white text-md h-auto space-y-2 font-bold">
          {location.pathname !== "/" ? (
            <Link
              to="/"
              className="cursor-pointer hover:text-gray-500 dark:hover:text-gray-300"
            >
              Home
            </Link>
          ) : null}
          <Link
            to="/about"
            className="cursor-pointer hover:text-gray-500 dark:hover:text-gray-300"
          >
            About
          </Link>
          <Link
            to="/projects"
            className="cursor-pointer hover:text-gray-500 dark:hover:text-gray-300"
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className="cursor-pointer hover:text-gray-500 dark:hover:text-gray-300"
          >
            Contact
          </Link>
        </nav>
      </div>
    </>
  );
};
