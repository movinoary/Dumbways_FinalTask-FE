import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import * as Assets from "../assets/index";
import * as Components from "../components/index";
import * as cssModule from "../style/index";

const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);

  const handleRemove = id => {
    const arr = cart.filter(products => products.id !== id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map(products => (ans += cart.length * products.price));
    setPrice(ans);
  };

  useEffect(() => {
    console.log(cart);
    handlePrice();
  });

  return (
    <motion.section
      className={cssModule.Page.cartSec}
      initial="out"
      animate="in"
      exit="out"
      variants={Assets.animationOne}
      transition={Assets.transition}
    >
      <h1>My Cart</h1>
      <div className={cssModule.Page.cartRow}>
        <div className={cssModule.Page.cartDesc}>
          <h3>Review Your Order</h3>
          {cart.map(products => {
            return (
              <div className={cssModule.Components.cardCart} key={products}>
                <img src={products.image} alt="product" />
                <div className={cssModule.Components.cartDesc}>
                  <div>
                    <h1>{products.id}</h1>
                    <div className={cssModule.Components.cartButton}>
                      <button onClick={() => handleChange(products, -1)}>
                        -
                      </button>
                      <h4>{cart.length}</h4>
                      <button onClick={() => handleChange(products, 1)}>
                        +
                      </button>
                    </div>
                  </div>
                  <div className={cssModule.Components.cartTotal}>
                    <p>Rp.{products.price}</p>
                    <button onClick={() => handleRemove(products.id)}>
                      <img src={Assets.svgBin} alt="bin" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className={cssModule.Page.cartTrans}>
          <div>
            <p>Subtotal</p>
            <p>123.000</p>
          </div>
          <div>
            <p>Qty</p>
            <p>{cart.length}</p>
          </div>
          <div>
            <h3>total</h3>
            <h3>Rp. {price}</h3>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Cart;
