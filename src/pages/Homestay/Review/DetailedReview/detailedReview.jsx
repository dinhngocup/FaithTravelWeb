import React from "react";
import { useHistory } from "react-router";
import "./detailedReview.scss";
import { Link } from "react-router-dom";
import { Col, Row } from "reactstrap";

import ReplyReviewArea from "./ReplyReviewArea/replyReviewArea";
import Reviewer from "../../../../components/Homestay/Reviewer/reviewer";

function DetailedReview(props) {
  const history = useHistory();
  return (
    <div className="detailed-review">
      <div className="review-header">
        <div className="review-title">Review's Uyen</div>

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
           <Reviewer  isExperienced={true}/>
          </Col>
          <Col xs="12" sm="12" md="12" lg="1" className="pl-0"></Col>
          <Col xs="12" sm="12" md="12" lg="7" className="pl-0">
            <div className="input-area d-flex">
              <textarea placeholder="Write your reply"></textarea>
              <button>Post</button>
            </div>
            <ReplyReviewArea />
          </Col>
        </Row>
      </div>
    </div>
  );
}

DetailedReview.propTypes = {};

export default DetailedReview;
