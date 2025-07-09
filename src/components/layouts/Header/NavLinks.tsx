"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { nav_links } from "@/constants/data";
import { cn } from "@/lib/utils";

type NavLinksProps = {
  className?: string;
  class_name_link?: string;
};

const NavLinks = ({ className, class_name_link }: NavLinksProps) => {
  const pathname = usePathname();

  return (
    <nav className={cn("flex items-center space-x-8", className)}>
      {nav_links.map(link => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            "hover:text-primary font-medium transition-colors",
            pathname === link.href ? "text-primary" : "text-muted-foreground",
            class_name_link
          )}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
};

export default NavLinks;
