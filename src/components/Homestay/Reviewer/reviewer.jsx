import React from "react";
import AuthenTag from "../../common/AuthenTag/authenTag";
import "./reviewer.scss";

function Reviewer(props) {
  const { reply } = props;
  return (
    <div className={`reviewer-wrapper ${reply.isReviewer ? "ml-5" : ""}`}>
      <div className="reviewer-content d-flex">
        <div className="reviewer d-flex">
          <img src={reply.avatar} alt="avatar" />
          <div className="reviewer-info ml-3">
            <div>
              <b>{reply.reviewer}</b>
            </div>
            <div className="date">{reply.date}</div>
          </div>
        </div>
        {reply.isExperienced ? <AuthenTag /> : ""}
      </div>
      <div className="review-content">{reply.replyContent}</div>
    </div>
  );
}

Reviewer.propTypes = {};

export default Reviewer;
