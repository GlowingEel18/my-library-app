import "../components/Book.css";
import React from "react";

const Book = (book) => {

  const imageSrc =`https://my-library-backend-uomv.onrender.com/${book.main_image}`;
  return (
    <div>
      <section className="book-plan columns">
        <section className="feature-image">
          <img src={imageSrc} alt={book.title} />
        </section>
        <section className="info">
          <h3>{book.title}</h3>
          <p>{book.description}</p>
        </section>
      </section>
    </div>
  );
};

export default Book;
