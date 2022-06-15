import React from "react";
import * as Components from "../components/index";
import * as cssModule from "../style/index";

const Cart = () => {
  return (
    <section className={cssModule.Page.cartSec}>
      <h1>My Cart</h1>
      <div className={cssModule.Page.cartRow}>
        <div className={cssModule.Page.cartDesc}>
          <h3>Review Your Order</h3>
          <Components.CardCart />
        </div>
        <div className={cssModule.Page.cartTrans}>
          <div>
            <p>Subtotal</p>
            <p>123.000</p>
          </div>
          <div>
            <p>Qty</p>
            <p>1</p>
          </div>
          <div>
            <h3>total</h3>
            <h3>123.000</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
