import React, { useState } from "react";
import "../styles/EditDialog.css"; // Assuming you have this CSS file for styling

const EditDialog = ({ book, closeDialog, editBook }) => {
  const [updatedBook, setUpdatedBook] = useState(book);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedBook({ ...updatedBook, [name]: value });
  };

  const handleSaveChanges = () => {
    editBook(updatedBook); // Call the editBook function with updated book details
    closeDialog(); // Close the dialog after saving
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-dialog-button" onClick={closeDialog}>
          &times;
        </button>
        <h2>Edit Book</h2>
        <form className="edit-form">
          {/* Title Field */}
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            name="title"
            value={updatedBook.title}
            onChange={handleChange}
            required
          />

          {/* Description Field */}
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={updatedBook.description}
            onChange={handleChange}
            required
          />

          {/* Image Field */}
          <label htmlFor="image">Image</label>
          <input
            id="image"
            type="file"
            name="main_image"
            onChange={(e) =>
              setUpdatedBook({ ...updatedBook, main_image: e.target.files[0] })
            }
          />

          {/* Buttons */}
          <div className="dialog-buttons">
            <button type="button" className="confirm-button" onClick={handleSaveChanges}>
              Save Changes
            </button>
            <button type="button" className="cancel-button" onClick={closeDialog}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditDialog;
