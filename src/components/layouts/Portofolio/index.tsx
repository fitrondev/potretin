import SectionTitle from "@/components/common/SectionTitle";

import PortofolioCard from "./PortofolioCard";

const Portofolio = () => {
  return (
    <section id="portofolio" className="py-10 md:py-14">
      <div className="container space-y-8">
        <SectionTitle
          title="Portofolio & Gallery"
          description="Lihat koleksi karya fotografi terbaik kami yang telah dipercaya oleh berbagai klien"
        />

        <PortofolioCard />
      </div>
    </section>
  );
};

export default Portofolio;
