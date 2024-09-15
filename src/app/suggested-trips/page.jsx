"use client";
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Navigation } from "lucide-react";
import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/service/firebaseConfig";
import axios from "axios";
import { SkeletonCard } from "@/custom/SkeletonCard";

export default function DarkTripFinder() {
  const { isLoaded, isSignedIn, user } = useUser();
  const [emailAddress, setEmailAddress] = useState("");
  const [suggestedTrips, setSuggestedTrips] = useState([]);
  const [imageUrl, setImageUrl] = useState("/hotel1.png");
  const [place, setPlace] = useState(null);

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

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.5,
      },
    },
  };

  // Effect to fetch email address after 2 seconds
  useEffect(() => {
    if (isLoaded && isSignedIn && user?.primaryEmailAddress?.emailAddress) {
      const timeoutId = setTimeout(() => {
        setEmailAddress(user.primaryEmailAddress.emailAddress);
        console.log(
          "Email fetched after 2 seconds: ",
          user.primaryEmailAddress.emailAddress
        );
      }, 2000);

      return () => clearTimeout(timeoutId); // Clean up the timeout
    }
  }, [isLoaded, isSignedIn, user]);

  // useEffect(() => {
  //   fetchImage(place);
  // }, [place]);

  // Function to search user trips
  const searchUserTrips = async (userEmail) => {
    try {
      console.log("Searching trips for user: ", userEmail);

      // Create a query to fetch trips where the email matches userEmail
      const q = query(
        collection(db, "AITrips"),
        where("userEmail", "==", userEmail)
      );

      // Get the documents that match the query
      const querySnapshot = await getDocs(q);

      // Object to store all trip data
      const tripsData = {};

      if (!querySnapshot.empty) {
        // Loop through the results and add the data to the tripsData object
        querySnapshot.forEach((doc) => {
          const destination = doc.data().userSelection?.destination; // Safely access userSelection.destination
          if (destination) {
            tripsData[doc.id] = destination; // Store the destination using document ID as the key
          }
        });

        const tripKeys = Object.keys(tripsData);
        const lastKey = tripKeys[tripKeys.length - 1];
        const lastDestination = tripsData[lastKey];
        const lastTrip = lastDestination.split(",")[0];

        fetchSuggestedTrips(lastTrip);
        setPlace(lastTrip);
      } else {
        console.log("No trips found for user: ", userEmail);
      }
    } catch (error) {
      console.error("Error fetching trips: ", error);
    }
  };

  // Function to fetch suggested trips based on last trip destination
  const fetchSuggestedTrips = async (destination) => {
    try {
      const result = await axios.get(
        `https://place-recommender.onrender.com/api/cluster?location_name=${encodeURIComponent(
          destination
        )}`
      );

      setSuggestedTrips(result.data.cluster); // Set the fetched suggested trips
    } catch (error) {
      console.error("Error fetching suggested trips: ", error);
    }
  };

  // Effect to fetch user's trips based on the email address
  useEffect(() => {
    if (emailAddress) {
      searchUserTrips(emailAddress);
    }
  }, [emailAddress]);

  return (
    <div className="min-h-screen landing-bg text-gray-200 sm:px-10 md:px-32 lg:px-44 xl:px-56 px-5 py-3">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-4 dark-heading-text">
          Our Recommended Trips
        </h1>
        <p className="text-center dark-subheading-text mb-8 text-lg">
          Based on your travels and AI trip generation let &apos;s create{" "}
          <span className="text-indigo-600 font-semibold">your next trip!</span>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {suggestedTrips.slice(0, 3).map((trip, index) => (
            <div key={index}>
              <Card className="shadow-[1px_1px_6px_2px_rgba(0,_0,_0,_0.1)] hover:shadow-[1px_1px_8px_5px_rgba(0,_0,_0,_0.1)] rounded-xl p-4 flex flex-col gap-5 cursor-pointer w-full justify-center h-full">
                <img
                  src={imageUrl}
                  className="aspect-square object-cover rounded-lg max-h-[200px]"
                  alt="Place Image"
                />
                <div className="flex-grow mt-2 justify-between h-full">
                  <h2 className="font-bold text-xl dark-heading-text">
                    {trip}
                  </h2>
                  <p className="mt-2 text-sm font-semibold dark-heading-text">
                    ⭐ 4.4 Rating
                  </p>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
