"use client";

import { HiArrowLeft } from "react-icons/hi";

import { Button } from "@/components/ui/button";
import { Animation } from "@/components/animation";

export default function NotFound() {
  return (
    <Animation className="flex h-[80vh] flex-col items-center justify-center p-8 text-center text-lg">
      <div className="flex h-full w-full flex-col items-center justify-center gap-4">
        <h1 className="text-destructive">404 error</h1>
        <h2 className="text-3xl font-medium">Page not found</h2>
        <p className="text-foreground/50">This page does not exist</p>
        <Button className="gap-2" onClick={() => window.history.back()}>
          <HiArrowLeft />
          Go back
        </Button>
      </div>
    </Animation>
  );
}
