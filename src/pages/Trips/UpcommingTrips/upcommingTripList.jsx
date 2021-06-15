import React from "react";
import TripCard from "../../../components/Trips/TripCard/tripCard";
import image from "../../../asset/image/city1.webp";
import image1 from "../../../asset/image/background.jpeg";
import image2 from "../../../asset/image/background2.webp";

function UpcommingTripList(props) {
  const upcommingTrips = [
    {
      tripId: 1,
      city: "Pleiku",
      date: "Aug 22 - Aug 26, 2021",
      rating: 3.5,
      homestayName: "South Of The Border",
      image: image
    },
    {
      tripId: 2,
      city: "Ho Chi Minh City",
      date: "Sep 12 - Sep 14, 2021",
      rating: 4.5,
      homestayName: "Little Forest | AVOCADO",
      image: image1
    },
    {
      tripId: 3,
      city: "Can Tho City",
      date: "Nov 01 - Nov 03, 2021",
      rating: 5,
      homestayName: "Little Forest | PERSIMMON",
      image: image2
    },
    {
      tripId: 4,
      city: "Da Lat City",
      date: "Oct 18 - Oct 21, 2021",
      rating: 3.5,
      homestayName: "Penthouse Studio",
      image: image1
    }
  ];
  const renderTripCard = (listTrip) => {
    return listTrip.map((trip, index) => (
      <TripCard status="upcomming" trip={trip} key={index} />
    ));
  };
  return (
    <div className="trip-list container-fluid">
      {renderTripCard(upcommingTrips)}
    </div>
  );
}
UpcommingTripList.propTypes = {};

export default UpcommingTripList;
