/* eslint-disable react/prop-types */

import PlaceCardItem from "./PlaceCardItem"



const PlacesToVisit = ({trip}) => {
  return (
    <div>
      <h2 className="font-bold text-xl mt-7 mb-3">Places to Visit</h2> 


      <div className="">
        {trip?.tripData?.itinerary?.map((item,index)=>(
          <>
            <h2 className="font-md text-lg mt-8 ">Day {item?.day}</h2>
          <div key={index} className="grid grid-cols-2 gap-3">
            {item?.plan?.map((plan,i)=>(
              <div key={i} className="my-2">
                
                <PlaceCardItem plan={plan}/>
                </div>
            ))}
            </div>
            </>
        ))}
      </div>
    </div>
  )
}

export default PlacesToVisit
