import React from "react";
import Button from "./button";
import { IconDownload } from "@tabler/icons-react";

const HeroSection = () => {
  return (
    <section className="bg-primary-white py-20 dark:bg-gray-900">
      <div className="mx-auto grid max-w-screen-xl px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0">
        {/* Text Content */}
        <div className="mr-auto place-self-center text-left lg:col-span-7">
          <h1 className="text-display-medium md:text-display-medium xl:text-display-medium font-light text-primary-black dark:text-primary-white">
            Hello I’m <span className="font-extrabold">Justin Osagie.</span>
          </h1>
          <h2 className="text-display-medium md:text-display-medium xl:text-display-medium font-extrabold dark:text-primary-white">
            Fullstack <span className="text-display-outlined">Developer</span>
          </h2>
          <h3 className="text-display-medium md:text-display-medium xl:text-display-medium font-light dark:text-primary-white">
            Based In <span className="font-extrabold">Florida.</span>
          </h3>

          <p className="md:text-h2 lg:text-h2 mt-4 max-w-2xl font-light text-zinc-500 dark:text-zinc-500 lg:mb-8">
            I’m Justin Osagie. Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry’s
            standard dummy text ever since the 1500s, when an unknown printer
            took a galley of type and scrambled it to make a specimen book.
          </p>

          <div className="mt-6 flex space-x-4">
            {/* Buttons */}
            <Button size={"medium"} variant={"default"}>
              Contact
            </Button>
            <Button size={"medium"} variant={"outline"}>
              <span className="mr-2">Resume</span>
              <IconDownload stroke={2} />
            </Button>
          </div>
        </div>

        {/* Image Content */}
        <div className="order-first flex justify-center lg:order-last lg:col-span-5 lg:mt-0">
          <img
            src="/heroImageLarge.svg"
            alt="Evren Shah illustration"
            className="size-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
