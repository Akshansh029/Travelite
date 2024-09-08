/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { db } from "@/service/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import React from "react";
import { useState, useEffect } from "react";
import InfoSection from "@/custom/InfoSection";
import Hotels from "../../../custom/Hotels";
import PlacesToVisit from "../../../custom/PlaceToVisit";
import dynamic from "next/dynamic"; // Import dynamic for client-side rendering
import "leaflet/dist/leaflet.css"; // Import Leaflet CSS
import { Marker, Popup } from "react-leaflet"; // Import Marker and Popup
import L from "leaflet";

// Dynamically import MapContainer and TileLayer to disable SSR
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);

// Marker icon
const createIcon = () =>
  L.icon({
    iconUrl: "/marker-icon.png", // Add marker icon path
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    //shadowUrl: '/marker-shadow.png', // Add marker shadow path
    shadowSize: [41, 41],
  });

const ViewTrip = ({ params }) => {
  const tripId = params.tripid;
  const [trip, setTrip] = useState([]);
  const [mapLoaded, setMapLoaded] = useState(false); // State to track if the map should be rendered
  const [averageCoords, setAverageCoords] = useState(null); // State to store average coordinates
  const [hotels, setHotels] = useState([]);
  const [mapCenter, setMapCenter] = useState(null); // Initially null until coordinates are calculated

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
      console.log("Incoming Hotels Data:", trip.tripData.hotels); // Debugging: Check incoming hotel data

      // Update hotels state
      setHotels(trip.tripData.hotels);

      // Calculate average coordinates for map center
      const coordinates = trip.tripData.hotels.map((hotel) => {
        const [lat, lng] = hotel.geoCoordinates
          .split(",")
          .map((coord) => parseFloat(coord));
        return [lat, lng];
      });

      // Debugging: Check coordinates
      console.log("Parsed Coordinates:", coordinates);

      if (coordinates.length > 0) {
        const avgLat =
          coordinates.reduce((sum, [lat]) => sum + lat, 0) / coordinates.length;
        const avgLng =
          coordinates.reduce((sum, [, lng]) => sum + lng, 0) /
          coordinates.length;

        // Debugging: Check average coordinates
        console.log("Average Coordinates:", { avgLat, avgLng });

        setMapCenter([avgLat, avgLng]);
        setAverageCoords([avgLat, avgLng]); // Store average coordinates
        setMapLoaded(true); // Set mapLoaded to true when coordinates are ready
      }

      // Fetch images for hotels
      trip.tripData.hotels.forEach((hotel, index) => {
        if (hotel.hotelName) {
          fetchImage(hotel.hotelName, index);
        }
      });
    }
  }, [trip]);

  // fetching trip information
  const getTripData = async () => {
    const docRef = doc(db, "AITrips", tripId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log(docSnap.data());
      setTrip(docSnap.data());
    }
  };

  useEffect(() => {
    getTripData();
  }, []);

  const leftSectionStyle = {
    overflow: "hidden",
    height: "100%",
  };

  const scrollContainerStyle = {
    overflowY: "scroll",
    height: "100%",
  };

  // md:px-20 lg:px-24 xl:px-24
  return (
    <div className="flex flex-col md:flex-row">
      {/* Left Section - Scrollable with hidden scrollbar */}
      <div
        style={leftSectionStyle}
        className="w-full md:w-[65%] h-screen pb-10"
      >
        <div style={scrollContainerStyle}>
          <InfoSection trip={trip} />
          <Hotels trip={trip} />
          <PlacesToVisit trip={trip} />
        </div>
      </div>

      {/* Right Section - Sticky */}
      <div className="right-section md:w-[35%] w-full h-screen sticky top-0">
        {mapLoaded && mapCenter && (
          <div className="relative w-full h-full overflow-hidden mb-5">
            {/* Ensure map container is only initialized once */}
            <MapContainer
              center={mapCenter}
              zoom={13}
              style={{ height: "100%", width: "100%" }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              {/* Render a single marker at the average coordinates */}
              {/* {averageCoords && (
                <Marker position={averageCoords} icon={createIcon()}>
                  <Popup>
                    <strong>Average Location</strong><br />
                    This is the average location of the hotels.<br />
                  </Popup>
                </Marker>
              )} */}
            </MapContainer>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewTrip;
