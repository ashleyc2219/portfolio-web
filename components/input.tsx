import React from "react";

interface InputProps {
  type: "text" | "email" | "textarea";
  placeholder: string;
  required?: boolean;
  error?: boolean; // Add an error state
  disabled?: boolean; // Add a disabled state
  value?: string; // For filled state
}

const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  required,
  error,
  disabled,
  value,
}) => {
  // Base styling
  const baseClass =
    "w-full rounded-md border p-4 text-sm focus:outline-none focus:ring-2 transition-all duration-300";

  // Conditional styling for states
  const stateClass = error
    ? "border-error-500 focus:ring-error-500"
    : disabled
      ? "border-zinc-300 bg-zinc-100 text-zinc-400 cursor-not-allowed"
      : "border-primary-black focus:ring-primary-black hover:border-zinc-500";

  const filledClass = value ? "bg-zinc-50" : "bg-white";

  if (type === "textarea") {
    return (
      <textarea
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        value={value}
        className={`${baseClass} ${stateClass} ${filledClass}`}
      />
    );
  }

  return (
    <input
      type={type}
      placeholder={placeholder}
      required={required}
      disabled={disabled}
      value={value}
      className={`${baseClass} ${stateClass} ${filledClass}`}
    />
  );
};

export default Input;
