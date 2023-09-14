"use client";
import { createRef, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import Menu from "./Menu";
import { AnimatePresence } from "framer-motion";

export default function MediaCenterLink({ link, children }) {
  const [openMenu, setOpenMenu] = useState(false);
  const ref = createRef(null);

  return (
    <li
      key={link.label}
      onClick={() => setOpenMenu(!openMenu)}
      onMouseLeave={() => setOpenMenu(false)}
      className=" h-full  bg-gold-450 rounded-md py-4 px-4 -----  md:py-0 md:px-0 md:bg-transparent relative md:flex md:items-center md:justify-between gap-1"
    >
      <span
        // onMouseEnter={() => setOpenMenu(true)}
        onClick={() => setOpenMenu(true)}
        className="hover:text-red-500 flex justify-between transition-all duration-300 cursor-pointer"
      >
        {link.label}
        <BiChevronDown className="text-white md:text-gold-500" size={24} />
      </span>
      <AnimatePresence mode="popLayout">
        {openMenu && (
          <Menu ref={ref} openMenu={openMenu}>
            {children}
          </Menu>
        )}
      </AnimatePresence>
    </li>
  );
}
