import flowbite from "flowbite-react/tailwind";
import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          black: "#000000",
          neutral: "#404040",
          white: "#FFFFFF",
        },
        zinc: {
          100: "#f4f4f5",
          200: "#e4e4e7",
          300: "#d4d4d8",
          500: "#71717a",
          800: "#27272a",
        },
        error: {
          500: "#ef4444",
        },
      },
    },
  },
  plugins: [
    flowbite.plugin(),
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".text-outline": {
          "-webkit-text-stroke": "1px black", // Set outline stroke color and width
          color: "#FFFFFF", // Solid color fill for text to prevent transparency issues
        },
        ".text-outline-black": {
          "-webkit-text-stroke": "1px black",
          color: "#FFFFFF", // Ensures fill is solid white
        },
        ".text-outline-white": {
          "-webkit-text-stroke": "1px white",
          color: "#000000", // Ensures fill is solid black
        },
      });
    }),
  ],
  fontFamily: {
    sans: ["Roboto", "sans-serif"], // Use Sora for sans
  },
  fontSize: {
    // Define custom font sizes with line heights and letter spacing as per the typography spec
    "heading-regular": [
      "32px",
      { lineHeight: "40px", letterSpacing: "0.02em" },
    ],
    "heading-semibold": [
      "32px",
      { lineHeight: "40px", letterSpacing: "0.02em", fontWeight: "600" },
    ],
    "heading-bold": [
      "32px",
      { lineHeight: "40px", letterSpacing: "0.02em", fontWeight: "700" },
    ],
    "heading-extrabold": [
      "32px",
      { lineHeight: "40px", letterSpacing: "0.02em", fontWeight: "800" },
    ],

    "subheading-regular": [
      "24px",
      { lineHeight: "32px", letterSpacing: "0.02em" },
    ],
    "subheading-semibold": [
      "24px",
      { lineHeight: "32px", letterSpacing: "0.02em", fontWeight: "600" },
    ],
    "subheading-bold": [
      "24px",
      { lineHeight: "32px", letterSpacing: "0.02em", fontWeight: "700" },
    ],
    "subheading-extrabold": [
      "24px",
      { lineHeight: "32px", letterSpacing: "0.02em", fontWeight: "800" },
    ],

    "h1-regular": ["48px", { lineHeight: "56px", letterSpacing: "0.02em" }],
    "h1-semibold": [
      "48px",
      { lineHeight: "56px", letterSpacing: "0.02em", fontWeight: "600" },
    ],
    "h1-bold": [
      "48px",
      { lineHeight: "56px", letterSpacing: "0.02em", fontWeight: "700" },
    ],
    "h1-extrabold": [
      "48px",
      { lineHeight: "56px", letterSpacing: "0.02em", fontWeight: "800" },
    ],

    "h2-regular": ["40px", { lineHeight: "48px", letterSpacing: "0.02em" }],
    "h2-semibold": [
      "40px",
      { lineHeight: "48px", letterSpacing: "0.02em", fontWeight: "600" },
    ],
    "h2-bold": [
      "40px",
      { lineHeight: "48px", letterSpacing: "0.02em", fontWeight: "700" },
    ],
    "h2-extrabold": [
      "40px",
      { lineHeight: "48px", letterSpacing: "0.02em", fontWeight: "800" },
    ],

    "h3-regular": ["32px", { lineHeight: "40px", letterSpacing: "0.02em" }],
    "h3-semibold": [
      "32px",
      { lineHeight: "40px", letterSpacing: "0.02em", fontWeight: "600" },
    ],
    "h3-bold": [
      "32px",
      { lineHeight: "40px", letterSpacing: "0.02em", fontWeight: "700" },
    ],
    "h3-extrabold": [
      "32px",
      { lineHeight: "40px", letterSpacing: "0.02em", fontWeight: "800" },
    ],

    "h4-regular": ["28px", { lineHeight: "36px", letterSpacing: "0.02em" }],
    "h4-semibold": [
      "28px",
      { lineHeight: "36px", letterSpacing: "0.02em", fontWeight: "600" },
    ],
    "h4-bold": [
      "28px",
      { lineHeight: "36px", letterSpacing: "0.02em", fontWeight: "700" },
    ],
    "h4-extrabold": [
      "28px",
      { lineHeight: "36px", letterSpacing: "0.02em", fontWeight: "800" },
    ],

    "h5-regular": ["24px", { lineHeight: "32px", letterSpacing: "0.02em" }],
    "h5-semibold": [
      "24px",
      { lineHeight: "32px", letterSpacing: "0.02em", fontWeight: "600" },
    ],
    "h5-bold": [
      "24px",
      { lineHeight: "32px", letterSpacing: "0.02em", fontWeight: "700" },
    ],
    "h5-extrabold": [
      "24px",
      { lineHeight: "32px", letterSpacing: "0.02em", fontWeight: "800" },
    ],

    "paragraph-regular": [
      "16px",
      { lineHeight: "24px", letterSpacing: "0.02em" },
    ],
    "paragraph-semibold": [
      "16px",
      { lineHeight: "24px", letterSpacing: "0.02em", fontWeight: "600" },
    ],
    "paragraph-bold": [
      "16px",
      { lineHeight: "24px", letterSpacing: "0.02em", fontWeight: "700" },
    ],
    "paragraph-extrabold": [
      "16px",
      { lineHeight: "24px", letterSpacing: "0.02em", fontWeight: "800" },
    ],

    "small-regular": ["14px", { lineHeight: "20px", letterSpacing: "0.02em" }],
    "small-semibold": [
      "14px",
      { lineHeight: "20px", letterSpacing: "0.02em", fontWeight: "600" },
    ],
    "small-bold": [
      "14px",
      { lineHeight: "20px", letterSpacing: "0.02em", fontWeight: "700" },
    ],
    "small-extrabold": [
      "14px",
      { lineHeight: "20px", letterSpacing: "0.02em", fontWeight: "800" },
    ],

    "button-regular": ["16px", { lineHeight: "24px", letterSpacing: "0.02em" }],
    "button-semibold": [
      "16px",
      { lineHeight: "24px", letterSpacing: "0.02em", fontWeight: "600" },
    ],
    "button-bold": [
      "16px",
      { lineHeight: "24px", letterSpacing: "0.02em", fontWeight: "700" },
    ],
    "button-extrabold": [
      "16px",
      { lineHeight: "24px", letterSpacing: "0.02em", fontWeight: "800" },
    ],
  },
  fontWeight: {
    regular: "400",
    semibold: "600",
    bold: "700",
    extrabold: "800",
  },
};
export default config;
