import React from "react";
import { Link } from "react-router-dom";
import { Col, Row } from "reactstrap";

import AverageRating from "../../common/AverageRating/averageRating";
import "./tripCard.scss";
function TripCard(props) {
  const { status, trip, getCurrentViewTrip } = props;
  const renderButton = (status) => {
    return status === "upcomming" ? (
      <Link to={`/trips/upcomming/${trip.tripId}`}>
        <button>Details</button>
      </Link>
    ) : (
      <>
        <Link to="/homestay">
          <button>Review</button>
        </Link>

        <button
          data-toggle="modal"
          data-target="#deleteModal"
          className="ml-3 delete-btn"
          onClick={() => getCurrentViewTrip(trip.tripId)}
        >
          Delete
        </button>
      </>
    );
  };
  return (
    <Row className="trip-card mb-5">
      <Col xs="12" sm="12" md="12" lg="6" className="p-0">
        <img src={trip.image} alt="" />
      </Col>
      <Col xs="0" sm="0" md="0" lg="1"></Col>
      <Col xs="12" sm="12" md="12" lg="5" className="d-flex trip-detail">
        <div>
          <p>
            <b>{trip.city}</b>
          </p>
          <p>
            <i>{trip.date}</i>
          </p>
          <div className="rating">
            <div>{trip.homestayName}</div>
            <AverageRating rating={trip.rating} />
          </div>
        </div>
        <div className="d-flex mt-4">{renderButton(status)}</div>
      </Col>
    </Row>
  );
}

TripCard.propTypes = {};

export default TripCard;
