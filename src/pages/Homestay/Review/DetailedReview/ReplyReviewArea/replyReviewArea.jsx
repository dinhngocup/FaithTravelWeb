import React from "react";
import Reviewer from "../../../../../components/Homestay/Reviewer/reviewer";
import "./replyReviewArea.scss";

function ReplyReviewArea(props) {
  const { replies } = props;

  const renderListReply = (replyList) => {
    let result = [];
    for (let index = replyList.length - 1; index >= 0; index--) {
      result.push(
        <Reviewer key={replyList[index].replyId} reply={replyList[index]} />
      );
    }
    return result;
  };
  return <div className="reply-review-area">{renderListReply(replies)}</div>;
}

ReplyReviewArea.propTypes = {};

export default React.memo(ReplyReviewArea);
