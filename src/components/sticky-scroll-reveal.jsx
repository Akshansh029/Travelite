"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";
import axios from 'axios';

export const StickyScroll = ({ content, contentClassName }) => {
  const [activeCard, setActiveCard] = useState(0);
  const [audio, setAudio] = useState(null); // State to manage the audio instance
  const [error, setError] = useState(null);
  const ref = useRef(null);
  const cardRefs = useRef([]);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end end"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => (index + 1) / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce((acc, breakpoint, index) => {
      const distance = Math.abs(latest - breakpoint);
      if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
        return index;
      }
      return acc;
    }, 0);
    setActiveCard(closestBreakpointIndex);
  });

  const handlePlayAudio = async (text) => {
    setError(null);
    try {
      // Stop any currently playing audio
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }

      const response = await axios.post('/api/tts', { text });
      const audioUrl = response.data.audioUrl;
      if (audioUrl) {
        const newAudio = new Audio(audioUrl);
        setAudio(newAudio); // Set the new audio instance

        // Return a promise that resolves when audio playback ends
        await new Promise((resolve) => {
          newAudio.addEventListener('ended', resolve, { once: true });
          newAudio.play();
        });
      } else {
        throw new Error('No audio URL returned');
      }
    } catch (error) {
      console.error('Error playing audio:', error);
      setError('Failed to play audio. Please try again.');
    }
  };

  useEffect(() => {
    const currentCard = content[activeCard];
    if (cardRefs.current[activeCard]) {
      cardRefs.current[activeCard].scrollIntoView({ behavior: 'smooth' });
    }
    handlePlayAudio(currentCard.description);
  }, [activeCard]);

  const backgroundColors = [
    "var(--light-gray)",
    "var(--white)",
    "var(--light-neutral)",
  ];
  const linearGradients = [
    "linear-gradient(to bottom right, var(--light-cyan), var(--light-emerald))",
    "linear-gradient(to bottom right, var(--light-pink), var(--light-indigo))",
    "linear-gradient(to bottom right, var(--light-orange), var(--light-yellow))",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(linearGradients[0]);

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  const progress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="relative">
      <div className="sticky top-0 z-50 bg-white">
        <motion.div
          style={{ scaleX: progress }}
          className="h-2 bg-blue-600 origin-left"
        />
      </div>
      
      <motion.div
        animate={{
          backgroundColor: backgroundColors[activeCard % backgroundColors.length],
        }}
        className="h-[30rem] overflow-y-auto flex justify-center relative space-x-10 rounded-md p-10"
        ref={ref}>
        <div className="relative flex items-start px-4">
          <div className="max-w-2xl">
            {content.map((item, index) => (
              <div 
                key={item.title + index} 
                ref={el => cardRefs.current[index] = el} 
                className="my-20">
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                  className="text-2xl font-bold text-gray-800">
                  {item.title}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                  className="text-lg text-gray-600 max-w-sm mt-10">
                  {item.description}
                </motion.p>
                <button
                  onClick={() => handlePlayAudio(item.description)}
                  disabled={audio && !audio.paused}
                  className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                  {audio && !audio.paused ? 'Playing...' : 'Listen'}
                </button>
              </div>
            ))}
            <div className="h-40" />
          </div>
        </div>
        <div
          style={{ background: backgroundGradient }}
          className={cn(
            "hidden lg:block h-60 w-80 rounded-md bg-white sticky top-10 overflow-hidden",
            contentClassName
          )}>
          {content[activeCard].content ?? null}
        </div>
      </motion.div>

      {error && (
        <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-4 py-2 rounded-md">
          {error}
        </div>
      )}
    </div>
  );
};
