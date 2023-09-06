"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
export default function ExperienceCard({ isOdd, ex }) {
  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <motion.div
        layout
        className={`flex gap-6 ${isOdd && "flex-row-reverse"}`}
      >
        {/* date */}
        <motion.span
          layout="position"
          className={` text-xl text-gold-500 relative font-semibold  ---- ${
            isOdd ? "after:-end-11" : "after:-start-11"
          } after:absolute shrink-0 after:w-6 after:h-6  after:bg-gold-500 after:rounded-full after:border-4 ----`}
        >
          {ex.date}
        </motion.span>
        {/* detail */}
        <motion.div layout className={`bg-gray-100 flex-1  rounded-md p-4`}>
          <div className=" mb-2">
            <motion.h1 layout className="text-gold-500 font-semibold text-xl">
              {ex.title}
            </motion.h1>
            <motion.h2 layout className="font-medium text-lg">
              {ex.jobDescription}
            </motion.h2>
          </div>
          {isOpen && (
            <motion.div
              layout
              initial={{ y: -10, opacity: 0 }}
              exit={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                ease: [0.16, 1, 0.3, 1],
                duration: 0.5,
                delay: 0.1,
              }}
              className={`flex flex-col gap-2 mb-4`}
            >
              {ex.details.map((p, i) => (
                <motion.p
                  layout
                  key={i}
                  // transition={{ type: "keyframes", duration: 0.5 }}

                  className={`${!isOpen && "line-clamp-1"}`}
                >
                  {p}
                </motion.p>
              ))}
            </motion.div>
          )}
          <div className="flex w-full justify-end">
            <motion.button
              layout="position"
              onClick={() => setIsOpen(!isOpen)}
              className="text-red-350 py-1 px-3 flex gap-1 rounded-md border border-gray-300 "
            >
              {isOpen ? (
                <>
                  <span>شاهد أقل</span> <BiChevronUp size={24} />
                </>
              ) : (
                <>
                  
                  <span>شاهد اكثر</span> <BiChevronDown size={24} />
                </>
              )}
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
      {isOdd && (
        <>
          <div />
          <div />
        </>
      )}
    </>
  );
}
