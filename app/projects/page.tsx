import Image from "next/image";
import { Metadata } from "next";

import PageLayout from "@/components/page-layout";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
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
import { Animation } from "@/components/animation";
import { Button } from "@/components/ui/button";
import { animationFocus } from "@/lib/cva";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore my professional portfolio, showcasing my projects",
};

export default function Projects() {
  return (
    <PageLayout>
      {projectsData.map((items, index) => (
        <div key={index} className="w-full">
          <Animation delay="150ms">
            <h1 className="py-3 text-2xl font-semibold leading-none tracking-tight max-sm:text-xl">
              {items.title}
            </h1>
          </Animation>

          <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
            {items.projects.map((project, index) => (
              <Sheet key={index}>
                <SheetTrigger
                  className={cn(
                    animationFocus(),
                    "rounded-lg text-start transition-all hover:scale-102"
                  )}
                >
                  <Animation direction="fadein" delay="100ms">
                    <Card className="relative h-80 w-full overflow-hidden p-4 max-md:h-96">
                      <div className="relative h-2/4">
                        <Image
                          width={300}
                          height={300}
                          className="pointer-events-none h-full w-full select-none rounded-t-lg object-cover object-top"
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
                        <TechnologiesBadge
                          technologies={project.technologies}
                        />
                        <CardDescription>{project.description}</CardDescription>
                      </CardHeader>
                    </Card>
                  </Animation>
                </SheetTrigger>
                <SheetContent className="space-y-4 overflow-auto max-xs:w-full sm:max-w-lg">
                  <SheetHeader>
                    <SheetTitle>{project.title}</SheetTitle>
                    <SheetDescription>{project.description}</SheetDescription>
                  </SheetHeader>
                  <div className="relative h-fit">
                    <Image
                      width={1000}
                      height={800}
                      className="pointer-events-none h-fit w-full select-none rounded-t-lg object-scale-down"
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
