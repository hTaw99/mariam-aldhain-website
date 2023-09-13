import ComplainHome from "@/components/ComplainHome";
import { footerLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import IdentLogo from "@/assets/icons/identLogo.svg";

const Footer = () => {
  return (
    <div className="bg-black transition-all ">
      <div className="container py-8 sm:py-14 text-white">
        <div className="grid sm:grid-cols-[2fr_1fr_1fr_1fr] pb-12 border-b border-white/20 mb-6 gap-8  ">
          <div className="">
            <div className="py-4">
              <Image
                src="/logoForFooter.svg"
                className="w-auto h-auto"
                width={120}
                height={120}
                alt=""
              />
            </div>
            <p className="sm:w-3/4 text-sm sm:text-base leading-relaxed">
              باحثة ومحللة، حاصلة على دكتوراه في الاعلام والعلاقات الدولية،
              ولديها مؤهلات علمية من المملكة المتحدة في العديد من التخصصات
              وحاصلة على وسام التميز من كلية ساندهيرست العسكرية الملكية.
            </p>
          </div>
          {/* <div className="grid grid-cols-2 sm:block"> */}
          {footerLinks.map((column, i) => (
            <div key={i} className="">
              <h1 className="text-base sm:text-lg text-gold-500 font-semibold">
                {column.name}{" "}
                <span className="mt-2 mb-4 block w-10 h-[1px] bg-gold-500"></span>{" "}
              </h1>

              <ul className="flex flex-col gap-2">
                {column.list.map((link) => (
                  <li key={link.label} className="inline-block">
                    <Link
                      className="text-sm sm:text-base hover:text-red-300 hover:-translate-x-2 inline-block transition-all duration-300"
                      href={link.path}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {/* </div> */}
        </div>
        <div className="flex justify-between items-end ">
          <div className="flex flex-col gap-2">
            {/* <div className="flex gap-2 items-center"> */}
              <h1 className="font-semibold text-white/70">
                تصميم وتطوير الموقع شركة ايدنتــيــتي
                <IdentLogo className="w-24 sm:w-32 text-white/70 inline" />
              </h1>
            {/* </div> */}
            <p className="text-xs sm:text-sm text-white/50">
              جميع الحقوق محفوظة © 2023 لسيادة النائبة مريم الظاعن
            </p>
          </div>
          <div className="flex flex-col gap-2 items-end">
            <div className="flex items-center gap-2 text-white/40">
              <Link
                href="#"
                className="hover:text-gold-500 transition-all duration-300"
              >
                <BsInstagram />
              </Link>
              <Link
                href="#"
                className="hover:text-gold-500 transition-all duration-300"
              >
                <BsWhatsapp />
              </Link>

              <Link
                href="#"
                className="hover:text-gold-500 transition-all duration-300"
              >
                <FaFacebookF />
              </Link>
            </div>
            <Link
              href="/#"
              className="text-left hover:underline text-xs sm:text-sm text-white/50"
            >
              سياسة الخصوصية . وشروط الإستخدام
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
