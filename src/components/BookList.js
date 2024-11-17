import React, { useEffect, useState } from "react";
import axios from "axios";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [message, setMessage] = useState("");

  const fetchBooks = async () => {
    try {
      const response = await axios.get("http://localhost:5000/books");
      setBooks(response.data);
    } catch (error) {
      console.error(error);
      setMessage("Failed to load books.");
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/books/${id}`);
      setMessage("Book deleted successfully!");
      fetchBooks();
    } catch (error) {
      console.error(error);
      setMessage("Failed to delete the book.");
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div>
      <h2>Book List</h2>
      {message && <p>{message}</p>}
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <strong>{book.title}</strong> by {book.author} 
            <button onClick={() => handleDelete(book.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
