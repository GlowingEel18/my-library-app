import React, { useState, useEffect } from "react";
import axios from "axios";
import Book from "../components/Book";
import AddDialog from "../components/add-dialog";
import EditDialog from "../components/edit-dialog";
import "../pages/Home.css";

const Home = () => {
  const [books, setBooks] = useState([]); // State to store books
  const [showAddDialog, setShowAddDialog] = useState(false); // State for Add Dialog visibility
  const [editingBook, setEditingBook] = useState(null); // State for tracking the book being edited
  const [loading, setLoading] = useState(true); // State for loading indicator

  // Fetch books when the component mounts
  useEffect(() => {
    const fetchBooks = async () => {
      try {

        const response = await axios.get("https://my-library-db.onrender.com/api/books/");
        setBooks(response.data);
        
      } catch (error) {
        console.error("Error fetching books:", error);
      } finally {
        setLoading(false); // Stop loading once books are fetched
      }
    };
    fetchBooks();
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
      prevBooks.map((book) => book._id === updatedBook._id ? updatedBook : book ));
  };

  // Open Add Dialog
  const openAddDialog = () => {
    setShowAddDialog(true);
  };

  // Close Add Dialog
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

      {/* Add Book Button */}
      <button id="add-book" onClick={openAddDialog}>
        +
      </button>

      {/* Add Dialog */}
      {showAddDialog && (
        <AddDialog addBook={addBook} closeDialog={closeAddDialog} />
      )}

      {/* Edit Dialog */}
      {editingBook && (
        <EditDialog
          book={editingBook}
          closeDialog={closeEditDialog}
          editBook={editBook}
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
              key={book.title}
              id={book._id}
              title={book.title}
              description={book.description}
              main_image={book.main_image}
              onDelete={deleteBook}
              onEdit={() => openEditDialog(book)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
