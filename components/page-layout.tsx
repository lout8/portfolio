import { ReactNode } from "react";

import { cn } from "@/lib/utils";

export default function PageLayout({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <main
      className={cn(
        "mt-4 flex w-full max-w-2xl flex-col items-center p-4",
        className
      )}
    >
      {children}
    </main>
  );
}
