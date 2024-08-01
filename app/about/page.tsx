import { cva } from "class-variance-authority";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  skillContent,
  skillsCard,
} from "@/components/ui/card";
import Skills from "@/components/skills";
import { cn } from "@/lib/utils";
import { educationData, experienceData, skillsData } from "@/lib/data";
import PageLayout from "@/components/page-layout";

export default function About() {
  return (
    <PageLayout>
      {/* ------------- row -------------- */}
      <Card tabIndex={0} className={skillsCard()}>
        <CardHeader>
          <CardTitle>{experienceData.title}</CardTitle>
          <CardContent className="space-y-8 p-0 pt-4">
            {experienceData.experiences.map((exp, index) => (
              <div key={index}>
                <h1 className="text-xl font-medium">{exp.title}</h1>
                <p className="text-lg font-medium opacity-80">{exp.company}</p>
                <p className="text-base opacity-60">{exp.duration}</p>
                <p className="text-base opacity-60">{exp.location}</p>
                <div key={index} className="mt-4">
                  <h2 className="font-medium opacity-90">
                    {exp.description.title}
                  </h2>
                  <ul className="list-inside list-disc space-y-2 pl-4 pt-2">
                    {exp.description.tasks.map((task, taskIndex) => (
                      <li key={taskIndex} className="text-sm opacity-70">
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
      {/* -------------------------------- */}

      {/* ------------- row -------------- */}
      <Card tabIndex={0} className={skillsCard()}>
        <CardHeader>
          <CardTitle>{skillsData.languages.title}</CardTitle>
          <CardContent className={cn(skillContent())}>
            {skillsData.languages.skills.map((skill, index) => (
              <Skills key={index} icon={skill.icon} text={skill.text} />
            ))}
          </CardContent>
        </CardHeader>
      </Card>
      {/* -------------------------------- */}

      {/* ------------- row -------------- */}
      <div className="flex w-full gap-4 max-md:flex-col">
        <Card tabIndex={0} className={skillsCard()}>
          <CardHeader>
            <CardTitle>{skillsData.frameworks.title}</CardTitle>
            <CardContent className={skillContent()}>
              {skillsData.frameworks.skills.map((skill, index) => (
                <Skills key={index} icon={skill.icon} text={skill.text} />
              ))}
            </CardContent>
          </CardHeader>
        </Card>
        <Card tabIndex={0} className={skillsCard()}>
          <CardHeader>
            <CardTitle>{skillsData.databases.title}</CardTitle>
            <CardContent className={skillContent()}>
              {skillsData.databases.skills.map((skill, index) => (
                <Skills key={index} icon={skill.icon} text={skill.text} />
              ))}
            </CardContent>
          </CardHeader>
        </Card>
      </div>
      {/* -------------------------------- */}

      {/* ------------- row -------------- */}
      <div className="flex w-full gap-4 max-lg:flex-col">
        <Card tabIndex={0} className={skillsCard()}>
          <CardHeader>
            <CardTitle>{skillsData.styling.title}</CardTitle>
            <CardContent className={skillContent()}>
              {skillsData.styling.skills.map((skill, index) => (
                <Skills key={index} icon={skill.icon} text={skill.text} />
              ))}
            </CardContent>
          </CardHeader>
        </Card>
        <div className="inline-flex gap-4 max-sm:flex-col">
          <Card tabIndex={0} className={skillsCard()}>
            <CardHeader>
              <CardTitle>{skillsData.prototyping.title}</CardTitle>
              <CardContent className={skillContent()}>
                {skillsData.prototyping.skills.map((skill, index) => (
                  <Skills key={index} icon={skill.icon} text={skill.text} />
                ))}
              </CardContent>
            </CardHeader>
          </Card>
          <Card tabIndex={0} className={skillsCard()}>
            <CardHeader>
              <CardTitle>{skillsData.collaboration.title}</CardTitle>
              <CardContent className={skillContent()}>
                {skillsData.collaboration.skills.map((skill, index) => (
                  <Skills key={index} icon={skill.icon} text={skill.text} />
                ))}
              </CardContent>
            </CardHeader>
          </Card>
        </div>
      </div>
      {/* -------------------------------- */}

      {/* ------------- row -------------- */}
      <Card tabIndex={0} className={skillsCard()}>
        <CardHeader>
          <CardTitle>{educationData.title}</CardTitle>
          <CardContent className="space-y-8 p-0 pt-4">
            {educationData.educations.map((education, index) => (
              <div key={index}>
                <h1 className="text-xl font-medium">{education.title}</h1>
                <p className="text-lg font-medium opacity-80">
                  {education.provider}
                </p>
                <p className="text-base opacity-60">{education.duration}</p>
                <p className="text-base opacity-60">{education.score}</p>
              </div>
            ))}
          </CardContent>
        </CardHeader>
      </Card>
      {/* -------------------------------- */}
    </PageLayout>
  );
}
