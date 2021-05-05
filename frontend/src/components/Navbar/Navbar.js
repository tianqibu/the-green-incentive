import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../images/navbar-logo.png";
import logoIcon from "../../images/logo-icon.png";
import { BsLink45Deg } from "react-icons/bs";
import { FaRegUser, FaPhone, FaTimes, FaBars } from "react-icons/fa";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click); //enables toggle
  const closeMobileMenu = () => setClick(false);
  return (
    <>
      <nav className="navbar">
        <img className="logo-image" src={logo} alt="Logo" />
        <div className="menu-icon" onClick={handleClick}>
          <span>{click ? <FaTimes /> : <FaBars />}</span>
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
              <img className="logo-icon" src={logoIcon} alt="Logo-icon" />
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/resources"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Resources <BsLink45Deg className="fa-icons" id="link-icon" />
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/sign-in" className="nav-links" onClick={closeMobileMenu}>
              Sign In <FaRegUser className="fa-icons" id="user-icon" />
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact-us"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Contact Us <FaPhone className="fa-icons" id="contact-icon" />
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
