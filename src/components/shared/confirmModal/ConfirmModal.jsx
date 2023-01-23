import React from "react";
import Modal, { ModalBody, ModalFooter, ModalHeader } from "../modal/Modal";

const ConfirmModal = ({
  title,
  confirmText,
  showModal,
  setShowModal,
  confirm,
}) => {
  return (
    <>
      <Modal show={showModal} setShowModal={setShowModal} hideCloseButton>
        <ModalHeader>
          <h2>{title}</h2>
        </ModalHeader>
        <ModalBody>{confirmText}</ModalBody>
        <ModalFooter>
          <button
            type="button"
            className="route-link secondary"
            onClick={confirm}
          >
            Yes
          </button>
          <button
            className="route-link primary"
            onClick={() => setShowModal(false)}
          >
            No
          </button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default ConfirmModal;
