import { footerLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-black transition-all text-white">
      <div className="container py-8 sm:py-14">
        <div className="grid sm:grid-cols-[2fr_1fr_1fr_1fr] pb-12 border-b border-white/20 mb-6 gap-8  ">
          <div className="">
            <div className="py-4">
              <Image src="/logoForFooter.svg" width={120} height={120} alt="" />
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
        <div className="flex justify-between ">
          <div className="flex flex-col gap-2">
            <h1 className="font-semibold text-white/70">
              تصميم وتطوير الموقع شركة ايدنتــيــتي
            </h1>
            <p className="text-xs sm:text-sm text-white/50">
              جميع الحقوق محفوظة © 2023 لسيادة النائبة مريم الظاعن
            </p>
          </div>
          <div>
            <Link
              href="/#"
              className="hover:underline text-xs sm:text-sm text-white/50"
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
