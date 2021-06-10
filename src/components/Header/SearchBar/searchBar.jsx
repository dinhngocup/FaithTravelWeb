import React from "react";
import "./searchBar.scss";
function SearchBar() {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Start your search"
      />
      <i className="fa fa-search"></i>
    </div>
  );
}

export default SearchBar;
