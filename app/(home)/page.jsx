"use client";

import NewsCardH from "@/components/NewsCardH";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <div className="bg-gold-500 ">
        <div className="xl:container transition-all duration-300 flex flex-col-reverse sm:grid  sm:grid-cols-[2fr_3fr] max-h-[600px] overflow-hidden">
          <div className="text-white bg-black p-8 xl:p-16">
            <div className="container flex flex-col justify-between h-full">
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
              height={1000}
              alt="hero"
              src="/heroImage.png"
              className="object-cover lg:object-contain w-full h-full "
            ></Image>
          </div>
        </div>
      </div>
      {/* #################################### */}
      <div className="container mt-10 ">
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
    </main>
  );
}
