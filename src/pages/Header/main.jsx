import React from "react";
import "./header.scss";
import SearchBar from "../../components/Header/SearchBar/searchBar";
import UserIcon from "../../components/Header/UserIcon/userIcon";
import Logo from "../../components/Header/Logo/logo";

function Header(props) {
  return (
    <header className="d-flex fixed-top">
      <Logo/>
      <SearchBar />
      <UserIcon />
    </header>
  );
}

export default Header;
