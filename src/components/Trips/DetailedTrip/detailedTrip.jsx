import React from "react";
import { Col, Row } from "reactstrap";
import room from "../../../asset/image/room1.jpeg";
import FullRating from "../../common/FullRating/fullRating";
import "./detailedTrip.scss";

function DetailedTrip(props) {
  return (
    <div className="detailed-trip container-fluid">
      <Row>
        <Col xs="12" sm="12" md="12" lg="6" className="p-0">
          <img src={room} alt="" />
        </Col>
        <Col xs="0" sm="0" md="0" lg="1" className="p-0"></Col>
        <Col xs="12" sm="12" md="12" lg="5" className="p-0">
          <div className="timeline">
            <div className="homestay-name d-flex">
              <div className="name">Homestay's Name</div>
              <FullRating />
            </div>
            <p>
              <b>
                <i>Pleiku</i>
              </b>
            </p>
            <p>Fri, Aug 22 - Wed, Aug 26, 2021</p>
            <div className="time">
              <p>
                Check-in: <span>2:00PM</span>
              </p>
              <p>
                Check-out: <span>12:00AM</span>
              </p>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="mt-5 home-info">
        <Col xs="12" sm="12" md="12" lg="5" className="p-0">
          <div className="detail ">
            <p className="detail-title">Homestay Information</p>
            <p>
              <b>Host name:</b> Ms Nguyen Van A
            </p>
            <p>
              <b>Contact:</b> 090 303 4002
            </p>
            <p>
              <b>Address:</b> 1 Dinh Tien Hoang St
            </p>
          </div>
        </Col>
        <Col xs="12" sm="12" md="12" lg="2" className="p-0 decoration"></Col>
        <Col xs="12" sm="12" md="12" lg="5" className="p-0">
          <div className="detail">
            <p className="detail-title">Payment Details</p>
            <p>
              <b>Payment Method:</b> Visa Credit
            </p>
            <div className="payment">
              <p>
                <b>Deposit:</b> $200
              </p>
              <p>
                <b>Balance:</b> <span>$300</span>
              </p>
            </div>
          </div>
        </Col>
        {/* <Col xs="12" sm="12" md="12" lg="7" className="p-0">
          <img src={map} alt="" />
        </Col> */}
      </Row>
    </div>
  );
}

DetailedTrip.propTypes = {};

export default DetailedTrip;
