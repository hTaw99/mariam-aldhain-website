import { useEffect, useRef, useState } from "react";
import { AiFillPauseCircle, AiFillPlayCircle } from "react-icons/ai";
import { MdReplay } from "react-icons/md";

export default function Video() {
  const [rangeValue, setRangeValue] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPlayback, setShowPlayback] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showReplayIcon, setShowReplayIcon] = useState(false);

  const videoRef = useRef(null);

  useEffect(() => {
    videoRef.current.currentTime = rangeValue;
  }, [rangeValue]);

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
        onEnded={() => {
          // setCurrentTime(0);?
          setShowReplayIcon(true);
          setIsPlaying(false);
        }}
        onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)}
        className="w-auto h-auto object-contain rounded-md "
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>
      {showReplayIcon && (
        <MdReplay
          onClick={() => {
            setShowReplayIcon(false);
            setIsPlaying(!isPlaying);
          }}
          size={32}
          color="white"
          className="absolute top-1/2 -translate-y-1/2"
        />
      )}
      {/* ################### Controlrs ##################### */}
      <div
        className={`${
          showPlayback
            ? "opacity-1 translate-y-0"
            : "opacity-0 translate-y-full"
        } flex justify-center items-center absolute transition-all duration-300 rounded-t-lg bottom-0 h-20 bg-black inset-x-0 text-white py-2 px-6`}
      >
        <div className="flex items-center justify-between gap-2 w-1/3 mx-auto">
          <h1 className="text-sm text-neutral-400">
            {`${Math.trunc(currentTime / 60)}:${((currentTime / 60) % 1)
              .toFixed(2)
              .substring(2)}` || `0:00`}
          </h1>
          <input
            type="range"
            min={0}
            max={videoRef?.current?.duration}
            value={currentTime}
            step="any"
            onInput={(e) => {
              setRangeValue(e.target.value);
            }}
            className="h-1 accent-red-500 focus:accent-red-500 w-[500px] bg-white rounded-lg "
          />
          <h1 className="text-sm text-neutral-400">
            {`${Math.trunc(videoRef?.current?.duration / 60)}:${(
              (videoRef?.current?.duration / 60) %
              1
            )
              .toFixed(2)
              .substring(2)}` || `0:00`}
          </h1>
        </div>
        <div>
          {isPlaying ? (
            <AiFillPauseCircle
              onClick={() => {
                setIsPlaying(!isPlaying);
              }}
              className={` transition-all duration-300 cursor-pointer  outline-none border-0 rounded-full text-red-500 bg-white`}
              size={40}
            />
          ) : (
            <AiFillPlayCircle
              onClick={() => {
                setShowReplayIcon(false);
                setIsPlaying(!isPlaying);
              }}
              className={` transition-all duration-300 cursor-pointer  outline-none border-0 rounded-full text-red-500 bg-white`}
              size={40}
            />
          )}
        </div>
      </div>
    </div>
  );
}
