"use client";

import Form from "@/components/Complaints/Form";
import NewsCardH from "@/components/NewsCardH";
import { blocks } from "@/constants";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <div className="bg-black ">
        <div className="xl:container transition-all duration-300 flex flex-col-reverse sm:grid  sm:grid-cols-[2fr_3fr] sm:gap-6 max-h-[600px] overflow-hidden">
          <div className="text-white pr-8 sm:pr-28 xl:pr-0 bg-black py-16">
            <div className=" flex flex-col justify-between h-full">
              <div className="">
                <h1
                  style={{ fontSize: "clamp(1.25rem, 2vw ,2.25rem )" }}
                  className=" line-clamp-2 lg:line-clamp-none  font-bold mb-4 leading-snug"
                >
                  المجلس الأعلى المرأة ساهم في بناء مجتمع متكافئ ومستدام
                </h1>
                <p
                  style={{ fontSize: "clamp(1rem, 1vw ,1.25rem )" }}
                  className="leading-relaxed mb-6 text-white/50 line-clamp-2 xl:line-clamp-4"
                >
                  رفعت سعادة النائب الدكتورة مريم الظاعن أسمى آيات التهاني
                  والتبريكات إلى المقام السامي لحضرة صاحب الجلالة الملك حمد بن
                  عيسى آل خليفة ملك البلاد المعظم حفظه الله
                </p>
              </div>
              <Link
                href="#"
                className="self-start bg-red-500 px-4 py-2 rounded-md"
              >
                شاهد المزيد
              </Link>
            </div>
          </div>
          <div className="relative h-auto after:absolute after:end-0 after:inset-y-0 after:bg-gradient-to-r from-red-500/40 to-red-400/5 after:w-1/2">
            <Image
              width={1000}
              quality={100}
              priority
              height={1000}
              alt="hero"
              src="/heroImage.png"
              className="object-cover lg:object-contain w-full h-full "
            ></Image>
          </div>
        </div>
      </div>
      {/* #################################### */}
      <div className=" mt-10 ">
        <div className="container mb-16">
          <h1 className="text-xl mb-4 font-bold border-r-4 border-red-500  pr-4 relative ">
            عن النائب
          </h1>
          <div className="flex flex-col justify-center  sm:grid sm:grid-cols-[1fr_4fr] gap-8">
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
                    عضو مجلس النواب البحريني . المحافظة الجنوبية - الدائرة
                    الثانية
                  </h1>
                </div>
                <ul className="flex gap-2 items-center mb-4">
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
                تنخرط في جميع الاعمال الفردية والاجتماعية تحب التميز وقيادة
                زملائها الى نجاح شعارها فريق متميز لوطنٍ واعد وليس هذا فحسب فإن
                الظاعن تتميز بالذكاء والحدة وتجيد المخاطبة باللغة الأم واللغة
                الإنجليزية بطلاقة ومنطقية فهي حاصلة على درجة عالية من المؤهلات
                العلمية من المملكة المتحدة مما جعلها شخصية ابتكارية، باحثة
                ومحللة جديرة والذي لفت انتباه عميد كلية ساندهيرست العسكرية
                الملكية ومنحها وسام التميز.
              </p>
            </div>
          </div>
        </div>
        {/* ####################### */}
        <div className="bg-gray-50 py-16">
          <div className="container">
            <div className="flex justify-between mb-8">
              <h1 className="text-xl font-bold border-r-4 border-red-500  pr-4 relative ">
                أخبار النائب
              </h1>
              <Link href="/news" className="font-medium">
                شاهد الكل
              </Link>
            </div>
            <div
              style={{
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              }}
              className="grid gap-4"
            >
              <NewsCardH />
              <NewsCardH />
              <NewsCardH />
            </div>
          </div>
        </div>
      </div>
      {/* #################################### */}
      <div className="container py-16">
        <Form />
      </div>
    </main>
  );
}
