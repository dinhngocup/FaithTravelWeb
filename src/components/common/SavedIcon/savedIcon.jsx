import React from 'react'
import './savedIcon.scss'

function SavedIcon(props) {
    const changeSavedStatus = (e) => {
        let icon = e.target;
        if (icon.classList.contains("active")) icon.classList.remove("active");
        else icon.classList += " active";
      };
    return (
        <>
         <i className="far fa-heart saved-icon" onClick={changeSavedStatus}></i>
        </>
    )
}

SavedIcon.propTypes = {

}

export default SavedIcon

