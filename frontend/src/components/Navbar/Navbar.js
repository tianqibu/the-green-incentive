import React, { useState } from "react";

import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../images/logo.png";
import logo from "../imag";
import logoIcon from "../images/logo-icon.png";
import { BsLink45Deg } from 'react-icons/fa';
import { AiOutlinePhone } from 'react-icons/fa';
import { FaRegUserCircle } from 'react-icons/fa';

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click); //enables toggle
  const closeMobileMenu = () => setClick(false);
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <img className="logo-image" src={logo} alt="Logo" />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home <img className="logo-image" src={logoIcon} alt="Logo-icon" />
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/resources"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Resources <BsLink45Deg />
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/sign-in"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Sign In <FaRegUserCircle />
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact-us"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Contact Us <AiOutlinePhone />
            </Link>
          </li>

        </ul>

      </nav>
    </>
  );
};

export default Navbar;
