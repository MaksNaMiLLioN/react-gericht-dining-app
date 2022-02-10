import React from "react";
import { images } from "../../constants";

const SubHeading = ({ title }) => (
  <div className="app__subheading">
    <div className="app__subheading-title p__cormorant">{title}</div>
    <div className="app__subheading-img">
      <img src={images.spoon} alt="spoon" style={{ width: "40px" }} />
    </div>
  </div>
);

export default SubHeading;
