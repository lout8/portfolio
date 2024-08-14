import { Metadata } from "next";

import PageLayout from "@/components/page-layout";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { contactData } from "@/lib/data";
import Hyperlink from "@/components/hyperlink";
import { cn } from "@/lib/utils";
import { Animation, animationsTypes } from "@/components/animation";
import { animationFocus } from "@/lib/cva";

export const metadata: Metadata = {
  title: "Contact",
  description: "Explore my professional portfolio, my contact info",
};

const contactRows = ["col-span-2", "row-span-2", "", ""];
const contactAnimations: animationsTypes["direction"][] = [
  "fadein",
  "fadein",
  "right",
  "bottom",
];

export default function Contact() {
  return (
    <PageLayout className="grid grid-flow-col grid-rows-3 max-sm:grid-flow-row max-sm:grid-cols-1">
      {contactData.map((contact, index) => (
        <Animation
          key={index}
          direction={contactAnimations[index % contactAnimations.length]}
          className={cn(
            animationFocus(),
            "h-full rounded-lg hover:scale-102 max-sm:col-span-1 max-sm:row-span-1",
            contactRows[index % contactRows.length]
          )}
          asChild
        >
          <Hyperlink href={contact.href}>
            <Card className="h-full">
              <CardHeader className="h-full items-center justify-center">
                <contact.icon className="text-4xl" />
                {contact.name && (
                  <CardTitle className="text-lg max-sm:text-base">
                    {contact.name}
                  </CardTitle>
                )}
                {contact.description && (
                  <CardDescription>{contact.description}</CardDescription>
                )}
              </CardHeader>
            </Card>
          </Hyperlink>
        </Animation>
      ))}
    </PageLayout>
  );
}
