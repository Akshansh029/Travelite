"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./button";

let interval: any;

type Card = {
  id: number;
  // name: string;
  // designation: string;
  image: string;
  content: React.ReactNode;
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

  useEffect(() => {
    startFlipping();

    return () => clearInterval(interval);
  }, []);
  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: Card[]) => {
        const newArray = [...prevCards]; // create a copy of the array
        newArray.unshift(newArray.pop()!); // move the last element to the front
        return newArray;
      });
    }, 5000);
  };

  return (
    <div className="relative  h-60 w-60 md:h-60 md:w-96">
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className="absolute dark:bg-black bg-white h-96 w-96 md:h-[400px] md:w-[400px] rounded-3xl p-4 shadow-xl border border-neutral-200 dark:border-white/[0.1] shadow-black/[0.1] dark:shadow-white/[0.05] flex flex-col gap-4 justify-between"
            style={{
              transformOrigin: "top center",
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
              zIndex: cards.length - index, // decrease z-index for the cards that are behind
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
            <Button variant={"default"}>Play sound</Button>
          </motion.div>
        );
      })}
    </div>
  );
};
