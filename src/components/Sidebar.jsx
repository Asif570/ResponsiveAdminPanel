import React, { useState } from "react";
import "./Sidebar.css";
import Logo from "../imgs/logo.png";
import { sidebarData } from "../data/data";
import { UilSignOutAlt } from "@iconscout/react-unicons";

function Sidebar() {
  const [Selected, setSelected] = useState(0);
  return (
    <div className="sidebar">
      {/* logo  */}
      <div className="logo">
        <img src={Logo} alt="" />
        <span>
          sh<span>o</span>pe
        </span>
      </div>

      {/* menu  */}
      <div className="menu">
        {sidebarData.map((item, index) => {
          return (
            <div
              className={Selected === index ? "menuItem active" : "menuItem"}
              key={index}
              onClick={() => {
                setSelected(index);
              }}
            >
              <item.icon></item.icon>
              <span>{item.headding}</span>
            </div>
          );
        })}
        <div className="menuItem">
          <UilSignOutAlt />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
