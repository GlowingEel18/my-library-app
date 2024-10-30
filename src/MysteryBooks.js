// src/pages/MysteryBooks.js
import React from 'react';
import './MysteryBooks.css';

const MysteryBooks = () => {
  // Define the mystery book data directly in the component
  const books = [
    {
      id: 1,
      title: "The Silent Patient",
      author: "Alex Micchaelides",
      description: "A psychological mystery about a woman who refuses to speak after a horrific event.",
      image: "/images/TheSilentObserver.jpg"
    },
    {
      id: 2,
      title: "Big Little Lies",
      description: "Big Little Lies by Liane Moriarty is a novel about the lives of three young mothers in a seemingly ideal Australian beach community.",
      image: "/images/BigLittleLies.jpg"
    },
    {
      id: 3,
      title: "The Hound of the Baskervilles",
      description: "A classic mystery novel featuring Sherlock Holmes and Dr. Watson.",
      image: "/images/Secrets_of_the_Shadow.jpg"
    }
  ];

  return (
    <div className="mystery-books">
      <main>
        <h2>Featured Mystery Book</h2>
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

export default MysteryBooks;
