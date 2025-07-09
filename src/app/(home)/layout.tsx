import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";

type HomeLayoutProps = {
  children: React.ReactNode;
};

const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
export default HomeLayout;
