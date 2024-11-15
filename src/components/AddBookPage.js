// src/components/AddBookPage.js
import React, { useState } from 'react';

const AddBookPage = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');

  const handleAddBook = () => {
    // Implement book submission logic here
    console.log('Book added:', { title, author, genre });
  };

  return (
    <div>
      <h2>Add New Book</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <input
          type="text"
          placeholder="Genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
        <button type="button" onClick={handleAddBook}>Add Book</button>
      </form>
    </div>
  );
};

export default AddBookPage;
