import React from "react";
import Subheading from "../../components/SubHeading/SubHeading";
import "./Newsletter.css";

const Newsletter = () => (
  <div className="app__newsletter">
    <Subheading title="Newsletter" />
    <h1 className="headtext__cormorant">Subscribe to Our Newsletter</h1>
    <p className="p__opensans">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nemo
      mollitia nobis saepe officia. Laudantium obcaecati adipisci nisi facilis
      temporibus dolore beatae, suscipit corporis iste eum maxime sequi natus
      aspernatur?
    </p>
    <input type="text" placeholder="Email addres" />
    <button className="custom__button">Subscribe</button>
  </div>
);

export default Newsletter;
