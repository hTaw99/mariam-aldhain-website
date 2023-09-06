export default function Topbar() {
  const today = new Date().toLocaleDateString("ar-BH", {
    day: "2-digit",
    year: "numeric",
    month: "long",
    weekday: "long",
  });

  return (
    <nav className="bg-black py-2">
      <div className="container text-white">{today}</div>
    </nav>
  );
}
