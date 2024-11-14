import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Footer from "@/components/footer";
import HeroSection from "@/components/heroSection";
import Navbar from "@/components/navbar";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import { DarkThemeToggle } from "flowbite-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-8 dark:bg-gray-800">
      <Navbar />
      <HeroSection />
      <Skills />
      <Experience />
      <About />
      <Projects />
      <Contact />
      <Footer />
      {/* <DarkThemeToggle /> */}
    </main>
  );
}
