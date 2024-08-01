import React, {
  AnchorHTMLAttributes,
  DetailedHTMLProps,
  forwardRef,
} from "react";
import { Slot } from "@radix-ui/react-slot";

interface HyperlinkProps
  extends DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  href: string;
  asChild?: boolean;
}

const Hyperlink = forwardRef<HTMLAnchorElement, HyperlinkProps>(
  ({ href, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "a";
    return (
      <Comp
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        ref={ref}
        {...props}
      />
    );
  }
);

Hyperlink.displayName = "Hyperlink";

export default Hyperlink;
