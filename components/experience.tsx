import React from "react";
import { FaGoogle, FaYoutube, FaApple } from "react-icons/fa";

const Experience = () => {
  return (
    <section className="bg-primary-black py-8 antialiased md:py-16">
      <div className="mx-auto max-w-screen-xl px-4">
        <div className="mb-8 text-center">
          <h2 className="text-display-medium font-light text-primary-white">
            My <span className="font-extrabold">Experience</span>
          </h2>
        </div>

        <div className="space-y-6">
          {/* Experience 1 */}
          <div className="flex flex-col rounded-lg border-2 border-primary-white bg-primary-black p-6 shadow-md transition-all duration-300 hover:border-primary-white hover:bg-zinc-800 hover:shadow-lg dark:hover:bg-gray-800">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="mb-2 flex items-center md:mb-0">
                <FaGoogle className="mr-2 text-2xl text-red-500" />
                <h3 className="text-xl font-semibold text-primary-white dark:text-primary-white">
                  Lead Software Engineer at Google
                </h3>
              </div>
              <span className="text-sm text-gray-400 md:ml-4 md:text-right">
                Nov 2019 – Present
              </span>
            </div>
            <p className="mt-2 text-gray-300 dark:text-gray-300">
              As a Senior Software Engineer at Google, I played a pivotal role
              in developing innovative solutions for Google&apos;s core search
              algorithms. Collaborating with a dynamic team of engineers, I
              contributed to the enhancement of search accuracy and efficiency,
              optimizing user experiences for millions of users worldwide.
            </p>
          </div>

          {/* Experience 2 */}
          <div className="flex flex-col rounded-lg border-2 border-primary-white bg-primary-black p-6 shadow-md transition-all duration-300 hover:border-primary-white hover:bg-zinc-800 hover:shadow-lg dark:hover:bg-gray-800">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="mb-2 flex items-center md:mb-0">
                <FaYoutube className="mr-2 text-2xl text-red-600" />
                <h3 className="text-xl font-semibold text-primary-white dark:text-primary-white">
                  Software Engineer at YouTube
                </h3>
              </div>
              <span className="text-sm text-gray-400 md:ml-4 md:text-right">
                Jan 2017 – Oct 2019
              </span>
            </div>
            <p className="mt-2 text-gray-300 dark:text-gray-300">
              At YouTube, I served as a Software Engineer, focusing on the
              design and implementation of backend systems for the social media
              giant&apos;s dynamic platform. Working on projects that involved
              large-scale data processing and user engagement features, I
              leveraged my expertise to ensure seamless functionality and
              scalability.
            </p>
          </div>

          {/* Experience 3 */}
          <div className="flex flex-col rounded-lg border-2 border-primary-white bg-primary-black p-6 shadow-md transition-all duration-300 hover:border-primary-white hover:bg-zinc-800 hover:shadow-lg dark:hover:bg-gray-800">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="mb-2 flex items-center md:mb-0">
                <FaApple className="mr-2 text-2xl text-gray-800" />
                <h3 className="text-xl font-semibold text-primary-white dark:text-primary-white">
                  Junior Software Engineer at Apple
                </h3>
              </div>
              <span className="text-sm text-gray-400 md:ml-4 md:text-right">
                Jan 2016 – Dec 2017
              </span>
            </div>
            <p className="mt-2 text-gray-300 dark:text-gray-300">
              During my tenure at Apple, I held the role of Software Architect,
              where I played a key role in shaping the architecture of
              mission-critical software projects. Responsible for designing
              scalable and efficient systems, I provided technical leadership to
              a cross-functional team.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
