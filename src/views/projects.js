/*
 *   Copyright (c) 2024 
 *   All rights reserved.
 */

import { projects } from '../utils/consts';
import VerticalCarousel from '../components/Carousel/Carousel';

export default function ProjectsPage() {

  return (
    <div className="flex flex-col h-screen justify-start items-center px-4 md:px-12">
      <h1 className="text-5xl font-semibold text-center dark:text-white text-black mt-12 mb-8">
        My Experience
      </h1>
      <div className="flex flex-col md:flex-row justify-between items-start w-full max-w-4xl">
        <div className="md:w-1/2">
          <p className="dark:text-white text-black font-light text-center md:text-left md:pr-4">
            I have a diverse background in web development and engineering, ranging from
            crafting websites tailored to specific design requirements, developing WordPress sites, or building onto apps. 
            The carousel showcases a
            selection of projects that I've had the privilege of contributing
            to, each reflecting my commitment to professional excellence and
            personal growth.
          </p>
        </div>
        <div className="w-full md:w-1/2 h-3/4 flex justify-center">
          <VerticalCarousel items={projects} />
        </div>
      </div>
    </div>
  );
}