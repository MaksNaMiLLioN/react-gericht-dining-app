import React from "react";
import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => (
  <div className="app__aboutus app__wrapper section__padding">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G" />
    </div>

    <div className="app__aboutus-container">
      <div className="app__aboutus-about">
        <h1 className="headtext__cormorant">About Us</h1>
        <p className="p__opensans_grey">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
          eligendi sed repellendus debitis deserunt esse. Laudantium placeat
          itaque voluptatem numquam optio soluta eos deleniti nemo, eius facilis
          saepe dolorum vel?
        </p>
        <button className="custom__button">Know More</button>
      </div>
      <div className="app__aboutus-knife">
        <img src={images.knife} alt="knife" />
      </div>
      <div className="app__aboutus-history">
        <h1 className="headtext__cormorant">Our History</h1>
        <p className="p__opensans_grey">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
          eligendi sed repellendus debitis deserunt esse. Laudantium placeat
          itaque voluptatem numquam optio soluta eos deleniti nemo, eius facilis
          saepe dolorum vel?
        </p>
        <button className="custom__button">Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
