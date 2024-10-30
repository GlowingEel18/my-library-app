// src/pages/NewNovels.js
import React from 'react';
import { Link } from 'react-router-dom';
import './NewNovels.css';

const NewNovels = () => {  // Define NewNovels only once here
  return (
    <div className="new-novels">
      <header className="header">
        <h1 className="page-title">New Novels</h1>
        <p className="page-subtitle">Discover the latest novels that are capturing the imaginations of readers everywhere.</p>
        <nav className="navbar">
          <Link to="/">Home</Link>
          <Link to="/about">About the App</Link>
          <Link to="/catalog">Catalog</Link>
          <Link to="/search">Search</Link>
          <Link to="/contact">Contact Us</Link>
        </nav>
      </header>
      <main>
        <h2>Check Out These New Novels</h2>
        <div className="book-grid">
          <div className="book-card">
            <img src="/images/The_Last_Kingdom.jpg" alt="The Last Kingdom" />
            <h3>The Last Kingdom</h3>
            <p>A historical novel set in medieval times.</p>
          </div>
          <div className="book-card">
            <img src="/images/Echoes_of_the_Past.jpg" alt="Echoes of the Past" />
            <h3>Echoes of the Past</h3>
            <p>A captivating historical mystery.</p>
          </div>
          <div className="book-card">
            <img src="/images/Shadows_in_the_Dark.jpg" alt="Shadows in the Dark" />
            <h3>Shadows in the Dark</h3>
            <p>An intense thriller that will keep you on the edge of your seat.</p>
          </div>
        </div>
        <button className="more-button">More...</button>
      </main>
      <footer className="footer">
        <p>© 2024 Hardik Marlapudi. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default NewNovels;
