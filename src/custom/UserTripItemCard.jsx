/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const UserTripItemCard = ({ trip }) => {
  const [imageUrl, setImageUrl] = useState("/plane1.png"); // Default image
  const router=useRouter();

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
    <div className="bg-gray-200 rounded-xl cursor-pointer" 
    onClick={()=>router.push(`/view-trip/${trip?.id}`)}>
  
      {/* Dynamically display the fetched image */}
      <img src={imageUrl} alt="image" className="object-cover rounded-xl p-3 w-full h-[150px]" />
      <div>
        <h2 className="font-semibold px-3 text-lg pb-5">
          {trip?.userSelection?.destination}
        </h2>
        {/* <h2 className="px-3 mt-1 py-2 text-gray-800 tracking-tight text-sm">
          {trip?.userSelection?.days} Days with {trip?.userSelection?.budget} Budget
        </h2> */}
      </div>
    </div>
  );
};

export default UserTripItemCard;
