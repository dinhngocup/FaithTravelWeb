import React, { useState } from "react";
import { useHistory } from "react-router";
import "./detailedReview.scss";
import { Link } from "react-router-dom";
import { Col, Row } from "reactstrap";

import ReplyReviewArea from "./ReplyReviewArea/replyReviewArea";
import Reviewer from "../../../../components/Homestay/Reviewer/reviewer";
import avatar1 from "../../../../asset/image/background3.jpeg";
import avatar2 from "../../../../asset/image/background4.jpeg";
import avatar3 from "../../../../asset/image/background5.jpeg";
import avatar4 from "../../../../asset/image/background6.jpeg";
import avatar from "../../../../asset/image/avatar.jpg";

function DetailedReview(props) {
  const history = useHistory();
  const [replies, setReplies] = useState([
    {
      replyId: 1,
      replyContent: "Yeah man. Moreover, the host is very helpful.",
      reviewer: "Le Minh Huy",
      date: "Dec 21, 2020",
      avatar: avatar2,
      isExperienced: true,
      isReviewer: true,
    },
    {
      replyId: 2,
      replyContent: "Hi Huy, Homestay is pretty good as advertising, isn't it?",
      reviewer: "Hoang Dinh Luan",
      date: "May 21, 2021",
      avatar: avatar1,
      isExperienced: false,
      isReviewer: false,
    },
    {
      replyId: 3,
      replyContent: "Hmmm, a litte bit noisy in the morning",
      reviewer: "Le Minh Huy",
      date: "Dec 21, 2020",
      avatar: avatar2,
      isExperienced: true,
      isReviewer: true,
    },
    {
      replyId: 4,
      replyContent: "Is there peaceful?",
      reviewer: "Nguyen Anh Huy",
      date: "Nov 21, 2020",
      rating: 4,
      totalReplies: 8,
      avatar: avatar3,
      isExperienced: false,
      isReviewer: false,
    },
    {
      replyId: 5,
      replyContent: "Yup",
      reviewer: "Le Minh Huy",
      date: "Oct 01, 2020",
      avatar: avatar2,
      isExperienced: true,
      isReviewer: true,
    },
    {
      replyId: 6,
      replyContent: "Near a ancient church, right?",
      reviewer: "Phung Khanh Linh",
      date: "Sep 12, 2020",
      avatar: avatar4,
      isExperienced: false,
      isReviewer: false,
    },
  ]);
  const review = {
    replyId: 0,
    replyContent:
      "The place is spacious and well-designed. The host is very helpful and nice. Peace and clean vibe, near a lot of famous tourist attractions",
    reviewer: "Le Minh Huy",
    date: "May 20, 2020",
    avatar: avatar2,
    isExperienced: true,
  };
  const [reply, setReply] = useState("");

  const postComment = () => {
    let replyItem = {
      replyId: replies.length + 1,
      replyContent: reply,
      reviewer: "Dinh Ngoc Uyen Phuong",
      date: "May 21, 2021",
      avatar: avatar,
      isExperienced: false,
      isReviewer: false,
    };
    console.log(replyItem)
    let newList = [...replies];
    newList.push(replyItem);
    setReplies(newList);
    setReply("");
  };
  return (
    <div className="detailed-review">
      <div className="review-header">
        <div className="review-title">Review's Huy</div>
        <Link to="/homestay" className="back d-flex">
          <i className="fa fa-angle-left"></i>
          <div className="review-title" onClick={() => history.goBack()}>
            Back
          </div>
        </Link>
      </div>
      <div className="review-body container-fluid">
        <Row>
          <Col xs="12" sm="12" md="12" lg="4" className="pl-0">
            <Reviewer reply={review} />
          </Col>
          <Col xs="12" sm="12" md="12" lg="1" className="pl-0"></Col>
          <Col xs="12" sm="12" md="12" lg="7" className="pl-0">
            <div className="input-area d-flex">
              <textarea
                placeholder="Write your reply"
                value={reply}
                onChange={(e) => setReply(e.target.value)}
              ></textarea>
              <button onClick={postComment}>Post</button>
            </div>
            <ReplyReviewArea replies={replies} />
          </Col>
        </Row>
      </div>
    </div>
  );
}

DetailedReview.propTypes = {};

export default DetailedReview;
