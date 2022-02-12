import React from "react";
import Subheading from "../../components/SubHeading/SubHeading";
import { images, data } from "../../constants";
import "./Laurels.css";

const Laurels = () => (
  <div className="app__laurels app__wrapper section__padding">
    <div className="app__wrapper_info">
      <Subheading title="Awards & Recognition" />
      <h1 className="headtext__cormorant">Our Laurels</h1>
      <div className="app__laurels-content">
        {data.awards.map((laurel, index) => (
          <div className="app__laurels-card" key={index}>
            <div className="app__laurels-card_img">
              <img src={laurel.imgUrl} alt="" />
            </div>
            <div className="app__laurels-card_desc">
              <p className="p__cormorant">{laurel.title}</p>
              <p className="p__opensans_grey">{laurel.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="app__wrapper_img">
      <img src={images.laurels} alt="laurels" />
    </div>
  </div>
);

export default Laurels;
