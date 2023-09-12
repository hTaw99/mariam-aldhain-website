"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";

const GalleryCard = () => {
  const router = useRouter();

  return (
    <div onClick={() => router.push("/gallery/1")} className="group bg-white cursor-pointer min-h-[320px] p-4 rounded-md">
      <div className="rounded-md relative mb-4 h-full overflow-hidden">
        <Image
          width={500}
          height={500}
          className="group-hover:scale-105 transition-all duration-300 object-cover w-full h-full"
          src="/photo5.jpg"
          alt=""
        />
        {/* Headlines */}
        <div className="p-2 absolute bottom-0 inset-x-0 group-hover:pb-6 transition-all duration-300 flex flex-col bg-black/50 backdrop-blur-sm text-white">
          <span className=" self-start text-sm text-gold-500 mb-2 ">
            26 أغسطس 2023
          </span>
          <h1 className="font-semibold mb-2">
            هنأ معالي السيد احمد بن سلمان المسلم رئيس مجلس النواب
          </h1>
        </div>
        {/* No. of photos */}
        <span className="absolute top-2 text-sm right-2 bg-gold-500 px-4 py-1 rounded-full ">
          25 صورة
        </span>
      </div>
    </div>
  );
};

export default GalleryCard;
