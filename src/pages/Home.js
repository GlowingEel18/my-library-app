import React, { useState, useEffect } from "react";
import axios from "axios";
import Book from "../components/Book";
import AddDialog from "../components/add-dialog";
import EditDialog from "../components/edit-dialog"; // Import the EditDialog component
import "../pages/Home.css"; // Import the CSS file for styling

const Home = () => {
  const [books, setBooks] = useState([]);
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [editingBook, setEditingBook] = useState(null); // For tracking the book being edited
  const [loading, setLoading] = useState(true); // For loading state

  // Fetch books on component load
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          //"https://my-library-backend-uomv.onrender.com/api/books/"
          "http://localhost:3001/api/books"
        );
        console.log(response.data);
        setBooks(response.data);
      } catch (error) {
        console.error("Error fetching books:", error);
      } finally {
        setLoading(false); // Stop loading
      }
    })();
  }, []);

  // Add a new book
  const addBook = (book) => {
    setBooks((prevBooks) => [...prevBooks, book]);
  };

  // Delete a book
  const deleteBook = (id) => {
    setBooks((prevBooks) => prevBooks.filter((book) => book._id !== id));
  };

  // Update a book (edit)
  const editBook = (updatedBook) => {
    setBooks((prevBooks) =>
      prevBooks.map((book) => (book._id === updatedBook._id ? updatedBook : book))
    );
  };

  // Open Add Book Dialog
  const openAddDialog = () => {
    setShowAddDialog(true);
  };

  // Close Add Book Dialog
  const closeAddDialog = () => {
    setShowAddDialog(false);
  };

  // Open Edit Dialog
  const openEditDialog = (book) => {
    setEditingBook(book);
  };

  // Close Edit Dialog
  const closeEditDialog = () => {
    setEditingBook(null);
  };

  return (
    <div id="home">
      <center>
        <h1 className="explore-heading">Explore our Books</h1>
      </center>
      <button id="add-book" onClick={openAddDialog}>
        +
      </button>

      {/* Add Dialog */}
      {showAddDialog && <AddDialog addBook={addBook} closeDialog={closeAddDialog} />}

      {/* Edit Dialog */}
      {editingBook && (
        <EditDialog
          book={editingBook}
          closeDialog={closeEditDialog}
          editBook={editBook}
        />
      )}

      {/* Loading indicator */}
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
              onDelete={deleteBook} // Pass delete handler
              onEdit={() => openEditDialog(book)} // Pass edit handler
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
