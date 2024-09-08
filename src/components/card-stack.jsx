"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export const CardStack = ({
  items,
  offset = 10,
  scaleFactor = 0.06
}) => {
  const [cards, setCards] = useState(items);
  const [currentIndex, setCurrentIndex] = useState(0);

  const CARD_OFFSET = offset;
  const SCALE_FACTOR = scaleFactor;

  // Function to handle card switching on click
  const handleCardClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  return (
    <div className="relative h-90 w-90 md:h-[540px] md:w-[720px]" onClick={handleCardClick}>
      {cards.map((card, index) => {
        const isCurrent = index === currentIndex;

        return (
          <motion.div
            key={card.id}
            className={`absolute dark:bg-black bg-white h-90 w-90 md:h-[540px] md:w-[720px] rounded-3xl p-4 shadow-xl border border-neutral-200 dark:border-white/[0.1] shadow-black/[0.1] dark:shadow-white/[0.05] flex flex-col justify-between ${
              isCurrent ? 'z-10' : 'z-0'
            }`}
            style={{
              transformOrigin: "top center",
              top: (index - currentIndex) * -CARD_OFFSET,
              scale: isCurrent ? 1 : 1 - Math.abs(index - currentIndex) * SCALE_FACTOR, // decrease scale for cards that are behind
            }}
          >
            <div className="flex justify-center items-center mb-4">
              {card.image && (
                <img
                  src={card.image}
                  alt={card.name}
                  className="h-36 w-36 md:h-48 md:w-48 object-cover rounded-full"
                />
              )}
            </div>
            <div className="font-normal text-neutral-700 dark:text-neutral-200">
              {card.content}
            </div>
            <div>
              <p className="text-neutral-500 font-medium dark:text-white">
                {card.name}
              </p>
              <p className="text-neutral-400 font-normal dark:text-neutral-200">
                {card.designation}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
