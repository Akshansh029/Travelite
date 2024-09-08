/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Button } from "@/components/ui/button";
import React from "react";
import { useEffect, useState } from "react";
import { Share2 } from "lucide-react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";

const InfoSection = ({ trip }) => {
  const [imageUrl, setImageUrl] = useState("/plane1.png"); // Default image

  // Function to extract the place name (e.g., "Konark Sun Temple")
  const extractPlaceName = (destination) => {
    const parts = destination.split(",");
    // Assuming the temple name is the first part (index 0)
    return parts.length > 0 ? parts[0].trim() : destination;
  };

  // Function to fetch image from Unsplash API
  const fetchImage = async (placeName) => {
    try {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?query=${placeName}&client_id=${process.env.NEXT_PUBLIC_APP_UNSPLASH_ACCESS_KEY}`
      );
      const data = await response.json();
      if (data.results && data.results.length > 0) {
        setImageUrl(data.results[0].urls.small); // Set the first image from the results
      }
    } catch (error) {
      console.error("Error fetching image:", error);
    }
  };

  // Fetch image when the component mounts or the destination changes
  useEffect(() => {
    if (trip?.userSelection?.destination) {
      const placeName = extractPlaceName(trip.userSelection.destination); // Extract the place name
      fetchImage(placeName); // Fetch image using the place name
    }
  }, [trip?.userSelection?.destination]);
  return (
    <div>
      
      <img
        src={imageUrl}
        alt="placeholder"
        className="h-[330px] w-full object-cover rounded-4xl"
      />
     

      <div className="flex justify-between items-center">
        {/* showing hotel info */}
        <div className="my-5 flex flex-col gap-2">
          <h2 className="font-bold text-3xl">
            {trip?.userSelection?.destination}🗺️
          </h2>

          <div className="flex md:flex-row flex-col gap-4 mt-2">
            <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-900 text-sm font-medium md:text-md w-fit">
              {trip?.userSelection?.days} Day 📅
            </h2>
            <h2 className="p-1 px-3 bg-gray-200 rounded-full font-medium text-gray-900 text-sm md:text-md w-fit">
              {trip?.userSelection?.budget} Budget 🪙
            </h2>
            <h2 className="p-1 px-3 bg-gray-200 rounded-full text-sm font-medium md:text-md text-gray-900 w-fit">
              {trip?.userSelection?.people} 🧑‍🤝‍🧑
            </h2>
          </div>
        </div>

        <Button className="flex gap-2" variant={"default"}>
          <p className="text-sm text-white">Share</p>
          <Share2 className="" size={18} />
        </Button>
      </div>
    </div>
  );
};

export default InfoSection;
