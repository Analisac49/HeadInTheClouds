import React, { useState } from 'react';
import '../Styling/SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <div className="search-bar-container">
      <label>
        Search TV Shows:
        <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
      </label>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
