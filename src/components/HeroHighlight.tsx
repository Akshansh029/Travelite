"use client";
import { motion } from "framer-motion";
import { Highlight } from "../components/ui/hero-highlight";

export function HeroHighlightText() {
  return (
    <motion.h1
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: [20, -5, 0],
      }}
      transition={{
        duration: 0.5,
        ease: [0.4, 0.0, 0.2, 1],
      }}
      className="text-3xl px-4 md:text-4xl lg:text-5xl font-bold dark-heading-text dark:text-black max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto flex flex-col sm:flex-row items-center"
    >
      <span className="text-3xl px-4 md:text-4xl lg:text-5xl font-bold dark-heading-text dark:text-black">
        Your Dream Trip,
      </span>
      <Highlight className="text-[#f5f7f8] dark:text-white py-1 px-4">
        AI-Approved
      </Highlight>
    </motion.h1>
  );
}
