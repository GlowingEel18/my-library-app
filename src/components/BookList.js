import React, { useEffect, useState } from "react";
import axios from "axios";
import BookCard from "./BookCard"; // Import the BookCard component
import EditDialog from "./edit-dialog";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [message, setMessage] = useState("");
  const [editingBook, setEditingBook] = useState(null); // For tracking the book being edited

  // Fetch all books from the server
  const fetchBooks = async () => {
    try {
      const response = await axios.get("http://localhost:3001/api/books");
      setBooks(response.data);
    } catch (error) {
      console.error(error);
      setMessage("Failed to load books.");
    }
  };

  // Handle editing a book
  const handleEdit = async (updatedBook) => {
    try {
      const response = await axios.put(
        `http://localhost:3001/books/${updatedBook.id}`,
        updatedBook
      );

      if (response.status === 200) {
        setBooks((prevBooks) =>
          prevBooks.map((book) =>
            book.id === updatedBook.id ? response.data : book
          )
        );
        setMessage("Book updated successfully!");
      } else {
        setMessage("Failed to update the book.");
      }
    } catch (error) {
      console.error(error);
      setMessage("Failed to update the book.");
    }
  };

  // Handle deleting a book
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/books/${id}`);
      setMessage("Book deleted successfully!");
      fetchBooks(); // Refresh the book list
    } catch (error) {
      console.error(error);
      setMessage("Failed to delete the book.");
    }
  };

  // Fetch books on initial load
  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div>
      <h2>Book List</h2>
      {message && <p>{message}</p>}
      <div className="book-list">
        {books.map((book) => (
          <BookCard
            key={book.id}
            book={book}
            onDelete={handleDelete} // Pass the delete handler
            onEdit={(book) => setEditingBook(book)} // Pass the edit handler
          />
        ))}
      </div>
      {/* Render the EditDialog only when a book is being edited */}
      {editingBook && (
        <EditDialog
          bookId={editingBook.id}
          book={editingBook}
          onClose={() => setEditingBook(null)} // Close the dialog
          onEdit={(updatedBook) => {
            handleEdit(updatedBook); // Update the book in the backend and frontend
            setEditingBook(null); // Close the dialog after editing
          }}
        />
      )}
    </div>
  );
};

export default BookList;
