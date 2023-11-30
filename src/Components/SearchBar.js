import React, { useState } from 'react';
import '../Styling/SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [genre, setGenre] = useState('');
  const [releaseYear, setReleaseYear] = useState('');
  const [minRating, setMinRating] = useState('');
  const [maxRating, setMaxRating] = useState('');

  const handleSearch = () => {
    onSearch(searchQuery, genre, releaseYear, minRating, maxRating);
  };

  return (
    <div className="search-bar-container">
      <label>
        Search Query:
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Enter search query"
        />
      </label>
      <label>
        Genre:
        <input
          type="text"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          placeholder="Enter genre"
        />
      </label>
      <label>
        Release Year:
        <input
          type="text"
          value={releaseYear}
          onChange={(e) => setReleaseYear(e.target.value)}
          placeholder="Enter release year"
        />
      </label>
      <label>
        Min Rating:
        <input
          type="text"
          value={minRating}
          onChange={(e) => setMinRating(e.target.value)}
          placeholder="Enter min rating"
        />
      </label>
      <label>
        Max Rating:
        <input
          type="text"
          value={maxRating}
          onChange={(e) => setMaxRating(e.target.value)}
          placeholder="Enter max rating"
        />
      </label>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;