"use client";
import ImageZoom from "@/components/ImageZoom";
import Image from "next/image";
import React, { useRef, useState } from "react";

export default function Collection() {
  const [openImage, setOpenImage] = useState(false);
  const [photoIdx, setPhotoIdx] = useState(0);
  return (
    <>
      <div className=" bg-gradient-to-b  from-gold-500 to-gold-400 py-8 md:py-16">
        <div className="container">
          <div className="flex flex-col">
            <span className=" self-start text-sm rounded-md text-white mb-2 ">
              26 أغسطس 2023
            </span>
            <h1 className="text-2xl text-white font-bold">
              هنأ معالي السيد احمد بن سلمان المسلم رئيس مجلس النواب
            </h1>
          </div>
        </div>
      </div>
      <div
        // style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}
        className="py-8 md:py-16 grid-cols-2 sm:grid-cols-3 lg:grid-cols-customFitGrid container grid auto-rows-fr gap-2"
      >
        {[
          "/photo1.jpg",
          "/photo2.jpg",
          "/photo3.jpg",
          "/photo4.jpg",
          "/photo5.jpg",
          "/photo6.jpg",
          "/photo7.jpg",
          "/photo8.jpg",
        ].map((el, idx) => (
          <div
            key={el}
            className={` ${idx === 1 ? "  sm:col-span-2" : ""} ${
              idx === 3 ? "row-span-2 h-full" : "max-h-[400px]"
            } ${idx === 7 ? "col-span-2" : ""} overflow-hidden   rounded-md`}
          >
            <Image
              onClick={(e) => {
                setOpenImage(true);
                // setPhotoIdx(
                //   `/${e.target.currentSrc.split("%2F")[1].split("&")[0]}`
                // );
                setPhotoIdx(idx);
              }}
              width={1000}
              quality={100}
              height={1000}
              className="opacity-0 transition-all duration-300 object-cover w-full h-full cursor-pointer"
              onLoadingComplete={(img) => img.classList.remove("opacity-0")}
              src={el}
              alt=""
            />
          </div>
        ))}
      </div>
      {openImage && <ImageZoom setOpenImage={setOpenImage} photoIdx={photoIdx} />}
    </>
  );
}
