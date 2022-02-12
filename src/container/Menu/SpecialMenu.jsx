import React from "react";
import SubHeading from "../../components/SubHeading/SubHeading";
import { images, data } from "../../constants";

import "./SpecialMenu.css";

const SpecialMenu = () => {
  const MenuItem = ({ title, price, tags }) => {
    return (
      <div className="app__menu">
        <div className="app__menu-title">
          <div className="p__opensans app__menu-name">{title}</div>
          <div className="app__menu-dash" />
          <div className="app__menu-price p__opensans">{price}</div>
        </div>
        <div className="app__menu-subs p__opensans_grey">{tags}</div>
      </div>
    );
  };

  return (
    <div className="app__specialMenu section__padding flex__center">
      <div className="app__specialMenu-title">
        <SubHeading title="Menu that fits your palatte" />
        <h1 className="headtext__cormorant">Today&apos;s Special</h1>
      </div>
      <div className="app__specialMenu-content">
        <div className="app__specialMenu-wine">
          <p className="p__cormorant">Wine & Beer</p>
          <div className="app__specialMenu-wineItem">
            {data.wines.map((wine, index) => (
              <MenuItem
                title={wine.title}
                price={wine.price}
                tags={wine.tags}
                key={index}
              />
            ))}
          </div>
        </div>
        <div className="app__specialMenu-img">
          <img src={images.menu} alt="menu" />
        </div>
        <div className="app__specialMenu-cocktails">
          <p className="p__cormorant">Cocktails</p>
          <div className="app__specialMenu-wineItem">
            {data.cocktails.map((cocktails, index) => (
              <MenuItem
                title={cocktails.title}
                price={cocktails.price}
                tags={cocktails.tags}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialMenu;
