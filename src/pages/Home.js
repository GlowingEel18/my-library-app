import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Home.css';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [newBook, setNewBook] = useState({ id: '', title: '', description: '' });
  const [imageFile, setImageFile] = useState(null); // State for storing the selected image file

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('https://my-library-backend-uomv.onrender.com');
        setBooks(response.data);
      } catch (error) {
        console.error("Error fetching books:", error);
        setError("Failed to load books. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchBooks();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBook({ ...newBook, [name]: value });
  };

  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', newBook.title);
    formData.append('description', newBook.description);
    formData.append('image', imageFile); // Append the image file to form data

    try {
      const response = await axios.post('https://my-library-backend-uomv.onrender.com/api/books/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setBooks([...books, response.data]);
      setNewBook({ title: '', description: '' });
      setImageFile(null); // Clear the selected image file
      setShowForm(false);
    } catch (error) {
      console.error("Error adding book:", error);
      setError("Failed to add the book. Please try again.");
    }
  };

  if (loading) return <p>Loading books...</p>;
  if (error) return <p className="error-message">{error}</p>;

  return (
    <div className="home">
      <center><h2>Explore Our Books</h2></center>
      <div className="book-grid">
        {books.map((book) => (
          <div key={book._id} className="book-card">
            <img
              src={`https://my-library-backend-uomv.onrender.com/${book.image}`}
              alt={`${book.title} cover`}
              className="book-image"
              onError={(e) => { 
                e.target.onerror = null; 
              }}
            />
            <h3 className="book-title">{book.title}</h3>
            <p className="book-description">{book.description}</p>
          </div>
        ))}
      </div>

      {/* Plus button */}
      <button className="add-book-button" onClick={() => setShowForm(!showForm)}>
        +
      </button>

      {/* Form for adding a new book */}
      {showForm && (
        <div className="form-overlay">
          <form className="add-book-form" onSubmit={handleSubmit} encType="multipart/form-data">
            <button type="button" className="close-button" onClick={() => setShowForm(false)}>X</button>
            <h3>Add a New Book</h3>
            <input
              type="text"
              name="title"
              placeholder="Name: "
              value={newBook.title}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="description"
              placeholder="Description"
              value={newBook.description}
              onChange={handleInputChange}
              required
            />
            <input
              type="file"
              name="image"
              onChange={handleFileChange}
              required
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Home;
