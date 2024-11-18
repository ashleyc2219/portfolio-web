import React from "react";

interface ButtonProps {
  size: "small" | "medium";
  variant: "default" | "outline" | "icon";
  children?: React.ReactNode;
  onClick?: () => void; // Add onClick as an optional prop
}

const Button: React.FC<ButtonProps> = ({
  size,
  variant,
  children,
  onClick,
}) => {
  // Set up classes based on size and variant
  const baseClass =
    "font-semibold rounded transition-all inline-flex items-center";

  const sizeClass =
    size === "small" ? "text-sm px-3 py-1.5" : "text-md px-4 py-2";

  const variantClass =
    variant === "default"
      ? "bg-primary-black text-white hover:bg-zinc-700 active:bg-zinc-800 rounded-md hover:border-primary-neutral hover:bg-primary-neutral hover:text-primary-white"
      : variant === "outline"
        ? "border-2 border-primary-black text-primary-black hover:border-primary-neutral hover:bg-primary-neutral hover:text-primary-white active:bg-primary-neutral"
        : "bg-zinc-900 text-primary-black p-2 rounded-md";

  return (
    <button
      className={`${baseClass} ${sizeClass} ${variantClass}`}
      onClick={onClick} // Pass the onClick prop to the button
    >
      {children}
    </button>
  );
};

export default Button;
