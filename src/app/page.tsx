"use client";
import { HeroHighlightText } from "@/components/HeroHighlight";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ActivityIcon, CookingPotIcon, MapIcon, MapPinned } from "lucide-react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { useRef } from "react";
import { LayoutGridDemo } from "@/components/LayoutGrid";
import Footer from "@/components/Footer";

export default function Home() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const isInView1 = useInView(ref1, { once: true, amount: 0.3 });
  const isInView2 = useInView(ref2, { once: true, amount: 0.3 });
  const isInView3 = useInView(ref3, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <main className="overflow-y-auto landing-bg">
      <motion.section
        className="hero pt-10 px-5 landing-page-bg h-[calc(100vh-72px)] flex flex-col items-center justify-center text-center overflow-y-hidden"
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
            <MapPinned className="text-neutral-300" />
            <p className="text-neutral-300 text-sm md:text-lg font-medium">
              Plan a new trip
            </p>
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
      <section
        ref={ref1}
        className="hero px-8 md:px-20 min-h-screen flex flex-col items-center justify-center gap-5 text-center overflow-y-hidden"
      >
        <motion.div
          initial="hidden"
          animate={isInView1 ? "visible" : "hidden"}
          variants={containerVariants}
          className="flex flex-col items-center"
        >
          <motion.h1
            variants={itemVariants}
            className="text-3xl lg:text-4xl font-bold text-white"
          >
            Features That Guide Your Adventure
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="max-w-[90%] md:max-w-[75%] lg:max-w-[60%] mt-4 text-slate-400 text-base md:text-lg"
          >
            Say goodbye to the stress of planning and hello to personalized
            recommendations, efficient itineraries, and seamless dining
            experiences.
          </motion.p>
        </motion.div>
        <motion.div
          initial="hidden"
          animate={isInView1 ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10 w-full max-w-6xl"
        >
          <motion.div variants={itemVariants}>
            <Card className="flex flex-col items-center p-4 h-full">
              <MapIcon className="w-12 h-12 text-neutral-800" />
              <h3 className="text-lg font-semibold mt-4">
                Optimal Route Planning
              </h3>
              <p className="text-slate-500 mt-2 text-sm">
                Our AI algorithms analyze your preferences to craft the most
                efficient route, saving you time and effort.
              </p>
            </Card>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Card className="flex flex-col items-center p-4 h-full">
              <ActivityIcon className="w-12 h-12 text-neutral-800" />
              <h3 className="text-lg font-semibold mt-4">
                Personalize Your Adventure
              </h3>
              <p className="text-slate-500 mt-2 text-sm">
                Shape your journey by freely adding, editing, or deleting
                activities from your itinerary.
              </p>
            </Card>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Card className="flex flex-col items-center p-4 h-full">
              <CookingPotIcon className="w-12 h-12 text-neutral-800" />
              <h3 className="text-lg font-semibold mt-4">
                Local Cuisine Recommendations
              </h3>
              <p className="text-slate-500 mt-2 text-sm">
                Discover local cuisines and hidden gems recommended by our AI,
                tailored to your taste buds.
              </p>
            </Card>
          </motion.div>
        </motion.div>
      </section>
      <section
        ref={ref2}
        className="min-h-screen landing-bg text-white p-8 overflow-hidden"
      >
        <motion.div
          initial="hidden"
          animate={isInView2 ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-6xl mx-auto h-full flex flex-col"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl font-bold text-center mb-4"
          >
            Uncover Unique Travel Experiences from Across India
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-center text-gray-400 mb-8 max-w-2xl mx-auto"
          >
            Embark on a journey through{" "}
            <span className="text-indigo-500">inspiring itineraries</span>{" "}
            shared by travelers from all over India. See the country through
            their eyes and find the perfect adventure for you.
          </motion.p>
          <motion.div variants={itemVariants}>
            <LayoutGridDemo />
          </motion.div>
        </motion.div>
      </section>
      <Footer />
    </main>
  );
}
