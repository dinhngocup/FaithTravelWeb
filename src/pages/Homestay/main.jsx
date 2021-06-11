import React from "react";
import { Route } from "react-router-dom";
import Banner from "../../components/Homestay/Banner/banner";
import HomestayInfo from "../../components/Homestay/Info/homestayInfo";
import HomestayHeader from "./Header/homestayHeader";
import "./homestay.scss";
import AllReviews from "./Review/AllReviews/allReviews";
import DetailedReview from "./Review/DetailedReview/detailedReview";
import TopReviews from "./Review/TopReviews/topReviews";

function Homestay(props) {
  return (
    <div className="homestay">
      <HomestayHeader />
      <Banner />
      <HomestayInfo />
      <div className="review-area">
        <Route exact path="/homestay">
          <TopReviews />
        </Route>
        <Route exact path="/homestay/review">
          <AllReviews />
        </Route>
        <Route path="/homestay/review/:id">
          <DetailedReview />
        </Route>
      </div>
    </div>
  );
}

Homestay.propTypes = {};

export default Homestay;
