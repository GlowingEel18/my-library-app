import React, { useState } from "react";
import "../styles/add-dialog.css";

const AddDialog = ({ closeDialog, addBook }) => {
  const [newBook, setNewBook] = useState({
    title: "",
    description: "",
    main_image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewBook({ ...newBook, [name]: value });
  };

  const handleFileChange = (e) => {
    setNewBook({ ...newBook, main_image: e.target.files[0] });
  };

  const handleAddBook = () => {
    if (!newBook.title || !newBook.description) {
      alert("Please fill in all required fields.");
      return;
    }
    addBook(newBook); // Pass the new book details to the parent component
    closeDialog(); // Close the dialog
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {/* Close Button */}
        <button className="close-dialog-button" onClick={closeDialog}>
          &times;
        </button>
        <h2>Add New Book</h2>
        <form className="add-form">
          {/* Title Field */}
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            name="title"
            value={newBook.title}
            onChange={handleChange}
            required
          />

          {/* Description Field */}
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={newBook.description}
            onChange={handleChange}
            required
          />

          {/* Image Field */}
          <label htmlFor="image">Upload Image</label>
          <input
            id="image"
            type="file"
            name="main_image"
            onChange={handleFileChange}
          />

          {/* Buttons */}
          <div className="dialog-buttons">
            <button
              type="button"
              className="confirm-button"
              onClick={handleAddBook}
            >
              Add Book
            </button>
            <button
              type="button"
              className="cancel-button"
              onClick={closeDialog}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddDialog;
