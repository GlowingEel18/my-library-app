// src/pages/Search.js
import React, { useState } from 'react';
import booksData from '../data/books.json';
import BookItem from '../components/BookItem';
import './Search.css';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [searchPerformed, setSearchPerformed] = useState(false); // Track if a search was performed

  const handleSearch = () => {
    const results = booksData.filter((book) =>
      book.title?.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setSearchPerformed(true);

    if (results.length > 0) {
      setFilteredBooks(results);
    } else {
      const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;
      window.open(searchUrl, '_blank'); // Opens the web search in a new tab
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="search-page">
      <h2>Search Text</h2>
      <p>Search for your favorite books below or try a web search:</p>
      <input
        type="text"
        placeholder="Please enter a search term or URL"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyDown={handleKeyDown} // Execute search on "Enter" key
        className="search-input"
      />
      <button onClick={handleSearch} className="search-button">Search</button>

      <div className="search-results">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <BookItem
              key={book.id}
              title={book.title}
              description={book.description}
              image={book.image}
            />
          ))
        ) : (
          searchPerformed && <p>No results found</p>
        )}
      </div>
    </div>
  );
};

export default Search;
