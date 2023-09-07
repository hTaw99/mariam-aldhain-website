"use client";

import { navigationLinks } from "@/constants";
import { useAppContext } from "@/context/appContext";
import MediaCenterLink from "@/layout/Navbar/MediaCenterLink.jsx";
import Link from "next/link";
export default function NavbarLinks() {
  const { dispatch } = useAppContext();
  return (
    <ul className=" font-bold -- flex flex-col items-stretch gap-4 ------ md:flex-row md:items-center md:gap-12 md:h-full ">
      {navigationLinks.map((link) =>
        link.path ? (
          <li
            key={link.label}
            className=" bg-gold-450 rounded-md py-4 px-2 ------ md:py-0 md:px-0 md:bg-white ----- hover:text-red-500 transition-all duration-300"
          >
            <Link onClick={() => dispatch("CLOSE_SIDEBAR")} href={link.path}>
              {link.label}
            </Link>
          </li>
        ) : (
          <MediaCenterLink link={link} key={link.label}>
            {link.list.map((el) => (
              <Link
                onClick={() => dispatch("CLOSE_SIDEBAR")}
                className="p-3 border-b border-b-white/25 hover:bg-black/5 transition-all duration-300"
                key={el.label}
                href={el.path}
              >
                {el.label}
              </Link>
            ))}
          </MediaCenterLink>
        )
      )}
    </ul>
  );
}
