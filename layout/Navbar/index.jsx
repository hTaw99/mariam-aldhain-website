"use client";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import NavbarLinks from "@/components/NavbarLinks";
import Sidebar from "@/layout/Sidebar";

const Navbar = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
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
          <RxHamburgerMenu
            onClick={() => setOpenSidebar(!openSidebar)}
            size={26}
            className="cursor-pointer text-gold-500 md:hidden"
          />
        </div>
        <Sidebar openSidebar={openSidebar} />
      </header>
    </>
  );
};

export default Navbar;
