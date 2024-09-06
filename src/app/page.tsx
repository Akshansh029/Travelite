"use client";
import { HeroHighlightText } from "@/components/HeroHighlight";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MapPinned } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="overflow-y-auto">
      <motion.section
        className="hero pt-10 px-5 landing-page-bg h-[calc(100vh-72px)] flex flex-col items-center justify-around text-center overflow-y-hidden"
        initial={{ opacity: 0, y: 20 }} // Initial state: slightly below and invisible
        animate={{ opacity: 1, y: 0 }} // Final state: visible and in original position
        transition={{ duration: 0.6, ease: [0.4, 0.0, 0.2, 1] }} // Smooth ease-in-out
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <HeroHighlightText />
        </motion.div>

        <motion.div
          className="desc max-w-[75%] md:max-w-[50%] mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h3 className="text-slate-400 text-base md:text-lg">
            Let our AI design your perfect trip with personalized itineraries,
            uncovering hidden gems and must-see spots just for you.
          </h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <Button
            variant={"ghost"}
            className="flex gap-3 py-7 px-7 bg-[#0B2F9F] mt-4 hover:bg-[#2f69fb] rounded-full"
          >
            <MapPinned />
            <p className="text-sm md:text-lg">Plan a new trip</p>
          </Button>
        </motion.div>

        <motion.div
          className="img w-fit h-fit"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <Image
            src="/landing-svg.svg"
            alt="Travelite Logo"
            width={350}
            height={350}
          />
        </motion.div>
      </motion.section>
      <section className=""></section>
    </main>
  );
}
