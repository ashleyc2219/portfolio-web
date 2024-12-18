// src/config/aboutConfig.ts

/**
 * About Configuration
 *
 * This configuration file contains the data for the About Section, including
 * a title, an image path, and an array of paragraphs.
 */

export interface AboutContent {
  title: string;
  imageSrc: string; // Path relative to the 'public' folder
  imageAlt: string;
  paragraphs: string[];
}

export const aboutConfig: AboutContent = {
  title: "About Me",
  imageSrc: "/aboutSection/about.svg",
  imageAlt: "About Me Illustration",
  paragraphs: [
    `Hi, I'm Justin Osagie! I'm a software developer based in
      sunny Tampa, Florida, with a lifelong curiosity for technology and a
      passion for creating meaningful digital experiences. My journey
      started as a YouTuber reviewing tech, which inspired me to pursue a
      degree in computer science at the University of South Florida.`,

    `Since then, I've had the opportunity to work with incredible
      teams at organizations like Citi and Florida Power & Light, where I
      developed scalable .NET microservices, built serverless solutions on
      AWS, and created tools that save time and enhance productivity. I
      thrive at the intersection of creativity and technology, always
      aiming to solve complex problems with innovative solutions.`,

    `Outside of coding, I'm all about personal growth. Whether
      it's weightlifting, running, or diving into a great audiobook,
      I love challenging myself and exploring new ideas. Cooking has also
      become a fun outlet for creativity, whether I'm trying new
      recipes or experimenting with seasoning techniques.`,

    `Whether I'm writing code or tackling new challenges, I believe
      in pushing boundaries, staying curious, and always delivering my
      best.`,
  ],
};
