import {
  techarion,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  agneyas,
  angular,
  python,
  carHub,
  threejs,
  Portfolio,
  Sathyabama,
  crypto,
  nextjs,
  tanstack,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Angular Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UI Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name:"Python",
    icon: python,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "React Query",
    icon: tanstack,
  }
];

const experiences = [
  {
    title: "Reactjs Developer Intern",
    company_name: "Tech Arion Private Limited",
    icon: techarion,
    iconBg: "#383E56",
    date: "December 2022 - august 2023",
    points: [
      "Developed Image editing studio resulting in a 28% increase in user satisfaction",
      "Leveraged the best libraries for seamless UI design that significantly improved user engagement and 6% boost in audience engagement.",
      "Provided clear documentation on GitHub for easy adoption and collaboration among team members.",
      "Integrated Unsplash API and AI image generator for access to diverse high-quality images.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Agneyas labs Private Limited",
    icon: agneyas,
    iconBg: "#383E56",
    date: "December 2022 - august 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },{
    title: "Bachelors Degree",
    company_name: "Sathyabama Institute of Science and Technology",
    icon: Sathyabama,
    iconBg: "#383E56",
    date: "July 2019 - June 2023",
    points: [
      "Bachelor's in Mechanical Engineering achiever with a stellar 9.43 CGPA.",
      "Demonstrating unwavering dedication and excellence in academic pursuits.",
      "Proven commitment to learning and a strong work ethic characterize my educational journey.",
      "My bachelor's journey embodies dedication and excellence, showcasing a valuable blend of analytical thinking and adaptability. ",
    ]
  }
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car-Hub",
    description:
      "Car Rental App revolutionizes car rentals with seamless browsing, personalized recommendations, and instant booking. Experience unmatched performance and ease of use with advanced features like server-side rendering and app router.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Rapid Api",
        color: "green-text-gradient",
      }
    ],
    image: carHub,
    source_code_link: "https://github.com/SriSomanaath/videoGame.git",
  },
  {
    name: "Portfolio",
    description:
      "Crafted a responsive E-commerce Angular application with streamlined user experience, and efficient functionality. Integrated sleek design, seamless navigation, and interactive components for an engaging user experience.",
    tags: [
      {
        name: "angular",
        color: "blue-text-gradient",
      },
      {
        name: "Typescript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: Portfolio,
    source_code_link: "https://srisomanaath.github.io/SriSomanaath-portfolio/",
  },
  {
    name: "Crytpo & Stock App",
    description:
      "Implemented sleek design, smooth navigation, and interactive components, highlighting skills in creating engaging user interfaces. Elevate your digital presence with my Angular expertise in crafting visually appealing and functionally robust portfolios.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Redux-Toolkit",
        color: "green-text-gradient",
      },
      {
        name: "React-Query",
        color: "pink-text-gradient",
      },
    ],
    image: crypto,
    source_code_link: "https://github.com/SriSomanaath/https---github.com-SriSomanaath-EazyTrove.git",
  },
];

export { services, technologies, experiences, testimonials, projects };
