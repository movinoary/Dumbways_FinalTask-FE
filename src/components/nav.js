import React, { useState } from "react";
import * as Assets from "../assets/index";
import * as cssModule from "../style/index";
import * as Components from "../components/index";

const Nav = () => {
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
      />
      <Components.ModalRegister
        showModal={showModalRegister}
        setShowModal={setShowModalRegister}
      />
      <nav className={cssModule.Components.nav}>
        <img src={Assets.svgSlogo} alt="logo" />
        <div className={cssModule.Components.navButton}>
          <div className={cssModule.Components.navLeft}>
            <button onClick={LoginModal}>login</button>
          </div>
          <div className={cssModule.Components.navRight}>
            <button onClick={RegisterModal}>register</button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
