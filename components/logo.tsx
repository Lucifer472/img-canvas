import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href={"/"}
      className="w-full h-full max-w-[60px] sm:max-w-[180px] relative flex items-center justify-start mx-2"
    >
      <Image fill alt="logo" src={"/logo.png"} className="hidden sm:block" />
      <Image
        width={40}
        height={40}
        alt="logo"
        src={"/logo-small.png"}
        className="block sm:hidden"
      />
    </Link>
  );
};

export default Logo;
