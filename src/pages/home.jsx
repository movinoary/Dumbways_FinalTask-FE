import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as Components from "../components/index";
import * as Assets from "../assets/index";
import * as cssModule from "../style/index";

const Home = () => {
  const [showModalLogin, setShowModalLogin] = useState(false);
  const [showModalRegister, setShowModalRegister] = useState(false);

  const LoginModal = () => {
    setShowModalLogin(prev => !prev);
  };
  const RegisterModal = () => {
    setShowModalRegister(prev => !prev);
  };

  return (
    <>
      <Components.ModalLogin
        showModal={showModalLogin}
        setShowModal={setShowModalLogin}
        showRegister={showModalRegister}
        setShowModalRegister={setShowModalRegister}
      />

      <nav className={cssModule.Components.nav}>
        <Link to="/">
          <img src={Assets.svgSlogo} alt="logo" />
        </Link>
        <div className={cssModule.Components.navButton}>
          <div className={cssModule.Components.navLeft}>
            <button onClick={LoginModal}>login</button>
          </div>
          <div className={cssModule.Components.navRight}>
            <button onClick={RegisterModal}>register</button>
          </div>
        </div>
      </nav>
      <section className={cssModule.Page.homeSec}>
        <Components.Header />
        <div className={cssModule.Page.homeSecProduct}>
          <button
            className={cssModule.Components.cardProduct}
            onClick={LoginModal}
          >
            <img src={Assets.imgProductOne} alt="product" />
            <div className={cssModule.Components.cardProductDesc}>
              <h1>RWANDA Beans</h1>
              <p>Rp.299.000</p>
              <p>Stock: 200</p>
            </div>
          </button>
          <button
            className={cssModule.Components.cardProduct}
            onClick={LoginModal}
          >
            <img src={Assets.imgProductOne} alt="product" />
            <div className={cssModule.Components.cardProductDesc}>
              <h1>RWANDA Beans</h1>
              <p>Rp.299.000</p>
              <p>Stock: 200</p>
            </div>
          </button>
          <button
            className={cssModule.Components.cardProduct}
            onClick={LoginModal}
          >
            <img src={Assets.imgProductOne} alt="product" />
            <div className={cssModule.Components.cardProductDesc}>
              <h1>RWANDA Beans</h1>
              <p>Rp.299.000</p>
              <p>Stock: 200</p>
            </div>
          </button>
          <button
            className={cssModule.Components.cardProduct}
            onClick={LoginModal}
          >
            <img src={Assets.imgProductOne} alt="product" />
            <div className={cssModule.Components.cardProductDesc}>
              <h1>RWANDA Beans</h1>
              <p>Rp.299.000</p>
              <p>Stock: 200</p>
            </div>
          </button>
          <button
            className={cssModule.Components.cardProduct}
            onClick={LoginModal}
          >
            <img src={Assets.imgProductOne} alt="product" />
            <div className={cssModule.Components.cardProductDesc}>
              <h1>RWANDA Beans</h1>
              <p>Rp.299.000</p>
              <p>Stock: 200</p>
            </div>
          </button>
          <button
            className={cssModule.Components.cardProduct}
            onClick={LoginModal}
          >
            <img src={Assets.imgProductOne} alt="product" />
            <div className={cssModule.Components.cardProductDesc}>
              <h1>RWANDA Beans</h1>
              <p>Rp.299.000</p>
              <p>Stock: 200</p>
            </div>
          </button>
        </div>
      </section>
    </>
  );
};

export default Home;
