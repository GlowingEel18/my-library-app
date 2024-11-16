import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');

  // Fetch the list of items when the component mounts
  useEffect(() => {
    async function fetchItems() {
      try {
        const response = await axios.get('http://localhost:3001/items');
        setItems(response.data);
      } catch (error) {
        console.error("Error fetching items", error);
      }
    }
    fetchItems();
  }, []);  // Empty dependency array ensures this runs only once

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Client-side validation (simple length checks)
    if (name.length < 3) {
      setMessage("Name must be at least 3 characters long.");
      return;
    }
    if (description.length < 5) {
      setMessage("Description must be at least 5 characters long.");
      return;
    }

    try {
      // Send a POST request to the server with the form data
      const response = await axios.post('http://localhost:3001/items', {
        name,
        description,
      });

      // Add the new item to the list and clear the form
      setItems([...items, response.data]);
      setName('');
      setDescription('');
      setMessage("Item added successfully!");

    } catch (error) {
      // Handle validation errors from the server
      if (error.response && error.response.data.error) {
        setMessage("Validation failed: " + error.response.data.error.join(", "));
      } else {
        setMessage("Error occurred while adding item.");
      }
    }
  };

  return (
    <div className="App">
      <h1>Library Item Submission</h1>

      {/* Form for adding new item */}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Item</button>
      </form>

      {/* Display messages (success/error) */}
      <p>{message}</p>

      {/* List of items */}
      <h2>Items List</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <strong>{item.name}</strong>: {item.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
