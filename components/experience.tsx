import React from "react";
import { FaGoogle, FaYoutube, FaApple } from "react-icons/fa";

const Experience = () => {
  return (
    <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
      <div className="mx-auto max-w-4xl px-4">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
            My Experience
          </h2>
        </div>

        <div className="space-y-6">
          {/* Experience 1 */}
          <div className="flex flex-col rounded-lg bg-gray-100 p-6 shadow dark:bg-gray-800">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="mb-2 flex items-center md:mb-0">
                <FaGoogle className="mr-2 text-2xl text-red-500" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Lead Software Engineer at Google
                </h3>
              </div>
              <span className="text-sm text-gray-500 dark:text-gray-400 md:ml-4 md:text-right">
                Nov 2019 – Present
              </span>
            </div>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              As a Senior Software Engineer at Google, I played a pivotal role
              in developing innovative solutions for Google's core search
              algorithms. Collaborating with a dynamic team of engineers, I
              contributed to the enhancement of search accuracy and efficiency,
              optimizing user experiences for millions of users worldwide.
            </p>
          </div>

          {/* Experience 2 */}
          <div className="flex flex-col rounded-lg bg-gray-100 p-6 shadow dark:bg-gray-800">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="mb-2 flex items-center md:mb-0">
                <FaYoutube className="mr-2 text-2xl text-red-600" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Software Engineer at YouTube
                </h3>
              </div>
              <span className="text-sm text-gray-500 dark:text-gray-400 md:ml-4 md:text-right">
                Jan 2017 – Oct 2019
              </span>
            </div>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              At YouTube, I served as a Software Engineer, focusing on the
              design and implementation of backend systems for the social media
              giant's dynamic platform. Working on projects that involved
              large-scale data processing and user engagement features, I
              leveraged my expertise to ensure seamless functionality and
              scalability.
            </p>
          </div>

          {/* Experience 3 */}
          <div className="flex flex-col rounded-lg bg-gray-100 p-6 shadow dark:bg-gray-800">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="mb-2 flex items-center md:mb-0">
                <FaApple className="mr-2 text-2xl text-gray-800" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Junior Software Engineer at Apple
                </h3>
              </div>
              <span className="text-sm text-gray-500 dark:text-gray-400 md:ml-4 md:text-right">
                Jan 2016 – Dec 2017
              </span>
            </div>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
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
