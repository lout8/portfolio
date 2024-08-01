"use client";

import { cva, VariantProps } from "class-variance-authority";
import { useEffect, useRef, useState } from "react";
import { Slot } from "@radix-ui/react-slot";

import { cn } from "@/lib/utils";

const animationVariants = cva("transition-all", {
  variants: {
    direction: {
      right: "translate-x-6",
      left: "-translate-x-6",
      top: "-translate-y-6",
      bottom: "translate-y-6",
      opacity: "",
      fadein: "scale-75",
    },
    duration: {
      "0ms": "duration-0",
      "500ms": "duration-500",
      "700ms": "duration-700",
      "1000ms": "duration-1000",
    },
    delay: {
      "0ms": "",
      "75ms": "delay-75",
      "100ms": "delay-100",
      "150ms": "delay-150",
      "200ms": "delay-200",
      "300ms": "delay-300",
      "500ms": "delay-500",
      "700ms": "delay-700",
      "1000ms": "delay-1000",
    },
    transition: {
      "ease-linear": "ease-linear",
      "ease-in": "ease-in",
      "ease-out": "ease-out",
      "ease-in-out": "ease-in-out",
    },
  },
  defaultVariants: {
    direction: "opacity",
    duration: "500ms",
    delay: "0ms",
    transition: "ease-in-out",
  },
});

export type animationsTypes = VariantProps<typeof animationVariants>;

export interface AnimationProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof animationVariants> {
  asChild?: boolean;
}

const Animation = ({
  className,
  direction,
  duration,
  delay,
  transition,
  asChild = false,
  ...props
}: AnimationProps) => {
  const Comp = asChild ? Slot : "div";
  const [doAnimation, setDoAnimation] = useState(true);
  const archerRef = useRef<HTMLDivElement | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const dom = archerRef.current;
    if (!dom) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimated) {
          setDoAnimation(false);
          setHasAnimated(true);
        }
      });
    });

    observer.observe(dom);

    return () => {
      observer.unobserve(dom);
    };
  }, [hasAnimated]);

  return (
    <Comp
      className={cn(
        animationVariants({ duration, delay, transition }),
        doAnimation &&
          !hasAnimated &&
          `opacity-0 ${animationVariants({ direction })}`,
        className
      )}
      ref={archerRef}
      {...props}
    />
  );
};
Animation.displayName = "Animation";

export { Animation, animationVariants };
