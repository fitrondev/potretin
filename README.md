# Potretin - Landing Page

Sebuah landing page modern dan responsif yang dibangun dengan Next.js 15 dan Tailwind CSS untuk layanan fotografi/potret.

**Dibuat oleh:** [Fitron Ansori](https://github.com/fitronansori) | **Website:** [ansoridev.site](https://ansoridev.site)
**Support/Donasi:** [Saweria](https://saweria.co/fitronansori)

## 🚀 Fitur

- **Design Modern**: UI yang indah dan responsive dengan animasi yang smooth
- **Next.js 15**: Versi terbaru dengan App Router dan Turbopack
- **Tailwind CSS**: Framework CSS utility-first untuk styling yang cepat
- **TypeScript**: Type safety penuh di seluruh project
- **Component-based**: Komponen yang modular dan reusable
- **Mobile-first**: Design responsive untuk semua device
- **SEO Optimized**: Fitur SEO built-in dengan Next.js

## 📁 Struktur Project

```text
potretin/
├── public/
│   └── assets/
│       ├── images/          # Gambar hero dan asset portfolio
│       └── svg/             # Icon dan logo SVG
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── globals.css      # Global styles
│   │   ├── layout.tsx       # Layout utama
│   │   └── (home)/          # Group halaman home
│   ├── components/
│   │   ├── common/          # Component yang reusable
│   │   ├── layouts/         # Component section
│   │   │   ├── About/       # Section about
│   │   │   ├── Contact/     # Section contact
│   │   │   ├── Faq/         # Section FAQ
│   │   │   ├── Footer/      # Section footer
│   │   │   ├── Header/      # Header/Navigation
│   │   │   ├── Hero/        # Section hero
│   │   │   ├── Portofolio/  # Section portfolio
│   │   │   ├── Pricing/     # Section pricing
│   │   │   └── Testimonials/ # Section testimonial
│   │   └── ui/              # UI components (shadcn/ui)
│   ├── constants/           # Data static dan config
│   └── lib/                 # Utility functions
├── components.json          # Config shadcn/ui
├── tailwind.config.js       # Config Tailwind CSS
└── tsconfig.json           # Config TypeScript
```

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui + Radix UI
- **Icons**: Lucide React
- **Animation**: Tailwind Animate CSS
- **Development**: ESLint, Prettier

## 📦 Dependencies

### Core Dependencies

- `next`: React framework dengan App Router
- `react` & `react-dom`: Library React
- `typescript`: Type safety
- `tailwindcss`: Framework CSS utility-first

### UI & Components

- `@radix-ui/*`: Headless UI primitives
- `lucide-react`: Icon library
- `embla-carousel-react`: Carousel component
- `class-variance-authority`: Component variants
- `clsx` & `tailwind-merge`: Utility functions

## 🚦 Getting Started

### Prerequisites

Pastikan kamu punya Node.js 18+ yang sudah terinstall di komputer.

### Installation

1. **Clone repository**

   ```bash
   git clone <url-repo>
   cd potretin
   ```

2. **Install dependencies**

   ```bash
   npm install
   # atau
   yarn install
   # atau
   pnpm install
   ```

3. **Run development server**

   ```bash
   npm run dev
   # atau
   yarn dev
   # atau
   pnpm dev
   ```

4. **Buka browser**

   Buka [http://localhost:3000](http://localhost:3000) untuk melihat hasilnya.

## 📜 Available Scripts

- `npm run dev` - Start development server dengan Turbopack
- `npm run build` - Build aplikasi untuk production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint untuk code quality

## 🎨 Customization

### Mengubah Content

Edit data di `src/constants/data.ts` untuk customize:

- Navigation items
- Hero section content
- About section info
- Portfolio items
- Testimonials
- Pricing plans
- Contact info
- FAQ items

### Styling

Project ini menggunakan Tailwind CSS untuk styling. Kamu bisa:

- Modify `tailwind.config.js` untuk custom config
- Update `src/app/globals.css` untuk global styles
- Customize component styles di file masing-masing

### Components

Semua section bersifat modular dan bisa ditemukan di `src/components/layouts/`:

- `Hero/` - Landing hero section
- `About/` - About section dengan stats
- `Portofolio/` - Portfolio showcase
- `Testimonials/` - Customer testimonials
- `Pricing/` - Pricing plans
- `Contact/` - Contact form dan info
- `Faq/` - FAQ section

## 🌐 Deployment

### Vercel (Recommended)

1. Push code kamu ke GitHub
2. Import repository di [Vercel](https://vercel.com)
3. Deploy dengan zero configuration

### Platform Lain

Project ini bisa di-deploy di platform mana pun yang support Next.js:

- Netlify
- Railway
- Heroku
- AWS
- Google Cloud Platform

## 📱 Features Overview

- **Responsive Design**: Works perfect di desktop, tablet, dan mobile
- **Modern UI**: Design yang clean dan professional dengan smooth animation
- **Fast Loading**: Optimized images dan code splitting
- **SEO Ready**: Meta tags dan structured data
- **Accessibility**: Built dengan accessibility best practices
- **Performance**: Lighthouse score yang optimized

## 🤝 Contributing

1. Fork repository
2. Buat feature branch (`git checkout -b feature/fitur-keren`)
3. Commit perubahan (`git commit -m 'Add fitur keren'`)
4. Push ke branch (`git push origin feature/fitur-keren`)
5. Buka Pull Request

## 📄 License

Project ini dilisensikan di bawah MIT License - lihat file [LICENSE](LICENSE) untuk detail.

## 🆘 Support

Kalau kamu mengalami masalah atau punya pertanyaan:

1. Check bagian [Issues](../../issues)
2. Buat issue baru kalau masalah kamu belum ada
3. Kasih detail sebanyak mungkin

## 🙏 Acknowledgments

- Built dengan [Next.js](https://nextjs.org/)
- Styled dengan [Tailwind CSS](https://tailwindcss.com/)
- UI components dari [shadcn/ui](https://ui.shadcn.com/)
- Icons dari [Lucide](https://lucide.dev/)

**Happy coding!** 🚀
