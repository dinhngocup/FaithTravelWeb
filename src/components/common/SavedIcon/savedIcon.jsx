import React from "react";
import "./savedIcon.scss";

function SavedIcon(props) {
  const { isActived } = props;
  const changeSavedStatus = (e) => {
    e.preventDefault();
    let icon = e.target;
    if (icon.classList.contains("active")) icon.classList.remove("active");
    else icon.classList += " active";
  };
  return (
    <>
      <i
        className={`far fa-heart saved-icon ${isActived ? "active" : ""}`}
        onClick={changeSavedStatus}
      ></i>
    </>
  );
}

SavedIcon.propTypes = {};

export default SavedIcon;
