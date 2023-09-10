import { BsInstagram, BsWhatsapp, BsFillTelephoneFill } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa";
import Link from "next/link";

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
        <div className="flex items-center gap-4">
          <Link href="#">
            <BsInstagram />
          </Link>
          <Link href="#">
            <BsWhatsapp />
          </Link>

          <Link href="#">
            <FaFacebookF />
          </Link>
        </div>
      </div>
    </nav>
  );
}
