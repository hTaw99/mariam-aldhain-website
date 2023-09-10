import Image from "next/image";
import Link from "next/link";

export default function NewsCardH() {
  return (
    <div className=" p-4 grid grid-cols-[2fr_5fr] gap-4 bg-white  border border-gray-200 rounded-md">
      <div className=" h-auto   aspect-square  rounded-md overflow-hidden">
        <Image
          width={300}
          height={300}
          className="object-cover w-full h-full"
          src="/photo2.jpg"
          alt=""
        />
      </div>
      <div className=" ">
        <span className=" self-start text-sm rounded-md text-gold-500 mb-2 ">
          26 أغسطس 2023
        </span>
        <Link
          href="/news/1"
          style={{ fontSize: "clamp(0.85rem, 1.2vw ,1rem )" }}
          className="line-clamp-2 font-bold mb-2 hover:text-red-500 transition-all duration-300"
        >
          هنأ معالي السيد احمد بن سلمان المسلم رئيس مجلس النواب
        </Link>
        <p
          style={{ fontSize: "clamp(0.7rem, 1.2vw ,0.85rem )" }}
          className="line-clamp-1  sm:line-clamp-2 text-neutral-400"
        >
          هنأ معالي السيد احمد بن سلمان المسلم رئيس مجلس النواب، سمو الشيخ ناصر
          بن حمد آل خليفة ممثل جلالة
        </p>
      </div>
    </div>
  );
}
