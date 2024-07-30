import { EducationType, ExperienceType, HomeType, SkillsType } from "./types";
import myImage from "@/public/my-photo.jpg";
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
  experience: [
    {
      title: "Web developer",
      company: "Apes E.E",
      duration: "Dec 2023 - Present",
      location: "Athens, Attiki, Greece",
      descriptions: [
        {
          title: "Front-end Development",
          tasks: [
            "Designed UX/UI to create intuitive, responsive, and visually appealing web interfaces.",
            "Implement modern front-end technologies, including HTML, CSS, Typescript, and Next.js.",
            "Optimize web applications for maximum speed and scalability.",
            "Ensure cross-browser compatibility and responsiveness across various devices.",
            "Utilize version control systems such as GitHub to manage codebase changes effectively.",
          ],
        },
        {
          title: "Back-end Development",
          tasks: [
            "Develop and maintain server-side logic using Next.js",
            "Design and manage databases with Supabase (PostgreSQL) to ensure efficient data storage and retrieval.",
          ],
        },
      ],
    },
    {
      title: "Web developer",
      company: "Freelance",
      duration: "Sep 2023 - Dec 2023",
      location: "Athens, Attiki, Greece",
      descriptions: [
        {
          title: "Responsibilities",
          tasks: [
            "Developed responsive websites tailored to client specifications using Next.js and React.js.",
            "Utilized headless CMS solutions to create flexible and scalable content management systems.",
            "Managed project expenses, including hosting and domain registration, to align with client budgets.",
            "Designed and implemented websites to meet client requirements and ensure optimal user experience.",
          ],
        },
      ],
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
