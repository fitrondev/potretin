import Logo from "@/components/common/Logo";

import MobileMenu from "./MobileMenu";
import NavLinks from "./NavLinks";

const Header = () => {
  return (
    <header className="bg-background sticky top-0 z-50 w-full border-b">
      <div className="container flex h-16 items-center justify-between">
        <Logo />

        <NavLinks className="hidden lg:flex" />

        <MobileMenu />
      </div>
    </header>
  );
};
export default Header;
