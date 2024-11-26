import "../styles/dialog.css";
import React from "react";

const DeleteDialog = ({ bookTitle, onDeleteConfirm, onCancel }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {/* Close Button */}
        <button className="close-dialog-button" onClick={onCancel}>
          &times;
        </button>
        <h2>Confirm Delete</h2>
        <p>
          Are you sure you want to delete the book <strong>"{bookTitle}"</strong>?
        </p>
        <div className="dialog-buttons">
          <button className="delete-button" onClick={onDeleteConfirm}>
            Yes, Delete
          </button>
          <button className="cancel-button" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteDialog;
