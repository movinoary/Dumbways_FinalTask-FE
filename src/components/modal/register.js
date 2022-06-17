import React, { useRef, useState } from "react";
import { useMutation } from "react-query";
import * as cssModule from "../../style/index";
import * as Configs from "../../config/index";

const ModalRegister = ({ setShowModalRegister, setShowModal }) => {
  const modalRef = useRef();
  const [message, setMessage] = useState(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const { name, email, password } = form;

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

      const response = await Configs.API.post("/register", body, config);
      console.log(response.data.data);
      const alert = <p>Register Succes</p>;
      setMessage(alert);
      setShowModal(true);
    } catch (error) {
      const alert = <p>Failed</p>;
      setMessage(alert);
      console.log(error);
    }
  });

  return (
    <>
      <div
        className={cssModule.Components.modal}
        onClick={closeModal}
        ref={modalRef}
      >
        <div className={cssModule.Components.modalRow}>
          <div className={cssModule.Components.modalRowTitle}>
            <h1>Register</h1>
            <button onClick={() => setShowModalRegister(prev => !prev)}>
              X
            </button>
          </div>
          {message && message}
          <form
            className={cssModule.Components.modalForm}
            onSubmit={e => handleOnSubmit.mutate(e)}
          >
            <input
              onChange={handleOnChange}
              value={name}
              type="text"
              id="name"
              name="name"
              placeholder="Full Name"
            />
            <input
              onChange={handleOnChange}
              value={email}
              type="email"
              id="email"
              name="email"
              placeholder="Email"
            />
            <input
              onChange={handleOnChange}
              value={password}
              type="password"
              id="password"
              name="password"
              pattern="[A-Za-z0-9]{6}"
              title="Minimal 6 Character"
              placeholder="Password"
            />
            <button>Register</button>
          </form>
          <p>
            Don't have an account ? Klik
            <button onClick={setShowModal}>Here</button>
          </p>
        </div>
      </div>
    </>
  );
};

export default ModalRegister;
