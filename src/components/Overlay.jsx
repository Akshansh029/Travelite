"use client";
import React from "react";

const Overlay = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-80 z-50 flex-col gap-4">
      <video src="/van.mp4" autoPlay loop muted className="w-64 h-64" />
      <p className="text-black font-normal">Generating your perfect trip...</p>
    </div>
  );
};

export default Overlay;
