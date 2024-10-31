// src/pages/DramaBooks.js
import React from 'react';
import './DramaBooks.css';

const DramaBooks = () => {
  // Define the drama book data directly in the component
  const books = [
    {
      id: 1,
      title: "A Streetcar Named Desire",
      description: "A classic drama about tension, love, and tragedy in New Orleans.",
      image: "/images/Desire.jpg"
    },
    {
      id: 2,
      title: "Death of a Salesman",
      description: "An exploration of family dynamics and the American Dream.",
      image: "/images/Salesman.jpg"
    },
    {
      id: 3,
      title: "Hamlet",
      description: "Shakespeare's timeless tale of revenge, betrayal, and fate.",
      image: "/images/Hamlet.jpg"
    }
    // Add more drama books here if needed
  ];

  return (
    <div className="drama-books">
      <main>
        <h2>Explore These Drama Novels</h2>
        <div className="book-grid">
          {books.map((book) => (
            <div className="book-card" key={book.id}>
              <img src={book.image} alt={book.title} />
              <h3>{book.title}</h3>
              <p>{book.description}</p>
            </div>
          ))}
        </div>
        <button className="more-button">More...</button>
      </main>
    </div>
  );
};

export default DramaBooks;
