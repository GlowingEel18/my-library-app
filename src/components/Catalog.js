import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookCard from '../components/BookCard';
import AddBookForm from './AddBookForm';
import './Catalog.css';

const Catalog = () => {
  const [books, setBooks] = useState([]);

  // Fetch books from backend on mount
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/books');
        setBooks(response.data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };
    fetchBooks();
  }, []);

  // Add new book to the list
  const handleAddBook = (newBook) => {
    setBooks((prevBooks) => [...prevBooks, newBook]);
  };

  return (
    <div className="catalog">
      <h1>Explore Our Books</h1>
      <AddBookForm onAddBook={handleAddBook} />
      <div className="book-grid">
        {books.map((book) => (
          <BookCard
            key={book.id}
            title={book.title}
            description={book.description}
            image_url={book.image_url}
          />
        ))}
      </div>
    </div>
  );
};

export default Catalog;
