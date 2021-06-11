import React from "react";
import Reviewer from "../../../../../components/Homestay/Reviewer/reviewer";
import Pagination from "../../../../../components/common/Pagination/pagination";
import "./replyReviewArea.scss";

function ReplyReviewArea(props) {
  return (
    <div className="reply-review-area">
      <Reviewer isExperienced={false}/>
      <Reviewer isExperienced={true}/>
      <Pagination />
    </div>
  );
}

ReplyReviewArea.propTypes = {};

export default ReplyReviewArea;
