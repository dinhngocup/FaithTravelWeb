import React from "react";
import "./_pagination.scss";

function Pagination(props) {
  const { changeCurrentPage, quantityPerPage, totalReviews } = props;
  const renderPagination = () => {
    let pageNumbers = Math.ceil(totalReviews / quantityPerPage);
    let result = [];
    for (let i = 1; i <= pageNumbers; i++) {
      result.push(
        <li className="page-item" key={i} onClick={() => changeCurrentPage(i)}>
          <button className="page-link">{i}</button>
        </li>
      );
    }
    return result;
  };
  return (
    <div>
      <ul className="pagination">{renderPagination()}</ul>
    </div>
  );
}

Pagination.propTypes = {};

export default React.memo(Pagination);
