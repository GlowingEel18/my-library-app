import React, { useState } from "react";
import "./Book.css";
import "./Home.css";
import EditDialog from "./edit-dialog";
import DeleteDialog from "./delete-dialog";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

const Book = ({ id, title, description, main_image, onDelete, onEdit }) => {
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [showBook, setShowBook] = useState(true);

  // Safely construct the image source
  const imageSrc =
    typeof main_image === "string" && main_image.startsWith("http")
      ? main_image
      : `https://my-library-backend-uomv.onrender.com/${main_image || "main_image.jpg"}`;

  // Dialog Handlers
  const openEditDialog = () => setShowEditDialog(true);
  const closeEditDialog = () => setShowEditDialog(false);

  const openDeleteDialog = () => setShowDeleteDialog(true);
  const closeDeleteDialog = () => setShowDeleteDialog(false);

  const handleEditSubmit = (updatedBook) => {
    if (onEdit && typeof onEdit === "function") {
      onEdit(updatedBook); // Call the parent `onEdit` with the updated book
    }
    setShowEditDialog(false);
  };

  const handleDeleteConfirm = () => {
    if (onDelete && typeof onDelete === "function") {
      onDelete(id); // Call the parent `onDelete` with the book ID
    }
    setShowDeleteDialog(false);
    setShowBook(false); // Hide the book after deletion
  };

  // Fallback if book is hidden
  if (!showBook) return null;

  return (
    <>
      {/* Edit Dialog */}
      {showEditDialog && (
        <EditDialog
          closeDialog={closeEditDialog}
          onEditSubmit={handleEditSubmit}
          book={{ id, title, main_image }}
        />
      )}

      {/* Delete Dialog */}
      {showDeleteDialog && (
        <DeleteDialog
          bookTitle={title}
          onDeleteConfirm={handleDeleteConfirm}
          onCancel={closeDeleteDialog}
        />
      )}

      {/* Book Card */}
      <div className="genre-card">
        {/* Book Image */}
        <img
          src={imageSrc}
          alt={title || "Book"}
          className="genre-image"
          onError={(e) => (e.target.src = "/main_image.jpg")}
        />

        {/* Title and Description */}
        <h2 className="book-title">{title || "Untitled"}</h2>
        <p className="book-description">{description || "No description available."}</p>

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
