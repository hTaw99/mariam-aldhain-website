import { useRef } from "react";

export default function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef();

  if (videoRef.current) {
    isPlaying ? videoRef.current.play() : videoRef.current.pause();
  }
  return (
    <video
      ref={videoRef}
      playsInline
      // controls
      className="w-auto h-auto object-contain rounded-md "
    >
      <source src="/video.mp4" type="video/mp4" />
    </video>
  );
}
