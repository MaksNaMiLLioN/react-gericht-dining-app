import React from "react";
import { images } from "../../constants";
import Subheading from "../../components/SubHeading/SubHeading";

import "./Chef.css";

const Chef = () => (
  <div className="app__chef app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse ">
      <img src={images.chef} alt="chef" />
    </div>
    <div className="app__wrapper_info">
      <Subheading title="Chef's Word" className="flex__center" />
      <h1 className="headtext__cormorant">What We Believe In</h1>
      <p className="p__opensans_grey">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
        voluptate. Sint, quae obcaecati magni culpa atque ratione quidem rem
        voluptatibus sed error laboriosam, debitis eos aliquam minus. Molestiae,
        necessitatibus voluptate?
      </p>
      <p className="p__cormorant chef__name">Kevin Luo</p>
      <p className="p__opensans">Chef and Founder</p>
      <img src={images.sign} alt="sign" />
    </div>
  </div>
);

export default Chef;
