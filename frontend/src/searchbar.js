import React, { useState } from 'react';
import './App.css';
import './booking.css'

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
   
    console.log(`Searching for: ${searchTerm}`);
  };

  return (
    <div className='searchbar'>
      <form onSubmit={handleSubmit}>
        <input style={{background:'rgba(7,7,7,0.5)', border:'rgb(239,88,88)', color:'#ffff'}}
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;

