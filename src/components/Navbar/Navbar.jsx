import { useState } from "react";
import "./Navbar.css";
import { FaThLarge, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="container">
      <div className="navbar-section">
        <div className="left">
          <h4>
            <FaThLarge /> WeCare
          </h4>
        </div>
        <div className="right">
          <div onClick={() => setOpen(!open)}>
            {open ? (
              <FaTimes className="menu-icon" />
            ) : (
              <FaBars className="menu-icon" />
            )}
          </div>
          <ul id="navbar" className={`${open ? "#navbar active" : "navbar"}`}>
            <li>
              <a href="#">Featured</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Fasilities</a>
            </li>
            <li>
              <a href="#">Find Doctor</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <button>Book Now</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
