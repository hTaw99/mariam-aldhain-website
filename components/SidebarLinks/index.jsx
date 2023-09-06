import { navigationLinks } from "@/constants";
import MediaCenterLink from "@/layout/Navbar/MediaCenterLink.jsx";
import Link from "next/link";

export default function SidebarLinks({ openSidebar }) {
  return (
    <ul className=" sm:flex flex flex-col gap-2 font-semibold">
      {navigationLinks.map((link) =>
        link.path ? (
          <li
            key={link.label}
            className=" bg-gold-450 rounded-md py-4 px-2 border-white/20 hover:text-red-500 font-bold transition-all duration-300"
          >
            <Link href={link.path}>{link.label}</Link>
          </li>
        ) : (
          <MediaCenterLink link={link} key={link.label}>
            {link.list.map((el) => (
              <Link
                className="p-3 border-b border-b-white/25 hover:bg-black/5  transition-all duration-300"
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
