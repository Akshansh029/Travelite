"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br bg-white py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl" // Changed from darker gray to lighter shades
      >
        Build lamps <br /> the right way
      </motion.h1>
    </LampContainer>
  );
}

export const LampContainer = ({ children, className }) => {
  return (
    <div
      className={cn(
        "relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gray-200 w-full rounded-md z-0", // Changed the background from gray-100 to gray-200
        className
      )}
    >
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0">
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-gray-400 via-transparent to-transparent text-gray-800 [--conic-position:from_70deg_at_center_top]" // Lightened the gradient from slate-500 to gray-400
        >
          <div className="absolute w-[100%] left-0 bg-gray-200 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" /> {/* Changed from gray-100 to gray-200 */}
          <div className="absolute w-40 h-[100%] left-0 bg-gray-200 bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" /> {/* Changed from gray-100 to gray-200 */}
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-slate-400 text-gray-800 [--conic-position:from_290deg_at_center_top]" // Lightened the slate gradient from slate-500 to slate-400
        >
          <div className="absolute w-40 h-[100%] right-0 bg-gray-200 bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" /> {/* Changed from gray-100 to gray-200 */}
          <div className="absolute w-[100%] right-0 bg-gray-200 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" /> {/* Changed from gray-100 to gray-200 */}
        </motion.div>
        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-gray-200 blur-2xl"></div> {/* Changed from gray-100 to gray-200 */}
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
        <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-slate-400 opacity-50 blur-3xl"></div> {/* Lightened the slate from slate-500 to slate-400 */}
        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "16rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-slate-300 blur-2xl" // Lightened the slate from slate-400 to slate-300
        ></motion.div>
        <motion.div
          initial={{ width: "15rem" }}
          whileInView={{ width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-slate-300" // Lightened the slate from slate-400 to slate-300
        ></motion.div>

        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-slate-200"></div> {/* Changed from gray-100 to gray-200 */}
      </div>
      <div className="relative z-50 flex -translate-y-80 flex-col items-center px-5">
        {children}
      </div>
    </div>
  );
};
