/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import { db } from '@/service/firebaseConfig'
import { doc, getDoc } from 'firebase/firestore'
import React from 'react'
import { useState,useEffect } from 'react'
import InfoSection from '@/custom/InfoSection'
import Hotels from '../../../custom/Hotels'
import PlacesToVisit from '../../../custom/PlaceToVisit'

const ViewTrip = ({params}) => {
    const tripId = params.tripid

    const [trip,setTrip]=useState([])

    // fetching trip information
    const getTripData=async()=>{
        const docRef=doc(db,'AITrips',tripId)
        const docSnap=await getDoc(docRef)
        if(docSnap.exists()){
            console.log(docSnap.data())
            setTrip(docSnap.data())
        }
    }

    useEffect(()=>{
        getTripData();
    },[])

  return (
    <div className="p-10 md:px-20 lg:px-44 xl:px-56">
      <InfoSection trip={trip}/>
      <Hotels trip={trip}/>
      <PlacesToVisit trip={trip}/>
    </div>
  )
}

export default ViewTrip
