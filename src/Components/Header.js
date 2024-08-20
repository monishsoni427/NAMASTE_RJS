import React, { useState, useEffect } from "react";
import logo from "../../assets/smoking-burger.png";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constant";

export const Header = () => {
  let [btnName, setBtnName] = useState("Login");
  console.log("Header Render");

  useEffect(() => {
    console.log("useEffect Render");
  }, [btnName]);
  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO_URL} className="logo" alt="image" />
      </div>
      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li>
          <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              // setBtnName(btnName=="Login"?"Logout":"Login")
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
