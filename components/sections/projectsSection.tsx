/* eslint-disable @next/next/no-img-element */
import React from "react";
import Button from "../button";

interface ProjectProps {
  number: string;
  title: string;
  description: string;
  imageLight: string;
  imageDark: string;
  reverse?: boolean;
  link?: string;
}

const Project: React.FC<ProjectProps> = ({
  number,
  title,
  description,
  imageLight,
  imageDark,
  reverse = false,
  link = "",
}) => {
  return (
    <div className="">
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
        <div className="my-4 md:mt-0">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-primary-white">
            {number}
          </h2>
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-primary-white">
            {title}
          </h2>
          <p className="mb-6 font-light text-zinc-500 md:text-lg">
            {description}
          </p>
          <a
            type="button"
            className="inline-flex items-center p-1 text-center text-xs"
          >
            <img
              className="size-5 bg-transparent"
              src="linkWhite.svg"
              alt="Link Icon"
            />
            <span className="sr-only">Link</span>
          </a>
        </div>
      </div>
    </div>
  );
};

const projectsSection: React.FC = () => {
  return (
    <section
      id="projects"
      className="md:py-15 scroll-mt-navbar-height pt-navbar-height bg-primary-black px-4 py-10 md:px-20"
    >
      <div className="mb-4 text-center md:mb-8">
        <h1 className="text-display-medium font-regular text-primary-white">
          My <span className="font-extrabold">Projects</span>
        </h1>
      </div>
      <Project
        number="01"
        title="Crypto Screener Application"
        description="I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book."
        imageLight="/projectSection/project1.png"
        imageDark="/projectSection/project1.png"
        reverse={false}
      />
      <Project
        number="02"
        title="Euphoria - Ecommerce (Apparels) Website Template"
        description="I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.
                    when an unknown printer took a galley of type and scrambled it to specimen book."
        imageLight="/projectSection/project2.png"
        imageDark="/projectSection/project2.png"
        reverse={true}
      />
      <Project
        number="03"
        title="Blog Website Template"
        description="I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book."
        imageLight="/projectSection/project3.png"
        imageDark="/projectSection/project3.png"
        reverse={false}
      />
    </section>
  );
};

export default projectsSection;
