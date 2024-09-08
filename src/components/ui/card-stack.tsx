"use client";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "./button";

type Card = {
  id: number;
  image: string;
  content: React.ReactNode;
  audio: string; // Add audio URL to the Card type
};

export const CardStack = ({
  items,
  offset,
  scaleFactor,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<Card[]>(items);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [playing, setPlaying] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (playing) {
      playAudioAndChangeCard();
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, [playing, currentIndex]);

  const playAudioAndChangeCard = () => {
    const audio = audioRef.current!;
    audio.src = cards[currentIndex].audio;
    audio.play();
    audio.onended = () => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % cards.length;
        return nextIndex;
      });
      // Set a timeout to allow for the audio to finish before playing the next
      setTimeout(() => {
        setPlaying(true);
      }, 2000); // Adding a 2-second delay before starting the next card's audio
    };
  };

  const handleStart = () => {
    if (!playing) {
      setPlaying(true);
    }
  };

  return (
    <div className="relative h-60 w-60 md:h-60 md:w-96">
      {cards.map((card, index) => (
        <motion.div
          key={card.id}
          className="absolute dark:bg-black bg-white h-96 w-96 md:h-[400px] md:w-[400px] rounded-3xl p-4 shadow-xl border border-neutral-200 dark:border-white/[0.1] shadow-black/[0.1] dark:shadow-white/[0.05] flex flex-col gap-4 justify-between"
          style={{
            transformOrigin: "top center",
          }}
          animate={{
            top: index === currentIndex ? 0 : -CARD_OFFSET,
            scale: index === currentIndex ? 1 : 1 - (cards.length - index) * SCALE_FACTOR,
            zIndex: index === currentIndex ? cards.length : cards.length - index,
          }}
        >
          <div className="rounded-2xl overflow-hidden">
            <img
              src={card.image}
              className="object-cover h-full w-full" // Ensures the image covers the container proportionally
              alt=""
            />
          </div>
          <div className="font-normal text-sm text-neutral-700 dark:text-neutral-200">
            {card.content}
          </div>
          <Button variant={"default"} onClick={handleStart}>
            Start Loop
          </Button>
        </motion.div>
      ))}
      <audio ref={audioRef} />
    </div>
  );
};
