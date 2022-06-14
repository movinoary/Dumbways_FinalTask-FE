import React, { useRef } from "react";
import * as cssModule from "../../style/index";

const ModalLogin = ({ showModal, setShowModal }) => {
  const modalRef = useRef();

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
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
              <button onClick={() => setShowModal(prev => !prev)}>X</button>
            </div>
            <div className={cssModule.Components.modalForm}>
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <button>Login</button>
            </div>
            <p>
              Don't have an account ? Klik <span>Here</span>
            </p>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ModalLogin;
