export interface NavItem {
  label: string;
  href: string;
}

export const nav_links: NavItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Portfolio",
    href: "/portfolio",
  },
  {
    label: "Services",
    href: "/services",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export interface HeroImage {
  src: string;
  alt: string;
  title?: string;
}

export const hero_images: HeroImage[] = [
  {
    src: "/assets/images/Hero1.jpg",
    alt: "Fotografi Profesional Hero 1",
    title: "Abadikan Momen Indah Kehidupan",
  },
  {
    src: "/assets/images/Hero2.jpg",
    alt: "Fotografi Profesional Hero 2",
    title: "Fotografi Potret Profesional",
  },
  {
    src: "/assets/images/Hero3.jpg",
    alt: "Fotografi Profesional Hero 3",
    title: "Bercerita Visual yang Kreatif",
  },
];
