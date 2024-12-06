import React, { useState } from "react";
import "../styles/add-dialog.css";

const AddDialog = (props) => {
  const [inputs, setInputs] = useState({});
  const [result, setResult] = useState("");


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

  // Submit changes to the server
  const onSubmit  = async (event) => {
    event.preventDefault();
    setResult("Saving changes...");
    console.log('Edit Dialog On Sumbit Event: ', event);
    const formData = new FormData(event.target);

    try {
      /*const response = await fetch(`https://my-library-backend-submission.onrender.com/api/books/`, {
        method: "POST",
        body: formData,
      });
      */

       const response = await fetch(`http://localhost:3001/api/books`, {
        method: "POST",
        body: formData,
      });
      

      if (response.status === 200) {
        const newBook = await response.json();
        setResult("Book successfully updated.");
        event.target.reset(); //reset your form fields
        props.addBook(newBook); // Update the book in the parent component
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
        <h2>Add New Book</h2>
        <form id="add-property-form" className="add-form" onSubmit={onSubmit}>
          {/* Title Field */}
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            name="title"
            value={inputs.title || ""}
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
          {/* Image Field */}
          <section className="columns">
            <p id="img-prev-section">
                <img
                  id="img-prev"
                  src={
                    inputs.img != null ? URL.createObjectURL(inputs.img) : ""
                  }
                  alt=""
                />
              </p>
              <p id="img-upload">
                <label htmlFor="img">Upload Image:</label>
                <input
                  type="file"
                  id="img"
                  name="img"
                  onChange={handleImageChange}
                  accept="image/*"
                />
              </p>
          </section>
           {/* Buttons */}
           <div className="dialog-buttons">
            <button
              type="submit"
              className="confirm-button"

            >
              Add Book
            </button>
            <button
              type="button"
              className="cancel-button"
              onClick={props.closeDialog}
            >
              Cancel
            </button>
          </div>
          <p>{result}</p>
        </form>
        </div>
      </div>
  );
};

export default AddDialog;
