import React from "react";

import { images } from "../../constants";
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";
import { SubHeading } from "../../components";
import "./Gallery.css";

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
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__opensans_grey">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea blanditiis
          quibusdam dolorem, id recusandae dolorum vel quo voluptates amet
          expedita aspernatur? Ad eius omnis soluta cum voluptatum enim et
          facere.
        </p>
        <button className="custom__button">View More</button>
      </div>
      <div className="app__gallery-images" ref={scrollRef}>
        {imageGallery.map((image, index) => (
          <div className="app__gallery-imageItem">
            <img src={image} alt="" />
            <div className="app__gallery-imageIcon flex__center">
              <BsInstagram size={27} />
            </div>
          </div>
        ))}

        <div className="app__gallery-arrows">
          <BsArrowLeftShort onClick={() => scroll("left")} />
          <BsArrowRightShort onClick={() => scroll("right")} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
