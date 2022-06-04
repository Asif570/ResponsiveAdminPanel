import React from "react";
import Update from "../Update/Update";
import "./RightSide.css";
function RightSide() {
  return (
    <div className="RightSide">
      <div className="Update">
        <h3>Update</h3>
        <Update />
      </div>
      <div className="CustomerReview">
        <h3>Customer Reviews</h3>
      </div>
    </div>
  );
}

export default RightSide;
