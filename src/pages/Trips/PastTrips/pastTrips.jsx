import React from "react";
import TripCard from "../../../components/Trips/TripCard/tripCard";

function PastTrips(props) {
  return (
    <div className="trip-list  container-fluid">
      <TripCard status="past" />
      <TripCard status="past" />
      <TripCard status="past" />
      <div
        class="modal fade"
        id="deleteModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby=""
        aria-hidden="true"
      >
        <div
          class="modal-dialog modal-sm modal-dialog-centered"
          role="document"
        >
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="">
                Delete past trip
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">Do you want to delete this trip?</div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-danger btn-sm"
                data-dismiss="modal"
              >
                Yes
              </button>
              <button
                type="button"
                class="btn btn-success btn-sm"
                data-dismiss="modal"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

PastTrips.propTypes = {};

export default PastTrips;
