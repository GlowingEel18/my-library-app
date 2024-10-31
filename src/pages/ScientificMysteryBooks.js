// src/pages/ScientificMysteryBooks.js
import React from 'react';
import './ScientificMysteryBooks.css';

const ScientificMysteryBooks = () => {
  // Define the scientific mystery book data directly in the component
  const books = [
    {
      id: 1,
      title: "The Silent Patient",
      description: "A gripping psychological thriller exploring silence and secrets.",
      image: "/images/SilentPatient.jpg"
    },
    {
      id: 2,
      title: "Angels & Demons",
      description: "A fast-paced thriller combining science, mystery, and historical intrigue.",
      image: "/images/Angels&Demons.jpg"
    },
    {
      id: 3,
      title: "The Andromeda Strain",
      description: "A sci-fi thriller about a deadly microorganism and a race against time.",
      image: "/images/Andromeda.jpg"
    }
    // Add more scientific mystery books here if needed
  ];

  return (
    <div className="scientific-mystery-books">
      <main>
        <h2>Explore These Scientific Mystery Novels</h2>
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

export default ScientificMysteryBooks;
