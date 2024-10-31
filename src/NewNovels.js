// src/pages/NewNovels.js
import React from 'react';
import './NewNovels.css';

const NewNovels = () => {
  // Define the book data as a JavaScript array
  const books = [
    {
      id: 1,
      title: "The Last Kingdom",
      description: "A historical novel set in medieval times.",
      image: "/images/new-novel3.jpg"
    },
    {
      id: 2,
      title: "Echoes of the Past",
      description: "A captivating historical mystery.",
      image: "/images/new-novel4.jpg"
    },
    {
      id: 3,
      title: "Shadows in the Dark",
      description: "An intense thriller that will keep you on the edge of your seat.",
      image: "/images/Shadow.jpg"
    }
  ];

  return (
    <div className="new-novels">
      <main>
        <h2>Check Out These New Novels</h2>
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

export default NewNovels;
