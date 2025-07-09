import SectionTitle from "@/components/common/SectionTitle";

import AboutCard from "./AboutCard";
import AboutStats from "./AboutStats";

const About = () => {
  return (
    <section id="about" className="py-10 md:py-14">
      <div className="container space-y-8">
        {/* Section Title */}
        <SectionTitle
          title="Tentang Kami"
          description="Kami adalah tim fotografer profesional yang berdedikasi untuk mengabadikan momen-momen berharga dalam hidup Anda dengan sentuhan artistik dan kreativitas yang tak terbatas."
        />

        {/* Features/Services Grid */}
        <AboutCard />

        <AboutStats />
      </div>
    </section>
  );
};

export default About;
