import React from "react";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="md:py-15 bg-primary-white px-4 py-10 md:px-20"
    >
      <div className="mx-auto grid max-w-screen-xl gap-y-8 px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-x-12">
        {/* Image Content */}
        <div className="order-first flex justify-center lg:order-none lg:col-span-5">
          <img
            src="/aboutSection/about.svg"
            alt="mockup"
            className="size-full object-contain"
          />
        </div>

        {/* Text Content */}
        <div className="order-last text-center lg:order-none lg:col-span-7 lg:text-left">
          <h1 className="text-display-medium font-light text-primary-black dark:text-primary-white">
            About <span className="font-extrabold">Me</span>
          </h1>
          <p className="text-paragraph-p2 mb-6 max-w-2xl font-light text-zinc-500 lg:mb-8">
            Hi, I&apos;m Justin Osagie! I&apos;m a software developer based in
            sunny Tampa, Florida, with a lifelong curiosity for technology and a
            passion for creating meaningful digital experiences. My journey
            started as a YouTuber reviewing tech, which inspired me to pursue a
            degree in computer science at the University of South Florida.
          </p>
          <p className="text-paragraph-p2 mb-6 max-w-2xl font-light text-zinc-500 lg:mb-8">
            Since then, I&apos;ve had the opportunity to work with incredible
            teams at organizations like Citi and Florida Power & Light, where I
            developed scalable .NET microservices, built serverless solutions on
            AWS, and created tools that save time and enhance productivity. I
            thrive at the intersection of creativity and technology, always
            aiming to solve complex problems with innovative solutions.
          </p>
          <p className="text-paragraph-p2 mb-6 max-w-2xl font-light text-zinc-500 lg:mb-8">
            Outside of coding, I&apos;m all about personal growth. Whether
            it&apos;s weightlifting, running, or diving into a great audiobook,
            I love challenging myself and exploring new ideas. Cooking has also
            become a fun outlet for creativity, whether I&apos;m trying new
            recipes or experimenting with seasoning techniques.
          </p>
          <p className="text-paragraph-p2 mb-6 max-w-2xl font-light text-zinc-500 lg:mb-8">
            Whether I&apos;m writing code or tackling new challenges, I believe
            in pushing boundaries, staying curious, and always delivering my
            best.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
