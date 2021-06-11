import React from "react";
import "./homestayInfo.scss";
import { Col, Row } from "reactstrap";
import hostAvatar from "../../../asset/image/pic6.jpeg";
import parking from "../../../asset/image/parking.png";
import kitchen from "../../../asset/image/kitchen-utensils.png";
import tv from "../../../asset/image/tv.png";
import wifi from "../../../asset/image/wifi.png";
import hotTub from "../../../asset/image/hot-tub.png";
import balcony from "../../../asset/image/balcony.png";
import securityCam from "../../../asset/image/security-camera.png";
import service from "../../../asset/image/room-service.png";
import AverageRating from "../../common/AverageRating/averageRating";
function HomestayInfo(props) {
  return (
    <div className="homestay-info container-fluid">
      <Row>
        <Col xs="12" sm="12" md="12" lg="7" className="pl-0">
          <div className="header d-flex line-decoration">
            <div className="content">
              <h3>Entire serviced apartment hosted by Uyen</h3>
              <div>5 guests · 1 bedroom · 3 beds · 1 bath</div>
            </div>
            <img src={hostAvatar} alt="" />
          </div>
          <div className="description line-decoration">
            <h4 className="homestay-title">Description</h4>
            <div>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatem, saepe, eveniet tempora porro quas exercitationem
              beatae sit vitae provident corrupti dolore nemo? Quisquam quod
              autem quaerat tenetur alias reprehenderit nostrum!
            </div>
          </div>
          <div className="amenities line-decoration">
            <h4 className="homestay-title">Amenities</h4>
            <div className=" container-fluid">
              <Row>
                <Col xs="12" sm="12" md="12" lg="6" className="pl-0">
                  <ul>
                    <li>
                      <img src={kitchen} alt="" />
                      Kitchen
                    </li>
                    <li>
                      <img src={parking} alt="" />
                      Free parking
                    </li>
                    <li>
                      <img src={tv} alt="" />
                      Television
                    </li>
                    <li>
                      <img src={wifi} alt="" />
                      Wifi
                    </li>
                  </ul>
                </Col>
                <Col xs="12" sm="12" md="12" lg="6" className="pl-0">
                  <ul>
                    <li>
                      <img src={hotTub} alt="" />
                      Hot tub
                    </li>
                    <li>
                      <img src={balcony} alt="" />
                      Balcony
                    </li>
                    <li>
                      <img src={securityCam} alt="" />
                      Security cameras
                    </li>
                    <li>
                      <img src={service} alt="" />
                      Free Breakfast
                    </li>
                  </ul>
                </Col>
              </Row>
            </div>
          </div>
        </Col>
        <Col xs="12" sm="12" md="12" lg="1" className="pl-0"></Col>
        <Col xs="12" sm="12" md="12" lg="4" className="pl-0">
          <div className="action d-flex">
            <div className="price d-flex">
              <div>
                <span className="price-per-night">$9</span> / night
              </div>
              <div className="d-flex statistic">
                <AverageRating rating={3} />
                <span className="total-reviews ml-2">(13 reviews)</span>
              </div>
            </div>
            <button>Check availability</button>
          </div>
        </Col>
      </Row>
    </div>
  );
}

HomestayInfo.propTypes = {};

export default HomestayInfo;
