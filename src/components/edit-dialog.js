import React, { useState } from "react";
import "../styles/EditDialog.css";

const EditDialog = (props) => {
  const [inputs, setInputs] = useState({
    _id: props._id,
    title: props.title,
    description: props.description,
    prev_img: props.main_image,
  });

  // Handle changes in text fields
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  // Handle image upload changes
  const handleImageChange = (event) => {
    const name = event.target.name;
    const value = event.target.files[0];
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const [result, setResult] = useState("");
  // Submit changes to the server
  const onSubmit  = async (event) => {
    event.preventDefault();
    setResult("Saving changes...");
    const formData = new FormData(event.target);

    try {
      const response = await fetch(`https://my-library-db.onrender.com/api/books/${props._id}`, {
        method: "PUT",
        body: formData,
      });

      if (response.status === 200) {
        setResult("Book successfully updated.");
        event.target.reset(); //reset your form fields
        props.editBook( await response.json()); // Update the book in the parent component
        props.closeDialog(); // Close the dialog
      } else {
        setResult(response.message)
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
        <button className="close-dialog-button" onClick={props.closeDialog}>
          &times;
        </button>
        <h2>Edit Book</h2>
        <form className="edit-form" onSubmit={onSubmit}>
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
          <label htmlFor="img">Upload Image</label>
          <div className="image-preview-section">
            {inputs.img ? (
              
              <img
              
                src={
                  inputs.img instanceof File
                    ? URL.createObjectURL(inputs.img)
                    : `https://my-library-db.onrender.com/${inputs.prev_img}`
                }

                alt="Preview"
                className="image-preview"
              />
            ) : (
              <p>No image uploaded</p>
            )}
            <input
              id="img"
              type="file"
              name="img"
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
            <button type="button" className="cancel-button" onClick={props.closeDialog}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditDialog;
