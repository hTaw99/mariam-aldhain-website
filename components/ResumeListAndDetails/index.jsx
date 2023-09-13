"use client";
import { useState } from "react";
import { resumeLinks } from "@/constants";
export default function ResumeListAndDetails() {
  const [resumeInfo, setResumeInfo] = useState(resumeLinks[0]);
  return (
    <>
      {/* List */}
      <ul className="col-start-1 col-end-2 rounded-md border w-full border-b-0 ">
        {resumeLinks.map((link) => (
          <button
            onClick={() => setResumeInfo(link)}
            key={link.label}
            className={`${
              resumeInfo.label === link.label
                ? "text-xl text-gold-500 py-6 border-r-4 border-r-gold-500"
                : "text-base"
            } flex gap-2 items-center hover:bg-gold-50 transition-all duration-300 font-semibold border-b w-full text-right p-4`}
          >
            {link.icon}
            {link.label}
          </button>
        ))}
      </ul>

      {/* Details */}
      <div className="col-start-2 row-span-full row-start-2 ">
        {resumeInfo.content}
      </div>
    </>
  );
}
