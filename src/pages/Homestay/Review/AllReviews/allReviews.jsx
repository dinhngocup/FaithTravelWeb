import React, { useState, useEffect } from "react";
import { Col, Row } from "reactstrap";
import ReviewItem from "../ReviewItem/reviewItem";
import Pagination from "../../../../components/common/Pagination/pagination";
import "../reviewHeader.scss";
import { Link } from "react-router-dom";
import avatar1 from "../../../../asset/image/background3.jpeg";
import avatar2 from "../../../../asset/image/background4.jpeg";
import avatar3 from "../../../../asset/image/background5.jpeg";
import avatar4 from "../../../../asset/image/background6.jpeg";

function AllReviews(props) {
  const reviewsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
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
        reviewer: "Le Minh Huy",
        date: "Nov 21, 2020",
        rating: 4,
        totalReplies: 8,
        reviewerAvatar: avatar3,
      },
      {
        reviewId: 4,
        reviewContent: "Not good as adverting",
        reviewer: "Nguyen Anh Huy",
        date: "Oct 01, 2020",
        rating: 2,
        totalReplies: 10,
        reviewerAvatar: avatar4,
      },
      {
        reviewId: 5,
        reviewContent: "It was nice, at good location.",
        reviewer: "Phung Khanh Linh",
        date: "Sep 12, 2020",
        rating: 4.5,
        totalReplies: 10,
        reviewerAvatar: avatar4,
      },
      {
        reviewId: 6,
        reviewContent:
          "Stylish place. The space under the kitchen looked a bit concerning.",
        reviewer: "Hoang Dinh Luan",
        date: "Sep 01, 2020",
        rating: 3.5,
        totalReplies: 10,
        reviewerAvatar: avatar2,
      },
      {
        reviewId: 7,
        reviewContent:
          "The place is spacious and well-designed. The host is very helpful.",
        reviewer: "Nguyen Hanh Nguyen",
        date: "Aug 23, 2020",
        rating: 4,
        totalReplies: 10,
        reviewerAvatar: avatar3,
      },
      {
        reviewId: 8,
        reviewContent: "Nice location, nice place, nice host! ",
        reviewer: "Tran Anh Tu",
        date: "Aug 12, 2020",
        rating: 5,
        totalReplies: 10,
        reviewerAvatar: avatar1,
      },
      {
        reviewId: 9,
        reviewContent: "Great view and convenient for a getaway weekend trip",
        reviewer: "Tran Quoc Bao",
        date: "Aug 11, 2020",
        rating: 4.5,
        totalReplies: 10,
        reviewerAvatar: avatar4,
      },
      {
        reviewId: 10,
        reviewContent: "Tidy room",
        reviewer: "Nguyen Hoang Anh",
        date: "Feb 21, 2020",
        rating: 2,
        totalReplies: 10,
        reviewerAvatar: avatar2,
      },
    ];

    let response = [];
    // temp
    let indexOfFirstReview = currentPage * reviewsPerPage - reviewsPerPage;
    let indexOfLastReview = indexOfFirstReview + reviewsPerPage;
    for (
      let i = indexOfFirstReview;
      i < reviews.length && i < indexOfLastReview;
      i++
    ) {
      response.push(reviews[i]);
    }
    setReviews(response);
  }, [currentPage, reviewsPerPage]);

  const changeCurrentPage = (page) => {
    if (page === currentPage) return;
    setCurrentPage(page);
  };
  const renderListReview = (reviewList) => {
    if (reviewList === null) {
      return;
    }
    return reviewList.map((review, index) => {
      return index % 2 === 0 ? (
        <React.Fragment key={review.reviewId}>
          <Col xs="12" sm="12" md="12" lg="5" className="pl-0 col-review">
            <ReviewItem review={review} />
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
          <ReviewItem review={review} />
        </Col>
      );
    });
  };
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
        <Row className="review-row">{renderListReview(reviews)}</Row>
        <Pagination
          changeCurrentPage={changeCurrentPage}
          quantityPerPage={reviewsPerPage}
          totalReviews={10}
        />
      </div>
    </div>
  );
}

AllReviews.propTypes = {};

export default AllReviews;
