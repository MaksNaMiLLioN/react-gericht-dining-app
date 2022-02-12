import React from "react";
import Subheading from "../../components/SubHeading/SubHeading";
import "./Newsletter.css";

const Newsletter = () => (
  <div className="app__newsletter">
    <Subheading title="Newsletter" />
    <h1 className="headtext__cormorant">Subscribe to Our Newsletter</h1>
    <p className="p__opensans">Never miss latest updates!</p>
    <div className="app__newsletter-inputs">
      <input type="text" placeholder="Email addres" />
      <button className="custom__button">Subscribe</button>
    </div>
  </div>
);

export default Newsletter;
