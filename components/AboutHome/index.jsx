import { blocks } from "@/constants";
import Image from "next/image";
import React from "react";

export default function AboutHome() {
  return (
    <>
      <div className="flex flex-col justify-center  lg:grid lg:grid-cols-[1fr_4fr] gap-8">
        <div className=" bg-gold-500 mb-4 aspect-square p-2  rounded-md max-h-[300px]">
          <Image
            width={1000}
            height={1000}
            className="object-contain object-top origin-top w-full h-full"
            src="/resumePhoto.png"
            alt=""
          />
        </div>
        <div>
          <div className="pb-2 flex-wrap border-b mb-6 flex items-start justify-between">
            <div>
              <h1 className=" text-2xl font-bold text self-start sm:text-3xl rounded-md mb-2 ">
                دكتور / مريم صالح فارس الظاعن
              </h1>
              <h1 className=" sm:text-lg mb-4">
                عضو مجلس النواب البحريني . المحافظة الجنوبية - الدائرة الثانية
              </h1>
            </div>
            <ul className="flex flex-wrap gap-2 items-center mb-4">
              {blocks.map((b) => (
                <li
                  className="text-red-00 px-4 sm:px-6 py-1 rounded-full border border-gold-400"
                  key={b}
                >
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <p className="text-lg sm:text-xl leading-relaxed text-justify">
            شخصية نشيطة وطموحة مع نظرة ثاقبه حاملة لمؤهلات علمية وعملية حيث
            تنخرط في جميع الاعمال الفردية والاجتماعية تحب التميز وقيادة زملائها
            الى نجاح شعارها فريق متميز لوطنٍ واعد وليس هذا فحسب فإن الظاعن تتميز
            بالذكاء والحدة وتجيد المخاطبة باللغة الأم واللغة الإنجليزية بطلاقة
            ومنطقية فهي حاصلة على درجة عالية من المؤهلات العلمية من المملكة
            المتحدة مما جعلها شخصية ابتكارية، باحثة ومحللة جديرة والذي لفت
            انتباه عميد كلية ساندهيرست العسكرية الملكية ومنحها وسام التميز.
          </p>
        </div>
      </div>
    </>
  );
}
