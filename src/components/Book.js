import React, { useState } from "react";
import "./Book.css";
import "./Home.css";
import DeleteDialog from "./delete-dialog";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

const Book = ({ id, title, description, main_image, onDelete, onEdit }) => {
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  const handleDeleteClick = () => setShowDeleteDialog(true);
  const handleDeleteConfirm = () => {
    if (onDelete && typeof onDelete === "function") {
      onDelete(id); // Call `onDelete` only if it's a valid function
    }
    setShowDeleteDialog(false);
  };
  const handleCancel = () => setShowDeleteDialog(false);

  // Safely construct the image source
  const imageSrc =
    typeof main_image === "string" && main_image.startsWith("http")
      ? main_image
      : `https://my-library-backend-uomv.onrender.com/${main_image || "main_image.jpg"}`;

  return (
    <div className="genre-card">
      {/* Display Book Image */}
      <img
        src={imageSrc}
        alt={title || "Book"} // Fallback for alt text
        className="genre-image"
        onError={(e) => (e.target.src = "/main_image.jpg")} // Set fallback image if image fails
      />

      {/* Display Title and Description */}
      <h2 className="book-title">{title || "Untitled"}</h2>
      <p className="book-description">{description || "No description available."}</p>

      {/* Button Group */}
      <div className="button-group">
        {/* Delete Button */}
        <button className="close-button" onClick={handleDeleteClick}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
        {/* Edit Button */}
        <button className="edit-button" onClick={() => onEdit && onEdit(id)}>
          <FontAwesomeIcon icon={faEdit} />
        </button>
      </div>

      {/* Delete Confirmation Dialog */}
      {showDeleteDialog && (
        <DeleteDialog
          bookTitle={title}
          onDeleteConfirm={handleDeleteConfirm}
          onCancel={handleCancel}
        />
      )}
    </div>
  );
};

export default Book;
