import axios from "axios";
import React, { useState } from "react";

const AddBook = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image_url, setImageUrl] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("/api/books", { title, description, image_url });
      setMessage(`Book added successfully: ${res.data.title}`);
    } catch (err) {
      setMessage(err.response?.data.error || "Failed to add the book. Please try again.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div>
          <label>Description:</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
        </div>
        <div>
          <label>Image URL:</label>
          <input type="text" value={image_url} onChange={(e) => setImageUrl(e.target.value)} required />
        </div>
        <button type="submit">Add Book</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default AddBook;
