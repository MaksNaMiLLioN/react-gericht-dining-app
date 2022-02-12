import React from "react";
import SubHeading from "../../components/SubHeading/SubHeading";
import { images } from "../../constants";
import "./Header.css";

const Header = () => (
  <div className="app__header app__wrapper section__padding">
    <div className="app__wrapper_info">
      <SubHeading title="Chase The New Flavour" />
      <h1 className="headtext__cormorant">The Key To Fine Dining</h1>
      <p className="p__opensans_grey">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste odit ex
        reprehenderit a esse quae doloremque illo provident veniam magnam atque
        id tenetur minus sunt deserunt eaque ea, odio eligendi.
      </p>
      <button className="custom__button">Explore Menu</button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="image_header" />
    </div>
  </div>
);

export default Header;
