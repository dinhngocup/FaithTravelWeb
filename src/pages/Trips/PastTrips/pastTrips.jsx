import React, { useState } from "react";
import TripCard from "../../../components/Trips/TripCard/tripCard";
import image from "../../../asset/image/background5.jpeg";
import image1 from "../../../asset/image/background3.jpeg";
import image2 from "../../../asset/image/background4.jpeg";
import image3 from "../../../asset/image/background6.jpeg";

function PastTrips(props) {
  const [pastTrips, setPastTrips] = useState([
    {
      tripId: 1,
      city: "Pleiku",
      date: "Aug 22 - Aug 26, 2020",
      rating: 4.5,
      homestayName: "Deluxe Bungalow Poolside & Garden",
      image: image,
    },
    {
      tripId: 2,
      city: "Ho Chi Minh City",
      date: "Sep 12 - Sep 14, 2020",
      rating: 3.5,
      homestayName: "Nap SAIGON",
      image: image1,
    },
    {
      tripId: 3,
      city: "Can Tho City",
      date: "Nov 01 - Nov 03, 2020",
      rating: 5,
      homestayName: "Brick House Tam Dao Golf",
      image: image2,
    },
    {
      tripId: 4,
      city: "Da Lat City",
      date: "Oct 18 - Oct 21, 2020",
      rating: 5,
      homestayName: "Trang An Passion",
      image: image3,
    },
  ]);
  const [currentViewTrip, setCurrentViewTrip] = useState();
  const getCurrentViewTrip = (id) => {
    setCurrentViewTrip(id);
  };
  const deletePastTrip = (id) => {
    let newList = [...pastTrips];
    newList = newList.filter((trip) => trip.tripId !== parseInt(id));
    setPastTrips(newList);
  };
  const renderTripCard = (listTrip) => {
    return listTrip.map((trip) => (
      <TripCard
        status="past"
        trip={trip}
        key={trip.tripId}
        getCurrentViewTrip={getCurrentViewTrip}
      />
    ));
  };

  return (
    <div className="trip-list  container-fluid">
      {renderTripCard(pastTrips)}
      <div
        className="modal fade"
        id="deleteModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby=""
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-sm modal-dialog-centered"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="">
                Delete past trip
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">Do you want to delete this trip?</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger btn-sm"
                data-dismiss="modal"
                onClick={() => {
                  deletePastTrip(currentViewTrip);
                }}
              >
                Yes
              </button>
              <button
                type="button"
                className="btn btn-success btn-sm"
                data-dismiss="modal"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

PastTrips.propTypes = {};

export default PastTrips;
