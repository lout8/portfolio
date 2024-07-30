import Vector, { svgType } from "./svgs";

export default function Skills({
  text,
  icon,
}: {
  text: string;
  icon: svgType;
}) {
  return (
    <div className="flex flex-col items-center">
      <Vector className="h-16 w-16 max-lg:h-14 max-lg:w-14" type={icon} />
      <p className="whitespace-nowrap text-lg font-bold max-lg:text-base">
        {text}
      </p>
    </div>
  );
}
