"use client";

import NavbarLinks from "@/components/NavbarLinks";
import { useAppContext } from "@/context/appContext";
// import SidebarLinks from "@/components/SidebarLinks";

export default function Sidebar() {
  const { isSidebarOpen } = useAppContext();

  return (
    <div
      className={`md:hidden ${
        isSidebarOpen
          ? "visible pointer-events-auto"
          : "invisible pointer-events-none translate-x-full"
      } transition-all duration-300 text-white absolute py-8 px-4 start-0 z-[10000] h-screen w-full bg-gold-500`}
    >
      <h1 className="mb-4 text-white/50">القائمة</h1>
      <NavbarLinks />
    </div>
  );
}
