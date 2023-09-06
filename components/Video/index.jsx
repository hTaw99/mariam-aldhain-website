import { useRef, useState } from "react";
import { BsFillPauseCircleFill, BsFillPlayCircleFill } from "react-icons/bs";

export default function Video() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPlayback, setShowPlayback] = useState(false);
  const videoRef = useRef(null);

  isPlaying ? videoRef?.current?.play() : videoRef?.current?.pause();
  return (
    <div
      onMouseEnter={() => setShowPlayback(true)}
      onMouseLeave={() => setShowPlayback(false)}
      className=" 
           relative rounded-md overflow-hidden bg-gray-200 flex justify-center p-2 w-auto max-h-[700px]  mb-12"
    >
      <video
        ref={videoRef}
        playsInline
        // controls
        className="w-auto h-auto object-contain rounded-md "
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>{" "}
      <div
        className={`${
          showPlayback
            ? "opacity-1 translate-y-0"
            : "opacity-0 translate-y-full"
        } absolute transition-all duration-300 rounded-t-lg bottom-0 h-20 bg-black inset-x-0 text-white py-2 px-6`}
      >
        {isPlaying ? (
          <BsFillPauseCircleFill
            onClick={() => setIsPlaying(!isPlaying)}
            className={` transition-all duration-300 cursor-pointer absolute outline-none border-0 rounded-full left-1/2 -translate-x-1/2 bottom-1/2 translate-y-1/2 text-gold-500 bg-white`}
            size={40}
          />
        ) : (
          <BsFillPlayCircleFill
            onClick={() => setIsPlaying(!isPlaying)}
            className={` transition-all duration-300 cursor-pointer absolute outline-none border-0 rounded-full left-1/2 -translate-x-1/2 bottom-1/2 translate-y-1/2 text-gold-500 bg-white`}
            size={40}
          />
        )}
      </div>
    </div>
  );
}
