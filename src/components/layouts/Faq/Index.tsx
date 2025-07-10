import { faq_data } from "@/constants/data";

import SectionTitle from "@/components/common/SectionTitle";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const Faq = () => {
  return (
    <section id="faq" className="bg-muted/30 py-10 md:py-14">
      <div className="container space-y-8">
        {/* Section Title */}
        <SectionTitle
          title="Pertanyaan yang Sering Diajukan"
          description="Temukan jawaban untuk pertanyaan umum seputar layanan fotografi kami. Jika Anda memiliki pertanyaan lain, jangan ragu untuk menghubungi kami."
        />

        {/* FAQ Accordion */}
        <div className="mx-auto max-w-4xl">
          <Accordion type="single" collapsible className="space-y-4">
            {faq_data.map(faq => (
              <AccordionItem
                key={faq.id}
                value={`item-${faq.id}`}
                className="bg-background rounded-lg border-0 px-6 shadow-md transition-shadow duration-300 hover:shadow-lg"
              >
                <AccordionTrigger className="py-6 text-left hover:no-underline">
                  <span className="pr-4 text-base font-semibold md:text-lg">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <div className="text-muted-foreground text-sm leading-relaxed md:text-base">
                    {faq.answer}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact CTA */}
        <div className="mx-auto max-w-2xl space-y-4 text-center">
          <h3 className="text-foreground text-xl font-bold md:text-2xl">
            Masih Ada Pertanyaan?
          </h3>
          <p className="text-muted-foreground">
            Tim kami siap membantu Anda dengan konsultasi gratis untuk membahas
            kebutuhan fotografi Anda.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="px-6 py-3">
              <a href="#contact">Hubungi Kami</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="px-6 py-3">
              <a href="#pricing">Lihat Paket Harga</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
