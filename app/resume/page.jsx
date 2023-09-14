import ResumeListAndDetails from "@/components/ResumeListAndDetails";
import { blocks } from "@/constants";
import Image from "next/image";

export default function ResumePage() {
  return (
    <>
      {/* <div className=" bg-gradient-to-b from-gold-500 to-gold-400 py-10 mb-10 md:grid  md:grid-cols-[1fr_3fr] md:grid-rows-[250px_min-content_1fr_1fr] gap-6 "> */}
      <div className=" bg-gradient-to-b from-gold-500 to-gold-400 py-10 gap-6 ">
        <div className="container flex flex-col sm:flex-row gap-6">
          {/* Image */}
          <figure className="bg-white row-span-2 aspect-square  p-2 rounded-md w-3/4 sm:w-auto h-full">
            <Image
              width={1000}
              height={1000}
              className="object-cover w-full h-full"
              src="/resumePhoto.png"
              alt=""
            />
          </figure>

          {/* Name */}
          <div className="flex flex-col justify-between gap-8 ">
            <div>
              <h1 className="font-bold text-white self-start text-3xl rounded-md mb-2 ">
                دكتور / مريم صالح فارس الظاعن
              </h1>
              <h1 className="text-lg text-white">
                عضو مجلس النواب البحريني . المحافظة الجنوبية - الدائرة الثانية
              </h1>
            </div>
            <ul className="flex gap-2 flex-wrap">
              {blocks.map((b) => (
                <li
                  className="text-white px-6 py-1 rounded-full border"
                  key={b}
                >
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="container flex flex-col md:grid md:grid-cols-[1fr_4fr] gap-6 py-10">
        <ResumeListAndDetails />
      </div>
    </>
  );
}
