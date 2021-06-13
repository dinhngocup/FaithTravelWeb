import React from "react";
import { NavLink } from "react-router-dom";
import avatar from "../../../asset/image/avatar.jpg";
import "./userIcon.scss";
function UserIcon() {
  const renderUserModal = () => {
    return (
      <div className="dropdown">
        <NavLink to={`/saved`}>Saved</NavLink>
        <NavLink to={`/trips/upcomming`}>Trips</NavLink>
        <NavLink to={`/homestay`}>Homestay</NavLink>
        <div>Logout</div>
      </div>
    );
  };
  return (
    <div className="user-icon">
      <div className="dropdown-switcher">
        <img src={avatar} alt="User Avatar" />
        {renderUserModal()}
      </div>
    </div>
  );
}

export default UserIcon;
