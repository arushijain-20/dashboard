import React from "react";

import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src="./images/logo.png" alt="logo" />
      </div>
      <div className="user">
          <img src="./images/user.jpg" alt="user"/>
          <h4>Siddharth Jain</h4>
      </div>
    </div>
  );
};

export default Header;
