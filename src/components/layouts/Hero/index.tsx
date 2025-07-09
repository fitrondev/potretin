import Image from "next/image";

import { hero_images } from "@/constants/data";

import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen py-12 lg:py-0">
      <div className="container h-full">
        <div className="grid min-h-screen items-center gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-6">
              <h1 className="text-4xl leading-tight font-bold md:text-5xl lg:text-6xl">
                Layanan
                <span className="text-primary block">Fotografi</span>
                Profesional
              </h1>

              <p className="text-muted-foreground mx-auto max-w-lg text-lg md:text-xl lg:mx-0">
                Mengabadikan momen-momen berharga dalam hidup dengan visi
                artistik dan keunggulan teknis. Setiap jepretan menceritakan
                kisah yang unik.
              </p>
            </div>

            <div className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <Button size="lg">Lihat Portfolio</Button>
              <Button size="lg" variant="outline">
                Booking Sesi
              </Button>
            </div>
          </div>

          {/* Right Images - Random Positioned */}
          <div className="relative h-[500px]">
            {/* First Image - Top Left */}
            <div className="absolute top-0 left-0 h-64 w-48 rotate-6 transform overflow-hidden rounded-2xl shadow-xl transition-transform duration-300 hover:rotate-3 md:h-72 md:w-56">
              <Image
                src={hero_images[0].src}
                alt={hero_images[0].alt}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Second Image - Center Right */}
            <div className="absolute top-16 right-0 h-60 w-44 -rotate-3 transform overflow-hidden rounded-2xl shadow-xl transition-transform duration-300 hover:rotate-0 md:h-68 md:w-52">
              <Image
                src={hero_images[1].src}
                alt={hero_images[1].alt}
                fill
                className="object-cover"
              />
            </div>

            {/* Third Image - Bottom Center */}
            <div className="absolute bottom-0 left-1/2 h-56 w-40 -translate-x-1/2 rotate-12 transform overflow-hidden rounded-2xl shadow-xl transition-transform duration-300 hover:rotate-6 md:h-64 md:w-48">
              <Image
                src={hero_images[2].src}
                alt={hero_images[2].alt}
                fill
                className="object-cover"
              />
            </div>

            {/* Decorative Elements */}
            <div className="bg-primary absolute top-20 right-20 h-2 w-2 animate-pulse rounded-full"></div>
            <div className="bg-primary/60 absolute bottom-32 left-8 h-3 w-3 animate-pulse rounded-full delay-500"></div>
            <div className="bg-primary/40 absolute top-1/2 left-1/4 h-1 w-1 animate-pulse rounded-full delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
