import React from "react";
import Input from "../input"; // Assuming Input component is in the same directory

const ContactSection: React.FC = () => {
  return (
    <section
      id="contact"
      className="scroll-mt-navbar-height pt-navbar-height bg-primary-white px-4 py-16 md:px-20 md:py-24"
    >
      <div className="mx-auto grid max-w-screen-lg grid-cols-1 gap-8 md:grid-cols-2">
        {/* Right Section: Text */}
        <div className="space-y-4">
          <h2 className="text-display-medium font-extrabold text-primary-black">
            Let&apos;s{" "}
            <mark className="rounded bg-primary-black px-2 text-primary-white">
              talk
            </mark>{" "}
            for <br />
            Something <span className="text-primary-black">special</span>
          </h2>
          <p className="text-paragraph-p2 font-light text-zinc-500">
            I strive to combine creativity and technical expertise to build
            user-friendly, impactful, and memorable digital experiences.
          </p>
          <p className="text-h4 font-semibold text-primary-black">
            osajustin@gmail.com
          </p>
        </div>

        {/* Left Section: Form */}
        <form className="text-subheading-h6 space-y-6 text-zinc-500">
          <Input type="text" placeholder="Your name" required />
          <Input type="email" placeholder="Your email" required />
          <Input type="textarea" placeholder="How can I help?*" />

          <div className="flex flex-wrap justify-center gap-4 md:justify-start">
            {/* Get In Touch Button */}
            <button
              type="button"
              className="w-full rounded-md bg-primary-black px-5 py-3 text-sm font-medium text-primary-white transition hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-primary-black md:w-auto"
            >
              Get In Touch
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
