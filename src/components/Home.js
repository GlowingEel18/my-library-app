import React, { useState, useEffect } from "react";
import Book from "../components/Book";
import AddDialog from "../components/AddDialog";
import "../styles/Home.css";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [loading, setLoading] = useState(true);

  // Fetch books from the API
  const fetchBooks = async () => {
    try {
      //const response = await fetch("https://my-library-backend-uomv.onrender.com/books");
      const response = await fetch("http://localhost:3001/api/books");
      const data = await response.json();
      setBooks(data);
    } catch (error) {
      console.error("Failed to fetch books:", error);
    } finally {
      setLoading(false);
    }
  };

  // Add a new book
  const addBook = (newBook) => {
    setBooks((prevBooks) => [...prevBooks, newBook]);
  };

  // Delete a book by ID
  const deleteBook = (id) => {
    setBooks((prevBooks) => prevBooks.filter((book) => book._id !== id));
  };

  // Close the Add Dialog
  const closeAddDialog = () => {
    setShowAddDialog(false);
  };

  // Fetch books on component mount
  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div id="home">
      <center>
        <h1 className="explore-heading">Explore our Books</h1>
      </center>
      <button id="add-book" onClick={() => setShowAddDialog(true)}>
        +
      </button>

      {showAddDialog && <AddDialog addBook={addBook} closeDialog={closeAddDialog} />}

      {loading ? (
        <div className="loading-logo">
          <h2>Loading books, please wait...</h2>
        </div>
      ) : (
        <div className="book-container">
          {books.map((book) => (
            <Book
              key={book.title} // Ensure unique key using `id` or `_id`
              _id={book._id}
              title={book.title} // Fallback for title
              description={book.description} // Fallback for description
              main_image={book.main_image} // Ensure main_image is a string
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
