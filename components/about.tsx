import React from "react";

const About = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto grid max-w-screen-xl gap-y-8 px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-x-12">
        {/* Image Content */}
        <div className="hidden overflow-hidden lg:col-span-5 lg:mt-0 lg:flex">
          <img
            src="about.svg"
            alt="mockup"
            className="size-full object-contain"
          />
        </div>

        {/* Text Content */}
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="text-display-medium font-light text-primary-black dark:text-primary-white">
            About <span className="font-extrabold">Me</span>
          </h1>
          <p className="text-paragraph-p2 mb-6 max-w-2xl font-light text-zinc-500 lg:mb-8">
            I&apos;m a passionate, self-proclaimed designer who specializes in
            full stack development (React.js & Node.js). I am very enthusiastic
            about bringing the technical and visual aspects of digital products
            to life. User experience, pixel perfect design, and writing clear,
            readable, highly performant code matters to me.
          </p>
          <p className="text-paragraph-p2 mb-6 max-w-2xl font-light text-zinc-500 lg:mb-8">
            I began my journey as a web developer in 2015, and since then,
            I&apos;ve continued to grow and evolve as a developer, taking on new
            challenges and learning the latest technologies along the way. Now,
            in my early thirties, 7 years after starting my web development
            journey, I&apos;m building cutting-edge web applications using
            modern technologies such as Next.js, TypeScript, Nestjs,
            Tailwindcss, Supabase and much more.
          </p>
          <p className="text-paragraph-p2 mb-6 max-w-2xl font-light text-zinc-500 lg:mb-8">
            When I&apos;m not in full-on developer mode, you can find me
            hovering around on twitter or on indie hacker, witnessing the
            journey of early startups or enjoying some free time. You can follow
            me on Twitter where I share tech-related bites and build in public,
            or you can follow me on GitHub.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
