import React from "react";
import { Link } from "react-router-dom";
import "./savedItem.scss";
import { Col, Row } from "reactstrap";
import room4 from "../../../asset/image/room4.jpeg";
import "./savedItem.scss";
import SavedIcon from "../../../components/common/SavedIcon/savedIcon";
import AverageRating from "../../../components/common/AverageRating/averageRating";
function SavedItem(props) {
  return (
    <div className="saved-item container-fluid mb-5">
      <Link to="/homestay">
        <Row>
          <Col xs="12" sm="12" md="12" lg="4" className="p-0">
            <img src={room4} alt="" />
          </Col>
          <Col xs="12" sm="12" md="12" lg="1" className="p-0"></Col>
          <Col xs="12" sm="12" md="12" lg="7" className="p-0">
            <div className="saved-homestay-info d-flex">
              <div className="homestay-title d-flex">
                <div className="title-content">
                  <div className="location">
                    Entire apartment in Da Lat city
                  </div>
                  <div className="name">Peace and love aparment</div>
                  <div className="rule">
                    5 guests · 1 bedroom · 3 beds · 1 bath
                  </div>
                </div>
                <SavedIcon />
              </div>
              <div className="rating d-flex">
                <AverageRating rating={4.5} />{" "}
                <div className="review-homestay">(44 reviews)</div>
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
