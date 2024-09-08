/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Card } from "../components/ui/card";

const UserTripItemCard = ({ trip }) => {
  const [imageUrl, setImageUrl] = useState("/plane1.png"); // Default image
  const router = useRouter();

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
    <Card
      className="shadow-[1px_1px_6px_2px_rgba(0,_0,_0,_0.1)] hover:shadow-[1px_1px_8px_5px_rgba(0,_0,_0,_0.1)] rounded-2xl p-4 flex flex-col gap-5 cursor-pointer w-full h-full justify-center text-start"
      onClick={() => router.push(`/view-trip/${trip?.id}`)}
    >
      <img
        src={imageUrl}
        className="aspect-square object-cover rounded-xl max-h-[150px] w-full"
        alt="Place Image"
      />
      <div className="flex-grow">
        <h2 className="font-semibold text-lg">
          {trip?.userSelection?.destination}
        </h2>
        <div className="flex gap-2 flex-wrap mt-4">
          <span className="py-1 px-2 rounded-3xl bg-gray-200 text-xs md:text-sm font-medium">
            💵 {trip?.userSelection?.budget}
          </span>
          <span className="py-1 px-2 rounded-3xl bg-gray-200 text-xs md:text-sm font-medium">
            📅 {trip?.userSelection?.days}{" "}
            {trip?.userSelection?.days > 1 ? "days" : "day"}
          </span>
          <span className="py-1 px-2 rounded-3xl bg-gray-200 text-xs md:text-sm font-medium">
            🧑‍🤝‍🧑 {trip?.userSelection?.people}{" "}
          </span>
        </div>
      </div>
    </Card>
  );
};

// <Card
//   className="shadow-[1px_1px_6px_2px_rgba(0,_0,_0,_0.1)] hover:shadow-[1px_1px_8px_5px_rgba(0,_0,_0,_0.1)] rounded-xl p-4 flex flex-col gap-5 cursor-pointer w-full h-fit justify-center"
//   key={trip.id}
// >
//   <img
//     src="/hotel.png"
//     className="aspect-square object-cover rounded-lg max-h-[200px]"
//     alt="Place Image"
//   />
//   <div className="flex-grow mt-2">
//     <h2 className="font-bold text-xl dark-heading-text">Jaipur</h2>
//     <p className="text-sm dark-heading-text truncate ...">
//       Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam sapiente
//       suscipit, atque a similique cupiditate reiciendis quia nemo possimus est!
//       Dicta molestias fuga cumque, ipsa deserunt quo et dolorum quisquam.
//     </p>
//     <p className="mt-2 text-sm font-semibold dark-heading-text">
//       ⭐ 4.4 Rating
//     </p>
//     <a
//       href={`https://www.google.com/maps/search/?api=1&query=jaipur`}
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       <Button
//         className="mt-3 border-gray-400 border-[1px] rounded-lg gap-2"
//         variant={"default"}
//         size="sm"
//       >
//         <p className="">Navigate</p>
//         <Navigation className="white" size={16} />
//       </Button>
//     </a>
//   </div>
// </Card>;

export default UserTripItemCard;
