import { Button } from "@/components/ui/button";
import { MapPinned } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="overflow-y-auto">
      <section className="hero pt-10 px-5 landing-page-bg h-[calc(100vh-72px)] flex flex-col items-center justify-around text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl  font-semibold text-white">
          Your Dream Trip, <span className="text-[#2b5fe4]">AI-Approved</span>
        </h1>
        <div className="desc max-w-[75%] md:max-w-[50%] mt-4">
          <h3 className="text-slate-500 text-base md:text-lg">
            Let our AI design your perfect trip with personalized itineraries,
            uncovering hidden gems and must-see spots just for you.
          </h3>
        </div>
        <Button
          variant={"ghost"}
          className="flex gap-3 py-7 px-7 bg-[#0B2F9F] mt-4 hover:bg-[#2f69fb] rounded-full"
        >
          <MapPinned />
          <p className="text-sm md:text-xl">Plan a new trip</p>
        </Button>
        <div className="img w-fit h-fit">
          <Image
            src="/landing-svg.svg"
            alt="Travelite Logo"
            width={350}
            height={350}
          />
        </div>
      </section>
      <section className=""></section>
    </main>
  );
}
