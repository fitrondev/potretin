import Image from "next/image";

import { Quote, Star } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

type TestimonialCardProps = {
  name: string;
  role: string;
  company: string;
  image_url: string;
  rating: number;
  testimonial: string;
};

const TestimonialCard = ({
  name,
  role,
  company,
  image_url,
  rating,
  testimonial,
}: TestimonialCardProps) => {
  return (
    <Card className="group relative h-full gap-4 overflow-hidden border-0 bg-gradient-to-br from-white to-gray-50/50 py-4 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl dark:from-gray-900 dark:to-gray-800/50">
      {/* Decorative Quote Icon */}
      <div className="absolute top-4 right-4 opacity-10 transition-opacity duration-300 group-hover:opacity-20">
        <Quote className="text-primary h-12 w-12" />
      </div>

      {/* Gradient Border Effect */}
      <div className="from-primary/10 to-primary/10 absolute inset-0 bg-gradient-to-r via-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <CardContent className="relative p-8">
        {/* Rating Stars */}
        <div className="mb-6 flex gap-1">
          {Array.from({ length: rating }).map((_, index) => (
            <Star
              key={index}
              className="h-5 w-5 fill-amber-400 text-amber-400 drop-shadow-sm transition-transform duration-300 group-hover:scale-110"
              style={{ animationDelay: `${index * 100}ms` }}
            />
          ))}
        </div>

        {/* Testimonial Text */}
        <blockquote className="relative mb-8 text-base leading-relaxed text-gray-700 dark:text-gray-300">
          <span className="text-primary/20 absolute -top-2 -left-1 font-serif text-4xl">
            &ldquo;
          </span>
          <span className="relative z-10 block italic">{testimonial}</span>
          <span className="text-primary/20 absolute right-0 -bottom-4 font-serif text-4xl">
            &rdquo;
          </span>
        </blockquote>

        {/* Author Info */}
        <div className="flex items-center gap-3">
          <div className="relative">
            {/* Avatar with gradient border */}
            <div className="from-primary to-primary/70 group-hover:from-primary group-hover:to-secondary absolute inset-0 rounded-full bg-gradient-to-r p-0.5 transition-all duration-300">
              <div className="h-full w-full rounded-full bg-white dark:bg-gray-900" />
            </div>
            <div className="relative h-10 w-10 overflow-hidden rounded-full">
              <Image
                src={image_url}
                alt={`${name} testimonial`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="40px"
              />
            </div>
            {/* Online indicator */}
            <div className="absolute right-0 bottom-0 h-3 w-3 rounded-full border-2 border-white bg-green-500 shadow-sm dark:border-gray-900" />
          </div>

          <div className="flex-1">
            <h4 className="group-hover:text-primary text-sm font-semibold text-gray-900 transition-colors duration-300 dark:text-white">
              {name}
            </h4>
            <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-500">
              <span className="font-medium">{role}</span>
              <span className="h-0.5 w-0.5 rounded-full bg-gray-400" />
              <span>{company}</span>
            </div>
          </div>
        </div>

        {/* Bottom accent line */}
        <div className="from-primary to-secondary absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r transition-all duration-500 group-hover:w-full" />
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
