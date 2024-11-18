import React, { useState, useEffect } from "react";
import axios from "axios";
import Book from "../components/Book";
import AddDialog from "../components/AddDialog";
import "./Home.css"; // Import the CSS file for styling


const Home = () => {
  const [books, setBooks] = useState([]);
  const [showAddDialog, setShowAddDialog] = useState(false);

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        "https://my-library-backend-uomv.onrender.com/api/books/"
      );
      console.log(response.data);
      setBooks(response.data);
    })();
  }, []);

  const addBook = (book) => {
    setBooks((prevBooks) => [...prevBooks, book]);
  };

  const openAddDialog = () => {
    setShowAddDialog(true);
  };

  const closeAddDialog = () => {
    setShowAddDialog(false);
  };

  return (
    <div id="home">
      {/* Add the heading here */}
      <center><h1 className="explore-heading">Explore our Books</h1></center>
      <button id="add-book" onClick={openAddDialog}>
        +
      </button>

      {showAddDialog && <AddDialog addBook={addBook} closeDialog={closeAddDialog} />}

      <div className="book-container">
        {books.map((book) => (
          <Book
            key={book._id}
            title={book.title}
            description={book.description}
            main_image={book.main_image}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
