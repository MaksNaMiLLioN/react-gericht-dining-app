import React from "react";
import SubHeading from "../../components/SubHeading/SubHeading";
import { images } from "../../constants";

const FindUs = () => (
  <div className="app__findus app__wrapper section__padding">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant">Find Us</h1>
      <p className="p__opensans_grey">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla libero
        sint aspernatur, exercitationem doloribus cumque obcaecati dolorum rem
        sapiente ratione in temporibus et laudantium officiis quos autem. Odit,
        ex eum!
      </p>
      <p
        className="p__cormorant"
        style={{ marginBottom: "1rem", color: "#DCCA87" }}
      >
        Opening Hours
      </p>
      <p className="p__opensans">Mon-Fri: 10.00 am - 02.00 am</p>
      <p className="p__opensans">Sat-Sun: 10.00 am - 03.00 am</p>
      <button className="custom__button" style={{ marginTop: "2rem" }}>
        Visit Us
      </button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.findus} alt="" />
    </div>
  </div>
);

export default FindUs;
