export interface Project {
  id: number;
  number: string;
  title: string;
  description: string;
  imageLight: string; // Path relative to the 'public' folder
  imageDark: string; // Path relative to the 'public' folder
  reverse?: boolean;
  link?: string;
}

export const projectsConfig: Project[] = [
  {
    id: 1,
    number: "01",
    title: "JO's Cloud Services",
    description: `JO’s Cloud Security is a cutting-edge Managed Service Provider (MSP) designed specifically for the construction industry. This cloud-based solution helps construction companies enhance productivity, secure sensitive data, and streamline their operations. By leveraging advanced cybersecurity and scalable cloud technologies, JO’s Cloud Security ensures teams can collaborate seamlessly across job sites.`,
    imageLight: "/projectSection/josCloudProject.png",
    imageDark: "/projectSection/josCloudProject.png",
    reverse: false,
    link: "https://joscloudsecurity.vercel.app/",
  },
  {
    id: 2,
    number: "02",
    title: "Euphoria - Ecommerce (Apparels) Website Template",
    description: `Euphoria is a sleek and modern ecommerce website template tailored for apparel businesses. It features a responsive design, intuitive navigation, and seamless integration with payment gateways, ensuring a smooth shopping experience for customers.`,
    imageLight: "/projectSection/project2.png",
    imageDark: "/projectSection/project2.png",
    reverse: true,
    link: "/",
  },
  {
    id: 3,
    number: "03",
    title: "Blog Website Template",
    description: `The Blog Website Template is a versatile and customizable platform designed for bloggers and content creators. It offers a clean layout, easy content management, and integration with social media platforms to enhance audience engagement.`,
    imageLight: "/projectSection/project3.png",
    imageDark: "/projectSection/project3.png",
    reverse: false,
    link: "/",
  },
  // Add more projects as needed
];
