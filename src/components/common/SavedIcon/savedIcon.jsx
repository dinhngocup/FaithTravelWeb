import React, { useContext } from "react";
import { SavedContext } from "../../../context/savedContext";
import "./savedIcon.scss";

function SavedIcon(props) {
  const { savedHomestay, removeHomestay } = useContext(SavedContext);
  const { isActived, homestayId } = props;

  const changeSavedStatus = (e) => {
    e.preventDefault();
    let icon = e.target;

    if (isActived) {
      removeHomestay(homestayId);
      icon.classList.remove("active");
    } else {
      savedHomestay(homestayId);
      icon.classList += " active";
    }
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