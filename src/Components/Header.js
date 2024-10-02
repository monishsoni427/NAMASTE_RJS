import React, { useState, useEffect } from "react";
import logo from "../../assets/smoking-burger.png";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constant";
import useOnlineStatus from "../utils/useOnlineStatus";
export const Header = () => {
  let [btnName, setBtnName] = useState("Login");
  console.log("Header Render");
  const onlineStatus = useOnlineStatus();
  useEffect(() => {
    console.log("useEffect Render");
  }, [btnName]);
  return (
    <div className="flex justify-between bg-pink-100 shadow-lg m-2 sm:bg-yellow-100 lg:bg-green-100">
      <div className="logo-container">
        <img src={LOGO_URL} className="w-56 h-24  " alt="image" />
      </div>
      <div className="nav-items">
        <ul className="flex p-4 m-4">
          {onlineStatus? <li className="px-4">Online✅</li> : <li className="px-4">Offline🔴</li>}
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">Cart</li>
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
