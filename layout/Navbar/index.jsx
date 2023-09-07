import Image from "next/image";
import NavbarLinks from "@/components/NavbarLinks";
import Sidebar from "@/layout/Sidebar";
import HamburgerIcon from "@/components/HamburgerIcon";

const Navbar = () => {
  return (
    <>
      <header className="border-b sticky top-0 z-40 bg-white ">
        <div className="container flex items-center md:items-stretch justify-between ">
          <div className="py-4">
            <Image src="/logo.svg" priority width={125} height={125} alt="" />
          </div>
          <div className="hidden  md:inline-block">
            <NavbarLinks />
          </div>
          <HamburgerIcon />
        </div>
        <Sidebar />
      </header>
    </>
  );
};

export default Navbar;
