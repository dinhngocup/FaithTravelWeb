import React from "react";
import "./banner.scss";
import { Col, Row } from "reactstrap";
import room2 from "../../../asset/image/room2.webp";
import room3 from "../../../asset/image/room3.jpeg";
import room4 from "../../../asset/image/room4.jpeg";
import room5 from "../../../asset/image/room5.jpeg";
import room6 from "../../../asset/image/room6.jpeg";

function Banner(props) {
  return (
    <div className="homestay-banner container-fluid">
      <Row>
        <Col xs="12" sm="12" md="12" lg="6" className="pl-0">
          <img src={room2} alt="" />
        </Col>
        <Col xs="12" sm="12" md="12" lg="6" className="pl-0">
          <Row>
            <Col xs="3" sm="3" md="3" lg="6" className="pr-0 pb-3">
              <img src={room3} alt="" />
            </Col>
            <Col xs="3" sm="3" md="3" lg="6" className="pr-0 pb-3">
              <img src={room4} alt="" />
            </Col>
            <Col xs="3" sm="3" md="3" lg="6" className="pr-0">
              <img src={room5} alt="" />
            </Col>
            <Col xs="3" sm="3" md="3" lg="6" className="pr-0">
              <img src={room6} alt="" />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

Banner.propTypes = {};

export default Banner;
