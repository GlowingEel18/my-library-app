import React, { useEffect, useState } from 'react';
import BookCard from './BookCard';
import booksData from '../data/books.json';
import './BooksList.css';

const BooksList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    setBooks(booksData); // Load books data from JSON
  }, []);

  return (
    <div className="books-list">
      {books.map(book => (
        <BookCard
          key={book.id}
          title={book.title}
          description={book.description}
          image={book.image}
          genre={book.genre}
        />
      ))}
    </div>
  );
};

export default BooksList;
