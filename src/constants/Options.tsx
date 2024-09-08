export const SelectTravelList = [
  {
    id: 1,
    title: "Just Me",
    desc: "A solo travel",
    icon: "🧍",
    people: "1",
  },
  {
    id: 2,
    title: "Couple",
    desc: "A travel for two",
    icon: "🥂",
    people: "couple",
  },
  {
    id: 3,
    title: "Family",
    desc: "A group of fun loving adv",
    icon: "🏡",
    people: "3 to 5 people",
  },
  {
    id: 4,
    title: "Friends",
    desc: "A bunch of thrill seekers",
    icon: "🚣‍♂️",
    people: "5 to 10 people",
  },
];

export const SelectBudgetOptions = [
  {
    id: 1,
    title: "Affordable",
    desc: "A budget friendly trip",
    icon: "💵",
  },
  {
    id: 2,
    title: "Moderate",
    desc: "Keep it balanced",
    icon: "💰",
  },
  {
    id: 3,
    title: "Expensive",
    desc: "Go all out",
    icon: "💸",
  },
];

export const AI_PROMPT =
  "Generate Travel plan for location : {location}, for {totaldays} days for {traveller} with a {budget} budget. Give me a hotels option list with hotelName, hotel Address, price, hotel image url, geo coordinates, rating, description, and suggest an itinerary with placeName, placeDetails, place image url, geo coordinates, ticket pricing, rating, time travel each location for {totaldays} days with each day plan with the best time to visit in JSON format.";
