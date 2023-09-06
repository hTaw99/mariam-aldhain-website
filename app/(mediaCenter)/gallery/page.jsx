import GalleryCard from "@/components/GalleryCard";

export default function GalleryPage() {
  return (
    <div>
      <div className=""></div>
      <div style={{ gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))" }} className="grid gap-4">
        <GalleryCard />
        <GalleryCard />
        <GalleryCard />
        <GalleryCard />
      </div>
    </div>
  );
}
