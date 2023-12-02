import React, { useState } from 'react';
import SearchBar from './Components/SearchBar';
import ShowList from './Components/ShowList';
import { searchTVShows } from './utils/tmdbAPI';
import './Styling/App.css';

const App = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (query, genre, releaseYear, minRating, maxRating) => {
    try {
      const results = await searchTVShows(query, genre, releaseYear, minRating, maxRating);
      setSearchResults(results);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      <header>
        <h1>Welcome to Head In The Clouds</h1>
      </header>
      <div>
        <SearchBar onSearch={handleSearch} />
        {searchResults.length > 0 && <ShowList shows={searchResults} />}
      </div>
    </div>
  );
};

export default App;