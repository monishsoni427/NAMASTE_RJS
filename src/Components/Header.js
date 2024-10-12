import React, { useState, useEffect, useContext } from "react";
import logo from "../../assets/smoking-burger.png";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constant";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
export const Header = () => {
  let [btnNameReact, setBtnNameReact] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  // console.log(loggedInUser);

  // Subscribing to the store using our selector

  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);
  return (
    <div className="flex justify-between bg-pink-100 shadow-lg m-2 sm:bg-yellow-100 lg:bg-green-100">
      <div className="logo-container">
        <img src={LOGO_URL} className="w-56 h-24 " alt="image" />
      </div>
      <div className="nav-items">
        <ul className="flex p-4 m-4">
          {onlineStatus ? (
            <li className="px-4">Online✅</li>
          ) : (
            <li className="px-4">Offline🔴</li>
          )}
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
          <li className="px-4 font-bold text-lg">
            <Link to="/cart"> Cart ({cartItems.length} items)</Link>
          </li>
          <button
            className="login"
            onClick={() => {
              // setBtnName(btnName=="Login"?"Logout":"Login")
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
