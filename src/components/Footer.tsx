import { MapIcon } from "lucide-react";
import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="landing-bg py-12 border-t-[1px] border-slate-400 px-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2">
              <Logo width={40} height={40} />
              <span className="text-xl font-medium dark-heading-text">
                Travelite
              </span>
            </Link>
            <p className="mt-2 text-sm text-gray-500">
              Turn your next trip into a hassle-free experience with Trip
              Planner AI.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4 dark-heading-text">
              Get started
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/plan/mumbai"
                  className="text-sm dark-subheading-text hover:text-[#171717]"
                >
                  Plan trip to Mumbai
                </Link>
              </li>
              <li>
                <Link
                  href="/plan/delhi"
                  className="text-sm dark-subheading-text hover:text-[#171717]"
                >
                  Plan trip to Delhi
                </Link>
              </li>
              <li>
                <Link
                  href="/plan/jaipur"
                  className="text-sm dark-subheading-text hover:text-[#171717]"
                >
                  Plan trip to Jaipur
                </Link>
              </li>
              <li>
                <Link
                  href="/plan/goa"
                  className="text-sm dark-subheading-text hover:text-[#171717]"
                >
                  Plan trip to Goa
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4 dark-heading-text">
              Support
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/contact"
                  className="text-sm dark-subheading-text hover:text-[#171717]"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4 dark-heading-text">
              Itineraries
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/suggested-trips"
                  className="text-sm dark-subheading-text hover:text-[#171717]"
                >
                  Community Trips
                </Link>
              </li>
              <li>
                <Link
                  href="/create-trip"
                  className="text-sm dark-subheading-text hover:text-[#171717]"
                >
                  Find Destinations
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
