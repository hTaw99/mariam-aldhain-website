import Link from "next/link";
import NewsCardH from "../NewsCardH";
import { BsArrowLeft } from "react-icons/bs";

export default function NewsHome() {
  return (
    <>
      <div className="flex justify-between mb-8">
        <h1 className="text-2xl font-bold border-r-4 border-red-500  pr-4 relative ">
          أخبار النائب
        </h1>
        <Link href="/news" className="font-medium  flex items-center gap-2 hover:underline">
          شاهد الكل <BsArrowLeft />
        </Link>
      </div>
      <div
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        }}
        className="grid gap-4"
      >
        <NewsCardH />
        <NewsCardH />
        <NewsCardH />
      </div>
    </>
  );
}
