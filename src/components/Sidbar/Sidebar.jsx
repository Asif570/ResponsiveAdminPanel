import React, { useState } from "react";
import "./Sidebar.css";
import Logo from "../../imgs/logo.png";
import { sidebarData } from "../../data/data";
import { UilSignOutAlt, UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";

function Sidebar() {
  const [Selected, setSelected] = useState(0);
  const [Expanded, setExpanded] = useState(true);
  const Variant = {
    false: {
      left: "0",
    },
    true: {
      left: "-80%",
    },
  };
  return (
    <>
      <div
        className="bar"
        style={
          Expanded
            ? { left: "7% " }
            : { left: "80%", transform: "rotate(90deg)" }
        }
      >
        <UilBars
          onClick={() => {
            setExpanded(!Expanded);
          }}
        />
      </div>
      <motion.div
        className="sidebar"
        variants={Variant}
        animate={window.innerWidth <= 768 ? `${Expanded}` : ""}
      >
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
      </motion.div>
    </>
  );
}

export default Sidebar;
