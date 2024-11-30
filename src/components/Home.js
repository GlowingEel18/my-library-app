import React, { useState, useEffect } from "react";
import axios from "axios";
import Book from "../components/Book";
import AddDialog from "../components/add-dialog";
import DeleteDialog from "../components/delete-dialog"; // Import DeleteDialog
import EditDialog from "../components/edit-dialog";
import "./Home.css";

const Home = () => {
  const [books, setBooks] = useState([]); // State to store books
  const [showAddDialog, setShowAddDialog] = useState(false); // Add dialog state
  const [showDeleteDialog, setShowDeleteDialog] = useState(false); // Delete dialog state
  const [deletingBook, setDeletingBook] = useState(null); // Book to delete
  const [editingBook, setEditingBook] = useState(null); // Book to edit
  const [loading, setLoading] = useState(true); // Loading state

  // Fetch books when the component mounts
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/books");
        setBooks(response.data);
      } catch (error) {
        console.error("Error fetching books:", error);
      } finally {
        setLoading(false); // Stop loading
      }
    };
    fetchBooks();
  }, []);

  // Add a new book
  const addBook = (newBook) => {
    setBooks((prevBooks) => [...prevBooks, newBook]);
  };

  // Delete a book
  const deleteBook = async () => {
    if (!deletingBook) return;

    try {
      const response = await axios.delete(
        `http://localhost:3001/api/books/${deletingBook._id}`
      );
      if (response.status === 200) {
        setBooks((prevBooks) =>
          prevBooks.filter((book) => book._id !== deletingBook._id)
        );
        setShowDeleteDialog(false); // Close the dialog
        setDeletingBook(null); // Reset deletingBook state
      } else {
        console.error("Failed to delete the book");
      }
    } catch (error) {
      console.error("Error deleting the book:", error);
    }
  };

  // Close Delete Dialog
  const closeDeleteDialog = () => {
    setDeletingBook(null); // Reset the book being deleted
    setShowDeleteDialog(false); // Close the dialog
  };

  return (
    <div id="home">
      <center>
        <h1 className="explore-heading">Explore our Books</h1>
      </center>

      {/* Add Book Button */}
      <button id="add-book" onClick={() => setShowAddDialog(true)}>
        +
      </button>

      {/* Add Dialog */}
      {showAddDialog && (
        <AddDialog addBook={addBook} closeDialog={() => setShowAddDialog(false)} />
      )}

      {/* Delete Dialog */}
      {showDeleteDialog && deletingBook && (
        <DeleteDialog
          bookTitle={deletingBook.title}
          onDeleteConfirm={deleteBook}
          closeDialog={closeDeleteDialog} // Pass the cancel handler
        />
      )}

      {/* Loading Indicator */}
      {loading ? (
        <div className="loading-logo">
          <h2>Loading books, please wait...</h2>
        </div>
      ) : (
        <div className="book-container">
          {books.map((book) => (
            <Book
              key={book._id}
              id={book._id}
              title={book.title}
              description={book.description}
              main_image={book.main_image}
              onDelete={() => {
                setDeletingBook(book); // Set the book to delete
                setShowDeleteDialog(true); // Show the delete dialog
              }}
              onEdit={() => setEditingBook(book)} // Pass edit handler
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
