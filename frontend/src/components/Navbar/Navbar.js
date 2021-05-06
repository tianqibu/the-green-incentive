import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Navbar.css";
import logo from "../../images/navbar-logo.png";
import logoIcon from "../../images/logo-icon.png";
import { BsLink45Deg } from "react-icons/bs";
import { FaRegUser, FaPhone, FaTimes, FaBars } from "react-icons/fa";
// import { FiLogOut } from "react-icons/fi";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click); 
  const closeMobileMenu = () => setClick(false);
  let history = useHistory();

  const logOut = async () => {
    localStorage.clear();
    await fetch("/api/users/logout", {
      method: "GET"})
    history.push('/sign-in')
    history.go(0)
  }


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
          {
            localStorage.getItem('loggedIn') 
            ? 
            <>
              <li className="nav-item">
                <Link 
                  to="/dashboard" 
                  className="nav-links" 
                  onClick={closeMobileMenu}
                >
                   Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  to="/" 
                  className="nav-links" 
                  onClick={()=> { logOut(); closeMobileMenu()}}
                >
                   Log Out
                </Link>
              </li>
            </>
            : 
            <>
              <li className="nav-item">
                <Link to="/sign-in" className="nav-links" onClick={closeMobileMenu}>
                    Sign In <FaRegUser className="fa-icons" id="user-icon" />
                </Link>
              </li>
            </>
          }
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
