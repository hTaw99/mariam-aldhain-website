"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BsFillPlayCircleFill } from "react-icons/bs";
export default function VideoCard({ src }) {
  const [playVideo, setPlayVideo] = useState(false);
  const router = useRouter();
  return (
    <div onClick={() => router.push("/visuals/1")}>
      <div
        onMouseLeave={() => setPlayVideo(false)}
        className="cursor-pointer relative p-4 bg-white transition-all h-auto rounded-md"
      >
        <div className="relative mb-4">
          <div
            onMouseEnter={() => setPlayVideo(true)}
            className=" relative transition-all w-auto h-[250px] rounded-md overflow-hidden"
          >
            <Image
              width={500}
              height={500}
              className={`${
                playVideo && "opacity-0"
              }  transition-all duration-300 object-cover w-full h-full object-center origin-center sm:object-top sm:origin-top`}
              src={src}
              alt=""
            />
            <BsFillPlayCircleFill
              className={`${
                playVideo && "opacity-0"
              } absolute outline-none border-0 rounded-full left-4 bottom-4 text-red-500 bg-white`}
              size={32}
            />
          </div>
          {playVideo && (
            <div
              className={` absolute inset-0 flex justify-center transition-all duration-300 overflow-hidden rounded-md`}
            >
              <video
                poster={src}
                playsinline
                autoPlay
                muted
                loop
                className="w-full h-full object-contain rounded-md "
              >
                <source src="/video.mp4" type="video/mp4" />
              </video>
            </div>
          )}
        </div>
        <div className="">
          <p className=" text-sm rounded-md text-gold-500 mb-2">
            26 أغسطس 2023
          </p>
          <h1 className="font-bold">
            هنأ معالي السيد احمد بن سلمان المسلم رئيس مجلس النواب
          </h1>
        </div>
      </div>
    </div>
  );
}
