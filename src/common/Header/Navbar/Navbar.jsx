import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import { FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { MdFavoriteBorder } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import logo from "./../../../assets/Logo.png";
const Navbar = () => {
  return (
    <div className="Navbar">
      <nav>
        <div className="logo">
          <img src={logo} alt="" />
        </div>

        <ul>
          <li>
            <NavLink to={"/"} end aria-current="page">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/contact"}>Contact</NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>About</NavLink>
          </li>

          <li>
            <NavLink to={"/signup"}>Signup</NavLink>
          </li>
        </ul>

        <div className="search-cart-wishlist">
          <div className="search">
            <input type="text" placeholder="What are you looking for?" />

            <FaSearch className="search-icon" />
          </div>

          <div className="icons-page">
            <NavLink to={"/cart"}>
              <FaCartShopping />
            </NavLink>

            <NavLink to={"/wishlist"}>
              <MdFavoriteBorder />
            </NavLink>

            <NavLink to={"/login"}>
              <FaUserAlt />
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
