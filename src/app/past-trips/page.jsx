/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { db } from "@/service/firebaseConfig";
import { useUser } from "@clerk/nextjs";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState, useCallback } from "react";
import { SkeletonCard } from "@/custom/SkeletonCard";
import { toast } from "sonner";
import UserTripItemCard from "@/custom/UserTripItemCard";
import { motion } from "framer-motion";

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

      const q = query(
        collection(db, "AITrips"),
        where("userEmail", "==", userEmail)
      );
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.div
      className="landing-bg sm:px-10 md:px-32 lg:px-44 xl:px-56 px-5 py-10 grid place-items-center"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div
        className="flex flex-col gap-2 text-center"
        variants={cardVariants}
      >
        <h2 className="font-bold text-3xl">My Trips</h2>
        <p className="font-normal">
          Find all your previous adventures in{" "}
          <span className="text-indigo-600 font-semibold">one place!</span>{" "}
          Explore destinations, dates, and highlights from your completed trips
          to relive memories and plan your next journey.
        </p>
      </motion.div>

      {loading && (
        <div className="flex gap-5 mt-8">
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </div>
      )}

      {!loading && userTrips.length === 0 && (
        <motion.p className="mt-5 text-gray-500" variants={cardVariants}>
          You have no past trips.
        </motion.p>
      )}

      <motion.div
        className="grid grids-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10"
        variants={containerVariants}
      >
        {userTrips.map((trip) => (
          <motion.div key={trip.id} variants={cardVariants}>
            <UserTripItemCard trip={trip} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default PastTrips;
