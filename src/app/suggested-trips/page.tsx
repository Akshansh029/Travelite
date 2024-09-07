import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Heart, Map, MapPin } from "lucide-react";
import Image from "next/image";

export default function DarkTripFinder() {
  const trips = [
    {
      id: 1,
      title: "Discover Jaipur: 5-Day Royal Adventure",
      description:
        "Explore the royal heritage of Jaipur over 5 days. Visit the famous Amber Fort, Hawa Mahal, and more...",
      image: "/logo.svg",
      destination: "Jaipur",
    },
    {
      id: 2,
      title: "Discover Jaipur: 5-Day Royal Adventure",
      description:
        "Explore the royal heritage of Jaipur over 5 days. Visit the famous Amber Fort, Hawa Mahal, and more...",
      image: "/logo.svg",
      destination: "Jaipur",
    },
    {
      id: 3,
      title: "Discover Jaipur: 5-Day Royal Adventure",
      description:
        "Explore the royal heritage of Jaipur over 5 days. Visit the famous Amber Fort, Hawa Mahal, and more...",
      image: "/logo.svg",
      destination: "Jaipur",
    },
    {
      id: 4,
      title: "Discover Jaipur: 5-Day Royal Adventure",
      description:
        "Explore the royal heritage of Jaipur over 5 days. Visit the famous Amber Fort, Hawa Mahal, and more...",
      image: "/logo.svg",
      destination: "Jaipur",
    },
    {
      id: 5,
      title: "Discover Jaipur: 5-Day Royal Adventure",
      description:
        "Explore the royal heritage of Jaipur over 5 days. Visit the famous Amber Fort, Hawa Mahal, and more...",
      image: "/logo.svg",
      destination: "Jaipur",
    },
    {
      id: 6,
      title: "Discover Jaipur: 5-Day Royal Adventure",
      description:
        "Explore the royal heritage of Jaipur over 5 days. Visit the famous Amber Fort, Hawa Mahal, and more...",
      image: "/logo.svg",
      destination: "Jaipur",
    },
    // {
    //   id: 2,
    //   title: "Goa Getaway: 7-Day Beach Bliss",
    //   description:
    //     "Relax on the stunning beaches of Goa, enjoy vibrant nightlife, and explore beautiful churches over a 7-day trip...",
    //   image:
    //     "https://images.pexels.com/photos/27869489/pexels-photo-27869489/free-photo-of-peaceful-sunset-in-goa-02.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //   destination: "Goa",
    //   creator: { name: "Priya Sharma", avatar: "P" },
    // },
    // {
    //   id: 3,
    //   title: "Kerala Backwaters: 6-Day Serenity",
    //   description:
    //     "Experience the tranquility of Kerala’s backwaters with houseboat cruises, scenic views, and relaxing getaways...",
    //   image:
    //     "https://images.pexels.com/photos/13691356/pexels-photo-13691356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //   destination: "Kerala",
    //   creator: { name: "Anil Nair", avatar: "A" },
    // },
    // {
    //   id: 4,
    //   title: "Shimla Retreat: 4-Day Mountain Escape",
    //   description:
    //     "Unwind in the peaceful mountain town of Shimla with its colonial charm and scenic views...",
    //   image:
    //     "https://images.pexels.com/photos/2961109/pexels-photo-2961109.jpeg",
    //   destination: "Shimla",
    //   creator: { name: "Kavita Chauhan", avatar: "K" },
    // },
    // {
    //   id: 5,
    //   title: "Majestic Udaipur: 5-Day Lake City Delight",
    //   description:
    //     "Discover the beauty of Udaipur’s lakes, palaces, and historic temples over an immersive 5-day journey...",
    //   image:
    //     "https://images.pexels.com/photos/27960112/pexels-photo-27960112/free-photo-of-cityscape-lake-city-udaipur.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //   destination: "Udaipur",
    //   creator: { name: "Vikram Rathore", avatar: "V" },
    // },
    // {
    //   id: 6,
    //   title: "Rishikesh Adventure: 3-Day Spiritual and Thrill Trip",
    //   description:
    //     "Combine adventure with spirituality in Rishikesh, where you’ll experience river rafting and visit sacred temples...",
    //   image:
    //     "https://plus.unsplash.com/premium_photo-1697730421390-63ae0487b986?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //   destination: "Rishikesh",
    //   creator: { name: "Deepak Rawat", avatar: "D" },
    // },
    // {
    //   id: 7,
    //   title: "Golden Temple Experience: 2-Day Amritsar Journey",
    //   description:
    //     "Witness the grandeur of the Golden Temple and explore the cultural heritage of Amritsar in this short, 2-day trip...",
    //   image:
    //     "https://plus.unsplash.com/premium_photo-1697730396642-7a338ffc2852?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //   destination: "Amritsar",
    //   creator: { name: "Harpreet Singh", avatar: "H" },
    // },
    // {
    //   id: 8,
    //   title: "Leh-Ladakh Expedition: 10-Day High-Altitude Adventure",
    //   description:
    //     "Embark on a thrilling 10-day road trip to the high-altitude desert of Leh-Ladakh, surrounded by breathtaking landscapes...",
    //   image:
    //     "https://images.unsplash.com/photo-1635255506105-b74adbd94026?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //   destination: "Leh-Ladakh",
    //   creator: { name: "Aryan Bhatt", avatar: "A" },
    // },
  ];

  return (
    <div className="min-h-screen landing-bg text-gray-200 px-24 ">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-4 dark-heading-text">
          Trip finder
        </h1>
        <p className="text-center dark-subheading-text mb-8 text-lg">
          Find trips created by other users and get inspired for{" "}
          <span className="text-indigo-600 font-semibold">your next trip!</span>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trips.map((trip) => (
            <Card
              key={trip.id}
              className="bg-transparent border-gray-700 max-h-"
            >
              <CardContent className="p-0">
                <Image
                  src={trip.image}
                  alt={trip.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="font-semibold text-lg mb-2 dark-heading-text">
                    {trip.title}
                  </h2>
                  <p className="text-sm dark-subheading-text mb-4">
                    {trip.description}
                  </p>
                </div>
              </CardContent>
              <CardFooter className="flex justify-start py-2 border-t border-gray-700 space-x-2">
                <MapPin className="dark-subheading-text" size={18} />
                <span className="dark-subheading-text text-sm">
                  {trip.destination}
                </span>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
