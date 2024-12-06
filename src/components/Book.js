import React, { useState } from "react";
import "./Book.css";
import "./Home.css";
import EditDialog from "./edit-dialog";
import DeleteDialog from "./delete-dialog";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

const Book = (props) => {
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [showBook, setShowBook] = useState(true);
  const [book, setBook] = useState(props);
  console.log('Inside Book: ', JSON.stringify(props));
  const imageSrc = `https://my-library-db.onrender.com/${book.main_image}`;

  const openEditDialog = () => {
    setShowEditDialog(true);
  };

  const closeEditDialog = () => {
    setShowEditDialog(false);
  };

  const openDeleteDialog = () => {
    setShowDeleteDialog(true);
  };

  const closeDeleteDialog = () => {
    setShowDeleteDialog(false);
  };

  const editBook = (book) => {
    setBook(book);
  };

  const hideBook = (book) => {
    setShowBook(false);
  };

  // Fallback if book is hidden
  if (!showBook) return null;

  return (
    <>
      {/* Edit Dialog */}
      { showEditDialog && (
        <EditDialog
        closeDialog={closeEditDialog}
        editBook={editBook}
        _id={book.id}
        title={book.title}
        description={book.description}
        main_image={book.main_image}
        />
      )}

      {/* Delete Dialog */}
      {showDeleteDialog && (
         <DeleteDialog
         closeDialog={closeDeleteDialog}
         hideBook={hideBook}
         _id={book.id}
         title={book.title}
         description={book.description}
       />
      )}

      {/* Book Card */}
      <div className="genre-card">
        {/* Book Image */}
        <img
          src={imageSrc}
          alt={props.title || "Book"}
          className="genre-image"
          onError={(e) => (e.target.src = "/main_image.jpg")}
        />

        {/* Title and Description */}
        <h2 className="book-title">{props.title || "Untitled"}</h2>
        <p className="book-description">{props.description || "No description available."}</p>

        {/* Button Group */}
        <div className="button-group">
          {/* Delete Button */}
          <button className="close-button" onClick={openDeleteDialog}>
            <FontAwesomeIcon icon={faTrash} />
          </button>
          {/* Edit Button */}
          <button className="edit-button" onClick={openEditDialog}>
            <FontAwesomeIcon icon={faEdit} />
          </button>
        </div>
      </div>
    </>
  );
};

export default Book;
