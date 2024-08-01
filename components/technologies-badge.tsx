import { Badge, BadgeProps } from "@/components/ui/badge";
import Vector from "./svgs";
import { cn } from "@/lib/utils";
import { SkillType } from "@/lib/types";

export default function TechnologiesBadge({
  className,
  variant = "secondary",
  technologies,
  ...props
}: BadgeProps & { technologies: SkillType[] | SkillType }) {
  if (!technologies) return null;

  const technologiesArray = Array.isArray(technologies)
    ? technologies
    : [technologies];

  return (
    <div className="flex flex-wrap gap-1 pt-1">
      {technologiesArray.map((technology, index) => (
        <Badge
          key={index}
          className={cn(
            "flex h-fit w-fit items-center gap-1 whitespace-nowrap text-xs",
            className
          )}
          variant={variant}
          {...props}
        >
          <Vector type={technology.icon} className="h-4 w-4" />
          <p>{technology.text}</p>
        </Badge>
      ))}
    </div>
  );
}
