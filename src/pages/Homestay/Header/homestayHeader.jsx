import React, { useState, useContext, useEffect } from "react";
import { Col, Row } from "reactstrap";

import "./homestayHeader.scss";
import FullRating from "../../../components/common/FullRating/fullRating";
import SavedIcon from "../../../components/common/SavedIcon/savedIcon";
import { SavedContext } from "../../../context/savedContext";
function HomestayHeader(props) {
  const { savedData } = useContext(SavedContext);
  const [isActived, setIsActived] = useState(false);
  const renderActiveStatus = (savedData, homestayId) => {
    if (
      savedData.find((homestay) => homestay.homestayId === parseInt(homestayId))
    ) {
      setIsActived(true);
      return;
    }
    setIsActived(false);
    return "";
  };
  useEffect(() => {
    renderActiveStatus(savedData, 5);
  }, [savedData]);
  return (
    <div className="homestay-header container-fluid">
      <Row>
        <Col xs="12" sm="12" md="12" lg="8" className="p-0">
          <div className="name">
            <h2>Fodawy white house - One step to center</h2>
          </div>
          <div className="container-fluid">
            <Row className="sub-title">
              <Col xs="12" sm="12" md="12" lg="1" xl="1" className="p-0 mr-5">
                <FullRating rate={4.5} />
              </Col>
              <Col xs="12" sm="12" md="12" lg="6" xl="6" className="p-0">
                <div>
                  <u>
                    <b>Thành phố Đà Lạt, Lâm Đồng, Vietnam</b>
                  </u>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
        <Col xs="12" sm="12" md="12" lg="4" className="p-0 heart-icon d-flex">
          <SavedIcon isActived={isActived} homestayId={5} />
        </Col>
      </Row>
    </div>
  );
}

export default HomestayHeader;