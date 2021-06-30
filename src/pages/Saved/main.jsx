import React, { useContext } from "react";
import { SavedContext } from "../../context/savedContext";
import SavedItem from "./SavedItem/savedItem";

function Saved(props) {
  const { savedData } = useContext(SavedContext);

  //const [savedHomestays, setSavedHomestays] = useState(homestays);
  //let timer = null;
  // const changeActiveStatus = (id, status) => {
  //   window.clearTimeout(timer);
  //   timer = window.setTimeout(function () {
  //     let newList = [...savedHomestays];
  //     newList = newList.filter(
  //       (homestay) => homestay.homestayId !== parseInt(id)
  //     );
  //     setSavedHomestays(newList);
  //   }, 500);
  // };

  const renderHomestays = (homestays) => {
    return homestays.map((homestay, index) => (
      <SavedItem
        homestay={homestay}
        key={homestay.homestayId}
        //changeActiveStatus={changeActiveStatus}
      />
    ));
  };
  return (
    <div className="saved">
      <div className="title">
        <h1>Saved</h1>
      </div>
      {renderHomestays(savedData)}
    </div>
  );
}

Saved.propTypes = {};

export default Saved;