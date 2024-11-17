import React from "react";
import {
  FaLaptop,
  FaAngular,
  FaReact,
  FaHeadphones,
  FaPrint,
  FaKeyboard,
  FaPython,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTypescript,
  SiCsharp,
  SiDotnet,
  SiMongodb,
  SiMicrosoftazure,
  SiTailwindcss,
} from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { DiDotnet } from "react-icons/di";

interface SkillCardProps {
  icon: React.ReactNode;
  label: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, label }) => {
  return (
    <div className="flex flex-col items-center justify-center rounded-md border-2 border-primary-black p-8 transition-all duration-300 ease-in-out hover:bg-primary-black hover:text-primary-white">
      <div className="mb-3 text-[3.5rem]">{icon}</div>
      <span className="text-h6 font-semibold">{label}</span>
    </div>
  );
};

const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="md:py-15 scroll-mt-navbar-height pt-navbar-height bg-primary-white px-4 py-10 md:px-20"
    >
      <div className="mx-auto max-w-screen-xl px-4 py-8">
        <div className="mb-4 text-center md:mb-8">
          <h2 className="text-display-medium font-regular text-primary-black dark:text-primary-white">
            My <span className="font-extrabold">Skills</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-5 ">
          {/* Each Skill Card with different icons */}
          <SkillCard icon={<FaGitAlt />} label="Git" />
          <SkillCard icon={<SiTypescript />} label="Typescript" />
          <SkillCard icon={<FaPython />} label="Python" />
          <SkillCard icon={<DiDotnet />} label=".NET" />
          <SkillCard icon={<FaAngular />} label="Angular" />
          <SkillCard icon={<FaReact />} label="React" />
          <SkillCard icon={<BiLogoPostgresql />} label="SQL" />
          <SkillCard icon={<SiCsharp />} label="C#" />
          <SkillCard icon={<SiTailwindcss />} label="Tailwind CSS" />
          <SkillCard icon={<SiMongodb />} label="MongoDB" />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
