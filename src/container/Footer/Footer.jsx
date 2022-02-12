import React from "react";
import Newsletter from "../../components/Footer/Newsletter";
import { images } from "../../constants";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import "./Footer.css";

const Footer = () => (
  <div className="app__footer ">
    <div className="app__footer-newsletter flex__center">
      <Newsletter />
    </div>
    <div className="app__footer-content">
      <div className="app__footer-content_contact">
        <p className="p__opensans p__title">Contact Us</p>
        <p className="p__opensans_grey">9 W 53rd St, New York, NY 10019, USA</p>
        <p className="p__opensans_grey">+1 212-344-1230 </p>
        <p className="p__opensans_grey">+1 212-555-1230</p>
      </div>

      <div className="app__footer-content_logo">
        <div className="app__footer-content_logo_img">
          <img src={images.gericht} alt="logo" />
        </div>

        <p className="p__opensans">
          "The best way to find yourself is to lose yourself in the service of
          others.”
        </p>
        <img src={images.spoon} alt="spoon" className="img__spoon" />
        <div className="app__footer-icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
        <p className="p__opensans_grey">2021 Gerícht. All Rights reserved.</p>
      </div>

      <div className="app__footer-content_hours">
        <p className="p__opensans p__title">Working hours</p>
        <p className="p__opensans_grey">Monday-Friday</p>
        <p className="p__opensans_grey">08:00 am - 12:00 am</p>
        <p className="p__opensans_grey">Saturday-Sunday</p>
        <p className="p__opensans_grey">07:00 am - 11:00 am</p>
      </div>
    </div>
  </div>
);

export default Footer;
