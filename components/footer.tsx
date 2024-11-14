import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white p-4 dark:bg-gray-800 md:p-8 lg:p-10">
      <div className="mx-auto max-w-screen-xl text-center">
        {/* Logo and Title */}
        <a
          href="#"
          className="flex items-center justify-center text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <svg
            className="mr-2 h-8"
            viewBox="0 0 33 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* SVG paths for logo */}
            <path
              d="M25.2696 13.126C25.1955 13.6364 24.8589 14.3299 24.4728 14.9328C23.9856 15.6936 23.2125 16.2264 22.3276 16.4114L18.43 17.2265C17.8035 17.3575 17.2355 17.6853 16.8089 18.1621L14.2533 21.0188C13.773 21.5556 13.4373 21.4276 13.4373 20.7075C13.4315 20.7342 12.1689 23.9903 15.5149 25.9202C16.8005 26.6618 18.6511 26.3953 19.9367 25.6538L26.7486 21.7247C29.2961 20.2553 31.0948 17.7695 31.6926 14.892C31.7163 14.7781 31.7345 14.6639 31.7542 14.5498L25.2696 13.126Z"
              fill="url(#paint0_linear_11430_22515)"
            />
            {/* (Add remaining paths and gradient definitions here) */}
          </svg>
          Flowbite
        </a>

        {/* Description */}
        {/* <p className="my-6 text-gray-500 dark:text-gray-400">
          Open-source library of over 400+ web components and interactive
          elements built for better web.
        </p> */}

        {/* Navigation Links */}
        <ul className="mb-6 flex flex-wrap items-center justify-center text-gray-900 dark:text-white">
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              About
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Contact
            </a>
          </li>
        </ul>

        {/* Copyright */}
        <span className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
          © 2021-2022{" "}
          <a href="#" className="hover:underline">
            Flowbite™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
