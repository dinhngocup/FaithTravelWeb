import React from "react";
import avatar from "../../../asset/image/avatar.jpg";
import AuthenTag from "../../common/AuthenTag/authenTag";
import "./reviewer.scss";

function Reviewer(props) {
  const { isExperienced } = props;
  return (
    <div className="reviewer">
      <div className="reviewer-content d-flex">
        <div className="reviewer d-flex">
          <img src={avatar} alt="avatar" />
          <div className="reviewer-info ml-3">
            <div>
              <b>Đinh Ngọc Uyên Phương</b>
            </div>
            <div className="date">May 21, 2021</div>
          </div>
        </div>
        {isExperienced ? <AuthenTag /> : ""}
      </div>
      <div className="review-content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse debitis
        eius aliquam perferendis, quos optio voluptas fugit delectus nostrum ab,
        soluta tempore illum nam officiis laboriosam sunt ipsum. Beatae, quia?
      </div>
    </div>
  );
}

Reviewer.propTypes = {};

export default Reviewer;
