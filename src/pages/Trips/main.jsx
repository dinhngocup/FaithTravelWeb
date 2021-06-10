import React from "react";
import { NavLink, Route } from "react-router-dom";
import PastTrips from "./PastTrips/pastTrips";
import "./trips.scss";
import UpcommingTripList from "./UpcommingTrips/upcommingTripList";
import DetailedTrip from "../../components/Trips/DetailedTrip/detailedTrip";

function Trips() {
  return (
    <div className="trips">
      <div className="title">
        <h1>Trips</h1>
      </div>
      <div className="trips-nav mb-4">
        <NavLink activeClassName="btn-active" to={`/trips/upcomming`}>
          <button>Upcomming</button>
        </NavLink>
        <NavLink activeClassName="btn-active" to={`/trips/past`}>
          <button>Past</button>
        </NavLink>
      </div>
      <Route exact path="/trips/upcomming">
        <UpcommingTripList />
      </Route>
      <Route exact path="/trips/upcomming/:id">
        <DetailedTrip />
      </Route>
      <Route path="/trips/past">
        <PastTrips />
      </Route>
    </div>
  );
}

export default Trips;
