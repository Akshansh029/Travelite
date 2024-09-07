/* eslint-disable @next/next/no-img-element */

"use client"
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link"; // Correct import

const PlaceCardItem = ({ plan }) => {

    const [imageUrl, setImageUrl] = useState("/hotel.png"); // Default image

    // Function to determine pricing display
    const pricingDisplay = (plan.ticketPricing === "$$$" || plan.ticketPricing === "$$$$")
        ? "Price Unavailable"
        : plan.ticketPricing;

    // fetching image from unsplash
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

    // useEffect to render image
    useEffect(() => {
        if (plan.placeName) {
            fetchImage(plan.placeName);
        }
    }, [plan.placeName]);

    return (
        <div className="shadow-lg rounded-xl p-3 flex gap-5 h-full cursor-pointer">
            <img src={imageUrl} 
                className="w-[150px] h-[150px] object-cover rounded-lg" 
                alt={plan.placeName || "Place Image"} />
            <div className="flex-grow">
                <h2 className="font-bold text-lg">🏢 {plan.placeName}</h2>
                <h2 className="font-semibold text-xs mt-1 text-orange-600">{plan.time}</h2>
                <p className="text-sm text-gray-600">{plan.placeDetails}</p>
                <p className="mt-2 text-sm font-semibold">⭐ {plan.rating} Rating</p>
                <p className="mt-1 text-sm">🎟️ {pricingDisplay}</p>

               
                <a 
                    href={`https://www.google.com/maps/search/?api=1&query=${plan?.placeName}`} 
                    target="_blank" 
                    rel="noopener noreferrer">
                    <Button className="mt-3 border-gray-400 border-[1px] rounded-lg" variant="secondary" size="sm">Navigate 🗺️</Button>
                </a>
            </div>
        </div>
    );
};

export default PlaceCardItem;
