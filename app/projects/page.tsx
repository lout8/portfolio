import Image from "next/image";

import PageLayout from "@/components/page-layout";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  skillsCard,
} from "@/components/ui/card";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { projectsData } from "@/lib/data";
import TechnologiesBadge from "@/components/technologies-badge";
import { cn } from "@/lib/utils";
import Hyperlink from "@/components/hyperlink";
import { Button } from "@/components/ui/button";

export default function Projects() {
  return (
    <PageLayout>
      {projectsData.map((items, index) => (
        <div key={index}>
          <h1 className="py-3 text-2xl font-semibold leading-none tracking-tight max-sm:text-xl">
            {items.title}
          </h1>
          <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
            {items.projects.map((project, index) => (
              <Sheet key={index}>
                <SheetTrigger
                  className={cn(
                    skillsCard(),
                    "rounded-lg text-start hover:scale-102"
                  )}
                >
                  <Card className="relative h-80 w-full overflow-hidden p-4 max-md:h-96">
                    <div className="relative h-2/4">
                      <Image
                        width={300}
                        height={300}
                        className="pointer-events-none h-full w-full select-none rounded-t-lg object-cover"
                        src={project.image}
                        alt="Photo of my self"
                        priority
                      />
                      <div className="pointer-events-none absolute bottom-0 left-0 h-2/3 w-full bg-gradient-to-t from-card to-transparent"></div>
                    </div>

                    <CardHeader className="px-0 py-2">
                      <CardTitle className="text-lg max-sm:text-base">
                        {project.title}
                      </CardTitle>
                      <TechnologiesBadge technologies={project.technologies} />
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </SheetTrigger>
                <SheetContent className="max-xs:w-full space-y-4 overflow-auto sm:max-w-lg">
                  <SheetHeader>
                    <SheetTitle>{project.title}</SheetTitle>
                    <SheetDescription>{project.description}</SheetDescription>
                  </SheetHeader>
                  <div className="relative h-1/3">
                    <Image
                      width={300}
                      height={300}
                      className="pointer-events-none h-full w-full select-none rounded-t-lg object-cover"
                      src={project.image}
                      alt="Photo of my self"
                      priority
                    />
                    <div className="pointer-events-none absolute bottom-0 left-0 h-2/3 w-full bg-gradient-to-t from-card to-transparent"></div>
                  </div>
                  <div>
                    <h3 className="text-lg">About</h3>
                    <p className="text-sm text-muted-foreground">
                      {project.about}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg">Technologies</h3>
                    <TechnologiesBadge technologies={project.technologies} />
                  </div>
                  <div>
                    <h3 className="text-lg">Links</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.links.map((link, index) => (
                        <Button key={index} size="icon" variant="ghost" asChild>
                          <Hyperlink href={link.href}>
                            <link.icon className="text-xl" />
                          </Hyperlink>
                        </Button>
                      ))}
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            ))}
          </div>
        </div>
      ))}
    </PageLayout>
  );
}
