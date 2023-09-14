"use client";
import { useState } from "react";
import { resumeLinks } from "@/constants";
export default function ResumeListAndDetails() {
  const [resumeInfo, setResumeInfo] = useState(resumeLinks[0]);
  return (
    <>
      {/* List */}
      <ul
        style={{ gridTemplateColumns: "repeat(5, calc(50vw - 1rem))" }}
        className=" grid overflow-x-scroll md:overflow-hidden md:flex  md:flex-col h-min col-end-2 rounded-md border  md:border-l-0 border-b-0"
      >
        {resumeLinks.map((link) => (
          <button
            onClick={() => setResumeInfo(link)}
            key={link.label}
            className={`${
              resumeInfo.label === link.label
                ? "sm:text-lg md:border-r-4 md:border-b md:border-r-gold-500 md:border-b-gray-200 text-gold-500  border-b-4 border-b-gold-500"
                : ""
            } flex gap-2  text-sm sm:text-base border-l items-center hover:bg-gold-50 transition-all duration-300 font-semibold border-b w-full text-right p-4`}
          >
            {link.icon}
            {link.label}
          </button>
        ))}
      </ul>

      {/* Details */}
      <div>{resumeInfo.content}</div>
    </>
  );
}
