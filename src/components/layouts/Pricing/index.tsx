import { CheckCircle, CreditCard, RotateCcw, Shield } from "lucide-react";

import { pricing_plans } from "@/constants/data";

import SectionTitle from "@/components/common/SectionTitle";

import PricingCard from "./PricingCard";

const Pricing = () => {
  return (
    <section id="pricing" className="py-10 md:py-14">
      <div className="container space-y-8 md:space-y-16">
        {/* Section Title */}
        <SectionTitle
          title="Paket Harga Fotografi"
          description="Pilih paket yang sesuai dengan kebutuhan Anda. Semua paket termasuk konsultasi gratis dan jaminan kualitas terbaik dari tim fotografer profesional kami."
        />

        {/* Pricing Cards Grid */}
        <div className="grid gap-8 gap-y-12 md:gap-16 lg:grid-cols-3 lg:gap-8 lg:gap-y-12">
          {pricing_plans.map(plan => (
            <PricingCard
              key={plan.id}
              name={plan.name}
              price={plan.price}
              period={plan.period}
              description={plan.description}
              features={plan.features}
              popular={plan.popular}
              cta_text={plan.cta_text}
            />
          ))}
        </div>

        {/* Additional Info */}
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <p className="text-muted-foreground">
            Semua paket dapat disesuaikan dengan kebutuhan spesifik Anda.
            Hubungi kami untuk konsultasi gratis dan penawaran khusus.
          </p>
          <div className="text-muted-foreground flex flex-wrap justify-center gap-6 text-sm">
            <span className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              Konsultasi Gratis
            </span>
            <span className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-blue-500" />
              Garansi Kualitas
            </span>
            <span className="flex items-center gap-2">
              <CreditCard className="h-4 w-4 text-purple-500" />
              Pembayaran Fleksibel
            </span>
            <span className="flex items-center gap-2">
              <RotateCcw className="h-4 w-4 text-orange-500" />
              Revisi Sesuai Paket
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
