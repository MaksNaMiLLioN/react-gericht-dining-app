import React from "react";
import { images } from "../../constants";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";

import "./Navbar.css";

const Navbar = () => {
  const [toggle, setToggle] = React.useState(false);

  return (
    <div className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="logo" />
      </div>
      <div className="app__navbar-links">
        <ul>
          <li className="p__opensans">
            <a href="#home">Home</a>
          </li>
          <li className="p__opensans">
            <a href="#home">Pages</a>
          </li>
          <li className="p__opensans">
            <a href="#home">Contact Us</a>
          </li>
          <li className="p__opensans">
            <a href="#home">Blog</a>
          </li>
          <li className="p__opensans">
            <a href="#home">Landing</a>
          </li>
        </ul>
      </div>
      <div className="app__navbar-login">
        <div className="app__navbar-login_reg">
          <p className="p__opensans">Log In / Registration</p>
        </div>
        <div className="app__navbar-login_dash"></div>
        <div className="app__navbar-login_book">
          <p className="p__opensans">Book Table</p>
        </div>
      </div>

      <div className="app__navbar-smallscreens">
        <div className="app__navbar-hamburgermenu">
          <GiHamburgerMenu size={30} onClick={() => setToggle(true)} />
        </div>

        {toggle && (
          <div className="app__navbar-smallscren_links ">
            <div className="app__navbar-overlay slide-bottom">
              <div className="app__navbar-overlay_mdmenu">
                <MdOutlineRestaurantMenu
                  size={30}
                  onClick={() => setToggle(false)}
                />
              </div>
              <ul>
                <li className="p__cormorant">
                  <a href="#home">Home</a>
                </li>
                <li className="p__cormorant">
                  <a href="#home">Pages</a>
                </li>
                <li className="p__cormorant">
                  <a href="#home">Contact Us</a>
                </li>
                <li className="p__cormorant">
                  <a href="#home">Blog</a>
                </li>
                <li className="p__cormorant">
                  <a href="#home">Landing</a>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
