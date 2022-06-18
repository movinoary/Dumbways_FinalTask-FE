import React, { useRef } from "react";
import * as cssModule from "../../style/index";

const ModalDelete = ({ showModal, setShowModal, setConfirmDelete }) => {
  const modalRef = useRef();

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const handleDelete = () => {
    setConfirmDelete(true);
  };

  return (
    <>
      {showModal ? (
        <div
          className={cssModule.Components.modal}
          onClick={closeModal}
          ref={modalRef}
        >
          <div className={cssModule.Components.modalDelete}>
            <h3>Delete Data</h3>
            <p>Are you sure you want to delete this data?</p>
            <div>
              <button onClick={handleDelete}>Yes</button>
              <button onClick={() => setShowModal(prev => !prev)}>No</button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ModalDelete;
