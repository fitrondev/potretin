"use client";

import Autoplay from "embla-carousel-autoplay";

import { testimonials_data } from "@/constants/data";

import SectionTitle from "@/components/common/SectionTitle";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="bg-muted/30 overflow-hidden py-10 md:py-14"
    >
      <div className="container space-y-8 pb-8">
        {/* Section Title */}
        <SectionTitle
          title="Apa Kata Klien Kami"
          description="Kepercayaan dan kepuasan klien adalah prioritas utama kami. Dengarkan pengalaman mereka yang telah mempercayakan momen berharga kepada kami."
        />

        {/* Testimonials Carousel */}
        <div className="relative mx-auto max-w-5xl px-4">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-2 py-8 md:-ml-4">
              {testimonials_data.map(testimonial => (
                <CarouselItem
                  key={testimonial.id}
                  className="pb-4 pl-2 md:basis-1/2 md:pl-4 lg:basis-1/3"
                >
                  <TestimonialCard
                    name={testimonial.name}
                    role={testimonial.role}
                    company={testimonial.company}
                    image_url={testimonial.image_url}
                    rating={testimonial.rating}
                    testimonial={testimonial.testimonial}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
