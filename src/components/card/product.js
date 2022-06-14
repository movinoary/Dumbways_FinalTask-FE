import React from "react";
import { Link } from "react-router-dom";
import * as cssModule from "../../style/index";
import * as Assets from "../../assets/index";

const CardProduct = () => {
  return (
    <Link className={cssModule.Components.cardProduct} to="/product">
      <img src={Assets.imgProductOne} alt="product" />
      <div className={cssModule.Components.cardProductDesc}>
        <h1>RWANDA Beans</h1>
        <p>Rp.299.000</p>
        <p>Stock: 200</p>
      </div>
    </Link>
  );
};

export default CardProduct;
