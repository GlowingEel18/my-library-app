import React, { useState } from "react";
import axios from "axios";

const AddBookForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    genre: "",
    description: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/books", formData);
      if (response.status === 200) {
        setMessage("Book added successfully!");
        setFormData({ title: "", author: "", genre: "", description: "" });
      }
    } catch (error) {
      console.error(error);
      setMessage(
        error.response?.data?.message || "Failed to add the book. Please try again."
      );
    }
  };

  return (
    <div>
      <h2>Add a New Book</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Author:</label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Genre:</label>
          <input
            type="text"
            name="genre"
            value={formData.genre}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBookForm;
