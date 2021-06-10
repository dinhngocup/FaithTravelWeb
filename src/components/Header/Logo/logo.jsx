import React from "react";
import "./logo.scss";
import logo from "../../../asset/image/logo.png";
function Logo(props) {
  return (
    <div className="logo">
      <img src={logo} alt="" />
    </div>
  );
}

export default Logo;
