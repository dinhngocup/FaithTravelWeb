import React from "react";
import { Col, Row } from "reactstrap";
import room from "../../../asset/image/room1.jpeg";
import FullRating from "../../common/FullRating/fullRating";
import "./detailedTrip.scss";
import room2 from "../../../asset/image/room2.webp";
import room7 from "../../../asset/image/room7.jpeg";
import room8 from "../../../asset/image/room8.jpeg";
import { useParams } from "react-router";

function DetailedTrip(props) {
  const { id } = useParams();
  const upcommingDetailedTrips = [
    {
      tripId: 1,
      city: "Pleiku",
      date: "Fri, Aug 22 - Mon, Aug 26, 2021",
      rating: 3.5,
      homestayName: "South Of The Border",
      image: room2,
      hostName: "Ms Dinh Nguyen Hoang Yen Nhu",
      contact: "123-134-123",
      address: "1 Dinh Tien Hoang St",
      deposit: "$300",
      balance: "$400",
    },
    {
      tripId: 2,
      city: "Ho Chi Minh City",
      date: "Tue, Sep 12 -  Thurs, Sep 14, 2021",
      rating: 4.5,
      homestayName: "Little Forest | AVOCADO",
      image: room7,
      hostName: "Ms Phan Hoang Anh",
      contact: "123-134-123",
      address: "1 Phan Van Tri St",
      deposit: "$100",
      balance: "$200",
    },
    {
      tripId: 3,
      city: "Can Tho City",
      date: " Mon, Nov 01 - Wed, Nov 03, 2021",
      rating: 5,
      homestayName: "Little Forest | PERSIMMON",
      image: room8,
      hostName: "Mr Le Minh Huy",
      contact: "123-134-123",
      address: "1 Nguyen Thi Minh Khai St",
      deposit: "$300",
      balance: "$500",
    },
    {
      tripId: 4,
      city: "Da Lat City",
      date: "Mon, Oct 18 - Thurs, Oct 21, 2021",
      rating: 3.5,
      homestayName: "Penthouse Studio",
      image: room,
      hostName: "Mr Cam Vinh Gia",
      contact: "123-134-123",
      address: "1 Phan Tay Ho St",
      deposit: "$300",
      balance: "$400",
    },
  ];
  const renderDetailedTrip = (id, tripList) => {
    console.log(id)
    let trip;
    for (let tripItem of tripList)
      if (tripItem.tripId === parseInt(id)) {
        trip = tripItem;
        return (
          <React.Fragment>
            <Row>
              <Col xs="12" sm="12" md="12" lg="6" className="p-0">
                <img src={trip.image} alt="" />
              </Col>
              <Col xs="0" sm="0" md="0" lg="1" className="p-0"></Col>
              <Col xs="12" sm="12" md="12" lg="5" className="p-0">
                <div className="timeline">
                  <div className="homestay-name d-flex">
                    <div className="name">{trip.homestayName}</div>
                    <FullRating rating={trip.rating} />
                  </div>
                  <p>
                    <b>
                      <i>{trip.city}</i>
                    </b>
                  </p>
                  <p>{trip.date}</p>
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
                    <b>Host name:</b> {trip.hostName}
                  </p>
                  <p>
                    <b>Contact:</b> {trip.contact}
                  </p>
                  <p>
                    <b>Address:</b> {trip.address}
                  </p>
                </div>
              </Col>
              <Col
                xs="12"
                sm="12"
                md="12"
                lg="2"
                className="p-0 decoration"
              ></Col>
              <Col xs="12" sm="12" md="12" lg="5" className="p-0">
                <div className="detail">
                  <p className="detail-title">Payment Details</p>
                  <p>
                    <b>Payment Method:</b> Visa Credit
                  </p>
                  <div className="payment">
                    <p>
                      <b>Deposit:</b> {trip.deposit}
                    </p>
                    <p>
                      <b>Balance:</b> <span>{trip.balance}</span>
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </React.Fragment>
        );
      }
    return;
  };

  return (
    <div className="detailed-trip container-fluid">
      {renderDetailedTrip(id, upcommingDetailedTrips)}
    </div>
  );
}

DetailedTrip.propTypes = {};

export default DetailedTrip;
