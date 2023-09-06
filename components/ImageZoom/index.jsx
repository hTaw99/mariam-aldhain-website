import Image from "next/image";
import { createPortal } from "react-dom";
export default function ImageZoom({ src, setOpenImage }) {
  return (
    <>
      {createPortal(
        <div className="">
          <div className="w-full h-screen fixed inset-0  bg-neutral-900/80 z-[50]" />
          <figure
            onClick={() => setOpenImage(false)}
            className=" w-full h-auto m-auto fixed inset-0  flex justify-center items-center z-50 "
          >
            <Image
              src={src}
              width={2000}
              height={2000}
              onLoadingComplete={(img) => img.classList.remove("opacity-0")}
              //   fill
              className="opacity-0 transition-all duration-300 object-contain p-12 max-w-full w-auto"
              quality={100}
              alt=""
            />
          </figure>
        </div>,
        document.body
      )}
    </>
  );
}
