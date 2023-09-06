import Image from "next/image";
import Link from "next/link";

export default function NewsCard({ src }) {
  return (
    <div className="bg-white p-4 transition-all h-auto ">
      <div className=" transition-all w-auto h-[150px] mb-4 rounded-md overflow-hidden">
        <Image
          width={150}
          height={150}
          className="transition-all object-cover w-full h-full object-center origin-center sm:object-top sm:origin-top"
          src={src}
          alt=""
        />
      </div>
      <div className="flex flex-col">
        <span className=" self-start text-sm rounded-md text-gold-500 mb-2 ">
          26 أغسطس 2023
        </span>
        <Link
          href="/news/1"
          className="line-clamp-2 font-bold mb-2 hover:text-red-500 transition-all duration-300"
        >
          هنأ معالي السيد احمد بن سلمان المسلم رئيس مجلس النواب
        </Link>
        <p className="line-clamp-2 text-neutral-400 mb-4">
          هنأ معالي السيد احمد بن سلمان المسلم رئيس مجلس النواب، سمو الشيخ ناصر
          بن حمد آل خليفة ممثل جلالة الملك…
        </p>
        <button className="hover:text-white hover:bg-red-500 transition-all duration-300 text-sm self-end text-red-500 font-semibold px-4 py-2 rounded-md border border-red-50">
          تفاصيل
        </button>
      </div>
    </div>
  );
}
