"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import Vector from "./svgs";
import { ModeToggle } from "./theme-toggler";

const menuItems = [
  { href: "/", label: "Logo", icon: true },
  { href: "/about", label: "About", icon: false },
  { href: "/work", label: "Work", icon: false },
  { href: "/contact", label: "Contact", icon: false },
];

export default function Navigation() {
  const pathname = usePathname();
  return (
    <NavigationMenu>
      <NavigationMenuList className="bg-card justify-between rounded-md border p-1 shadow-lg">
        {menuItems.map((item) => (
          <NavigationMenuItem key={item.href}>
            <Link href={item.href} legacyBehavior passHref>
              <NavigationMenuLink
                className={cn(
                  navigationMenuTriggerStyle(),
                  item.icon && "h-10 w-10 p-0",
                  pathname === item.href
                    ? "bg-accent text-accent-foreground"
                    : ""
                )}
              >
                {item.icon ? (
                  <Vector type="logo" className="h-[1.2rem] w-[1.2rem]" />
                ) : (
                  item.label
                )}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
        <NavigationMenuItem>
          <ModeToggle />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
