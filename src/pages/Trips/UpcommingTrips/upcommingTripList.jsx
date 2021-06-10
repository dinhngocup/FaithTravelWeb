import React from "react";
import TripCard from "../../../components/Trips/TripCard/tripCard";

function UpcommingTripList(props) {
  return (
    <div className="trip-list  container-fluid">
      <TripCard status="upcomming" />
      <TripCard status="upcomming" />
      <TripCard status="upcomming" />
    </div>
  );
}
UpcommingTripList.propTypes = {};

export default UpcommingTripList;
