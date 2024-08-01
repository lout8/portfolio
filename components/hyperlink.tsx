import React, {
  AnchorHTMLAttributes,
  DetailedHTMLProps,
  ReactNode,
  forwardRef,
} from "react";
import { Slot } from "@radix-ui/react-slot";

interface HyperlinkProps
  extends DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  href: string;
  children: ReactNode;
  asChild?: boolean;
}

const Hyperlink = forwardRef<HTMLAnchorElement, HyperlinkProps>(
  ({ href, children, asChild = false, ...rest }, ref) => {
    const Comp = asChild ? Slot : "a";
    return (
      <Comp
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        ref={ref}
        {...rest}
      >
        {children}
      </Comp>
    );
  }
);

Hyperlink.displayName = "Hyperlink";

export default Hyperlink;
