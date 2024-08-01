import PageLayout from "@/components/page-layout";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  skillsCard,
} from "@/components/ui/card";
import { contactData } from "@/lib/data";
import Hyperlink from "@/components/hyperlink";
import { cn } from "@/lib/utils";

const contactRows = ["col-span-2", "row-span-2", "", ""];

export default function Contact() {
  return (
    <PageLayout className="grid grid-flow-col grid-rows-3 max-sm:grid-flow-row max-sm:grid-cols-1">
      {contactData.map((contact, index) => (
        <Hyperlink
          key={index}
          href={contact.href}
          className={cn(
            skillsCard(),
            "h-full rounded-lg hover:scale-102 max-sm:col-span-1 max-sm:row-span-1",
            contactRows[index % contactRows.length]
          )}
          tabIndex={0}
        >
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
      ))}
    </PageLayout>
  );
}
