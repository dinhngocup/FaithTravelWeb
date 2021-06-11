import React from "react";
import avatar from "../../../../asset/image/avatar.jpg";
import "./reviewItem.scss";
import { Link } from "react-router-dom";
import FullRating from "../../../../components/common/FullRating/fullRating";
import AuthenTag from "../../../../components/common/AuthenTag/authenTag";

function ReviewItem(props) {
  return (
    <div className="review">
      <div className="review-title d-flex">
        <div className="reviewer d-flex">
          <img src={avatar} alt="avatar" />
          <div className="reviewer-info">
            <div>Đinh Ngọc Uyên Phương</div>
            <div className="date">May 21, 2021</div>
          </div>
        </div>
        <div className="rating d-flex">
          <FullRating />
          <AuthenTag />
        </div>
      </div>
      <div className="review-body">
        <div className="review-content mb-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
          similique hic vitae dolor magnam aut praesentium esse? Qui aut
        </div>
        <div className="reply-review">
          <Link to="/homestay/review/1">
            <button className="btn-reply">
              <i className="fa fa-reply"></i>
            </button>
          </Link>
          <Link to="/homestay/review/1">
            <button className="btn-reply">
              <i className="far fa-comment"></i> 8
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

ReviewItem.propTypes = {};

export default ReviewItem;
