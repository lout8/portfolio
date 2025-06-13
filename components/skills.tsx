import { SkillType } from "@/lib/types";
import Hyperlink from "./hyperlink";
import Vector, { svgType } from "./svgs";
import { Button } from "./ui/button";

export default function Skills(skill: SkillType) {
  return (
    <Button
      variant="ghost"
      className="flex h-full flex-col items-center text-lg font-bold max-lg:text-base"
      asChild
    >
      <Hyperlink href={skill.link}>
        <Vector
          className="h-12 w-12 max-lg:h-10 max-lg:w-10"
          type={skill.icon}
        />
        {skill.text}
      </Hyperlink>
    </Button>
  );
}
