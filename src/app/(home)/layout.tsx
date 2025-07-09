import Logo from "@/components/common/Logo";
import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";

type HomeLayoutProps = {
  children: React.ReactNode;
};

const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <div>
      <Header />
      <Logo />
      {children}
      <Footer />
    </div>
  );
};
export default HomeLayout;
