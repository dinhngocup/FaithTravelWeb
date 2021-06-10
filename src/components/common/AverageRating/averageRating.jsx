import React from "react";
import "./averageRating.scss";

function AverageRating(props) {
  const { rating } = props;
  return (
    <div className="ml-4 average-rating">
      <i className="fas fa-star"></i> <span>{rating}</span>
    </div>
  );
}

export default AverageRating;
