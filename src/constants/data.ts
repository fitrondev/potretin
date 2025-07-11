import {
  Building2,
  Calendar,
  Camera,
  Clock,
  Facebook,
  Heart,
  Instagram,
  LucideIcon,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
}

export const nav_links: NavItem[] = [
  {
    label: "Beranda",
    href: "/",
  },
  {
    label: "Tentang Kami",
    href: "#about",
  },
  {
    label: "Portofolio",
    href: "#portofolio",
  },
  {
    label: "Harga",
    href: "#pricing",
  },
  {
    label: "Kontak",
    href: "#contact",
  },
  {
    label: "FAQ",
    href: "#faq",
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

export interface PricingPlan {
  id: number;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  cta_text: string;
}

export const pricing_plans: PricingPlan[] = [
  {
    id: 1,
    name: "Basic",
    price: "1.500.000",
    period: "per sesi",
    description: "Paket dasar untuk sesi fotografi individual atau couple",
    features: [
      "Sesi fotografi 2 jam",
      "30 foto hasil editing",
      "5 foto print ukuran 4R",
      "File digital resolusi tinggi",
      "1 kali revisi editing",
      "Konsultasi konsep gratis",
    ],
    cta_text: "Pilih Basic",
  },
  {
    id: 2,
    name: "Professional",
    price: "3.500.000",
    period: "per sesi",
    description: "Paket lengkap untuk acara khusus dan dokumentasi penting",
    features: [
      "Sesi fotografi 4 jam",
      "80 foto hasil editing",
      "15 foto print ukuran 4R",
      "File digital resolusi tinggi",
      "3 kali revisi editing",
      "Album digital eksklusif",
      "Konsultasi konsep dan lokasi",
      "Backup file cloud storage",
    ],
    popular: true,
    cta_text: "Pilih Professional",
  },
  {
    id: 3,
    name: "Premium",
    price: "7.500.000",
    period: "per event",
    description: "Paket premium untuk pernikahan dan acara besar",
    features: [
      "Full day coverage (8 jam)",
      "200+ foto hasil editing",
      "50 foto print berbagai ukuran",
      "Album fisik premium",
      "Video highlight 3-5 menit",
      "Unlimited revisi editing",
      "2 fotografer profesional",
      "Drone photography (jika memungkinkan)",
      "Rush order 48 jam",
      "Backup file selamanya",
    ],
    cta_text: "Pilih Premium",
  },
];

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export const faq_data: FaqItem[] = [
  {
    id: 1,
    question: "Apa saja layanan fotografi yang tersedia?",
    answer:
      "Kami menyediakan berbagai layanan fotografi termasuk fotografi potret, pernikahan, komersial, event, maternity, pre-wedding, dan dokumentasi korporat. Setiap layanan dapat disesuaikan dengan kebutuhan spesifik Anda.",
  },
  {
    id: 2,
    question: "Berapa lama proses editing dan delivery foto?",
    answer:
      "Proses editing standar memakan waktu 7-14 hari kerja tergantung paket yang dipilih. Untuk paket Premium, kami menyediakan layanan rush order dengan delivery dalam 48 jam dengan biaya tambahan.",
  },
  {
    id: 3,
    question: "Apakah bisa request lokasi fotografi tertentu?",
    answer:
      "Tentu saja! Kami sangat terbuka dengan request lokasi fotografi. Tim kami akan melakukan survey lokasi terlebih dahulu dan memberikan rekomendasi terbaik untuk hasil foto yang optimal. Biaya transportasi mungkin berlaku untuk lokasi di luar kota.",
  },
  {
    id: 4,
    question: "Bagaimana sistem pembayaran yang tersedia?",
    answer:
      "Kami menerima pembayaran melalui transfer bank, e-wallet, dan cash. Untuk paket wedding dan event besar, tersedia sistem pembayaran cicilan dengan DP 50% di awal dan pelunasan sebelum hari H.",
  },
  {
    id: 5,
    question: "Apakah ada garansi jika hasil foto tidak sesuai ekspektasi?",
    answer:
      "Ya, kami memberikan garansi revisi sesuai dengan paket yang dipilih. Jika masih belum sesuai ekspektasi, kami akan melakukan diskusi untuk menemukan solusi terbaik, termasuk kemungkinan reshoot dengan syarat dan ketentuan tertentu.",
  },
  {
    id: 6,
    question: "Berapa jumlah foto yang akan diterima?",
    answer:
      "Jumlah foto final yang telah diedit bervariasi sesuai paket: Basic (30 foto), Professional (80 foto), dan Premium (200+ foto). Selain itu, Anda juga akan mendapatkan semua foto mentah dalam format digital.",
  },
  {
    id: 7,
    question: "Apakah fotografer bisa datang ke luar kota?",
    answer:
      "Ya, kami melayani fotografi ke luar kota bahkan luar provinsi. Biaya transportasi, akomodasi, dan konsumsi untuk tim akan dikenakan biaya tambahan yang akan dikomunikasikan saat konsultasi.",
  },
  {
    id: 8,
    question: "Bagaimana jika cuaca buruk saat sesi outdoor?",
    answer:
      "Untuk sesi outdoor, kami selalu memantau prakiraan cuaca. Jika cuaca tidak memungkinkan, kami akan melakukan reschedule tanpa biaya tambahan atau menyediakan alternatif indoor/covered area sesuai kesepakatan.",
  },
];

export interface ContactInfo {
  type: string;
  label: string;
  value: string;
  icon: LucideIcon;
  href?: string;
}

export const contact_info: ContactInfo[] = [
  {
    type: "phone",
    label: "Telepon",
    value: "+62 812-3456-7890",
    icon: Phone,
    href: "tel:+6281234567890",
  },
  {
    type: "email",
    label: "Email",
    value: "info@potretin.com",
    icon: Mail,
    href: "mailto:info@potretin.com",
  },
  {
    type: "address",
    label: "Alamat",
    value: "Jl. Fotografi No. 123, Jakarta Selatan 12345",
    icon: MapPin,
  },
  {
    type: "hours",
    label: "Jam Operasional",
    value: "Senin - Sabtu: 09:00 - 18:00",
    icon: Clock,
  },
];

export interface SocialLink {
  name: string;
  href: string;
  icon: LucideIcon;
  aria_label: string;
}

export interface FooterNavigationLink {
  label: string;
  href: string;
}

export interface FooterData {
  company_name: string;
  description: string;
  social_links: SocialLink[];
  navigation_links: FooterNavigationLink[];
  legal_links: FooterNavigationLink[];
  copyright_text: string;
}

export const footer_data: FooterData = {
  company_name: "Potretin",
  description:
    "Mengabadikan momen berharga Anda dengan sentuhan artistik dan profesional. Kami adalah tim fotografer berpengalaman yang siap membantu mewujudkan visi visual Anda menjadi kenyataan.",
  social_links: [
    {
      name: "Instagram",
      href: "#",
      icon: Instagram,
      aria_label: "Instagram",
    },
    {
      name: "Facebook",
      href: "#",
      icon: Facebook,
      aria_label: "Facebook",
    },
    {
      name: "Twitter",
      href: "#",
      icon: Twitter,
      aria_label: "Twitter",
    },
    {
      name: "YouTube",
      href: "#",
      icon: Youtube,
      aria_label: "YouTube",
    },
  ],
  navigation_links: [
    {
      label: "Beranda",
      href: "/",
    },
    {
      label: "Tentang Kami",
      href: "#about",
    },
    {
      label: "Portofolio",
      href: "#portofolio",
    },
    {
      label: "Harga",
      href: "#pricing",
    },
    {
      label: "FAQ",
      href: "#faq",
    },
    {
      label: "Kontak",
      href: "#contact",
    },
  ],
  legal_links: [
    {
      label: "Kebijakan Privasi",
      href: "#",
    },
    {
      label: "Syarat & Ketentuan",
      href: "#",
    },
  ],
  copyright_text: "©2025 Ansori Dev. Semua hak dilindungi undang-undang.",
};
