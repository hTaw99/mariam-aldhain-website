"use client";

import AboutHome from "@/components/AboutHome";
import ComplainHome from "@/components/ComplainHome";
import Hero from "@/components/Hero";
import NewsHome from "@/components/NewsHome";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="container py-16">
        <AboutHome />
      </div>
      <div className="container py-16 ">
        <NewsHome />
      </div>
      <div className="container py-16 ">
        <ComplainHome />
      </div>
    </main>
  );
}
