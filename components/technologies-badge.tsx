import { Badge, BadgeProps } from "@/components/ui/badge";
import Vector from "./svgs";
import { cn } from "@/lib/utils";
import { SkillType } from "@/lib/types";
import Hyperlink from "./hyperlink";

export default function TechnologiesBadge({
  className,
  variant = "secondary",
  technologies,
  ...props
}: BadgeProps & { technologies: SkillType[] }) {
  if (!technologies) return null;

  return (
    <div className="flex flex-wrap gap-1 pt-1">
      {technologies.map((technology, index) => (
        <Hyperlink key={index} href={technology.link}>
          <Badge
            className={cn(
              "flex h-fit w-fit items-center gap-1 whitespace-nowrap text-xs",
              className
            )}
            variant={variant}
            {...props}
          >
            <Vector type={technology.icon} className="h-4 w-4" />
            {technology.text}
          </Badge>
        </Hyperlink>
      ))}
    </div>
  );
}
