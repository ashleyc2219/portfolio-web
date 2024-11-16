import React from "react";
import Button from "../button";
import { IconDownload } from "@tabler/icons-react";

const Navbar = () => {
  return (
    <nav className="fixed start-0 top-0 z-20 w-full border-b border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-900">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <a
          href="#home"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src="logo/logo1.svg" className="h-8" alt="Logo" />
        </a>
        <div className="flex space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
          {/* Button */}
          <Button size={"medium"} variant={"default"}>
            <span className="mr-2">Resume</span>
            <IconDownload stroke={2} />
          </Button>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="size-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
          id="navbar-sticky"
        >
          {/* Links */}
          <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 md:dark:bg-gray-900 rtl:space-x-reverse">
            <li>
              <a
                href="#skills"
                className="block rounded bg-blue-700 px-3 py-2 text-primary-black md:bg-transparent md:p-0 md:text-primary-black md:dark:text-zinc-500"
                aria-current="page"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className="block rounded px-3 py-2 text-primary-black hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-zinc-500 md:dark:hover:bg-transparent md:dark:hover:text-zinc-500"
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="block rounded px-3 py-2 text-primary-black hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-zinc-500 md:dark:hover:bg-transparent md:dark:hover:text-zinc-500"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block rounded px-3 py-2 text-primary-black hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-zinc-500 md:dark:hover:bg-transparent md:dark:hover:text-zinc-500"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
