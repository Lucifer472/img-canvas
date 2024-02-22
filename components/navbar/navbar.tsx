import Logo from "@/components/logo";
import { SearchBar } from "@/components/navbar/search";
import { NavLinks } from "@/components/navbar/nav-links";
import { MobileNav } from "@/components/navbar/mobile-nav";

const Navbar = ({ user }: { user: any }) => {
  return (
    <>
      <header className="w-full h-20 bg-white border-b border-slate-100 shadow-sm">
        <nav className="basic-container w-full h-full flex items-center justify-between">
          <Logo />
          <SearchBar />
          <NavLinks user={user} />
        </nav>
      </header>

      <MobileNav user={user} />
    </>
  );
};

export default Navbar;
