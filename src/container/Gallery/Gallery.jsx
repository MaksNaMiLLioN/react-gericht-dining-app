import React from "react";
import "./Gallery.css";
import Subheading from "../../components/SubHeading/SubHeading";
import { images } from "../../constants";

import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";

const Gallery = () => {
  const scrollRef = React.useRef();

  const imageGallery = [
    images.gallery01,
    images.gallery02,
    images.gallery03,
    images.gallery04,
  ];

  const scroll = (direction) => {
    if (direction === "left") {
      scrollRef.current.scrollLeft -= 300;
    } else {
      scrollRef.current.scrollLeft += 300;
    }
  };

  return (
    <div className="app__gallery">
      <div className="app__gallery-info">
        <Subheading title="Instagram" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__opensans_grey">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
          voluptatum odit enim rerum saepe consequatur, esse possimus?
          Reiciendis ab ducimus dolor.
        </p>
        <button className="custom__button">View More</button>
      </div>

      <div className="app__gallery-images">
        <div className="app__gallery-images_content" ref={scrollRef}>
          {imageGallery.map((image, index) => (
            <div className="app__gallery-images_card flex__center">
              <img src={image} alt="image" />
              <BsInstagram size={27} className="app__gallery-images_icon" />
            </div>
          ))}
        </div>

        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort
            className="app__gallery-arrow_icon"
            size={40}
            onClick={() => scroll("left")}
          />
          <BsArrowRightShort
            className="app__gallery-arrow_icon"
            size={40}
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
