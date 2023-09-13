"use client";

import { mediaCenterLinks } from "@/constants";
import LinkActiveClient from "./LinkActiveClient";
import { usePathname } from "next/navigation";
export default function MediaCenterLayout({ children, params }) {
  const pathname = usePathname();

  const param = pathname.split("/").filter(Boolean).length > 1;

  if (param) {
    return <div>{children}</div>;
  } else {
    return (
      <div className="min-h-[calc(100vh-135px-427px)] bg-neutral-100 ">
        <div className="container py-8 sm:py-16 grid sm:grid-cols-[1fr_3fr] gap-6">
          {/* Links */}
          <ul className="rounded-md border-b-0 border-l-0 grid grid-cols-2 overflow-x-auto items-center justify-between text-center sm:text-start sm:block border sm:border-b-0 bg-white">
            {mediaCenterLinks.list.map((link) => (
              <LinkActiveClient key={link.label} link={link} />
            ))}
          </ul>
          {/* Routes */}
          <div className="row-span-2">{children}</div>
        </div>
      </div>
    );
  }
}
