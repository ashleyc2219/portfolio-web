export interface Experience {
  id: number;
  companyLogo: string; // Path relative to the 'public' folder
  companyName: string;
  role: string;
  duration: string;
  description: string;
}

export const experienceConfig: Experience[] = [
  {
    id: 1,
    companyLogo: "/experienceSection/citi.svg", // Path relative to the 'public' folder
    companyName: "Citibank",
    role: "Software Developer",
    duration: "March 2022 – Present",
    description: `As a Software Developer at Citibank, I played a key role in developing 50+ Angular UI components, including 15 data-rich AG Grid pages, for 1,000+ daily loan officers, improving data interpretation speed by 25%.
    I transitioned monolithic Angular applications to a micro front-end architecture, accelerating feature releases by 20% and simplifying code maintenance. Additionally, I optimized frontend data retrieval by splitting API calls into parallel processes, improving filter load times by 60% and enhancing user efficiency in loan processing tasks.
    I also contributed to server-side rendering and responsive design, reducing page load times by 20% and ensuring a seamless user experience across devices.
    Authored over 500 unit and integration test scripts to achieve 96% code coverage for UI components, boosting reliability and reducing downtime.`,
  },
  {
    id: 2,
    companyLogo: "/experienceSection/citi.svg",
    companyName: "Citibank",
    role: "Software Developer Intern",
    duration: "June 2021 – August 2021",
    description: `During my internship at Citibank, I contributed to the integration of Amundsen’s UI using Angular and Flask to align with Citi’s branding, improving visual consistency and user engagement. I collaborated with UX designers to implement responsive layouts, ensuring seamless usability across devices.
    Additionally, I optimized JavaScript and CSS bundle sizes, cutting initial load times by 20%, which enhanced the onboarding experience for users.`,
  },
  {
    id: 3,
    companyLogo: "/experienceSection/fpl.svg",
    companyName: "Florida Power & Light",
    role: "Software Developer Intern",
    duration: "June 2020 – August 2020",
    description: `As an intern at Florida Power & Light, I played a pivotal role in transitioning on-premise infrastructure to AWS cloud solutions, which scaled the customer service call system from 5,000 to over 1,000,000 calls per hour. I developed serverless solutions using Python and Java, ensuring peak load reliability during emergencies.
    My work demonstrated the value of cloud-based scalability and resilience for critical business operations, allowing the company to handle increased traffic efficiently.`,
  },
  // Add more experiences as needed
];
