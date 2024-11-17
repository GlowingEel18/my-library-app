import { useState, useEffect } from "react";
import axios from "axios";

const Book = ({ title, description, author, genre, image_url }) => {
  return (
    <div className="book">
      <img src={`${process.env.PUBLIC_URL}/images/${item.image}`}
      alt={item.title}/>
      <h4>{title}</h4>
      <p><strong>Author:</strong> {author}</p>
      <p><strong>Genre:</strong> {genre}</p>
      <p>{description}</p>
    </div>
  );
};

const Books = () => {
  const [books, setBooks] = useState([]);
  
  // Fetch books from the Render server after the page is rendered
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/books"); // Replace with your Render URL
        setBooks(response.data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    })();
  }, []);

  return (
    <div className="library">
      <h3>Library Books</h3>
      <div className="book-list">
        {books.map((book) => (
          <Book
            key={book.id}
            title={book.title}
            description={book.description}
            author={book.author}
            genre={book.genre}
            image_url={book.image_url}
          />
        ))}
      </div>
    </div>
  );
};

export default Books;
