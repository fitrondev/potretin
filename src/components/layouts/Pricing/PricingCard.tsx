import { Check, Star } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

type PricingCardProps = {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  cta_text: string;
};

const PricingCard = ({
  name,
  price,
  period,
  description,
  features,
  popular = false,
  cta_text,
}: PricingCardProps) => {
  return (
    <Card
      className={`relative pt-0 pb-4 shadow-2xl ${
        popular
          ? "from-primary/10 via-primary/5 ring-primary/20 scale-105 bg-gradient-to-br to-white ring-2 md:mx-4 lg:mx-0"
          : "bg-gradient-to-br from-white via-gray-50/30 to-gray-100/50"
      }`}
    >
      {/* Popular Badge */}
      {popular && (
        <div className="absolute -top-3 left-1/2 z-10 -translate-x-1/2 md:-top-4">
          <Badge className="from-primary to-primary/80 rounded-full bg-gradient-to-r px-3 py-1 text-xs font-bold text-white shadow-xl md:px-6 md:py-2 md:text-sm">
            <Star className="mr-1 h-3 w-3 fill-current md:mr-2 md:h-4 md:w-4" />
            <span className="hidden sm:inline">Paket Terpopuler</span>
            <span className="sm:hidden">Populer</span>
          </Badge>
        </div>
      )}

      <CardHeader className="relative z-10 px-4 pt-8 text-center md:px-6 md:pt-10">
        <div className="mb-3 md:mb-4">
          <h3
            className={`mb-2 text-xl font-bold md:mb-3 md:text-3xl ${
              popular ? "text-primary" : "text-foreground"
            }`}
          >
            {name}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed md:text-base">
            {description}
          </p>
        </div>

        {/* Enhanced Price Display */}
        <div className="mb-6 md:mb-8">
          <div className="mb-2 flex items-baseline justify-center gap-1">
            <span className="text-muted-foreground text-lg font-semibold md:text-2xl">
              Rp
            </span>
            <span
              className={`text-3xl font-black tracking-tight md:text-6xl ${
                popular ? "text-primary" : "text-foreground"
              }`}
            >
              {price}
            </span>
          </div>
          <div
            className={`inline-block rounded-full px-3 py-1 text-xs font-medium md:px-4 md:py-2 md:text-sm ${
              popular
                ? "bg-primary/10 text-primary"
                : "bg-muted text-muted-foreground"
            }`}
          >
            {period}
          </div>
        </div>
      </CardHeader>

      <CardContent className="relative z-10 px-4 pt-0 md:px-10">
        {/* Enhanced Features List */}
        <ul className="mb-6 flex-col items-center justify-center space-y-3 md:mb-10 md:flex md:space-y-5 lg:items-start">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3 md:gap-4">
              <div
                className={`mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full md:mt-1 md:h-6 md:w-6 ${
                  popular
                    ? "bg-primary/15 ring-primary/20 ring-1 md:ring-2"
                    : "bg-primary/10"
                }`}
              >
                <Check
                  className={`h-3 w-3 md:h-4 md:w-4 ${
                    popular ? "text-primary" : "text-primary/80"
                  }`}
                />
              </div>
              <span className="text-foreground text-sm leading-relaxed font-medium md:text-base">
                {feature}
              </span>
            </li>
          ))}
        </ul>

        {/* Enhanced CTA Button */}
        <Button
          size="lg"
          className={`h-12 w-full text-base font-bold shadow-xl md:h-14 md:text-lg ${
            popular ? "from-primary to-primary/90 bg-gradient-to-r" : ""
          }`}
          variant={popular ? "default" : "outline"}
        >
          {cta_text}
        </Button>
      </CardContent>
    </Card>
  );
};

export default PricingCard;
