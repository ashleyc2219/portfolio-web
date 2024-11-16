import React from "react";
import "../app/globals.css";

const PrivacyPolicy = () => {
  return (
    <section
      id="privacyPolicy"
      className="bg-primary-white px-4 py-16 md:px-20 md:py-24"
    >
      <div className="mx-auto max-w-screen-lg space-y-8">
        <h1 className="text-display-medium font-extrabold text-primary-black">
          Privacy Policy
        </h1>
        <p className="text-paragraph-p2 font-light text-zinc-500">
          Last updated: November 16, 2024
        </p>
        <p className="text-paragraph-p2 font-light text-zinc-500">
          This Privacy Policy describes Our policies and procedures on the
          collection, use, and disclosure of Your information when You use the
          Service and tells You about Your privacy rights and how the law
          protects You.
        </p>
        <p className="text-paragraph-p2 font-light text-zinc-500">
          We use Your Personal data to provide and improve the Service. By using
          the Service, You agree to the collection and use of information in
          accordance with this Privacy Policy.
        </p>

        <h2 className="text-h2 font-extrabold text-primary-black">
          Interpretation and Definitions
        </h2>

        <h3 className="text-h3 font-bold text-primary-black">Interpretation</h3>
        <p className="text-paragraph-p2 font-light text-zinc-500">
          The words of which the initial letter is capitalized have meanings
          defined under the following conditions. The following definitions
          shall have the same meaning regardless of whether they appear in
          singular or in plural.
        </p>

        <h3 className="text-h3 font-bold text-primary-black">Definitions</h3>
        <ul className="text-paragraph-p2 list-disc space-y-2 pl-6 font-light text-zinc-500">
          <li>
            <strong>Account:</strong> A unique account created for You to access
            our Service or parts of our Service.
          </li>
          <li>
            <strong>Affiliate:</strong> An entity that controls, is controlled
            by or is under common control with a party.
          </li>
          <li>
            <strong>Company:</strong> Refers to Justin Osagie Portfolio.
          </li>
          <li>
            <strong>Cookies:</strong> Small files placed on Your computer,
            mobile device, or any other device by a website, containing the
            details of Your browsing history among its many uses.
          </li>
          <li>
            <strong>Country:</strong> Refers to Florida, United States.
          </li>
          <li>
            <strong>Device:</strong> Any device that can access the Service.
          </li>
          <li>
            <strong>Personal Data:</strong> Any information that relates to an
            identified or identifiable individual.
          </li>
          <li>
            <strong>Service:</strong> Refers to the Website.
          </li>
          <li>
            <strong>You:</strong> The individual accessing or using the Service.
          </li>
        </ul>

        <h2 className="text-h2 font-extrabold text-primary-black">
          Collecting and Using Your Personal Data
        </h2>
        <h3 className="text-h3 font-bold text-primary-black">Personal Data</h3>
        <p className="text-paragraph-p2 font-light text-zinc-500">
          While using Our Service, We may ask You to provide Us with certain
          personally identifiable information that can be used to contact or
          identify You. Personally identifiable information may include:
        </p>
        <ul className="text-paragraph-p2 list-disc space-y-2 pl-6 font-light text-zinc-500">
          <li>Email address</li>
          <li>First name and last name</li>
          <li>Usage Data</li>
        </ul>

        <h3 className="text-h3 font-bold text-primary-black">Usage Data</h3>
        <p className="text-paragraph-p2 font-light text-zinc-500">
          Usage Data is collected automatically when using the Service. This may
          include Your IP address, browser type, pages visited, and other
          diagnostic data.
        </p>

        <h3 className="text-h3 font-bold text-primary-black">
          Tracking Technologies and Cookies
        </h3>
        <p className="text-paragraph-p2 font-light text-zinc-500">
          We use Cookies and similar tracking technologies to track activity on
          Our Service and store certain information. Cookies are small files
          placed on Your Device. You can refuse Cookies, but some parts of the
          Service may not function properly.
        </p>

        <h2 className="text-h2 font-extrabold text-primary-black">
          Use of Your Personal Data
        </h2>
        <p className="text-paragraph-p2 font-light text-zinc-500">
          We use Your Personal Data for purposes such as providing and
          maintaining our Service, managing Your account, and contacting You
          with updates.
        </p>

        <h2 className="text-h2 font-extrabold text-primary-black">
          Contact Us
        </h2>
        <p className="text-paragraph-p2 font-light text-zinc-500">
          If you have any questions about this Privacy Policy, You can contact
          us:
        </p>
        <ul className="text-paragraph-p2 list-disc space-y-2 pl-6 font-light text-zinc-500">
          <li>
            By email:{" "}
            <a
              href="mailto:hello@justinosagie.com"
              className="text-primary-black underline hover:text-zinc-500"
            >
              hello@justinosagie.com
            </a>
          </li>
          <li>
            By visiting this page on our website:{" "}
            <a
              href="http://www.justinosagie.com/#contact"
              className="text-primary-black underline hover:text-zinc-500"
            >
              http://www.justinosagie.com/#contact
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
