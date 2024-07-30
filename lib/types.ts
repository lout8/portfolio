import { StaticImageData } from "next/image";

import { svgType } from "@/components/svgs";

type SkillType = {
  icon: svgType;
  text: string;
};

type SkillCategoryType = {
  title: string;
  skills: SkillType[];
};

export type HomeType = {
  title: string;
  position: string;
  description: string;
  image: StaticImageData;
};

export type ExperienceType = {
  title: string;
  experiences: {
    title: string;
    company: string;
    duration: string;
    location: string;
    description: {
      title: string;
      tasks: string[];
    };
  }[];
};

export type SkillsType = {
  languages: SkillCategoryType;
  frameworks: SkillCategoryType;
  databases: SkillCategoryType;
  styling: SkillCategoryType;
  collaboration: SkillCategoryType;
  prototyping: SkillCategoryType;
};

export type EducationType = {
  title: string;
  educations: {
    title: string;
    provider: string;
    duration: string;
    score: string;
  }[];
};
