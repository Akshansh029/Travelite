import React from "react";
import { Button } from "@/components/ui/button";
import { MapPinned } from "lucide-react";
import { useRouter } from "next/navigation";

const NewTripButton = () => {

  const router=useRouter()
  return (
    <Button
      variant={"ghost"}
      onClick={() => router.push("/create-trip")}
      className="flex gap-3 py-3 px-4 md:py-7 md:px-7 bg-indigo-600 mt-4 hover:bg-[#2653c4] rounded-full"
    >
      <MapPinned className="landing-white-text w-6 h-6" />
      <p className="text-neutral-300 text-sm md:text-lg font-medium landing-white-text">
        Plan a new trip
      </p>
    </Button>
  );
};

export default NewTripButton;
