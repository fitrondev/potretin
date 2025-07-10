import About from "@/components/layouts/About";
import Contact from "@/components/layouts/Contact";
import Faq from "@/components/layouts/Faq/Index";
import Hero from "@/components/layouts/Hero";
import Portofolio from "@/components/layouts/Portofolio";
import Pricing from "@/components/layouts/Pricing";
import Testimonials from "@/components/layouts/Testimonials";

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <Portofolio />
      <Testimonials />
      <Pricing />
      <Contact />
      <Faq />
    </main>
  );
};
export default Home;
