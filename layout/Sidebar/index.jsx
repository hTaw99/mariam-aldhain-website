import NavbarLinks from "@/components/NavbarLinks";
// import SidebarLinks from "@/components/SidebarLinks";

export default function Sidebar({ openSidebar }) {
  return (
    <div
      className={`md:hidden ${
        openSidebar
          ? "visible pointer-events-auto"
          : "invisible pointer-events-none translate-x-full"
      } transition-all duration-300 text-white absolute py-8 px-4 start-0 z-[10000] h-screen w-1/2 bg-gold-500`}
    >
      <h1 className="mb-4 text-white/50">القائمة</h1>
      <NavbarLinks openSidebar={openSidebar} />
    </div>
  );
}
