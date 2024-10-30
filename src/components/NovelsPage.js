import React from 'react';
import NovelCard from './NovelCard';

// Sample data for novels
const novels = [
  {
    image: 'https://example.com/path/to/last-kingdom.jpg',
    title: 'The Last Kingdom',
    description: 'A historical novel set in medieval times.'
  },
  {
    image: 'https://example.com/path/to/echoes-of-the-past.jpg',
    title: 'Echoes of the Past',
    description: 'A captivating historical mystery.'
  },
  {
    image: 'https://example.com/path/to/shadows-in-the-dark.jpg',
    title: 'Shadows in the Dark',
    description: 'An intense thriller that will keep you on the edge of your seat.'
  }
];

const NovelsPage = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1 style={{ color: 'red' }}>New Novels</h1>
      <p>Discover the latest novels that are capturing the imaginations of readers everywhere.</p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
        {novels.map((novel, index) => (
          <NovelCard
            key={index}
            image={novel.image}
            title={novel.title}
            description={novel.description}
          />
        ))}
      </div>
      <button style={{ marginTop: '20px', padding: '10px 20px' }}>More...</button>
    </div>
  );
};

export default NovelsPage;
