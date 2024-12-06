import "../styles/dialog.css";
import React, { useState } from "react";

const DeleteDialog = (props) => {
  console.log("DeleteDialog Props: ", JSON.stringify(props));

  const [result, setResult] = useState("");

  const deleteBook = async (event) => {
   /*const response = await fetch(
      `https://my-library-backend-submission.onrender.com/api/books/${props._id}`,
      {
        method: "DELETE",
      }
    );
    */

    const response = await fetch(
      `https://my-library-db.onrender.com/api/books/${props._id}`,
      {
        method: "DELETE",
      }
    );

    if (response.status === 200) {
      setResult("Book was successfully deleted");
      props.hideBook();
    } else {
      console.log("Error deleting book", response);
      setResult(response.message);
    }
    props.closeDialog();
  };
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {/* Close Button */}
        <button className="close-dialog-button" onClick={props.closeDialog}>
          &times;
        </button>
        <h2>Confirm Delete</h2>
        <p>
          Are you sure you want to delete the book <strong>"{props.title}"</strong>?
        </p>
        <div className="dialog-buttons">
        <section>
          <button className="delete-button" onClick={deleteBook}> Delete </button>
          <button className="cancel-button" onClick={props.closeDialog}> Cancel </button>
        </section>
        <span>{result}</span>
        </div>
      </div>
    </div>
  );
};

export default DeleteDialog;
