"use client";

import AboutHome from "@/components/AboutHome";
import ComplainHome from "@/components/ComplainHome";
import Hero from "@/components/Hero";
import NewsHome from "@/components/NewsHome";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="container py-16 sm:py-32">
        <div className="bg-gold-50 rounded-lg px-4 py-8 sm:p-16">
          <AboutHome />
        </div>
      </div>

      <div className="container pb-16 sm:pb-32">
        <NewsHome />
      </div>

      <div className="container mb-16 sm:mb-32">
        <div className="border border-gray-200  rounded-lg px-4 py-8 sm:p-16">
          <ComplainHome />
        </div>
      </div>
    </main>
  );
}
