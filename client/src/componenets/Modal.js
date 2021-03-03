import React from "react";
import Login from "./Login";
import Greeter from "./Greeter";

function Modal({ name, heading, setShowModal }) {
  const closeModal = (e) => {
    if (e.target.className === "modal-container") {
      setShowModal("");
    }
  };

  return (
    <div className="modal-container" onClick={closeModal}>
      <div className="modal">
        <div className="modal-header">
          <h3>{heading}</h3>
          <button
            className="close-btn"
            id="close"
            onClick={() => {
              setShowModal("");
            }}
          >
            <i className="fa fa-times"></i>
          </button>
        </div>
        {name === "Login" ? <Login /> : ""}
        {name === "Greeter" ? <Greeter user="조영권" /> : ""}
      </div>
    </div>
  );
}

export default Modal;
