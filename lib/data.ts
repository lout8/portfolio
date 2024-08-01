import {
  FaEnvelope,
  FaExternalLinkAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { FaSquareUpwork } from "react-icons/fa6";

import {
  ContactType,
  EducationType,
  ExperienceType,
  HomeType,
  ProjectsType,
  SkillsType,
} from "./types";
import myImage from "@/public/my-photo.jpg";
import projectOne from "@/public/img/firstImg.jpg";
import projectTwo from "@/public/img/second.jpg";
import projectThree from "@/public/img/thirdImg.jpg";

export const menuItemsData = [
  { href: "/", label: "Logo", icon: true },
  { href: "/about", label: "About", icon: false },
  { href: "/projects", label: "Projects", icon: false },
  { href: "/contact", label: "Contact", icon: false },
];

export const homeData: HomeType = {
  title: "Hi I'm Elissaios Loutos",
  position: "Web developer",
  description:
    "Specialized in front-end technologies with some back-end experience. Passionate about crafting responsive, user-friendly, and visually appealing web applications.",
  image: myImage,
};

export const skillsData: SkillsType = {
  languages: {
    title: "Languages",
    skills: [
      { icon: "js", text: "JavaScript" },
      { icon: "ts", text: "TypeScript" },
      { icon: "html", text: "HTML" },
      { icon: "css", text: "CSS" },
      { icon: "python", text: "Python" },
    ],
  },
  frameworks: {
    title: "Frameworks",
    skills: [
      { icon: "nextjs", text: "Next.js" },
      { icon: "reactjs", text: "React.js" },
      { icon: "express", text: "Express.js" },
    ],
  },
  databases: {
    title: "Databases",
    skills: [
      { icon: "postgresql", text: "PostgreSQL" },
      { icon: "mysql", text: "MySQL" },
      { icon: "supabase", text: "Supabase" },
    ],
  },
  styling: {
    title: "Styling",
    skills: [
      { icon: "tailwind", text: "Tailwind CSS" },
      { icon: "shadcn", text: "Shadcn/ui" },
      { icon: "daisyui", text: "DaisyUI" },
    ],
  },
  collaboration: {
    title: "Collaboration",
    skills: [{ icon: "github", text: "GitHub" }],
  },
  prototyping: {
    title: "Prototyping",
    skills: [{ icon: "figma", text: "Figma" }],
  },
};

export const experienceData: ExperienceType = {
  title: "Experience",
  experiences: [
    {
      title: "Web developer",
      company: "Apes E.E",
      duration: "Dec 2023 - Present",
      location: "Athens, Attiki, Greece",
      description: {
        title: "Responsibilities",
        tasks: [
          "Design UX/UI to create intuitive, responsive, and visually appealing web interfaces.",
          "Implement modern front-end technologies, including HTML, CSS, Typescript, and Next.js.",
          "Optimize web applications for maximum speed and scalability.",
          "Utilize version control systems such as GitHub to manage codebase changes effectively.",
          "Develop and maintain server-side logic using Next.js",
          "Design and manage databases with Supabase (PostgreSQL) to ensure efficient data storage and retrieval.",
        ],
      },
    },
    {
      title: "Web developer",
      company: "Freelance",
      duration: "Sep 2023 - Dec 2023",
      location: "Athens, Attiki, Greece",
      description: {
        title: "Responsibilities",
        tasks: [
          "Develop responsive websites tailored to client specifications using Next.js and React.js.",
          "Utilize headless CMS solutions to create flexible and scalable content management systems.",
          "Manage project expenses, including hosting and domain registration, to align with client budgets.",
        ],
      },
    },
  ],
};

export const educationData: EducationType = {
  title: "Education",
  educations: [
    {
      title: "BSc: Computer Games Programming",
      provider: "University of Derby",
      duration: "2019-2022",
      score: "Second class Honours (1st Division)",
    },
  ],
};

export const projectsData: ProjectsType = [
  {
    title: "Personal",
    projects: [
      {
        title: "Portfolio Website",
        description:
          "A personal portfolio website to showcase my projects and skills.",
        about:
          "This project was created using Next.js and Tailwind CSS. The site is fully responsive and optimized for performance.",
        technologies: [
          { icon: "nextjs", text: "Next.js" },
          { icon: "tailwind", text: "Tailwind CSS" },
          { icon: "ts", text: "TypeScript" },
        ],
        links: [
          {
            href: "https://github.com/username/portfolio",
            icon: FaGithub,
          },
          {
            href: "https://portfolio-username.vercel.app",
            icon: FaExternalLinkAlt,
          },
        ],
        image: projectOne,
      },
    ],
  },
  {
    title: "Freelancing",
    projects: [
      {
        title: "E-commerce Platform",
        description: "An online platform for buying and selling products.",
        about:
          "Developed a full-featured e-commerce platform with user authentication, product management, and a shopping cart.",
        technologies: [
          { icon: "nextjs", text: "Next.js" },
          { icon: "supabase", text: "Supabase" },
          { icon: "tailwind", text: "Tailwind CSS" },
        ],
        links: [
          {
            href: "https://github.com/username/ecommerce-platform",
            icon: FaGithub,
          },
          {
            href: "https://ecommerce-platform-demo.vercel.app",
            icon: FaExternalLinkAlt,
          },
        ],
        image: projectTwo,
      },
      {
        title: "Task Management App",
        description:
          "A task management app to help users stay organized and productive.",
        about:
          "This app allows users to create, update, and delete tasks, with features like due dates, reminders, and priority settings.",
        technologies: [{ icon: "reactjs", text: "React" }],
        links: [
          {
            href: "https://github.com/username/task-management-app",
            icon: FaGithub,
          },
          {
            href: "https://task-management-app.vercel.app",
            icon: FaExternalLinkAlt,
          },
        ],
        image: projectThree,
      },
    ],
  },
];

export const contactData: ContactType = [
  {
    name: "e.loutos8@gmail.com",
    description:
      "Whether you have a question or just want to say hi, I will try my best to get back to you!",
    href: "mailto:e.loutos8@gmail.com",
    icon: FaEnvelope,
  },
  {
    name: "Github",
    description: "Find more of mine projects",
    href: "https://github.com/lout8",
    icon: FaGithub,
  },
  {
    name: "linkdin",
    href: "https://www.linkedin.com/in/elissaios-loutos-695024227/",
    icon: FaLinkedin,
  },
  {
    name: "Upwork",
    href: "https://www.upwork.com/freelancers/~0172a70305e17de31f",
    icon: FaSquareUpwork,
  },
];
