import { Building2, Calendar, Camera, Heart, LucideIcon } from "lucide-react";

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

export interface AboutFeature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const about_features: AboutFeature[] = [
  {
    title: "Fotografi Potret",
    description:
      "Menangkap karakter dan kepribadian unik setiap individu melalui sesi fotografi potret yang profesional dan personal.",
    icon: Camera,
  },
  {
    title: "Fotografi Pernikahan",
    description:
      "Mengabadikan momen-momen berharga di hari spesial Anda dengan gaya natural dan emosional yang autentik.",
    icon: Heart,
  },
  {
    title: "Fotografi Komersial",
    description:
      "Menciptakan visual yang kuat untuk brand dan bisnis Anda dengan pendekatan kreatif dan profesional.",
    icon: Building2,
  },
  {
    title: "Fotografi Event",
    description:
      "Mendokumentasikan setiap detail penting dari acara Anda dengan hasil yang berkualitas tinggi dan berkesan.",
    icon: Calendar,
  },
];

export interface StatItem {
  value: string;
  label: string;
}

export const stats_data: StatItem[] = [
  {
    value: "500+",
    label: "Klien Puas",
  },
  {
    value: "1000+",
    label: "Foto Dihasilkan",
  },
  {
    value: "5+",
    label: "Tahun Pengalaman",
  },
  {
    value: "24/7",
    label: "Dukungan",
  },
];
