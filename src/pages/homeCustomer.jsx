import React from "react";
import * as Components from "../components/index";
import * as cssModule from "../style/index";

const HomeCustomer = () => {
  return (
    <>
      <section className={cssModule.Page.homeSec}>
        <Components.Header />
        <div className={cssModule.Page.homeSecProduct}>
          <Components.CardProduct path="product" />
          <Components.CardProduct />
          <Components.CardProduct />
          <Components.CardProduct />
          <Components.CardProduct />
          <Components.CardProduct />
        </div>
      </section>
    </>
  );
};

export default HomeCustomer;
