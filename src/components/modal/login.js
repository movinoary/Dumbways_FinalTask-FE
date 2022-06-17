import React, { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as cssModule from "../../style/index";
import * as Components from "../index";
import * as Configs from "../../config/index";
import { useMutation } from "react-query";

const ModalLogin = ({
  showModal,
  showRegister,
  setShowModal,
  setShowModalRegister,
}) => {
  const modalRef = useRef();
  const navigate = useNavigate();
  const [message, setMessage] = useState(null);
  const [state, dispatch] = useContext(Configs.UserContext);

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false);
      setShowModalRegister(false);
    }
  };

  const linkRegister = () => {
    setShowModalRegister(true);
    setShowModal(false);
  };

  const closeLogin = () => {
    setShowModalRegister(false);
    setShowModal(false);
  };

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const { password, email } = form;

  const handleOnChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = useMutation(async e => {
    try {
      e.preventDefault();

      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const body = JSON.stringify(form);

      const response = await Configs.API.post("/login", body, config);

      if (response?.status === 200) {
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: response.data.data,
        });

        if (response.data.data.status === "admin") {
          navigate("/admin");
        } else {
          navigate("/customer");
        }

        const alert = <p>Login Succes</p>;
        setMessage(alert);
      }
    } catch (error) {
      const alert = <p>E-mail / Password Not Found</p>;
      setMessage(alert);
      console.log(error);
    }
  });

  return (
    <>
      {showModal ? (
        <div
          className={cssModule.Components.modal}
          onClick={closeModal}
          ref={modalRef}
        >
          <div className={cssModule.Components.modalRow}>
            <div className={cssModule.Components.modalRowTitle}>
              <h1>login</h1>
              <button onClick={closeLogin}>X</button>
            </div>
            {message && message}
            <form
              className={cssModule.Components.modalForm}
              onSubmit={e => handleOnSubmit.mutate(e)}
            >
              <input
                value={email}
                onChange={handleOnChange}
                type="email"
                id="email"
                name="email"
                placeholder="Email"
              />
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                pattern="[A-Za-z0-9]{6}"
                title="Minimal 6 Character"
                value={password}
                onChange={handleOnChange}
              />
              <button>Login</button>
            </form>
            <p>
              Don't have an account ? Klik
              <button onClick={linkRegister}>Here</button>
            </p>
          </div>
        </div>
      ) : showRegister ? (
        <Components.ModalRegister
          showModal={showRegister}
          setShowModalRegister={setShowModalRegister}
          setShowModal={setShowModal}
        />
      ) : null}
    </>
  );
};

export default ModalLogin;
