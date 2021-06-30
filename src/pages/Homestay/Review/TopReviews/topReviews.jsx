import React from "react";
import { Link } from "react-router-dom";
import { Col, Row } from "reactstrap";
import ReviewItem from "../ReviewItem/reviewItem";
import "./topReview.scss";
import arrow from "../../../../asset/image/long-arrow.png";
import avatar1 from "../../../../asset/image/background3.jpeg";
import avatar2 from "../../../../asset/image/background4.jpeg";
import avatar3 from "../../../../asset/image/background5.jpeg";
import avatar4 from "../../../../asset/image/background6.jpeg";

function TopReviews(props) {
  const reviews = [
    {
      reviewId: 1,
      reviewContent: "Good price, a lot of promotions",
      reviewer: "Dinh Ngoc Uyen Phuong",
      date: "May 21, 2021",
      rating: 5,
      totalReplies: 10,
      reviewerAvatar: avatar1,
    },
    {
      reviewId: 2,
      reviewContent: "Host had bad attitude",
      reviewer: "Truong Thai Minh Duy",
      date: "Dec 21, 2020",
      rating: 2.5,
      totalReplies: 20,
      reviewerAvatar: avatar2,
    },
    {
      reviewId: 3,
      reviewContent: "Pretty good",
      reviewer: "Nguyen Anh Huy",
      date: "Nov 21, 2020",
      rating: 4,
      totalReplies: 8,
      reviewerAvatar: avatar3,
    },
    {
      reviewId: 4,
      reviewContent: "Not good as adverting",
      reviewer: "Le Minh Huy",
      date: "Oct 01, 2020",
      rating: 2,
      totalReplies: 10,
      reviewerAvatar: avatar4,
    },
  ];
  const renderListReview = (reviewList) => {
    if (reviewList === null) {
      return;
    }
    return reviewList.map((review, index) => {
      return index % 2 === 0 ? (
        <React.Fragment key={review.reviewId}>
          <Col
            xs="12"
            sm="12"
            md="12"
            lg="5"
            className="pl-0 col-review"
          >
            <ReviewItem review={review}/>
          </Col>
          <Col xs="12" sm="12" md="12" lg="2" className="pl-0 col-review"></Col>
        </React.Fragment>
      ) : (
        <Col
          xs="12"
          sm="12"
          md="12"
          lg="5"
          className="pl-0 col-review"
          key={review.reviewId}
        >
          <ReviewItem review={review}/>
        </Col>
      );
    });
  };
  return (
    <div className="review-area">
      <h4 className="review-title">Top Reviews</h4>
      <div className="review-list container-fluid">
        <Row className="review-row">
          {renderListReview(reviews)}
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
