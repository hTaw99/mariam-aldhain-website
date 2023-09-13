"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LinkActiveClient({ link }) {
  const pathname = usePathname();
  return (
    <li className="w-full">
      <Link
        href={link.path}
        className={`${
          pathname === link.path
            ? "text-base sm:text-lg md:text-xl text-gold-500 border-b-4 sm:border-b border-b-gold-500 sm:border-b-gray-200 sm:py-6 sm:border-r-4 sm:border-r-gold-500"
            : "text-base border-b"
        } hover:bg-gold-50 flex gap-2  transition-all w-full  duration-300 font-semibold border-l  p-4`}
      >
        {link.icon}
        {link.label}
      </Link>
    </li>
  );
}
