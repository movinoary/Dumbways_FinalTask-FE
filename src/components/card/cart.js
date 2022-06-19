import React from "react";
import * as Assets from "../../assets/index";
import * as cssModule from "../../style/index";

const CardCart = props => {
  const { title, image, price } = props;
  return (
    <div className={cssModule.Components.cardCart}>
      <img src={image} alt="product" />
      <div className={cssModule.Components.cartDesc}>
        <div>
          <h1>{title}</h1>
          <div className={cssModule.Components.cartButton}>
            <button>-</button>
            <h4>1</h4>
            <button>+</button>
          </div>
        </div>
        <div className={cssModule.Components.cartTotal}>
          <p>Rp.{price}</p>
          <img src={Assets.svgBin} alt="bin" />
        </div>
      </div>
    </div>
  );
};

export default CardCart;
