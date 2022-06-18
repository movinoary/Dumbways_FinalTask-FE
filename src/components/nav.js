import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Assets from "../assets/index";
import * as cssModule from "../style/index";
import * as Components from "../components/index";
import * as Configs from "../config/index";
import { useQuery } from "react-query";

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
        showModalRegister={showModalRegister}
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
    </>
  );
};

const NavUser = () => {
  const [state, dispatch] = useContext(Configs.UserContext);
  const navigate = useNavigate();

  let { data: profile } = useQuery("profileCache", async () => {
    const config = {
      method: "GET",
      headers: {
        Authorization: "Basic " + localStorage.token,
      },
    };
    const response = await Configs.API.get("/profile", config);
    return response.data.data;
  });

  const logout = () => {
    console.log(state);
    dispatch({
      type: "LOGOUT",
    });
    navigate("/");
  };

  return (
    <>
      <nav className={cssModule.Components.nav}>
        <Link to="/customer">
          <img src={Assets.svgSlogo} alt="logo" />
        </Link>
        <div className={cssModule.Components.navRight}>
          <Link to="cart" className={cssModule.Components.navLink}>
            <p className={cssModule.Components.navDesc}>10</p>
            <img
              className={cssModule.Components.imgCart}
              src={Assets.svgChart}
              alt="cart"
            />
          </Link>
          <div className={cssModule.Components.navProfile}>
            <img
              className={cssModule.Components.imgProfile}
              src={profile?.image || Assets.imgBlankProfile}
              alt="profile"
            />
            <div className={cssModule.Components.navDropdown}>
              <Link to="profile" className={cssModule.Components.dropdownLink}>
                <img src={Assets.svgProfile} alt="svg" />
                <p>profile</p>
              </Link>
              <Link to="complain" className={cssModule.Components.dropdownLink}>
                <img src={Assets.svgChat} alt="svg" />
                <p>complain</p>
              </Link>
              <button
                className={cssModule.Components.dropdownLink}
                onClick={logout}
              >
                <img src={Assets.svgExit} alt="svg" />
                <p>logout</p>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

const NavAdmin = () => {
  const [state, dispatch] = useContext(Configs.UserContext);
  const navigate = useNavigate();

  let { data: profile } = useQuery("profileCache", async () => {
    const config = {
      method: "GET",
      headers: {
        Authorization: "Basic " + localStorage.token,
      },
    };
    const response = await Configs.API.get("/profile", config);
    return response.data.data;
  });

  const logout = () => {
    console.log(state);
    dispatch({
      type: "LOGOUT",
    });
    navigate("/");
  };

  return (
    <>
      <nav className={cssModule.Components.nav}>
        <Link to="/admin">
          <img src={Assets.svgSlogo} alt="logo" />
        </Link>
        <div className={cssModule.Components.navRight}>
          <div className={cssModule.Components.navProfile}>
            <img
              className={cssModule.Components.imgProfileAdmin}
              src={profile?.image || Assets.imgBlankProfile}
              alt="profile"
            />
            <div className={cssModule.Components.navDropdown}>
              <Link
                to="list-product"
                className={cssModule.Components.dropdownLink}
              >
                <img src={Assets.svgCoffe} alt="svg" />
                <p>product</p>
              </Link>
              <Link to="complain" className={cssModule.Components.dropdownLink}>
                <img src={Assets.svgChat} alt="svg" />
                <p>complain</p>
              </Link>
              <button
                className={cssModule.Components.dropdownLink}
                onClick={logout}
              >
                <img src={Assets.svgExit} alt="svg" />
                <p>logout</p>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export { Nav, NavUser, NavAdmin };
