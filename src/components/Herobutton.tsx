"use client";
import React from "react";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { MapPinned } from "lucide-react";

export function Herobutton() {
  return (
    <div className="flex justify-center text-center">
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-3 py-3 px-6"
      >
        {/* flex gap-3 py-7 px-7 bg-[#0B2F9F] mt-4 hover:bg-[#2f69fb]
        rounded-full */}
        <MapPinned />
        <span className="text-lg">Plan a new trip</span>
      </HoverBorderGradient>
    </div>
  );
}
