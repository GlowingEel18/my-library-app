// src/components/Catalog.js
import React, { useEffect, useState } from 'react';
import BookCard from './BookCard';

function Catalog() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        // Fetch the data from the JSON file
        fetch('/books.json')
            .then((response) => response.json())
            .then((data) => {
                console.log("Fetched books data:", data); // Log to check if data is loaded
                setBooks(data);
            })
            .catch((error) => console.error("Error fetching books data:", error));
    }, []);

    return (
        <div className="catalog">
            <h2>Explore Our Genres</h2>
            <div className="book-grid">
                {books.map((book) => (
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
}

export default Catalog;
