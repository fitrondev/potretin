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
    label: "portofolio",
    href: "/portofolio",
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

export interface PortofolioItem {
  id: number;
  title: string;
  category: string;
  image_url: string;
  description: string;
  image_list: string[];
}

export const portofolio_categories = [
  "Semua",
  "Potret",
  "Pernikahan",
  "Komersial",
  "Event",
];

export const portofolio_data: PortofolioItem[] = [
  {
    id: 1,
    title: "Sesi Fotografi Potret Keluarga",
    category: "Potret",
    image_url:
      "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=500&h=500&fit=crop",
    description: "Sesi fotografi keluarga dengan konsep natural dan hangat",
    image_list: [
      "/assets/images/portofolio.jpg",
      "/assets/images/portofolio.jpg",
      "/assets/images/portofolio.jpg",
      "/assets/images/portofolio.jpg",
    ],
  },
  {
    id: 2,
    title: "Pernikahan Outdoor Romantic",
    category: "Pernikahan",
    image_url:
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=500&h=500&fit=crop",
    description:
      "Dokumentasi pernikahan dengan nuansa romantis di alam terbuka",
    image_list: [
      "/assets/images/portofolio.jpg",
      "/assets/images/portofolio.jpg",
      "/assets/images/portofolio.jpg",
      "/assets/images/portofolio.jpg",
    ],
  },
  {
    id: 3,
    title: "Fotografi Produk Fashion",
    category: "Komersial",
    image_url:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&h=500&fit=crop",
    description:
      "Fotografi produk fashion dengan lighting dan styling profesional",
    image_list: [
      "/assets/images/portofolio.jpg",
      "/assets/images/portofolio.jpg",
      "/assets/images/portofolio.jpg",
      "/assets/images/portofolio.jpg",
    ],
  },
  {
    id: 4,
    title: "Corporate Event Documentation",
    category: "Event",
    image_url:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?w=500&h=500&fit=crop",
    description: "Dokumentasi acara korporat dengan pendekatan jurnalistik",
    image_list: [
      "/assets/images/portofolio.jpg",
      "/assets/images/portofolio.jpg",
      "/assets/images/portofolio.jpg",
      "/assets/images/portofolio.jpg",
    ],
  },
  {
    id: 5,
    title: "Maternity Photography",
    category: "Potret",
    image_url:
      "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=500&h=500&fit=crop",
    description: "Sesi maternity dengan konsep elegan dan emosional",
    image_list: [
      "/assets/images/portofolio.jpg",
      "/assets/images/portofolio.jpg",
      "/assets/images/portofolio.jpg",
      "/assets/images/portofolio.jpg",
    ],
  },
  {
    id: 6,
    title: "Wedding Reception Candid",
    category: "Pernikahan",
    image_url:
      "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=500&h=500&fit=crop",
    description: "Momen candid resepsi pernikahan yang penuh kebahagiaan",
    image_list: [
      "/assets/images/portofolio.jpg",
      "/assets/images/portofolio.jpg",
      "/assets/images/portofolio.jpg",
      "/assets/images/portofolio.jpg",
    ],
  },
  {
    id: 7,
    title: "Brand Campaign Shoot",
    category: "Komersial",
    image_url:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500&h=500&fit=crop",
    description: "Kampanye brand dengan konsep kreatif dan modern",
    image_list: [
      "/assets/images/portofolio.jpg",
      "/assets/images/portofolio.jpg",
      "/assets/images/portofolio.jpg",
      "/assets/images/portofolio.jpg",
    ],
  },
  {
    id: 8,
    title: "Birthday Party Documentation",
    category: "Event",
    image_url:
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=500&h=500&fit=crop",
    description: "Dokumentasi pesta ulang tahun dengan momen-momen berharga",
    image_list: [
      "/assets/images/portofolio.jpg",
      "/assets/images/portofolio.jpg",
      "/assets/images/portofolio.jpg",
      "/assets/images/portofolio.jpg",
    ],
  },
  {
    id: 9,
    title: "Professional Headshot Session",
    category: "Potret",
    image_url:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop",
    description: "Sesi headshot profesional untuk keperluan bisnis dan karir",
    image_list: [
      "/assets/images/portofolio.jpg",
      "/assets/images/portofolio.jpg",
      "/assets/images/portofolio.jpg",
      "/assets/images/portofolio.jpg",
    ],
  },
  {
    id: 10,
    title: "Intimate Wedding Ceremony",
    category: "Pernikahan",
    image_url:
      "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=500&h=500&fit=crop",
    description:
      "Upacara pernikahan intimate dengan nuansa hangat dan personal",
    image_list: [
      "/assets/images/portofolio.jpg",
      "/assets/images/portofolio.jpg",
      "/assets/images/portofolio.jpg",
      "/assets/images/portofolio.jpg",
    ],
  },
  {
    id: 11,
    title: "Product Photography Studio",
    category: "Komersial",
    image_url:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=500&fit=crop",
    description:
      "Fotografi produk dengan setup studio dan lighting profesional",
    image_list: [
      "/assets/images/portofolio.jpg",
      "/assets/images/portofolio.jpg",
      "/assets/images/portofolio.jpg",
      "/assets/images/portofolio.jpg",
    ],
  },
  {
    id: 12,
    title: "Conference & Seminar Coverage",
    category: "Event",
    image_url:
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=500&h=500&fit=crop",
    description:
      "Dokumentasi konferensi dan seminar dengan pendekatan jurnalistik",
    image_list: [
      "/assets/images/portofolio.jpg",
      "/assets/images/portofolio.jpg",
      "/assets/images/portofolio.jpg",
      "/assets/images/portofolio.jpg",
    ],
  },
];

export interface TestimonialItem {
  id: number;
  name: string;
  role: string;
  company: string;
  image_url: string;
  rating: number;
  testimonial: string;
}

export const testimonials_data: TestimonialItem[] = [
  {
    id: 1,
    name: "Sarah Michelle",
    role: "Bride",
    company: "Jakarta",
    image_url:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    testimonial:
      "Fotografer yang luar biasa! Tim mereka berhasil mengabadikan setiap momen berharga di hari pernikahan kami dengan sangat sempurna. Hasilnya melampaui ekspektasi dan sangat natural.",
  },
  {
    id: 2,
    name: "David Kurniawan",
    role: "CEO",
    company: "TechCorp Indonesia",
    image_url:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    testimonial:
      "Profesionalisme yang tinggi dalam mengerjakan project fotografi komersial kami. Tim yang sangat responsif dan hasil yang berkualitas tinggi. Sangat merekomendasikan!",
  },
  {
    id: 3,
    name: "Maya Sari",
    role: "Marketing Manager",
    company: "Beauty Brand Co",
    image_url:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    testimonial:
      "Hasil fotografi produk yang menakjubkan! Kualitas foto sangat tajam dan lighting yang sempurna membuat produk kami terlihat sangat menarik. Terima kasih atas kerja kerasnya!",
  },
  {
    id: 4,
    name: "Robert Tan",
    role: "Event Organizer",
    company: "Prestige Events",
    image_url:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    testimonial:
      "Dokumentasi event yang sangat komprehensif dan berkualitas. Tim fotografer sangat fleksibel dan mampu menangkap momen-momen penting dengan sempurna.",
  },
  {
    id: 5,
    name: "Lisa Amanda",
    role: "Influencer",
    company: "Content Creator",
    image_url:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    testimonial:
      "Sesi fotografi potret yang sangat menyenangkan! Fotografer sangat sabar dalam mengarahkan pose dan hasilnya sangat memuaskan untuk kebutuhan konten saya.",
  },
  {
    id: 6,
    name: "Ahmad Hidayat",
    role: "Groom",
    company: "Bandung",
    image_url:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    testimonial:
      "Pengalaman fotografi pre-wedding yang tidak terlupakan. Tim sangat kreatif dalam memberikan arahan konsep dan hasilnya sangat artistik dan romantis.",
  },
];
