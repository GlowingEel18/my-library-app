// src/components/Home.js
import React from 'react';
import nonfictionImage from '../assets/images/Nonfiction2.jpg';

function Home() {
  return (
    <div>
      <h1>Welcome to the Library Webpage Program</h1>
      <p>Your one-stop solution for finding fiction and non-fiction books across various genres.</p>
      <img src={nonfictionImage} alt="Nonfiction Book" />
    </div>
  );
}

export default Home;
