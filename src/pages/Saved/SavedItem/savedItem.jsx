import React from "react";
import { Link } from "react-router-dom";
import { Col, Row } from "reactstrap";
import AverageRating from "../../../components/common/AverageRating/averageRating";
import SavedIcon from "../../../components/common/SavedIcon/savedIcon";
import "./savedItem.scss";

function SavedItem(props) {
  const { homestay, changeActiveStatus } = props;

  return (
    <div className="saved-item container-fluid mb-5">
      <Link to="/homestay">
        <Row>
          <Col xs="12" sm="12" md="12" lg="4" className="p-0">
            <img src={homestay.image} alt="" />
          </Col>
          <Col xs="12" sm="12" md="12" lg="1" className="p-0"></Col>
          <Col xs="12" sm="12" md="12" lg="7" className="p-0">
            <div className="saved-homestay-info d-flex">
              <div className="homestay-title d-flex">
                <div className="title-content">
                  <div className="location">{homestay.city}</div>
                  <div className="name">{homestay.homestayName}</div>
                  <div className="rule">{homestay.rule}</div>
                </div>
                <div onClick={() => changeActiveStatus(homestay.homestayId)}>
                  <SavedIcon isActived={true} />
                </div>
              </div>
              <div className="rating d-flex">
                <AverageRating rating={homestay.rating} />
                <div className="review-homestay">
                  ({homestay.totalReviews} reviews)
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Link>
    </div>
  );
}

SavedItem.propTypes = {};

export default SavedItem;
