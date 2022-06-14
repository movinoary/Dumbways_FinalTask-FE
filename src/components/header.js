import React from "react";
import * as Assets from "../assets/index";
import * as cssModule from "../style/index";

const Header = () => {
  return (
    <div className={cssModule.Components.header}>
      <div className={cssModule.Components.headerRow}>
        <div className={cssModule.Components.headerTitle}>
          <img src={Assets.svgBlogo} alt="title" />
          <h4>BEST QUALITY COFFEE BEANS</h4>
          <p>
            Quality freshly roasted coffee made just for you. Pour, brew and
            enjoy
          </p>
        </div>
        <div className={cssModule.Components.headerImg}>
          <img src={Assets.imgCoffe} alt="coffe" />
          <img src={Assets.svgLayer} alt="layer" />
        </div>
      </div>
    </div>
  );
};

export default Header;
