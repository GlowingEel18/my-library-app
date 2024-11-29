import React from "react";
import "../styles/dialog.css";

const DeleteDialog = ({ bookTitle, onDeleteConfirm, closeDialog }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {/* Close Button */}
        <button className="close-dialog-button" onClick={closeDialog}>
          &times;
        </button>
        <h2>Confirm Delete</h2>
        <p>
          Are you sure you want to delete the book <strong>"{bookTitle}"</strong>?
        </p>
        <div className="dialog-buttons">
          {/* Delete Button */}
          <button className="delete-button" onClick={onDeleteConfirm}>
            Delete
          </button>
          {/* Cancel Button */}
          <button className="cancel-button" onClick={closeDialog}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteDialog;
