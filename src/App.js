import React, { useState, useEffect } from 'react';

function App() {
  // State hooks
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://my-library-backend-scms.onrender.com/api/books/');
        if (!response.ok) throw new Error('Network response was not ok');
        const result = await response.json();
        console.log('response from api: ', result);
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Books List</h1>
      <ul>
        {data.map((book) => (
          <li key={book.id}>
            <h2>{book.title}</h2>
            <p>Image: {book.image}</p>
            <p>Genre: {book.genre}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
