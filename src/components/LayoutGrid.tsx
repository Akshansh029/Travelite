"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "../components/ui/layout-grid";
import { Button } from "./ui/button";

export function LayoutGridDemo() {
  return (
    <div className="h-[calc(100vh-72px)] py-0 w-full">
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold md:text-2xl text-lg text-white">
        Majestic Peaks of Himachal Pradesh
      </p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Embrace adventure and breathtaking views in Himachal Pradesh, where
        snow-capped mountains, lush valleys, and charming hill stations await
        your exploration.
      </p>
      <Button
        variant={"destructive"}
        className="bg-indigo-600 hover:bg-purple-600"
      >
        View trip
      </Button>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold md:text-2xl text-lg text-white">
        Serene Serenity in Kerala
      </p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Escape to the lush backwaters and tranquil houseboats of Kerala, where
        you can unwind amidst serene landscapes and rejuvenate with Ayurvedic
        treatments.
      </p>
      <Button
        variant={"destructive"}
        className="bg-indigo-600 hover:bg-purple-600"
      >
        View trip
      </Button>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold md:text-2xl text-lg text-white">
        Golden Sands of Goa
      </p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Immerse yourself in Goa’s vibrant beaches and lively nightlife, where
        golden sands meet azure waters, offering a perfect blend of relaxation
        and excitement.
      </p>
      <Button
        variant={"destructive"}
        className="bg-indigo-600 hover:bg-purple-600"
      >
        View trip
      </Button>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold md:text-2xl text-lg text-white">
        Timeless Wonders of Rajasthan
      </p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Step into a world of regal splendor and vibrant culture in Rajasthan,
        with its majestic forts, colorful markets, and timeless desert
        landscapes.
      </p>
      <Button
        variant={"destructive"}
        className="bg-indigo-600 hover:bg-purple-600"
      >
        View trip
      </Button>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail:
      "https://images.pexels.com/photos/2961109/pexels-photo-2961109.jpeg",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:
      "https://images.pexels.com/photos/13691356/pexels-photo-13691356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "https://images.pexels.com/photos/27869489/pexels-photo-27869489/free-photo-of-peaceful-sunset-in-goa-02.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail:
      "https://images.pexels.com/photos/9179927/pexels-photo-9179927.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];
