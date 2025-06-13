import {
  FaEnvelope,
  FaExternalLinkAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { FaSquareUpwork } from "react-icons/fa6";

import {
  ContactType,
  defineSkillsMap,
  EducationType,
  ExperienceType,
  HomeType,
  MenuItemsType,
  ProjectsType,
  SkillsType,
} from "./types";

export const SKILLS_MAP = defineSkillsMap({
  // Languages
  javascript: {
    icon: "js",
    text: "JavaScript",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  typescript: {
    icon: "ts",
    text: "TypeScript",
    link: "https://www.typescriptlang.org/",
  },
  html: {
    icon: "html",
    text: "HTML",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  css: {
    icon: "css",
    text: "CSS",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },

  // Frameworks
  nextjs: {
    icon: "nextjs",
    text: "Next.js",
    link: "https://nextjs.org/",
  },
  react: {
    icon: "reactjs",
    text: "React",
    link: "https://reactjs.org/",
  },
  astro: {
    icon: "astro",
    text: "Astro",
    link: "https://astro.build/",
  },
  angular: {
    icon: "angular",
    text: "Angular",
    link: "https://angular.io/",
  },
  express: {
    icon: "express",
    text: "Express",
    link: "https://expressjs.com/",
  },

  // Databases
  postgresql: {
    icon: "postgresql",
    text: "PostgreSQL",
    link: "https://www.postgresql.org/",
  },
  mysql: {
    icon: "mysql",
    text: "MySQL",
    link: "https://www.mysql.com/",
  },
  supabase: {
    icon: "supabase",
    text: "Supabase",
    link: "https://supabase.com/",
  },

  // Styling
  tailwind: {
    icon: "tailwind",
    text: "Tailwind CSS",
    link: "https://tailwindcss.com/",
  },
  shadcn: {
    icon: "shadcn",
    text: "Shadcn/ui",
    link: "https://ui.shadcn.com/",
  },
  daisyui: {
    icon: "daisyui",
    text: "DaisyUI",
    link: "https://daisyui.com/",
  },

  // Collaboration
  github: {
    icon: "github",
    text: "GitHub",
    link: "https://github.com/",
  },

  // Prototyping
  figma: {
    icon: "figma",
    text: "Figma",
    link: "https://figma.com/",
  },

  // Cms
  decap: {
    icon: "decapcms",
    text: "Decap CMS",
    link: "https://decapcms.org/",
  },
  sanity: {
    icon: "sanitycms",
    text: "Sanity CMS",
    link: "https://www.sanity.io/",
  },
});

export const menuItemsData: MenuItemsType = [
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
  image: "/my-photo.png",
};

export const skillsData: SkillsType = [
  {
    title: "Languages",
    skills: [
      SKILLS_MAP.javascript,
      SKILLS_MAP.typescript,
      SKILLS_MAP.html,
      SKILLS_MAP.css,
    ],
  },
  {
    title: "Frameworks",
    skills: [
      SKILLS_MAP.nextjs,
      SKILLS_MAP.react,
      SKILLS_MAP.astro,
      SKILLS_MAP.angular,
      SKILLS_MAP.express,
    ],
  },
  {
    title: "Databases",
    skills: [SKILLS_MAP.postgresql, SKILLS_MAP.mysql, SKILLS_MAP.supabase],
  },
  {
    title: "Styling",
    skills: [SKILLS_MAP.tailwind, SKILLS_MAP.shadcn, SKILLS_MAP.daisyui],
  },
  {
    title: "Collaboration",
    skills: [SKILLS_MAP.github],
  },
  {
    title: "Prototyping",
    skills: [SKILLS_MAP.figma],
  },
];

export const experienceData: ExperienceType = {
  title: "Experience",
  experiences: [
    {
      title: "Web developer",
      company: "Apes E.E",
      duration: "Dec 2023 - May 2025",
      location: "Athens, Attiki, Greece",
      description: {
        title: "Responsibilities",
        tasks: [
          "Specialised in building responsive, dynamic web applications using Next.js, React.js, and TypeScript for efficient front-end development.",
          "Integrated PostgreSQL databases and Supabase for back-end management, ensuring seamless web performance.",
          "Created user-centric web designs with HTML5, CSS, and Tailwind CSS, optimizing for UX/UI and mobile responsiveness.",
          "Collaborated using GitHub for version control, and leveraged tools like Figma for wireframing and UI design.",
          "Expertise in developing RESTful APIs and optimizing web applications for SEO and performance.",
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
          "Delivered custom web solutions using Next.js and Tailwind CSS, optimizing for responsive design and UX/UI.",
          "Developed SEO-optimized web applications and integrated REST APIs to enhance functionality.",
          "Implemented headless and Git-based CMS systems to streamline content management for clients.",
          "Leveraged HTML5 and modern JavaScript frameworks to build scalable web applications, ensuring mobile responsiveness and high performance.",
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
        title: "Personal - Portfolio",
        description:
          "A personal portfolio website showcasing my projects, skills, and professional journey.",
        about:
          "This portfolio website showcases my professional work, skills, and achievements in a clean, modern interface. Built with Next.js, Tailwind CSS, and Shadcn/ui, it's fully responsive and optimized for performance. TypeScript was used to ensure code quality, and the site offers smooth navigation, making it easy for visitors to explore my projects and connect with me.",
        technologies: [
          SKILLS_MAP.nextjs,
          SKILLS_MAP.typescript,
          SKILLS_MAP.tailwind,
          SKILLS_MAP.shadcn,
        ],
        links: [
          {
            href: "https://github.com/lout8/portfolio",
            icon: FaGithub,
          },
          {
            href: "https://www.elissaiosloutos.dev/",
            icon: FaExternalLinkAlt,
          },
        ],
        image: "/img/personal-image.png",
      },
    ],
  },
  {
    title: "Freelancing",
    projects: [
      {
        title: "Serendipity Explorer - Blog",
        description:
          "An inspiring blog for discovering unique experiences and ideas.",
        about:
          "Designed and developed Serendipity Explorer, a blog platform aimed at inspiring users by offering a collection of engaging content. The site features a modern user interface with smooth navigation and an engaging layout. Built with a focus on performance and user experience, it utilizes Next.js for fast loading times, Decap CMS for easy content management, and Tailwind CSS for responsive design.",
        technologies: [
          SKILLS_MAP.nextjs,
          SKILLS_MAP.javascript,
          SKILLS_MAP.decap,
          SKILLS_MAP.tailwind,
        ],
        links: [
          {
            href: "https://www.serendipityexplorer.com/",
            icon: FaExternalLinkAlt,
          },
        ],
        image: "/img/serendipity-explorer-image.png",
      },
      {
        title: "Wine at West - Website",
        description: "A website showcasing the dynamic menu of Cava & Deli",
        about:
          "Cava & Deli - Wine at West is a website designed to display the current menu of wines and deli items available for takeaway or dining in. The site features a clean and responsive design, ensuring easy access for customers on any device. The menu is dynamically updated by the store's admin, allowing for real-time changes to reflect the latest offerings. Developed with Next.js, TypeScript Tailwind CSS, and Shadcn/ui.",
        technologies: [
          SKILLS_MAP.nextjs,
          SKILLS_MAP.typescript,
          SKILLS_MAP.tailwind,
          SKILLS_MAP.shadcn,
        ],
        links: [
          {
            href: "https://www.wineatwest.com/",
            icon: FaExternalLinkAlt,
          },
        ],
        image: "/img/wine-at-west-image.png",
      },
      {
        title: "Ventouris Events - Website",
        description:
          "An elegant website for a premium event planning and catering company",
        about:
          "Ventouris Events is a modern and stylish website showcasing the services and portfolio of a high-end event planning and catering company. Designed to communicate elegance and professionalism, the site features a visually appealing layout, responsive design, and informative content about event services and wedding planning. Built with Next.js, TypeScript, Tailwind CSS, and Shadcn/ui, it delivers a seamless experience across all devices.",
        technologies: [
          SKILLS_MAP.nextjs,
          SKILLS_MAP.typescript,
          SKILLS_MAP.tailwind,
          SKILLS_MAP.shadcn,
        ],
        links: [
          {
            href: "https://ventourisevents.com/en",
            icon: FaExternalLinkAlt,
          },
        ],
        image: "/img/ventouris-events-image.png",
      },
      {
        title: "Pure Air Rentals - Website",
        description:
          "A professional showcase website for a climate control equipment rental business specializing in fans, heaters, and air conditioning units.",
        about:
          "Developed Pure Air Rentals, a clean and informative showcase website for a climate control equipment rental company. The site displays their range of equipment including fans, air coolers, heaters, and portable air conditioning units for events and temporary climate solutions. Features equipment galleries, service information, and customer testimonials, with contact options for rental inquiries. Built to present the business professionally while encouraging potential customers to get in touch for bookings.",
        technologies: [
          SKILLS_MAP.astro,
          SKILLS_MAP.typescript,
          SKILLS_MAP.tailwind,
          SKILLS_MAP.daisyui,
          SKILLS_MAP.sanity,
        ],
        links: [
          {
            href: "https://pureairrentals.com/en/",
            icon: FaExternalLinkAlt,
          },
        ],
        image: "/img/pure-air-rentals-image.png",
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
