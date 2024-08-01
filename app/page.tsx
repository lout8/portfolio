import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import PageLayout from "@/components/page-layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { homeData } from "@/lib/data";
import { Animation } from "@/components/animation";

export default function Home() {
  return (
    <PageLayout className="gap-4 p-0">
      <Animation direction="top" delay="100ms">
        <Card>
          <CardHeader className="items-center justify-center text-center">
            <Image
              width={300}
              height={300}
              className="pointer-events-none relative mb-2 flex h-36 w-36 shrink-0 select-none overflow-hidden rounded-full object-cover max-md:h-28 max-md:w-28"
              src={homeData.image}
              alt="Photo of my self"
            />
            <CardTitle>{homeData.title}</CardTitle>
            <CardDescription>{homeData.position}</CardDescription>
            <CardContent>
              <p className="text-sm text-foreground/90">
                {homeData.description}
              </p>
            </CardContent>
            <CardFooter>
              <Button className="gap-2" asChild>
                <Link href={"/about"}>
                  More about me
                  <ArrowRight className="h-5 w-5 animate-arrow" />
                </Link>
              </Button>
            </CardFooter>
          </CardHeader>
        </Card>
      </Animation>
    </PageLayout>
  );
}
