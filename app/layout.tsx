import type { Metadata } from "next";
import { ThemeModeScript } from "flowbite-react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Justin Osagie Portfolio",
  description:
    "Welcome to the portfolio of Justin Osagie, a passionate full-stack developer based in Florida. Explore projects, skills, and professional experiences crafted to deliver innovative solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <ThemeModeScript />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@100..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
