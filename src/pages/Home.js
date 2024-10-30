// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <h2>Explore our Genres</h2>
      <div className="genre-grid">
        <div className="genre-card">
          <img src="/images/New Novels.jpg" alt="New Novels" className="genre-image" />
          <Link to="/new-novels">
            <h3 className="genre-title">New Novels</h3>
          </Link>
          <p>A fantastic new novel.</p>
        </div>

        <div className="genre-card">
          <img src="/images/Mystery.jpg" alt="Mystery" className="genre-image" />
          <Link to="/mystery">
            <h3 className="genre-title">Mystery</h3>
          </Link>
          <p>A bestselling mystery.</p>
        </div>

        <div className="genre-card">
          <img src="/images/Fantasy.jpg" alt="Fantasy" className="genre-image" />
          <Link to="/fantasy">
            <h3 className="genre-title">Fantasy</h3>
          </Link>
          <p>An exciting fantasy adventure.</p>
        </div>

        <div className="genre-card">
          <img src="/images/Drama.jpg" alt="Drama" className="genre-image" />
          <Link to="/drama">
            <h3 className="genre-title">Drama</h3>
          </Link>
          <p>A thrilling crime drama.</p>
        </div>

        <div className="genre-card">
          <img src="/images/Fiction2.jpg" alt="Fiction" className="genre-image" />
          <Link to="/fiction">
            <h3 className="genre-title">Fiction</h3>
          </Link>
          <p>A gripping historical fiction.</p>
        </div>

        <div className="genre-card">
          <img src="/images/Nonfiction2.jpg" alt="Nonfiction" className="genre-image" />
          <Link to="/nonfiction">
            <h3 className="genre-title">Nonfiction</h3>
          </Link>
          <p>An inspiring non-fiction book.</p>
        </div>

        <div className="genre-card">
          <img src="/images/Romance.jpg" alt="Romance" className="genre-image" />
          <Link to="/romance">
            <h3 className="genre-title">Romance</h3>
          </Link>
          <p>A heartwarming romance story.</p>
        </div>

        <div className="genre-card">
          <img src="/images/Scientific Mystery.jpg" alt="Scientific Mystery" className="genre-image" />
          <Link to="/scientific-mystery">
            <h3 className="genre-title">Scientific Mystery</h3>
          </Link>
          <p>A deep dive into a scientific mystery.</p>
        </div>

        <div className="genre-card">
          <img src="/images/Sci-Fi.jpg" alt="Sci-Fi" className="genre-image" />
          <Link to="/sci-fi">
            <h3 className="genre-title">Sci-Fi</h3>
          </Link>
          <p>An adventurous sci-fi journey.</p>
        </div>

        <div className="genre-card">
          <img src="/images/Horror.jpg" alt="Horror" className="genre-image" />
          <Link to="/horror">
            <h3 className="genre-title">Horror</h3>
          </Link>
          <p>A terrifying horror story.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
