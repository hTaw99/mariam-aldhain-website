import Image from "next/image";
import { useState } from "react";
import { createPortal } from "react-dom";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { PiCaretCircleLeftBold, PiCaretCircleRightBold } from "react-icons/pi";
export default function ImageZoom({ photoIdx, setOpenImage }) {
  const [photoToShow, setPhotoToShow] = useState(photoIdx);
  const photos = [
    "/photo1.jpg",
    "/photo2.jpg",
    "/photo3.jpg",
    "/photo4.jpg",
    "/photo5.jpg",
    "/photo6.jpg",
    "/photo7.jpg",
    "/photo8.jpg",
  ];
  return (
    <>
      {createPortal(
        <div className="">
          <div className="w-full h-screen fixed inset-0  bg-neutral-900/80 z-[50]" />
          <figure className=" w-full h-auto m-auto fixed inset-0 flex flex-col xl:flex-row justify-center items-center z-[100] ">
            <PiCaretCircleRightBold
              size={32}
              onClick={() =>
                setPhotoToShow(
                  photoToShow === photos.length - 1 ? 0 : photoToShow + 1
                )
              }
              className="text-white cursor-pointer"
            />
            <Image
              src={photos[photoToShow]}
              width={2000}
              height={2000}
              onLoadingComplete={(img) => img.classList.remove("opacity-0")}
              //   fill
              className="opacity-0   transition-all duration-300 object-contain p-12 max-w-full w-auto"
              quality={100}
              alt=""
            />
            <PiCaretCircleLeftBold
              size={32}
              onClick={() =>
                setPhotoToShow(
                  photoToShow === 0 ? photos.length - 1 : photoToShow - 1
                )
              }
              className="text-white cursor-pointer"
            />
          </figure>
          <AiOutlineCloseCircle
            size={32}
            onClick={() => setOpenImage(false)}
            className="fixed top-12 right-12 z-[100] text-white cursor-pointer"
          />
        </div>,
        document.body
      )}
    </>
  );
}
