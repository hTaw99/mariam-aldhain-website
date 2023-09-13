"use client";

import AboutHome from "@/components/AboutHome";
import ComplainHome from "@/components/ComplainHome";
import Hero from "@/components/Hero";
import NewsHome from "@/components/NewsHome";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="container bg-gold-50 mt-16 rounded-lg p-16">
        <AboutHome />
      </div>
      <div className="container  py-32 ">
        <NewsHome />
      </div>
      {/* <div className="container bg-re py-16 ">
        <ComplainHome />
      </div> */}
      <div className="container bg-white  border border-gray-200  rounded-lg p-16 mb-32">
        <ComplainHome />
      </div>
    </main>
  );
}
