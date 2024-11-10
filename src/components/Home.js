import React from 'react';
import GenreCard from '../components/GenreCard';

const Home = () => {
  const genres = [
    { title: 'Fiction', description: 'Explore fictional worlds', imgUrl: 'path/to/fiction.jpg' },
    { title: 'Mystery', description: 'Uncover mysteries', imgUrl: 'path/to/mystery.jpg' },
    { title: 'Fantasy', description: 'Dive into fantasy realms', imgUrl: 'path/to/fantasy.jpg' },
    { title: 'Science Fiction', description: 'Discover futuristic adventures', imgUrl: 'path/to/scifi.jpg' },
    { title: 'Romance', description: 'Enjoy love stories', imgUrl: 'path/to/romance.jpg' },
    { title: 'Non-Fiction', description: 'Learn from real stories', imgUrl: 'path/to/nonfiction.jpg' },
    { title: 'Thriller', description: 'Experience heart-pounding excitement', imgUrl: 'path/to/thriller.jpg' },
    { title: 'Biography', description: 'Read about famous lives', imgUrl: 'path/to/biography.jpg' },
    { title: 'Historical Fiction', description: 'Journey through historical events', imgUrl: 'path/to/historicalfiction.jpg' },
    { title: 'Horror', description: 'Face your fears', imgUrl: 'path/to/horror.jpg' },
  ];

  return (
    <div className="home">
      <h2>Library Genres</h2>
      <div className="genre-list">
        {genres.map((genre, index) => (
          <GenreCard
            key={index}
            title={genre.title}
            description={genre.description}
            imgUrl={genre.imgUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
