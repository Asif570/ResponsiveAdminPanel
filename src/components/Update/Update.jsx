import React from "react";
import "./Update.css";
import { UpdateData } from "../../data/data";
function Update() {
  return (
    <div className="Updates">
      {UpdateData.map((data) => {
        return (
          <div className="update">
            <img src={data.img} alt="" />
            <div className="noti">
              <div style={{ marginBottom: ".5rem" }}>
                <span>{data.name}</span>
                <span> {data.noti}</span>
              </div>
              <span>{data.time}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Update;
