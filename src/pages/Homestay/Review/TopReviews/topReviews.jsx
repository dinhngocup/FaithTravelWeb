import React from "react";
import { Link } from "react-router-dom";
import { Col, Row } from "reactstrap";
import ReviewItem from "../ReviewItem/reviewItem";
import "./topReview.scss";
import arrow from "../../../../asset/image/long-arrow.png";

function TopReviews(props) {
  return (
    <div className="review-area">
      <h4 className="review-title">Review</h4>
      <div className="review-list container-fluid">
        <Row className="review-row">
          <Col xs="12" sm="12" md="12" lg="5" className="pl-0 col-review">
            <ReviewItem />
          </Col>
          <Col xs="12" sm="12" md="12" lg="2" className="pl-0 col-review"></Col>
          <Col xs="12" sm="12" md="12" lg="5" className="pl-0 col-review">
            <ReviewItem />
          </Col>
          <Col xs="12" sm="12" md="12" lg="5" className="pl-0 col-review">
            <ReviewItem />
          </Col>
          <Col xs="12" sm="12" md="12" lg="2" className="pl-0 col-review"></Col>
          <Col xs="12" sm="12" md="12" lg="5" className="pl-0 col-review">
            <ReviewItem />
          </Col>
        </Row>
        <div className="view-all">
          <Link to="/homestay/review">
            View all reviews
            <img src={arrow} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
}

TopReviews.propTypes = {};

export default TopReviews;
