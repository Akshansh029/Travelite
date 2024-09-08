/* eslint-disable react/prop-types */

import PlaceCardItem from "./PlaceCardItem";

const PlacesToVisit = ({ trip }) => {
  return (
    <div className="w-full mt-10 px-6">
      <h2 className="font-bold text-2xl mb-4">Places to Visit</h2>

      <div className="w-full flex flex-col gap-6">
        {trip?.tripData?.itinerary?.map((item, index) => (
          <div className="w-full">
            <div className="flex items-center justify-start gap-4">
              <h2 className="font-md text-xl font-semibold">Day {item?.day}</h2>
              <span className="w-[75%] h-1 bg-indigo-500 rounded-3xl"></span>
            </div>
            <div key={index} className="w-full flex flex-col gap-2 mt-2">
              {item?.plan?.map((plan, i) => (
                <div key={i} className="my-2">
                  <PlaceCardItem plan={plan} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlacesToVisit;
