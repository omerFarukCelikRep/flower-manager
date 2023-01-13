import { useEffect, useRef } from "react";
import "./modal.scss";

const Modal = ({ children, show, setShowModal, hideCloseButton }) => {
  const modalRef = useRef();

  useEffect(() => {
    const clickOutside = (e) => {
      if (e.target === modalRef.current) {
        setShowModal(false);
      }
    };

    window.addEventListener("click", clickOutside);

    return () => window.removeEventListener("click", clickOutside);
  });

  return (
    <>
      <div ref={modalRef} className={`modal ${show ? "active" : ""}`}>
        <div className="modal-content">
          {!hideCloseButton && (
            <span className="modal-close" onClick={() => setShowModal(false)}>
              &times;
            </span>
          )}
          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;

export const ModalHeader = ({ children }) => {
  return <div className="modal-header">{children}</div>;
};

export const ModalBody = ({ children }) => {
  return <div className="modal-body">{children}</div>;
};

export const ModalFooter = ({ children }) => {
  return <div className="modal-footer">{children}</div>;
};
