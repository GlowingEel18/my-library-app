import React, { useState } from 'react';
import axios from 'axios';

const AddBookForm = ({ onBookAdded }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await axios.post('http://localhost:3000/api/books', {
        title,
        description,
        image_url: imageUrl, // Note that "image_url" needs to match the backend property
      });
      onBookAdded(response.data); // Callback to update the book list
      setTitle('');
      setDescription('');
      setImageUrl('');
    } catch (error) {
      console.error('Error adding book:', error);
      setError('Failed to add the book. Please try again.');
    }
  };

  return (
    <div className="form-overlay">
      <form className="add-book-form" onSubmit={handleSubmit}>
        <h3>Add a New Book</h3>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          required
        />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBookForm;
