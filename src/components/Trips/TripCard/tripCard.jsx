import React from "react";
import { Link } from "react-router-dom";
import { Col, Row } from "reactstrap";
import image from "../../../asset/image/city1.webp";
import AverageRating from "../../common/AverageRating/averageRating";
import "./tripCard.scss";
function TripCard(props) {
  const { status } = props;
  const renderButton = (status) => {
    return status === "upcomming" ? (
      <Link to="/trips/upcomming/1">
        <button>Details</button>
      </Link>
    ) : (
      <>
        <Link to="/trips/upcomming/1">
          <button>Review</button>
        </Link>

        <button
          data-toggle="modal"
          data-target="#deleteModal"
          className="ml-3 delete-btn"
        >
          Delete
        </button>
      </>
    );
  };
  return (
    <Row className="trip-card mb-5">
      <Col xs="12" sm="12" md="12" lg="6" className="p-0">
        <img src={image} alt="" />
      </Col>
      <Col xs="0" sm="0" md="0" lg="1"></Col>
      <Col xs="12" sm="12" md="12" lg="5" className="d-flex trip-detail">
        <div>
          <p>
            <b>Pleiku</b>
          </p>
          <p>
            <i>Aug 22 - Aug 26, 2021</i>
          </p>
          <div className="rating">
            <div>Homestay's name</div>
            <AverageRating rating={4.5} />
          </div>
        </div>
        <div className="d-flex mt-4">{renderButton(status)}</div>
      </Col>
    </Row>
  );
}

TripCard.propTypes = {};

export default TripCard;
