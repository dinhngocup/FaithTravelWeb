import React from "react";
import './fullRating.scss';

function FullRating(props) {
  return (
    <div className="home-rate">
      <i className="fas fa-star"></i>
      <i className="fas fa-star"></i>
      <i className="fas fa-star"></i>
      <i className="fas fa-star-half-alt"></i>
      <i className="far fa-star"></i>
    </div>
  );
}

FullRating.propTypes = {};

export default FullRating;
