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

  const imageSrc = `http://localhost:3001/${book.main_image}`;
  //const imageSrc = `https://my-library-backend-scms.onrender.com/${book.main_image}`;

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


  return (
    <>
      {showBook ? (
        <div>
          {showEditDialog ? (
            <EditDialog
              closeDialog={closeEditDialog}
              editBook={editBook}
              _id={book._id}
              title={book.title}
              main_image={book.main_image}
            />
          ) : (
            ""
          )}

          {showDeleteDialog ? (
            <DeleteDialog
              closeDialog={closeDeleteDialog}
              hideBook={hideBook}
              _id={book._id}
              title={book.title}
            />
          ) : (
            ""
          )}
          <section className="house-plan columns">
            <section className="feature-image">
              <img src={imageSrc} alt={book.title} />
            </section>
            <section className="info">
              <header className="columns">
                <h3>{book.title}</h3>
                <section id="change-buttons">
                  {/* Delete Button */}
                  <button className="close-button" onClick={openDeleteDialog}>
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                  {/* Edit Button */}
                  <button className="edit-button" onClick={openEditDialog}>
                    <FontAwesomeIcon icon={faEdit} />
                  </button>
                </section>
              </header>
            </section>
          </section>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Book;
