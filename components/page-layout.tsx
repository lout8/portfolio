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
        "mt-6 flex w-full max-w-3xl flex-col items-center gap-4",
        className
      )}
    >
      {children}
    </main>
  );
}
