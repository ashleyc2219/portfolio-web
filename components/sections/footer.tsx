import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white p-4 dark:bg-zinc-800 md:p-8 lg:p-10">
      <div className="mx-auto max-w-screen-xl text-center">
        {/* Logo and Title */}
        <a
          href="#"
          className="flex items-center justify-center text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img src="logo/logo1.svg" className="h-8" alt="Flowbite Logo" />
        </a>

        {/* Copyright */}
        <span className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
          © 2024{" "}
          <a href="#" className="hover:underline">
            Justin Osagie
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
