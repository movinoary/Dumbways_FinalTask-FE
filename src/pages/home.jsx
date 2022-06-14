import React from "react";
import * as Components from "../components/index";
import * as cssModule from "../style/index";

const Home = () => {
  return (
    <>
      <Components.Nav />
      <section className={cssModule.Page.homeSec}>
        <Components.Header />
        <div className={cssModule.Page.homeSecProduct}>
          <Components.CardProduct />
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

export default Home;
