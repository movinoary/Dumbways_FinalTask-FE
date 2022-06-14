import React from "react";
import * as Assets from "../../assets/index";
import * as cssModule from "../../style/index";

const CardTransaction = () => {
  return (
    <div className={cssModule.Components.cardTransaction}>
      <img
        className={cssModule.Components.imgProduct}
        src={Assets.imgProductOne}
        alt="transction"
      />
      <div className={cssModule.Components.cardTransactionDesc}>
        <h1>RWANDA Beans</h1>
        <h3>
          <span>Saturday,</span> 5 March 2022
        </h3>
        <p>Price: Rp.123.000</p>
        <p>Qty: 1</p>
        <h2>Sub Total: Rp.123.000</h2>
      </div>
      <div className={cssModule.Components.cardTransactionLogo}>
        <img
          className={cssModule.Components.imgLogo}
          src={Assets.svgSlogo}
          alt="logo"
        />
        <img
          className={cssModule.Components.imgQr}
          src={Assets.svgQr}
          alt="qr"
        />
        <h3>Status</h3>
      </div>
    </div>
  );
};

export default CardTransaction;
