import React from "react";
import SavedItem from "./SavedItem/savedItem";

function Saved(props) {
  return (
    <div className="saved">
      <div className="title">
        <h1>Saved</h1>
      </div>
      <SavedItem />
      <SavedItem />
    </div>
  );
}

Saved.propTypes = {};

export default Saved;
