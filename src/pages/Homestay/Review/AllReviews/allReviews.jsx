import React from "react";
import { Col, Row } from "reactstrap";
import ReviewItem from "../ReviewItem/reviewItem";
import Pagination from "./Pagination/pagination";
import "../reviewHeader.scss";
import { Link } from "react-router-dom";

function AllReviews(props) {
  return (
    <div className="all-reviews">
      <div className="review-header">
        <div className="review-title">All Reviews</div>

        <Link to="/homestay" className="back d-flex">
          <i className="fa fa-angle-left"></i>
          <div className="review-title">Top Reviews</div>
        </Link>
      </div>
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
        <Pagination />
      </div>
    </div>
  );
}

AllReviews.propTypes = {};

export default AllReviews;
