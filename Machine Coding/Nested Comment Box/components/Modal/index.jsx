import React from "react";
import { createPortal } from "react-dom";

const Modal = ({ children, isVisible,handleClose  }) => {
  return (
isVisible &&
    createPortal(
      <div className="modal" >
        <div className="modal__overlay" onClick={handleClose}/>
        <div className="modal__content">{children}</div>
        </div>,
      document.getElementById("portal")
    )
  );
};

export default Modal;
