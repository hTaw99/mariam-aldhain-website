import ResumeListAndDetails from "@/components/ResumeListAndDetails";
import { blocks } from "@/constants";
import Image from "next/image";

export default function ResumePage() {
  return (
    <div className="container md:before:absolute md:before:-z-50 py-10 md:before:top-0 md:before:inset-x-0 md:before:h-[250px] md:before:bg-gradient-to-b md:before:from-gold-500 md:before:to-gold-400  md:grid  md:grid-cols-[1fr_3fr] md:grid-rows-[250px_min-content_1fr_1fr] gap-6 ">
      {/* Image */}
        <div className="bg-white row-span-2 aspect-square  p-2 rounded-md h-full">
          <Image
            width={1000}
            height={1000}
            className="object-cover w-full h-full"
            src="/resumePhoto.png"
            alt=""
          />
        </div>

        {/* Name */}
        <div className=" ">
          <h1 className="font-bold text-white self-start text-3xl rounded-md mb-2 ">
            دكتور / مريم صالح فارس الظاعن
          </h1>
          <h1 className="text-lg text-white mb-4 lg:mb-16">
            عضو مجلس النواب البحريني . المحافظة الجنوبية - الدائرة الثانية
          </h1>
          <ul className="flex gap-2 ">
            {blocks.map((b) => (
              <li className="text-white px-6 py-1 rounded-full border" key={b}>
                {b}
              </li>
            ))}
          </ul>
      </div>
      <ResumeListAndDetails />
    </div>
  );
}
