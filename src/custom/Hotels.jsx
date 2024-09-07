/* eslint-disable @next/next/no-img-element */

/* eslint-disable react/prop-types */
import Link from "next/link";
import { useEffect, useState } from "react";

const Hotels = ({ trip }) => {
    const [imageUrls, setImageUrls] = useState({}); // Store image URLs for each hotel

    // Fetch image from Unsplash for each hotel
    const fetchImage = async (hotelName, index) => {
        try {
            const response = await fetch(
                `https://api.unsplash.com/search/photos?query=${hotelName}&client_id=${process.env.NEXT_PUBLIC_APP_UNSPLASH_ACCESS_KEY}`
            );
            const data = await response.json();
            if (data.results && data.results.length > 0) {
                // Update image URL for this hotel
                setImageUrls((prev) => ({
                    ...prev,
                    [index]: data.results[0].urls.small,
                }));
            }
        } catch (error) {
            console.error("Error fetching image:", error);
        }
    };

    useEffect(() => {
        if (trip?.tripData?.hotels) {
            trip.tripData.hotels.forEach((hotel, index) => {
                if (hotel.hotelName) {
                    fetchImage(hotel.hotelName, index);
                }
            });
        }
    }, [trip?.tripData?.hotels]);

    return (
        <div>
            <h2 className="font-bold text-xl mt-5 mb-3">Hotel Recommendations</h2>

            <div className="grid grid-cols-2 xl:grid-cols-3 gap-5">
                {trip?.tripData?.hotels?.map((item, index) => (
                    <Link
                        key={index}
                        href={`https://www.google.com/maps/search/?api=1&query=${item?.hotelName},${item?.hotelAddress}`}
                        target="_blank"
                    >
                        <div className="bg-gray-100 rounded-xl p-3 hover:scale-105 transition-all cursor-pointer h-full">
                            <img
                                src={imageUrls[index] || "/hotel1.png"} // Show the fetched image or default if not available
                                alt="Hotel"
                                className="rounded-xl h-[200px] w-full object-cover"
                            />
                            <div className="flex flex-col gap-2">
                                <h2 className="mt-3 font-medium">{item?.hotelName}</h2>
                                <h2 className="mt-1 text-xs">📍 {item?.hotelAddress}</h2>
                                <h2 className="text-sm">💳 {item?.price}</h2>
                                <h2 className="text-sm">⭐ {item?.rating} Rating</h2>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Hotels;
