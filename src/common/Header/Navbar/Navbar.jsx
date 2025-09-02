import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import { FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { MdFavoriteBorder } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import logo from "./../../../assets/images/Logo.png";
import { HiDotsVertical } from "react-icons/hi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="Navbar">
      <nav>
        <div className="logo">
          <img src={logo} alt="Logo" />
          <button className="menu-toggle" onClick={toggleMenu}>
            <HiDotsVertical />
          </button>
        </div>

        <ul className={menuOpen ? "active" : ""}>
          <li>
            <NavLink to="/" end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/signup">Signup</NavLink>
          </li>
        </ul>

        <div className="search-cart-wishlist">
          <div className="search">
            <input type="text" placeholder="What are you looking for?" />
            <FaSearch className="search-icon" />
          </div>

          <div className="icons-page">
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                isActive ? "act-icons active" : "act-icons"
              }
            >
              <FaCartShopping />
            </NavLink>
            <NavLink
              to="/wishlist"
              className={({ isActive }) =>
                isActive ? "act-icons active" : "act-icons"
              }
            >
              <MdFavoriteBorder />
            </NavLink>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? "act-icons active" : "act-icons"
              }
            >
              <FaUserAlt />
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
