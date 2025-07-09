import Logo from "@/components/common/Logo";

import MobileMenu from "./MobileMenu";
import NavLinks from "./NavLinks";

const Header = () => {
  return (
    <header>
      <div className="container flex h-16 items-center justify-between">
        <Logo />

        <NavLinks className="hidden lg:flex" />

        <MobileMenu />
      </div>
    </header>
  );
};
export default Header;
