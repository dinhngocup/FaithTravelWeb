import React, { useState } from "react";
import SavedItem from "./SavedItem/savedItem";
import image from "../../asset/image/room4.jpeg";
import image1 from "../../asset/image/background3.jpeg";
import image2 from "../../asset/image/background4.jpeg";
import image3 from "../../asset/image/background6.jpeg";

function Saved(props) {
  const [savedHomestays, setSavedHomestays] = useState([
    {
      homestayId: 1,
      city: "Luxury house in Pleiku",
      rating: 4.5,
      homestayName: "XOM Organic Farm Stay",
      image: image,
      rule: "5 guests · 2 bedroom · 3 beds · 2 bath",
      totalReviews: 50,
    },
    {
      homestayId: 2,
      city: "Peace and love homestay in Ho Chi Minh City",
      rating: 3.5,
      homestayName: "Deluxe Family Suite",
      image: image1,
      rule: "2 guests · 1 bedroom · 1 beds · 1 bath",
      totalReviews: "100+",
    },
    {
      homestayId: 3,
      city: "Unique stays in Can Tho City",
      rating: 5,
      homestayName: "Chillout Village Homestay",
      image: image2,
      rule: "10 guests · 4 bedroom · 5 beds · 3 bath",
      totalReviews: 30,
    },
    {
      homestayId: 4,
      city: "Entire apartment in Da Lat City",
      rating: 5,
      homestayName: "Trang An Lamia Bungalow",
      image: image3,
      rule: "12 guests · 5 bedroom · 6 beds · 4 bath",
      totalReviews: 40,
    },
  ]);
  let timer = null;
  const changeActiveStatus = (id) => {
    
    window.clearTimeout(timer);
    timer = window.setTimeout(function () {
      let newList = [...savedHomestays];
      newList = newList.filter(
        (homestay) => homestay.homestayId !== parseInt(id)
      );
      setSavedHomestays(newList);
    }, 500);
  };

  const renderHomestays = (homestays) => {
    return homestays.map((homestay, index) => (
      <SavedItem
        homestay={homestay}
        key={homestay.homestayId}
        changeActiveStatus={changeActiveStatus}
      />
    ));
  };
  return (
    <div className="saved">
      <div className="title">
        <h1>Saved</h1>
      </div>
      {renderHomestays(savedHomestays)}
    </div>
  );
}

Saved.propTypes = {};

export default Saved;
