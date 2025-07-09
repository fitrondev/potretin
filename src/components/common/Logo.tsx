import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"} className="flex items-center gap-2">
      <Image
        src={"/assets/svg/logo.svg"}
        alt="logoipsum"
        width={35}
        height={35}
        priority
      />

      <span className="sr-only">Logo</span>
      <span className="text-2xl font-bold md:text-3xl">Potretin</span>
    </Link>
  );
};
export default Logo;
