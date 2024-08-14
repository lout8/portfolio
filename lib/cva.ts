import { cva } from "class-variance-authority";

const animationFocus = cva(
  "rounded-lg ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus:scale-102"
);

export { animationFocus };
