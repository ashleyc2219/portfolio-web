import React from "react";

const Experience = () => {
  return (
    <section className="md:py-15 bg-primary-black px-4 py-10 md:px-20">
      <div className="mx-auto max-w-screen-xl px-4">
        <div className="mb-8 text-center">
          <h2 className="text-display-medium font-light text-primary-white">
            My <span className="font-extrabold">Experience</span>
          </h2>
        </div>

        <div className="space-y-6">
          {/* Experience 1 */}
          <div className="flex flex-col rounded-lg border border-primary-white bg-primary-black p-6 shadow-md transition-all duration-300 hover:border-primary-white hover:bg-zinc-800 hover:shadow-lg dark:hover:bg-gray-800">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="mb-2 flex items-center md:mb-0">
                <img src="citi.svg" alt="Citi Logo" className="mr-2 size-8" />
                <h3 className="text-xl font-semibold text-primary-white">
                  Software Developer at Citi
                </h3>
              </div>
              <span className="text-sm text-gray-400 md:ml-4 md:text-right">
                March 2022 – Present
              </span>
            </div>
            <p className="mt-2 text-zinc-300">
              As a Software Developer at Citi, I played a key role in designing
              and implementing .NET 6 microservices, enabling seamless token
              management with robust APIs and advanced data handling. My
              contributions to Angular applications brought over 40 new scalable
              UI features to production, leveraging micro-frontend architecture
              and AG-Grid. In addition, I automated UI testing workflows with
              CypressJS, significantly cutting down manual testing efforts. By
              improving code coverage for a legacy application to 96% through
              extensive unit testing, I helped enhance code reliability and
              maintainability across the platform.
            </p>
          </div>

          {/* Experience 2 */}
          <div className="flex flex-col rounded-lg border border-primary-white bg-primary-black p-6 shadow-md transition-all duration-300 hover:border-primary-white hover:bg-zinc-800 hover:shadow-lg dark:hover:bg-gray-800">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="mb-2 flex items-center md:mb-0">
                <img src="citi.svg" alt="Citi Logo" className="mr-2 size-8" />
                <h3 className="text-xl font-semibold text-primary-white">
                  Software Developer Intern at Citi
                </h3>
              </div>
              <span className="text-sm text-gray-400 md:ml-4 md:text-right">
                June 2021 – August 2021
              </span>
            </div>
            <p className="mt-2 text-zinc-300">
              During my internship at Citi, I spearheaded the integration of
              Amundsen, an open-source metadata engine, into Citi’s ecosystem,
              connecting it with Neo4j and Elasticsearch. I automated metadata
              retrieval processes with over 15 Python scripts using SQLAlchemy,
              streamlining access to key data sources and eliminating manual
              intervention. This project highlighted my ability to deliver
              impactful solutions by bridging innovative tools with existing
              workflows.
            </p>
          </div>

          {/* Experience 3 */}
          <div className="flex flex-col rounded-lg border border-primary-white bg-primary-black p-6 shadow-md transition-all duration-300 hover:border-primary-white hover:bg-zinc-800 hover:shadow-lg dark:hover:bg-gray-800">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="mb-2 flex items-center md:mb-0">
                <img src="fpl.svg" alt="FPL Logo" className="mr-2 size-8" />
                <h3 className="text-xl font-semibold text-primary-white">
                  Software Developer Intern at Florida Power & Light
                </h3>
              </div>
              <span className="text-sm text-gray-400 md:ml-4 md:text-right">
                June 2020 – August 2020
              </span>
            </div>
            <p className="mt-2 text-zinc-300">
              As an intern at Florida Power & Light, I drove the transition of
              on-premise infrastructure to AWS cloud solutions, scaling the
              customer service call system from 5,000 to over 1,000,000 calls
              per hour. By developing serverless solutions using Python and
              Java, I ensured the system could handle peak loads during
              emergencies with unmatched reliability. My work demonstrated the
              value of cloud-based scalability and resilience for critical
              business operations.
            </p>
          </div>

          {/* Experience 4 */}
          {/* <div className="flex flex-col rounded-lg border border-primary-white bg-primary-black p-6 shadow-md transition-all duration-300 hover:border-primary-white hover:bg-zinc-800 hover:shadow-lg dark:hover:bg-gray-800">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="mb-2 flex items-center md:mb-0">
                <FaBuilding className="mr-2 text-2xl text-red-400" />
                <h3 className="text-xl font-semibold text-primary-white">
                  Freelance Developer
                </h3>
              </div>
              <span className="text-sm text-gray-400 md:ml-4 md:text-right">
                Ongoing
              </span>
            </div>
            <p className="mt-2 text-gray-300 dark:text-gray-300">
              As a freelance developer, I specialize in building dynamic and
              user-friendly web applications using React, ensuring responsive
              designs that cater to diverse client needs. I have also deployed
              scalable RESTful APIs using Python and Flask on Google Cloud
              Platform, combining technical expertise with a focus on
              performance. From requirements gathering to deployment and
              maintenance, I’ve delivered end-to-end solutions that drive
              measurable business impact for small to medium-sized clients.
            </p>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Experience;
