import React from "react";
import "../app/globals.css";

const TermsPage: React.FC = () => {
  return (
    <section
      id="termsOfService"
      className="bg-primary-white px-4 py-16 md:px-20 md:py-24"
    >
      <div className="mx-auto max-w-screen-lg">
        <h1 className="text-display-medium font-extrabold text-primary-black">
          Terms and Conditions
        </h1>
        <p className="mb-8 mt-2 text-sm text-gray-500">
          Last updated: November 16, 2024
        </p>

        <div className="space-y-6">
          <p className="text-paragraph-p2 text-gray-700">
            Please read these terms and conditions carefully before using Our
            Service.
          </p>

          <h2 className="text-display-small font-semibold text-primary-black">
            Interpretation and Definitions
          </h2>
          <h3 className="text-h3 font-semibold text-primary-black">
            Interpretation
          </h3>
          <p className="text-paragraph-p2 text-gray-700">
            The words of which the initial letter is capitalized have meanings
            defined under the following conditions. The following definitions
            shall have the same meaning regardless of whether they appear in
            singular or in plural.
          </p>

          <h3 className="text-h3 font-semibold text-primary-black">
            Definitions
          </h3>
          <ul className="text-paragraph-p2 list-inside list-disc space-y-2 text-gray-700">
            <li>
              <strong>Affiliate:</strong> An entity that controls, is controlled
              by, or is under common control with a party, where
              &quot;control&quot; means ownership of 50% or more of shares,
              equity interest, or other securities entitled to vote for election
              of directors or other managing authority.
            </li>
            <li>
              <strong>Country:</strong> Refers to Florida, United States.
            </li>
            <li>
              <strong>Company:</strong> Referred to as either &quot;the
              Company&quot;, &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot;
              in this Agreement, refers to Justin Osagie Portfolio.
            </li>
            <li>
              <strong>Device:</strong> Any device that can access the Service,
              such as a computer, a cellphone, or a digital tablet.
            </li>
            <li>
              <strong>Service:</strong> Refers to the Website.
            </li>
            <li>
              <strong>Website:</strong> Refers to Justin Osagie Portfolio,
              accessible from{" "}
              <a
                href="http://www.justinosagie.com"
                className="text-primary-black underline hover:text-primary-neutral"
              >
                http://www.justinosagie.com
              </a>
              .
            </li>
            <li>
              <strong>You:</strong> The individual accessing or using the
              Service, or the company, or other legal entity on behalf of which
              such individual is accessing or using the Service, as applicable.
            </li>
          </ul>

          <h2 className="text-display-small font-semibold text-primary-black">
            Acknowledgment
          </h2>
          <p className="text-paragraph-p2 text-gray-700">
            These are the Terms and Conditions governing the use of this Service
            and the agreement that operates between You and the Company. Your
            access to and use of the Service is conditioned on Your acceptance
            of and compliance with these Terms and Conditions. By accessing or
            using the Service You agree to be bound by these Terms and
            Conditions.
          </p>

          <h2 className="text-display-small font-semibold text-primary-black">
            Links to Other Websites
          </h2>
          <p className="text-paragraph-p2 text-gray-700">
            Our Service may contain links to third-party websites or services
            that are not owned or controlled by the Company. We strongly advise
            You to read the terms and conditions and privacy policies of any
            third-party web sites or services that You visit.
          </p>

          <h2 className="text-display-small font-semibold text-primary-black">
            Termination
          </h2>
          <p className="text-paragraph-p2 text-gray-700">
            We may terminate or suspend Your access immediately, without prior
            notice or liability, for any reason whatsoever, including without
            limitation if You breach these Terms and Conditions.
          </p>

          <h2 className="text-display-small font-semibold text-primary-black">
            Limitation of Liability
          </h2>
          <p className="text-paragraph-p2 text-gray-700">
            Notwithstanding any damages that You might incur, the entire
            liability of the Company and any of its suppliers under any
            provision of this Terms and Your exclusive remedy shall be limited
            to the amount actually paid by You through the Service or 100 USD if
            You haven&apos;t purchased anything through the Service.
          </p>

          <h2 className="text-display-small font-semibold text-primary-black">
            Governing Law
          </h2>
          <p className="text-paragraph-p2 text-gray-700">
            The laws of the Country, excluding its conflicts of law rules, shall
            govern this Terms and Your use of the Service. Your use of the
            Application may also be subject to other local, state, national, or
            international laws.
          </p>

          <h2 className="text-display-small font-semibold text-primary-black">
            Contact Us
          </h2>
          <p className="text-paragraph-p2 text-gray-700">
            If you have any questions about these Terms and Conditions, You can
            contact us:
          </p>
          <ul className="text-paragraph-p2 list-inside list-disc space-y-2 text-gray-700">
            <li>
              By email:{" "}
              <a
                href="mailto:hello@justinosagie.com"
                className="text-primary-black underline hover:text-primary-neutral"
              >
                hello@justinosagie.com
              </a>
            </li>
            <li>
              By visiting this page on our website:{" "}
              <a
                href="http://www.justinosagie.com/#contact"
                className="text-primary-black underline hover:text-primary-neutral"
              >
                justinosagie.com/#contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TermsPage;
