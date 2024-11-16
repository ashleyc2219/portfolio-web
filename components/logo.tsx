import React from "react";

const Logo: React.FC = () => {
  return (
    <div className="flex items-center space-x-3 rtl:space-x-reverse">
      {/* SVG Image */}
      <img
        src="logo/jo_logo.svg"
        alt="Logo"
        className="h-8 w-8 object-contain"
      />
      {/* Text */}
      <span className="text-lg font-bold text-zinc-800 dark:text-primary-white">
        Justin
      </span>
    </div>
  );
};

export default Logo;
