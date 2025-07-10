import { MapPin } from "lucide-react";

import { contact_info } from "@/constants/data";

import SectionTitle from "@/components/common/SectionTitle";

import ContactCard from "./ContactCard";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section id="contact" className="py-10 md:py-14">
      <div className="container space-y-8">
        {/* Section Title */}
        <SectionTitle
          title="Hubungi Kami"
          description="Siap untuk mengabadikan momen berharga Anda? Hubungi kami sekarang untuk konsultasi gratis dan dapatkan penawaran terbaik sesuai kebutuhan Anda."
        />

        {/* Contact Info Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {contact_info.map((info, index) => (
            <ContactCard
              key={index}
              type={info.type}
              label={info.label}
              value={info.value}
              icon={info.icon}
              href={info.href}
            />
          ))}
        </div>

        {/* Contact Form and Map Section */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Contact Form */}
          <div className="order-2 lg:order-1">
            <ContactForm />
          </div>

          {/* Map and Additional Info */}
          <div className="order-1 space-y-8 lg:order-2">
            {/* Map Placeholder */}
            <div className="relative overflow-hidden rounded-xl shadow-xl">
              <div className="from-primary/10 to-secondary/10 flex aspect-[4/3] items-center justify-center bg-gradient-to-br">
                <div className="text-center">
                  <div className="bg-primary/20 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full">
                    <MapPin className="text-primary h-8 w-8" />
                  </div>
                  <h3 className="text-foreground mb-2 text-lg font-semibold">
                    Lokasi Studio
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Klik untuk melihat di Google Maps
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
