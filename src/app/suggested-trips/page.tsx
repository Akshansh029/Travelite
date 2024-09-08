import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Navigation } from "lucide-react";
import { motion } from "framer-motion";

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
  ];

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
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        delay: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div
      className="min-h-screen landing-bg text-gray-200 sm:px-10 md:px-32 lg:px-44 xl:px-56 px-5 py-3"
      // initial="hidden"
      // animate="visible"
      // variants={containerVariants}
    >
      <div className="container mx-auto px-4 py-8">
        <h1
          className="text-4xl font-bold text-center mb-4 dark-heading-text"
          // variants={cardVariants}
        >
          Trip finder
        </h1>
        <p
          className="text-center dark-subheading-text mb-8 text-lg"
          // variants={cardVariants}
        >
          Find trips created by other users and get inspired for{" "}
          <span className="text-indigo-600 font-semibold">your next trip!</span>
        </p>
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          // variants={containerVariants}
        >
          {trips.map((trip) => (
            <div
              key={trip.id}
              // variants={cardVariants}
              // whileHover={{ scale: 1.05 }}
            >
              <Card className="shadow-[1px_1px_6px_2px_rgba(0,_0,_0,_0.1)] hover:shadow-[1px_1px_8px_5px_rgba(0,_0,_0,_0.1)] rounded-xl p-4 flex flex-col gap-5 cursor-pointer w-full h-fit justify-center">
                <img
                  src="/hotel.png"
                  className="aspect-square object-cover rounded-lg max-h-[200px]"
                  alt="Place Image"
                />
                <div className="flex-grow mt-2">
                  <h2 className="font-bold text-xl dark-heading-text">
                    Jaipur
                  </h2>
                  <p className="text-sm dark-heading-text truncate ...">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quam sapiente suscipit, atque a similique cupiditate
                    reiciendis quia nemo possimus est! Dicta molestias fuga
                    cumque, ipsa deserunt quo et dolorum quisquam.
                  </p>
                  <p className="mt-2 text-sm font-semibold dark-heading-text">
                    ⭐ 4.4 Rating
                  </p>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=jaipur`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      className="mt-3 border-gray-400 border-[1px] rounded-lg gap-2"
                      variant={"default"}
                      size="sm"
                    >
                      <p className="">Navigate</p>
                      <Navigation className="white" size={16} />
                    </Button>
                  </a>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
