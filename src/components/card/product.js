import React from "react";
import { Link } from "react-router-dom";
import * as cssModule from "../../style/index";

const CardProduct = props => {
  const { path, title, img, price, stock } = props;
  return (
    <Link
      className={cssModule.Components.cardProduct}
      to={`/customer/product/${path}`}
    >
      <img src={img} alt="product" />
      <div className={cssModule.Components.cardProductDesc}>
        <h1>{title}</h1>
        <p>Rp.{price}</p>
        <p>Stock: {stock}</p>
      </div>
    </Link>
  );
};

export default CardProduct;
