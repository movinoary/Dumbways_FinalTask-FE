import React from "react";
import * as Assets from "../../assets/index";
import * as cssModule from "../../style/index";

const CardCart = () => {
  return (
    <div className={cssModule.Components.cardCart}>
      <img src={Assets.imgProductOne} alt="product" />
      <div className={cssModule.Components.cartDesc}>
        <div>
          <h1>RWANDA Beans</h1>
          <div className={cssModule.Components.cartButton}>
            <button>-</button>
            <h4>1</h4>
            <button>+</button>
          </div>
        </div>
        <div className={cssModule.Components.cartTotal}>
          <p>Rp.123.000</p>
          <img src={Assets.svgBin} alt="bin" />
        </div>
      </div>
    </div>
  );
};

export default CardCart;
