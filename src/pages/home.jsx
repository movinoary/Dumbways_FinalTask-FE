import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as Components from "../components/index";
import * as Assets from "../assets/index";
import * as cssModule from "../style/index";
import * as Configs from "../config/index";
import { useQuery } from "react-query";

const Home = () => {
  const [showModalLogin, setShowModalLogin] = useState(false);
  const [showModalRegister, setShowModalRegister] = useState(false);
  let api = Configs.API;

  const LoginModal = () => {
    setShowModalLogin(prev => !prev);
  };
  const RegisterModal = () => {
    setShowModalRegister(prev => !prev);
  };

  let { data: products } = useQuery("productsCache", async () => {
    const config = {
      method: "GET",
      headers: {
        Authorization: "Basic " + localStorage.token,
      },
    };
    const response = await api.get("/product", config);
    // console.log(response.data.data);
    return response.data.data;
  });

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
          {products?.map(item => (
            <button
              className={cssModule.Components.cardProduct}
              onClick={LoginModal}
              key={item.id}
            >
              <img src={item.image} alt="product" />
              <div className={cssModule.Components.cardProductDesc}>
                <h1>{item.name}</h1>
                <p>Rp.{item.price}</p>
                <p>Stock: {item.qty}</p>
              </div>
            </button>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
