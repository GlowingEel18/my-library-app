// src/components/GenreCard.js
import React from 'react';

const GenreCard = ({ title, description, imgUrl }) => {
  return (
    <div className="genre-card">
      <img src={imgUrl} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default GenreCard;
