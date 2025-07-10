import SectionTitle from "@/components/common/SectionTitle";

import PortofolioCard from "./PortofolioCard";

const Portofolio = () => {
  return (
    <section className="py-16 lg:py-24">
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
