import React from "react";

import "./reviewItem.scss";
import { Link } from "react-router-dom";
import FullRating from "../../../../components/common/FullRating/fullRating";
import AuthenTag from "../../../../components/common/AuthenTag/authenTag";

function ReviewItem(props) {
  const { review } = props;
  //console.log(review)
  return (
    <div className="review">
      <div className="review-title d-flex">
        <div className="reviewer d-flex">
          <img src={review.reviewerAvatar} alt="avatar" />
          <div className="reviewer-info">
            <div>{review.reviewer}</div>
            <div className="date">{review.date}</div>
          </div>
        </div>
        <div className="rating d-flex">
          <FullRating rate={review.rating} />
          <AuthenTag />
        </div>
      </div>
      <div className="review-body">
        <div className="review-content mb-2">{review.reviewContent}</div>
        <div className="reply-review">
          <Link to="/homestay/review/1">
            <button className="btn-reply">
              <i className="fa fa-reply"></i>
            </button>
          </Link>
          <Link to="/homestay/review/1">
            <button className="btn-reply">
              <i className="far fa-comment"></i> {review.totalReplies}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

ReviewItem.propTypes = {};

export default ReviewItem;
