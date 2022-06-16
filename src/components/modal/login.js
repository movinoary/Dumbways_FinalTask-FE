import React, { useRef } from "react";
import * as cssModule from "../../style/index";

const ModalLogin = ({
  showModal,
  showRegister,
  setShowModal,
  setShowModalRegister,
  onSubmit,
}) => {
  const modalRef = useRef();

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

            <form
              className={cssModule.Components.modalForm}
              onSubmit={onSubmit}
            >
              <input type="email" id="email" name="email" placeholder="Email" />
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
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
            <form
              className={cssModule.Components.modalForm}
              onSubmit={onSubmit}
            >
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Full Name"
              />
              <input type="email" id="email" name="email" placeholder="Email" />
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
              />
              <button>Login</button>
            </form>
            <p>
              Don't have an account ? Klik
              <button onClick={setShowModal}>Here</button>
            </p>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ModalLogin;
