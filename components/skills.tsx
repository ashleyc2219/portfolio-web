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
import { SiTypescript, SiCsharp, SiDotnet } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";

interface SkillCardProps {
  icon: React.ReactNode;
  label: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, label }) => {
  return (
    <div className="flex size-48 flex-col items-center justify-center rounded-md border-2 border-primary-black p-8 transition-all duration-300 ease-in-out hover:bg-primary-black hover:text-primary-white">
      <div className="mb-3 text-4xl">{icon}</div>
      <span className="text-lg font-semibold">{label}</span>
    </div>
  );
};

const Skills = () => {
  return (
    <section className="bg-white py-8 dark:bg-gray-900 md:py-16">
      <div className="mx-auto max-w-4xl px-4">
        <div className="mb-4 text-center md:mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
            My <span className="font-bold">Skills</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-6 p-4 md:grid-cols-4">
          {/* Each Skill Card with different icons */}
          <SkillCard icon={<FaGitAlt />} label="Git" />
          <SkillCard icon={<SiTypescript />} label="Typescript" />
          <SkillCard icon={<FaPython />} label="Python" />
          <SkillCard icon={<SiDotnet />} label=".NET" />
          <SkillCard icon={<FaAngular />} label="Angular" />
          <SkillCard icon={<FaReact />} label="React" />
          <SkillCard icon={<BiLogoPostgresql />} label="SQL" />
          <SkillCard icon={<SiCsharp />} label="C#" />
        </div>
      </div>
    </section>
  );
};

export default Skills;
