import React from 'react';
import './Book.css';

const Book = ({ title, description, image }) => {
 return (
   <div className="book-card">
     <img
       src={image}
       alt={`${title} cover`}
       className="book-image"
       onError={(e) => {
         e.target.onerror = null;
         e.target.src = '/images/placeholder-image.jpg'; // Use a placeholder image if the original image fails
       }}
     />
     <h3>{title}</h3>
     <p>{description}</p>
   </div>
 );
};

export default Book;
