"use client";

import React, { useState } from "react";
import Input from "../input";

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false); // New state for submission tracking
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccessMessage("Your message has been sent successfully!");
        setFormData({ name: "", email: "", message: "" });
        setIsSubmitted(true); // Mark as submitted
      } else {
        const errorData = await response.json();
        setErrorMessage(
          errorData.error || "Something went wrong. Please try again.",
        );
      }
    } catch (error) {
      setErrorMessage("Failed to send your message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="scroll-mt-navbar-height bg-primary-white px-4 py-16 pt-navbar-height md:px-20 md:py-24"
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
            hello@justinosagie.com
          </p>
        </div>

        {/* Left Section: Form */}
        <form
          className="text-subheading-h6 space-y-6 text-zinc-500"
          onSubmit={handleSubmit}
        >
          <Input
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <Input
            type="email"
            name="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Input
            type="textarea"
            name="message"
            placeholder="How can I help?*"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <div className="flex flex-wrap justify-center gap-4 md:justify-start">
            {/* Get In Touch Button */}
            <button
              type="submit"
              className="w-full rounded-md bg-primary-black px-5 py-3 text-sm font-medium text-primary-white transition hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-primary-black md:w-auto"
              disabled={isSubmitting || isSubmitted} // Disable if submitting or already submitted
            >
              {isSubmitting
                ? "Sending..."
                : isSubmitted
                  ? "Sent"
                  : "Get In Touch"}
            </button>
          </div>
          {successMessage && <p className="text-green-600">{successMessage}</p>}
          {errorMessage && <p className="text-red-600">{errorMessage}</p>}
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
``;
