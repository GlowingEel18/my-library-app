import React, { useState } from "react";
import "../styles/EditDialog.css";

const EditDialog = ({ book, closeDialog, editBook }) => {
  const [inputs, setInputs] = useState({
    _id: book._id,
    title: book.title || "",
    description: book.description || "",
    prev_img: book.main_image || "",
  });
  const [result, setResult] = useState("");

  // Handle changes in text fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  // Handle image upload changes
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setInputs({ ...inputs, main_image: file });
  };

  // Submit changes to the server
  const handleSaveChanges = async (e) => {
    e.preventDefault();
    setResult("Saving changes...");

    const formData = new FormData();
    formData.append("title", inputs.title);
    formData.append("description", inputs.description);
    if (inputs.main_image) formData.append("main_image", inputs.main_image);

    try {
      const response = await fetch(`http://localhost:3001/api/books/${inputs._id}`, {
        method: "PUT",
        body: formData,
      });

      if (response.status === 200) {
        const updatedBook = await response.json();
        setResult("Book successfully updated.");
        editBook(updatedBook); // Update the book in the parent component
        closeDialog(); // Close the dialog
      } else {
        throw new Error("Failed to update the book.");
      }
    } catch (error) {
      console.error("Error updating book:", error);
      setResult("Error updating book. Please try again.");
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {/* Close Button */}
        <button className="close-dialog-button" onClick={closeDialog}>
          &times;
        </button>
        <h2>Edit Book</h2>
        <form className="edit-form" onSubmit={handleSaveChanges}>
          {/* Title Field */}
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            name="title"
            value={inputs.title}
            onChange={handleChange}
            required
          />

          {/* Description Field */}
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={inputs.description}
            onChange={handleChange}
            required
          />

          {/* Image Upload Section */}
          <label htmlFor="main_image">Upload Image</label>
          <div className="image-preview-section">
            {inputs.main_image ? (
              <img
                src={
                  inputs.main_image instanceof File
                    ? URL.createObjectURL(inputs.main_image)
                    : `http://localhost:3001/${inputs.prev_img}`
                }
                alt="Preview"
                className="image-preview"
              />
            ) : (
              <p>No image uploaded</p>
            )}
            <input
              id="main_image"
              type="file"
              name="main_image"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>

          {/* Result Message */}
          {result && <p className="result-message">{result}</p>}

          {/* Dialog Buttons */}
          <div className="dialog-buttons">
            <button type="submit" className="confirm-button">
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
