import React, { useState } from "react";
import Modal from "./modal";
import "./Styles.css";
const ModalTest = () => {
  const [showModalStatus, setShowModalStatus] = useState(false);

  const toggleModalStatus = () => {
    setShowModalStatus(!showModalStatus);
  };

  const onClose = () => {
    setShowModalStatus(false);
  };

  return (
    <>
      <button onClick={toggleModalStatus}>Open Modal Popup</button>
      {showModalStatus && <Modal onClose={onClose} body={<p>Body Data</p>} />}
    </>
  );
};

export default ModalTest;
