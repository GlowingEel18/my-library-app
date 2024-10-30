// src/pages/Catalog.js
import React, { useState } from 'react';
import booksData from '../data/books.json';
import BookCard from '../components/BookCard';
import './Catalog.css';

const Catalog = () => {
    const [genre, setGenre] = useState('All');

    const handleGenreChange = (e) => {
        setGenre(e.target.value);
    };

    // Filtered book data based on selected genre
    const filteredBooks = genre === 'All'
        ? booksData
        : booksData.filter(book => book.genre === genre);

    return (
        <div className="catalog">
            <div className="filter">
                <label htmlFor="genre">Filter by Genre:</label>
                <select id="genre" value={genre} onChange={handleGenreChange}>
                    <option value="All">All</option>
                    <option value="Fiction">Fiction</option>
                    <option value="Nonfiction">Nonfiction</option>
                </select>
            </div>
            <div className="book-grid">
                {filteredBooks.map(book => (
                    <BookCard
                        key={book.id}
                        title={book.title}
                        description={book.description}
                        image={book.image}
                    />
                ))}
            </div>
        </div>
    );
};

export default Catalog;
