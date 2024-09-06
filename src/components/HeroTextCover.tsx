import React from "react";
import { Cover } from "@/components/ui/cover";

export function HeroTextCover() {
  return (
    <div>
      <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-400 via-neutral-300 to-neutral-300 dark:from-neutral-400 dark:via-white dark:to-white">
        Your dream trip, <br /> at <Cover>AI-Approved</Cover>
      </h1>
    </div>
  );
}
