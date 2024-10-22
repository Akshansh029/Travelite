import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  CalendarIcon,
  MinusIcon,
  PlaneLandingIcon,
  PlaneTakeoffIcon,
  PlusIcon,
  UserIcon,
} from "lucide-react";

export default function BookFlight() {
  const [passengers, setPassengers] = useState(1);

  return (
    <div className="w-full min-w-full p-6 bg-white border-b-[1px] border-gray-300">
      <h1 className="text-2xl font-bold mb-2">Book a Flight</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative">
          <Label htmlFor="from" className="text-sm font-medium text-gray-700">
            From
          </Label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <PlaneTakeoffIcon className="h-5 w-5 text-gray-600" />
            </div>
            <Input
              type="text"
              name="from"
              id="from"
              className="pl-10 block w-full rounded-md border-gray-300"
              placeholder="Warsaw Chopin Airport"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <span className="text-gray-500 sm:text-sm">WAW</span>
            </div>
          </div>
        </div>
        <div className="relative">
          <Label htmlFor="to" className="text-sm font-medium text-gray-700">
            To
          </Label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <PlaneLandingIcon className="h-5 w-5 text-gray-600" />
            </div>
            <Input
              type="text"
              name="to"
              id="to"
              className="pl-10 block w-full rounded-md border-gray-300"
              placeholder="New Yogyakarta Airport"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <span className="text-gray-500 sm:text-sm">YIA</span>
            </div>
          </div>
        </div>
        <div className="relative">
          <Label htmlFor="date" className="text-sm font-medium text-gray-700">
            Date
          </Label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <CalendarIcon className="h-5 w-5 text-gray-600" />
            </div>
            <Input
              type="date"
              name="date"
              id="date"
              className="pl-10 block w-full rounded-md border-gray-300"
              placeholder="2020-09-28"
            />
          </div>
        </div>
        <div className="relative">
          <Label
            htmlFor="passengers"
            className="text-sm font-medium text-gray-700"
          >
            Passenger
          </Label>
          <div className="mt-1 flex rounded-md shadow-sm">
            <div className="relative flex items-stretch flex-grow focus-within:z-10">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <UserIcon className="h-5 w-5 text-gray-600" />
              </div>
              <Input
                type="number"
                name="passengers"
                id="passengers"
                className="pl-10 block w-full rounded-none rounded-l-md border-gray-300"
                value={passengers}
                readOnly
              />
            </div>
            <Button
              type="button"
              className="-ml-px relative inline-flex items-center space-x-2 px-4 py-2 border border-gray-300 text-sm font-medium rounded-none text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
              onClick={() => setPassengers(Math.max(1, passengers - 1))}
            >
              <MinusIcon className="h-5 w-5 text-gray-600" aria-hidden="true" />
              <span className="sr-only">Decrease</span>
            </Button>
            <Button
              type="button"
              className="-ml-px relative inline-flex items-center space-x-2 px-4 py-2 border border-gray-300 text-sm font-medium rounded-r-md text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
              onClick={() => setPassengers(passengers + 1)}
            >
              <PlusIcon className="h-5 w-5 text-gray-600" aria-hidden="true" />
              <span className="sr-only">Increase</span>
            </Button>
          </div>
        </div>
      </div>
      <Button className="w-full mt-6 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
        Search
      </Button>
    </div>
  );
}
