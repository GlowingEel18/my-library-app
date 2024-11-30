import React, { useState } from "react";
import "../styles/EditDialog.css"; // Assuming you have this CSS file for styling

const EditDialog = (props) => {

  console.log("EditDialog Props: ", JSON.stringify(props));

  const [inputs, setInputs] = useState({
    _id: props._id,
    title: props.title,
    description: props.description,
    prev_img: props.main_image,
  });


  const handleChange = (event) => {
    const title = event.target.title;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [title]: value }));
  };

  const handleImageChange = (event) => {
    const name = event.target.name;
    const value = event.target.files[0];
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const [result, setResult] = useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    //const formData = new FormData(event.target);
    const formData = new FormData();
    formData.append('_id', inputs._id);
    formData.append('title', inputs.title);
    formData.append('description', inputs.description);
    formData.append('main_image', inputs.main_image);
    console.log("formData BF Submit: ", formData);

    const response = await fetch(
      `http://localhost:3002/api/books/${props._id}`,
      {
        method: "PUT",
        body: formData,
      }
    );

    if (response.status === 200) {
      setResult("Book Successfully updated");
      event.target.reset(); //reset your form fields
      props.editBook(await response.json());
      props.closeDialog();
    } else {
      console.log("Error editing book", response);
      setResult(response.message);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-dialog-button" onClick={props.closeDialog}>
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

          {/* FIXME */}
          <section className="columns">
              <p id="img-prev-section">
                <img
                  id="img-prev"
                  src={
                    inputs.img != null
                      ? URL.createObjectURL(inputs.img)
                      : inputs.prev_img != null
                      ? `http://localhost:3002/${inputs.prev_img}`
                      : ""
                  }
                  alt=""
                />
              </p>
              <p id="img-upload">
                <label htmlFor="img">Upload Image:</label>
                <input
                  type="file"
                  id="img"
                  name="main_image"
                  onChange={handleImageChange}
                  accept="image/*"
                />
              </p>
          </section>
          <p>
            <button type="submit">Submit</button>
          </p>
          <p>{result}</p>
          {/* Buttons */}
          <div className="dialog-buttons">
          <section>
            <button type="button" className="confirm-button" onClick={onSubmit}>
              Save Changes
            </button>
            <button type="button" className="cancel-button" onClick={props.closeDialog}>
              Cancel
            </button>
          </section>
          <span>{result}</span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditDialog;
