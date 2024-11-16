/* eslint-disable @next/next/no-img-element */
import React from "react";

interface ProjectProps {
  number: string;
  title: string;
  description: string;
  imageLight: string;
  imageDark: string;
  reverse?: boolean;
}

const Project: React.FC<ProjectProps> = ({
  number,
  title,
  description,
  imageLight,
  imageDark,
  reverse = false,
}) => {
  return (
    <section className="md:py-15 bg-primary-black px-4 py-10 md:px-20">
      <div
        className={`mx-auto max-w-screen-xl items-center gap-8 px-4 py-8 sm:py-16 md:grid md:grid-cols-2 lg:px-6 xl:gap-16 ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* Conditionally rendered image on the left or right based on "reverse" prop */}
        <div className={`${reverse ? "order-last" : ""} flex`}>
          <img
            className="w-full dark:hidden"
            src={imageLight}
            alt="project image"
          />
          <img
            className="hidden w-full dark:block"
            src={imageDark}
            alt="project image"
          />
        </div>
        <div className="mt-4 md:mt-0">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            {number}
          </h2>
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h2>
          <p className="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">
            {description}
          </p>
          <a
            href="#"
            className="bg-primary-700 focus:ring-primary-300 dark:focus:ring-primary-900 inline-flex items-center rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-black focus:ring-4"
          >
            Get started
            <svg
              className="-mr-1 ml-2 size-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

const Projects: React.FC = () => {
  return (
    <div>
      <div className="mb-4 text-center md:mb-8">
        <h1 className="text-display-medium font-regular text-primary-black dark:text-primary-white">
          My <span className="font-extrabold">Projects</span>
        </h1>
      </div>
      <Project
        number="01"
        title="Let's create more tools and ideas that bring us together."
        description="Flowbite helps you connect with friends and communities of people who share your interests. Connecting with your friends and family as well as discovering new ones is easy with features like Groups."
        imageLight="project1.png"
        imageDark="project1.png"
        reverse={false}
      />
      <Project
        number="02"
        title="Build seamless integration experiences with our tools."
        description="Our platform offers developers and businesses the tools needed to integrate seamlessly, enabling global reach and smooth transactions."
        imageLight="project2.png"
        imageDark="project2.png"
        reverse={true}
      />
      <Project
        number="03"
        title="Empower your team with tools that scale."
        description="Our solution is built to help teams scale efficiently, offering powerful collaboration tools and project management capabilities."
        imageLight="project3.png"
        imageDark="project3.png"
        reverse={false}
      />
    </div>
  );
};

export default Projects;
