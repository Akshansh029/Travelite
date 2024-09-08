/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/prop-types */
import Link from "next/link";
import { useEffect, useState } from "react";
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

const Hotels = ({ trip }) => {
  const [imageUrls, setImageUrls] = useState({}); // Store image URLs for each hotel
  const [mapCenter, setMapCenter] = useState(null); // Initially null until coordinates are calculated
  const [hotels, setHotels] = useState([]);
  const [mapLoaded, setMapLoaded] = useState(false); // State to track if the map should be rendered
  const [averageCoords, setAverageCoords] = useState(null); // State to store average coordinates

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

  // {mapLoaded && mapCenter && (
  //   <div
  //     className="relative w-full h-[400px] rounded-xl overflow-hidden mb-5"
  //     style={{ zIndex: "1" }}
  //   >
  //     {/* Ensure map container is only initialized once */}
  //     <MapContainer
  //       center={mapCenter}
  //       zoom={13}
  //       style={{ height: "100%", width: "100%" }}
  //     >
  //       <TileLayer
  //         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  //         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  //       />
  //       {/* Render a single marker at the average coordinates */}
  //       {/* {averageCoords && (
  //         <Marker position={averageCoords} icon={createIcon()}>
  //           <Popup>
  //             <strong>Average Location</strong><br />
  //             This is the average location of the hotels.<br />
  //           </Popup>
  //         </Marker>
  //       )} */}
  //     </MapContainer>
  //   </div>
  // )}
  return (
    <div className="px-6">
      <h2 className="font-bold text-xl mt-5 mb-3">Hotel Recommendations</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
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
