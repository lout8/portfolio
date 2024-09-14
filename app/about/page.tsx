import { Metadata } from "next";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Skills from "@/components/skills";
import { cn } from "@/lib/utils";
import { educationData, experienceData, skillsData } from "@/lib/data";
import PageLayout from "@/components/page-layout";
import { Animation } from "@/components/animation";
import { animationFocus } from "@/lib/cva";

export const metadata: Metadata = {
  title: "About",
  description:
    "Explore my professional portfolio, showcasing my skills, experience, and education",
};

const skillRows = ["col-span-2", "", "", "col-span-2", "", ""];

export default function About() {
  return (
    <PageLayout>
      <Animation
        direction="top"
        delay="100ms"
        tabIndex={0}
        className={cn(animationFocus(), "w-full")}
        asChild
      >
        <Card>
          <CardHeader>
            <CardTitle>{experienceData.title}</CardTitle>
            <CardContent className="space-y-8 p-0 pt-4">
              {experienceData.experiences.map((exp, index) => (
                <div key={index}>
                  <h1 className="text-xl font-medium max-md:text-lg">
                    {exp.title}
                  </h1>
                  <p className="text-lg font-medium opacity-80 max-md:text-base">
                    {exp.company}
                  </p>
                  <p className="text-base opacity-60 max-md:text-sm">
                    {exp.duration}
                  </p>
                  <p className="text-base opacity-60 max-md:text-sm">
                    {exp.location}
                  </p>
                  <div key={index} className="mt-4">
                    <h2 className="font-medium opacity-90 max-md:text-sm">
                      {exp.description.title}
                    </h2>
                    <ul className="list-inside list-disc space-y-2 pl-4 pt-2">
                      {exp.description.tasks.map((task, taskIndex) => (
                        <li
                          key={taskIndex}
                          className="text-sm opacity-70 max-md:text-xs"
                        >
                          {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </CardContent>
          </CardHeader>
        </Card>
      </Animation>

      <div className="grid w-full gap-4">
        {skillsData.map((item, index) => (
          <Animation
            key={index}
            tabIndex={0}
            direction="fadein"
            className={cn(
              animationFocus(),
              "w-full max-sm:col-span-1 max-sm:row-span-1",
              skillRows[index % skillRows.length]
            )}
          >
            <Card>
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
                <CardContent className="flex flex-row flex-wrap justify-around gap-10 pt-6">
                  {item.skills.map((skill, index) => (
                    <Skills key={index} icon={skill.icon} text={skill.text} />
                  ))}
                </CardContent>
              </CardHeader>
            </Card>
          </Animation>
        ))}
      </div>

      <Animation tabIndex={0} className={cn(animationFocus(), "w-full")}>
        <Card>
          <CardHeader>
            <CardTitle>{educationData.title}</CardTitle>
            <CardContent className="space-y-8 p-0 pt-4">
              {educationData.educations.map((education, index) => (
                <div key={index}>
                  <h1 className="text-xl font-medium max-md:text-lg">
                    {education.title}
                  </h1>
                  <p className="text-lg font-medium opacity-80 max-md:text-base">
                    {education.provider}
                  </p>
                  <p className="text-base opacity-60 max-md:text-sm">
                    {education.duration}
                  </p>
                  <p className="text-base opacity-60 max-md:text-sm">
                    {education.score}
                  </p>
                </div>
              ))}
            </CardContent>
          </CardHeader>
        </Card>
      </Animation>
    </PageLayout>
  );
}
