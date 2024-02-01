import Logo from "@/components/logo";
import { SearchBar } from "@/components/navbar/search";
import { NavLinks } from "@/components/navbar/nav-links";

const Navbar = () => {
  return (
    <header className="w-full h-20 bg-white border-b boder-slate-100 shadow-sm">
      <nav className="basic-container w-full h-full flex items-center justify-between">
        <Logo />
        <SearchBar />
        <NavLinks />
      </nav>
    </header>
  );
};

export default Navbar;
