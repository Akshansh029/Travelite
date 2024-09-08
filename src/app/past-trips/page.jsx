/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { db } from "@/service/firebaseConfig";
import { useUser } from "@clerk/nextjs";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState, useCallback } from "react";
import {SkeletonCard} from "@/custom/SkeletonCard";
import { toast } from "sonner";
import UserTripItemCard from "@/custom/UserTripItemCard";

const PastTrips = () => {
  const [loading, setLoading] = useState(true); // Loading state management
  const { user } = useUser();
  const userEmail = user?.primaryEmailAddress?.emailAddress;
  const [userTrips, setUserTrips] = useState([]);

  // Function to fetch user trips
  const getUserTrips = useCallback(async () => {
    if (!userEmail) {
      toast.error("User not found");
      return;
    }

    try {
      setLoading(true); // Start loading

      // Clear previous trips before fetching new ones
      setUserTrips([]);

      const q = query(collection(db, "AITrips"), where("userEmail", "==", userEmail));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        toast.error("No trips found for this user.");
      } else {
        const trips = [];
        querySnapshot.forEach((doc) => {
          trips.push({ id: doc.id, ...doc.data() });
        });
        setUserTrips(trips); // Set fetched trips
      }

    } catch (error) {
      console.error("Error fetching trips:", error);
      toast.error("Failed to fetch trips.");
    } finally {
      setLoading(false); // End loading
    }
  }, [userEmail]);

  // Fetch trips when userEmail changes
  useEffect(() => {
    if (userEmail) {
      getUserTrips();
    }
  }, [userEmail, getUserTrips]);

  return (
    <div className="sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 mt-10">
      <h2 className="font-bold text-3xl">My Trips</h2>

      {loading && (
        <div className="flex gap-5 mt-10">
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </div>
      )}

      {!loading && userTrips.length === 0 && (
        <p className="mt-5 text-gray-500">You have no past trips.</p>
      )}

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-10 mb-10">
        {userTrips.map((trip) => (
          <UserTripItemCard key={trip.id} trip={trip} />
        ))}
      </div>
    </div>
  );
};

export default PastTrips;
