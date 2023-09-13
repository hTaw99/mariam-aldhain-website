import { BsInstagram, BsWhatsapp, BsFillTelephoneFill } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa";
import Link from "next/link";
import { socialMediaLinks } from "@/constants";

export default function Topbar() {
  const today = new Date().toLocaleDateString("ar-BH", {
    day: "2-digit",
    year: "numeric",
    month: "long",
    weekday: "long",
  });

  return (
    <nav className="bg-black py-2">
      <div className="container text-white flex justify-between">
        <span>{today}</span>
        <div className="flex items-center gap-2">
          {socialMediaLinks.slice(0, 3).map((link) => (
            <Link
              target="_blank"
              key={link.label}
              href={link.path}
              className="hover:text-gold-500 transition-all duration-300 "
            >
              {link.icon}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
