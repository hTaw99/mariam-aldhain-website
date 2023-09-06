import VideoCard from "@/components/VideoCard";

export default function VisualsPage() {
  return (
    <div>
      <div
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}
        className="grid  gap-4"
      >
        {Array.from(
          [
            "/photo1.jpg",
            "/photo3.jpg",
            "/photo5.jpg",
            "/photo6.jpg",
            "/photo6.jpg",
          ],
          (el) => (
            <VideoCard key={el} src={el} />
          )
        )}
      </div>
    </div>
  );
}
