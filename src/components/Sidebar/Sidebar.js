import React from "react";

import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="list">
        <li>
          <img src="./images/icon.png" alt="icon" />
          <a href="#" >Dashboard</a>
        </li>
        <li>
          <img src="./images/award.png" alt="icon" />
          <a href="#" className="focus">Skill Test</a>
        </li>
        <li>
          <img src="./images/icon2.png" alt="icon" />
          <a href="#">Internship</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
