import React from "react";
import "./Errormodal.css";

export default function Errormodal(props) {
  if (!props.isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {props.children}
        <div className="modal-buttons">
          <button onClick={props.confirmAction}>Confirm</button>
          <button onClick={props.closeModal}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

