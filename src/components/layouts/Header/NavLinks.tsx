import Link from "next/link";

import { nav_links } from "@/constants/data";

import { cn } from "@/lib/utils";

type NavLinksProps = {
  className?: string;
  class_name_link?: string;
};

const NavLinks = ({ className, class_name_link }: NavLinksProps) => {
  return (
    <nav className={cn("flex items-center space-x-8", className)}>
      {nav_links.map(link => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            "hover:text-primary text-muted-foreground font-medium transition-colors",
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
