import { useState } from 'react';

const SearchBar = ({ active, toggleSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Search functionality would be implemented here
    console.log('Searching for:', searchTerm);
  };

  return (
    <div className={`search-container ${active ? 'active' : ''}`}>
      <form onSubmit={handleSearch}>
        <input 
          type="text" 
          id="search-input" 
          placeholder="Search for books, authors, genres..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit" id="search-btn">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;